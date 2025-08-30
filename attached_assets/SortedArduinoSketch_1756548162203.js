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

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  createCanvas(640, 480);

  frameRate(TARGET_FPS); // Set a target frame rate
  delayFrames = DELAY_SECONDS * TARGET_FPS;
  
   serial = new p5.SerialPort();

   serial.list();
   serial.open('COM3');

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

  // Start detecting objects in the video
  console.log("classify start");    
  classifier.classifyStart(video, gotResult);
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
   if (!currentString) 
   {
     return;
   }
  console.log("got data in serial");
 console.log(currentString);
 latestData = currentString;
}


function draw() 
{
  // Each video frame is painted on the canvas
  image(video, 0, 0);

  // Printing class with the highest probability on the canvas
//  console.log("in draw got label as "+label) ;
  fill(0, 255, 0);
  textSize(32);
  text(label, 20, 50);
}

// A function to run when we get the results
function gotResult(results) {
  // Update label variable which is displayed on the canvas

  if (!results) return ;
  if (!results[0]) return ;
  

  // Add the current frame to the frames array
  frames.push(results);
  
  if (frames.length < delayFrames) 
  {
    console.log("skipping results");
    classifier.classify(video, gotResult);
    return ;
  }  
  
  label = results[0].label;
  
  frames.length = 0; //reset the frames array from 0

  
  if (label=='metal')
  {
    console.log("sending metal-0 to Arduino");
    serial.write(0);    
  }
  else if (label=='wet')
  {
    console.log("sending wet-1 to Arduino");
    serial.write(1);    
  }
  else if (label=='dry')
  {
    console.log("sending dry-2 to Arduino");
    serial.write(2);    
  }
  else
  {
    console.log("other - skipping");    
  }
  
  classifier.classify(video, gotResult);
}
