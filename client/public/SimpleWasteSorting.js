/*
 * React-friendly Waste Sorting - No DOM manipulation conflicts
 */

class ReactWasteSorting {
  constructor() {
    this.initialized = false;
    this.video = null;
    this.stream = null;
    this.canvas = null;
    this.ctx = null;
    this.classifier = null;
    this.hasCamera = false;
    this.classificationMode = 'demo';
    this.isClassifying = false;
    this.animationFrame = null;
    
    this.wasteCounts = {
      metal: 0,
      wet: 0,
      dry: 0,
      plastic: 0,
      electronic: 0,
      medical: 0
    };
    
    // Arduino serial communication
    this.serialPort = null;
    this.writer = null;
    this.isSerialConnected = false;
  }

  async initCamera() {
    console.log('🚀 Initializing camera system...');
    
    try {
      // Get camera access
      console.log('🎥 Requesting camera permissions...');
      this.stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 }, 
          height: { ideal: 480 },
          facingMode: 'environment' // Try back camera first for waste detection
        } 
      });
      
      this.video = document.createElement('video');
      this.video.srcObject = this.stream;
      this.video.autoplay = true;
      this.video.muted = true;
      this.video.playsInline = true;
      
      await new Promise((resolve, reject) => {
        this.video.onloadedmetadata = () => {
          console.log('📹 Video metadata loaded, starting playback...');
          this.video.play().then(resolve).catch(reject);
        };
        this.video.onerror = reject;
        setTimeout(reject, 5000); // 5 second timeout
      });
      
      this.hasCamera = true;
      console.log('📹 Camera initialized successfully - Real camera mode enabled');
      
      // Try to load Teachable Machine model
      await this.loadTeachableMachine();
      
    } catch (error) {
      console.log('📹 Camera initialization failed:', error.message);
      console.log('🎭 Falling back to demo mode');
      this.hasCamera = false;
      this.classificationMode = 'demo';
    }
    
    this.initialized = true;
    
    // Notify React component
    if (window.updateModelStatus) {
      window.updateModelStatus(true);
    }
    
    return this.hasCamera;
  }

  async loadTeachableMachine() {
    try {
      if (typeof ml5 === 'undefined') {
        throw new Error('ML5.js not available');
      }

      console.log('🤖 Loading Teachable Machine model...');
      const modelURL = "https://teachablemachine.withgoogle.com/models/vVMXGyiCi/";
      
      this.classifier = await ml5.imageClassifier(modelURL + "model.json");
      this.classificationMode = 'ai';
      console.log('✅ Teachable Machine model loaded - Real AI detection enabled!');
      
    } catch (error) {
      console.log('⚠️ Teachable Machine model failed:', error.message);
      this.classifier = null;
      this.classificationMode = 'demo';
    }
  }

  attachToCanvas(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    console.log('🎨 Canvas attached successfully');
    
    // Start drawing loop
    this.startDrawLoop();
  }

  startDrawLoop() {
    const draw = () => {
      if (!this.ctx || !this.canvas) return;
      
      if (this.hasCamera && this.video && this.video.readyState >= 2) {
        // Draw live video
        try {
          this.ctx.drawImage(this.video, 0, 0, 640, 480);
        } catch (error) {
          console.log('❌ Error drawing video frame:', error.message);
          this.drawErrorState();
        }
      } else if (this.hasCamera && this.video) {
        // Camera initializing
        this.drawLoadingState();
      } else {
        // Demo background
        this.drawDemoState();
      }
      
      // Draw overlay
      this.drawOverlay();
      
      this.animationFrame = requestAnimationFrame(draw);
    };
    
    draw();
  }

  drawDemoState() {
    const gradient = this.ctx.createLinearGradient(0, 0, 0, 480);
    gradient.addColorStop(0, '#1F2937');
    gradient.addColorStop(1, '#111827');
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, 640, 480);
    
    // Demo text
    this.ctx.fillStyle = 'white';
    this.ctx.font = 'bold 24px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('🤖 AI Waste Detection Demo', 320, 200);
    
    this.ctx.font = '16px Arial';
    this.ctx.fillText('Simulating waste classification...', 320, 240);
    this.ctx.fillText('Real camera would stream here', 320, 280);
  }

  drawLoadingState() {
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, 640, 480);
    
    this.ctx.fillStyle = 'white';
    this.ctx.font = 'bold 20px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('📹 Loading Camera Feed...', 320, 220);
    
    this.ctx.font = '14px Arial';
    this.ctx.fillText('Please wait while camera initializes', 320, 260);
  }

  drawErrorState() {
    this.ctx.fillStyle = '#1F2937';
    this.ctx.fillRect(0, 0, 640, 480);
    
    this.ctx.fillStyle = '#EF4444';
    this.ctx.font = 'bold 20px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('❌ Camera Error', 320, 220);
    
    this.ctx.fillStyle = 'white';
    this.ctx.font = '14px Arial';
    this.ctx.fillText('Check camera permissions and refresh page', 320, 260);
  }

  drawOverlay() {
    if (!this.ctx) return;
    
    // Status overlay
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    this.ctx.fillRect(10, 10, 300, 110);
    
    this.ctx.fillStyle = 'white';
    this.ctx.font = '16px Arial';
    this.ctx.textAlign = 'left';
    
    const modeText = this.classificationMode === 'ai' ? 'AI Detection' : 'Demo Mode';
    this.ctx.fillText(`Mode: ${modeText}`, 20, 35);
    this.ctx.fillText(`Status: ${this.isClassifying ? 'Active' : 'Standby'}`, 20, 55);
    
    // Status indicator
    this.ctx.fillStyle = this.isClassifying ? '#10B981' : '#F59E0B';
    this.ctx.beginPath();
    this.ctx.arc(280, 40, 8, 0, 2 * Math.PI);
    this.ctx.fill();
    
    // Counts - refresh from global state
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = 'white';
    const counts = window.p5WasteSorting?.getWasteCounts() || this.wasteCounts;
    this.ctx.fillText(`Metal: ${counts.metal} | Wet: ${counts.wet} | Dry: ${counts.dry}`, 20, 75);
    this.ctx.fillText(`Plastic: ${counts.plastic} | Electronic: ${counts.electronic}`, 20, 90);
  }

  startClassification() {
    if (this.isClassifying) {
      console.log('⚠️ Classification already active');
      return;
    }
    
    console.log('🚀 Starting waste classification...');
    this.isClassifying = true;
    
    if (this.classifier && this.hasCamera && this.video && this.classificationMode === 'ai') {
      console.log('🤖 Using real Teachable Machine AI with camera feed');
      this.classifyWithAI();
    } else if (!this.hasCamera) {
      console.log('🎭 No camera available - using simulated detection');
      this.simulateDetection();
    } else if (!this.classifier) {
      console.log('⚠️ AI model not loaded - classification disabled');
      this.isClassifying = false;
    } else {
      console.log('⚠️ Camera or video not ready - classification disabled');
      this.isClassifying = false;
    }
  }

  classifyWithAI() {
    if (!this.isClassifying || !this.classifier || !this.video || !this.hasCamera) {
      console.log('❌ AI classification stopped - missing requirements');
      return;
    }

    // Check video is ready and playing
    if (this.video.readyState < 2) {
      console.log('⏳ Video not ready, retrying in 500ms...');
      setTimeout(() => this.classifyWithAI(), 500);
      return;
    }

    try {
      // Create temp canvas for AI classification
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = 640;
      tempCanvas.height = 480;
      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(this.video, 0, 0, 640, 480);

      this.classifier.classify(tempCanvas, (results) => {
        if (!this.isClassifying) return;
        
        if (results && results[0]) {
          const result = results[0];
          const classification = result.label;
          const confidence = result.confidence;
          
          console.log(`🤖 AI Detected: ${classification} (${(confidence * 100).toFixed(1)}%)`);
          
          this.updateWasteCounts(classification, confidence);
          this.notifyReact(classification, confidence);
        }
        
        if (this.isClassifying) {
          setTimeout(() => this.classifyWithAI(), 1500); // Slower detection rate
        }
      });
    } catch (error) {
      console.log('❌ AI classification error:', error.message);
      if (this.isClassifying) {
        setTimeout(() => this.classifyWithAI(), 2000);
      }
    }
  }

  simulateDetection() {
    if (!this.isClassifying) return;
    
    const wasteTypes = ['metal', 'wet', 'dry'];
    const randomType = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
    const confidence = 0.65 + Math.random() * 0.35;
    
    console.log(`🎭 Simulated: ${randomType} (${(confidence * 100).toFixed(1)}%)`);
    
    this.updateWasteCounts(randomType, confidence);
    this.notifyReact(randomType, confidence);
    
    if (this.isClassifying) {
      setTimeout(() => this.simulateDetection(), 2000 + Math.random() * 2000);
    }
  }

  updateWasteCounts(classification, confidence) {
    if (confidence > 0.5) {
      console.log(`📊 Raw AI classification received: "${classification}" (${(confidence * 100).toFixed(1)}% confidence)`);
      
      // Map exact Teachable Machine class names to waste count categories
      switch (classification) {
        case 'Metal':
          this.wasteCounts.metal++;
          console.log(`🔧 Metal count increased to: ${this.wasteCounts.metal}`);
          break;
        case 'Wet':
          this.wasteCounts.wet++;
          console.log(`💧 Wet count increased to: ${this.wasteCounts.wet}`);
          break;
        case 'Dry':
          this.wasteCounts.dry++;
          console.log(`📄 Dry count increased to: ${this.wasteCounts.dry}`);
          break;
        case 'Unclassified':
          // Don't increment any count for unclassified
          console.log(`❓ Unclassified waste - not counting`);
          break;
        default:
          console.log(`❓ Unknown classification: "${classification}" -> not counting`);
          break;
      }
      
      console.log(`📊 Current internal counts:`, this.wasteCounts);
      
      // Send to Arduino after updating counts
      this.sendToArduino(classification);
    } else {
      console.log(`⚠️ Classification confidence too low: ${classification} (${(confidence * 100).toFixed(1)}%)`);
    }
  }

  notifyReact(classification, confidence) {
    const event = new CustomEvent('wasteDetected', {
      detail: {
        type: this.mapClassificationToWasteType(classification),
        confidence: confidence,
        timestamp: Date.now(),
        originalLabel: classification
      }
    });
    
    console.log('📡 Notifying React:', classification, confidence);
    window.dispatchEvent(event);
  }

  mapClassificationToWasteType(classification) {
    console.log(`🗺️ Mapping "${classification}" to React waste type...`);
    
    // Map exact Teachable Machine class names to React waste types
    switch (classification) {
      case 'Metal':
        console.log(`🔧 Mapped to: metal`);
        return 'metal';
      case 'Wet':
        console.log(`💧 Mapped to: wet`);
        return 'wet';
      case 'Dry':
        console.log(`📄 Mapped to: dry`);
        return 'dry';
      case 'Unclassified':
        console.log(`❓ Mapped to: dry (default for unclassified)`);
        return 'dry';
      default:
        console.log(`❓ Unknown classification "${classification}" -> defaulting to dry`);
        return 'dry';
    }
  }

  // Arduino Serial Communication using Web Serial API
  async connectArduino() {
    try {
      if (!navigator.serial) {
        console.log('❌ Web Serial API not supported in this browser');
        return false;
      }

      console.log('🔌 Requesting Arduino connection...');
      this.serialPort = await navigator.serial.requestPort();
      
      await this.serialPort.open({ baudRate: 9600 });
      this.writer = this.serialPort.writable.getWriter();
      this.isSerialConnected = true;
      
      console.log('✅ Arduino connected successfully');
      return true;
    } catch (error) {
      console.log('❌ Arduino connection failed:', error.message);
      this.isSerialConnected = false;
      return false;
    }
  }

  async sendToArduino(classification) {
    if (!this.isSerialConnected || !this.writer) {
      console.log(`🔌 Arduino not connected - would send: ${classification}`);
      return;
    }

    try {
      let command;
      switch (classification) {
        case 'Metal':
          command = '0'; // Send 0 for metal
          break;
        case 'Wet':
          command = '1'; // Send 1 for wet
          break;
        case 'Dry':
          command = '2'; // Send 2 for dry
          break;
        default:
          return; // Don't send anything for unclassified
      }

      const data = new TextEncoder().encode(command + '\n');
      await this.writer.write(data);
      console.log(`🔌 Sent to Arduino: ${classification} (${command})`);
    } catch (error) {
      console.log('❌ Failed to send to Arduino:', error.message);
      this.isSerialConnected = false;
    }
  }

  async disconnectArduino() {
    try {
      if (this.writer) {
        this.writer.releaseLock();
        this.writer = null;
      }
      
      if (this.serialPort) {
        await this.serialPort.close();
        this.serialPort = null;
      }
      
      this.isSerialConnected = false;
      console.log('🔌 Arduino disconnected');
    } catch (error) {
      console.log('❌ Error disconnecting Arduino:', error.message);
    }
  }

  resetCounts() {
    this.wasteCounts = {
      metal: 0,
      wet: 0,
      dry: 0,
      plastic: 0,
      electronic: 0,
      medical: 0
    };
    console.log('🔄 Waste counts reset to zero');
    return this.wasteCounts;
  }

  getWasteCounts() {
    return this.wasteCounts;
  }

  stopClassification() {
    console.log('⏹️ Stopping classification...');
    this.isClassifying = false;
  }

  cleanup() {
    console.log('🧹 Cleaning up camera system...');
    this.isClassifying = false;
    
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    // Disconnect Arduino on cleanup
    this.disconnectArduino();
    
    this.video = null;
    this.canvas = null;
    this.ctx = null;
    this.initialized = false;
    
    console.log('✅ Cleanup completed');
  }
}

// Global instance
const wasteSystem = new ReactWasteSorting();

// API for React integration
window.p5WasteSorting = {
  init: () => wasteSystem.initCamera(),
  attachToCanvas: (canvas) => wasteSystem.attachToCanvas(canvas),
  startClassification: () => wasteSystem.startClassification(),
  stopClassification: () => wasteSystem.stopClassification(),
  resetCounts: () => wasteSystem.resetCounts(),
  cleanup: () => wasteSystem.cleanup(),
  isModelLoaded: () => wasteSystem.initialized,
  getWasteCounts: () => wasteSystem.wasteCounts,
  getCurrentClassification: () => ({ label: 'ready', confidence: 1 }),
  // Arduino communication
  connectArduino: () => wasteSystem.connectArduino(),
  disconnectArduino: () => wasteSystem.disconnectArduino(),
  isArduinoConnected: () => wasteSystem.isSerialConnected
};

console.log('✅ Simple waste sorting system loaded');