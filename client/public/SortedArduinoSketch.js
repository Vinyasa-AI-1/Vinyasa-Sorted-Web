/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates detecting objects in a live video through ml5.imageClassifier + Teachable Machine.
 */

// A variable to initialize the Image Classifier
let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

//let imageModelURL = "https://teachablemachine.withgoogle.com/models/bXy2kDNi/";
let imageModelURL = "https://teachablemachine.withgoogle.com/models/2JfuDAEaL/";

let serial;

let frames = [];
const TARGET_FPS = 30;
const DELAY_SECONDS = 2;
let delayFrames;

// Variables for React integration
let isModelLoaded = false;
let wasteCounts = {
  metal: 0,
  wet: 0,
  dry: 0,
  plastic: 0,
  electronic: 0,
  medical: 0
};

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json", modelReady);
}

function modelReady() {
  console.log("Teachable Machine model loaded successfully!");
  isModelLoaded = true;
  label = "Model ready - Start detection";
  
  // Notify React component
  if (window.updateModelStatus) {
    window.updateModelStatus(true);
  }
}

function setup() {
  // Create canvas and place it in the designated container
  let canvas = createCanvas(640, 480);
  if (document.getElementById('camera-container')) {
    canvas.parent('camera-container');
  }

  frameRate(TARGET_FPS); // Set a target frame rate
  delayFrames = DELAY_SECONDS * TARGET_FPS;
  
  serial = new p5.SerialPort();
  serial.list();
  
  // Try different common ports for different platforms
  try {
    // Windows
    serial.open('COM3');
  } catch (e) {
    try {
      // Mac/Linux
      serial.open('/dev/ttyACM0');
    } catch (e2) {
      console.log('Serial port not available - running in demo mode');
    }
  }

  serial.on('connected', serverConnected);
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);
  
  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();

  // Start detecting objects in the video when model is ready
  if (isModelLoaded) {
    console.log("classify start");    
    classifier.classifyStart(video, gotResult);
  }
}

function serverConnected() {
  print("Connected to Server");
}

function gotList(thelist) {
  print("List of Serial Ports:");
  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}

function gotOpen() {
  print("Serial Port is Open");
}

function gotClose(){
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  print(theerror);
}

function gotData() {
  let currentString = serial.readLine();
  trim(currentString);
  if (!currentString) {
    return;
  }
  console.log("got data in serial");
  console.log(currentString);
  latestData = currentString;
}

function draw() {
  if (video) {
    // Each video frame is painted on the canvas
    image(video, 0, 0);

    // Add overlay with classification results
    drawOverlay();
  }
}

function drawOverlay() {
  // Semi-transparent background for text
  fill(0, 0, 0, 150);
  rect(10, 10, 280, 80);
  
  // Classification text
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text(`Classification: ${label}`, 20, 35);
  text(`Status: ${isModelLoaded ? 'Active' : 'Loading...'}`, 20, 55);
  
  // Status indicator
  fill(isModelLoaded ? color(0, 255, 0) : color(255, 255, 0));
  ellipse(260, 40, 15, 15);
  
  // Waste counts
  fill(255);
  textSize(12);
  text(`Metal: ${wasteCounts.metal} | Wet: ${wasteCounts.wet} | Dry: ${wasteCounts.dry}`, 20, 75);
}

// A function to run when we get the results
function gotResult(results) {
  if (!results) return;
  if (!results[0]) return;

  // Add the current frame to the frames array
  frames.push(results);
  
  if (frames.length < delayFrames) {
    console.log("skipping results");
    classifier.classify(video, gotResult);
    return;
  }  
  
  label = results[0].label;
  let confidence = results[0].confidence;
  
  frames.length = 0; //reset the frames array from 0

  // Update waste counts
  updateWasteCounts(label, confidence);
  
  // Send to Arduino
  sendToArduino(label);
  
  // Update React component
  updateReactComponent(label, confidence);
  
  classifier.classify(video, gotResult);
}

function updateWasteCounts(classification, confidence) {
  // Only count if confidence is above threshold
  if (confidence > 0.6) {
    if (classification === 'metal') {
      wasteCounts.metal++;
    } else if (classification === 'wet') {
      wasteCounts.wet++;
    } else if (classification === 'dry') {
      wasteCounts.dry++;
    }
    
    console.log(`Detected ${classification} (${(confidence * 100).toFixed(1)}%)`);
  }
}

function sendToArduino(classification) {
  try {
    if (classification === 'metal') {
      console.log("sending metal-0 to Arduino");
      serial.write(0);    
    } else if (classification === 'wet') {
      console.log("sending wet-1 to Arduino");
      serial.write(1);    
    } else if (classification === 'dry') {
      console.log("sending dry-2 to Arduino");
      serial.write(2);    
    } else {
      console.log("other - skipping");    
    }
  } catch (error) {
    console.log("Serial communication error:", error);
  }
}

function updateReactComponent(classification, confidence) {
  // Create custom event to communicate with React component
  const event = new CustomEvent('wasteDetected', {
    detail: {
      type: mapClassificationToWasteType(classification),
      confidence: confidence,
      timestamp: Date.now(),
      originalLabel: classification
    }
  });
  
  window.dispatchEvent(event);
}

function mapClassificationToWasteType(classification) {
  // Map the Teachable Machine labels to the React component's waste types
  const mapping = {
    'metal': 'electronic',  // Map metal to electronic waste
    'wet': 'wet',
    'dry': 'dry'
  };
  
  return mapping[classification] || 'dry';
}

// Global functions for React integration
window.p5WasteSorting = {
  getWasteCounts: () => wasteCounts,
  resetCounts: () => {
    wasteCounts = { metal: 0, wet: 0, dry: 0, plastic: 0, electronic: 0, medical: 0 };
  },
  isModelLoaded: () => isModelLoaded,
  getCurrentClassification: () => ({ label, confidence: 0 }),
  startClassification: () => {
    if (isModelLoaded && video && classifier) {
      console.log("Starting classification from React");
      classifier.classifyStart(video, gotResult);
    }
  },
  stopClassification: () => {
    if (classifier) {
      console.log("Stopping classification from React");
      classifier.classifyStop();
    }
  }
};