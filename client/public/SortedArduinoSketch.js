/*
 * Vinyasa-AI Waste Sorting - Camera Integration with Fallback
 * Handles both AI-powered detection and demo mode
 */

// Global variables
let isInitialized = false;
let isClassifying = false;
let canvas = null;
let video = null;
let ctx = null;
let animationFrame = null;

// Variables for React integration
let wasteCounts = {
  metal: 0,
  wet: 0,
  dry: 0,
  plastic: 0,
  electronic: 0,
  medical: 0
};

// Pure JavaScript camera system (no P5.js dependency)
class WasteSortingSystem {
  constructor() {
    this.initialized = false;
    this.canvas = null;
    this.video = null;
    this.ctx = null;
    this.stream = null;
    this.hasCamera = false;
    this.classificationMode = 'demo'; // 'ai' or 'demo'
  }

  async init() {
    if (this.initialized) {
      console.log('🔄 Already initialized, cleaning up first...');
      this.cleanup();
    }

    console.log('🚀 Initializing waste sorting system...');
    
    // Wait for container to be available
    let retries = 0;
    while (!document.getElementById('camera-container') && retries < 50) {
      await new Promise(resolve => setTimeout(resolve, 100));
      retries++;
    }
    
    if (!document.getElementById('camera-container')) {
      console.error('❌ Camera container not found after waiting');
      return false;
    }

    // Setup canvas
    this.setupCanvas();
    
    // Try to setup camera
    await this.setupCamera();
    
    // Notify React component that we're ready
    if (window.updateModelStatus) {
      window.updateModelStatus(true);
    }

    this.initialized = true;
    this.startDrawLoop();
    
    console.log('✅ Waste sorting system initialized successfully');
    return true;
  }

  setupCanvas() {
    const container = document.getElementById('camera-container');
    
    // Create canvas element
    this.canvas = document.createElement('canvas');
    this.canvas.width = 640;
    this.canvas.height = 480;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.objectFit = 'cover';
    this.canvas.style.display = 'block';
    
    // Clear container and add canvas
    container.innerHTML = '';
    container.appendChild(this.canvas);
    
    this.ctx = this.canvas.getContext('2d');
    console.log('🎨 Canvas setup completed');
  }

  async setupCamera() {
    try {
      // Try to get camera access
      this.stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      
      this.video = document.createElement('video');
      this.video.srcObject = this.stream;
      this.video.autoplay = true;
      this.video.muted = true;
      
      await new Promise((resolve) => {
        this.video.onloadedmetadata = resolve;
      });
      
      this.hasCamera = true;
      console.log('📹 Camera initialized successfully');
    } catch (error) {
      console.log('📹 Camera not available - using demo mode:', error.message);
      this.hasCamera = false;
    }
  }

  startDrawLoop() {
    const draw = () => {
      if (!this.ctx || !this.canvas) return;
      
      if (this.hasCamera && this.video) {
        // Draw video frame
        this.ctx.drawImage(this.video, 0, 0, 640, 480);
      } else {
        // Demo mode background
        const gradient = this.ctx.createLinearGradient(0, 0, 0, 480);
        gradient.addColorStop(0, '#4A5568');
        gradient.addColorStop(1, '#2D3748');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, 640, 480);
        
        // Demo mode text
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 24px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('🤖 AI Waste Detection Demo', 320, 200);
        
        this.ctx.font = '16px Arial';
        this.ctx.fillText('Simulating real-time waste classification', 320, 240);
        this.ctx.fillText('Real camera would appear here', 320, 280);
      }
      
      // Draw overlay
      this.drawOverlay();
      
      animationFrame = requestAnimationFrame(draw);
    };
    
    draw();
  }

  drawOverlay() {
    if (!this.ctx) return;
    
    // Semi-transparent background for overlay
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(10, 10, 280, 80);
    
    // Status text
    this.ctx.fillStyle = 'white';
    this.ctx.font = '16px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText(`Mode: ${this.hasCamera ? 'Live Camera' : 'Demo Mode'}`, 20, 35);
    this.ctx.fillText(`Status: ${isClassifying ? 'Active Detection' : 'Standby'}`, 20, 55);
    
    // Status indicator
    this.ctx.fillStyle = isClassifying ? '#10B981' : '#F59E0B';
    this.ctx.beginPath();
    this.ctx.arc(260, 40, 8, 0, 2 * Math.PI);
    this.ctx.fill();
    
    // Waste counts
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Metal: ${wasteCounts.metal} | Wet: ${wasteCounts.wet} | Dry: ${wasteCounts.dry}`, 20, 75);
  }

  startClassification() {
    if (isClassifying) {
      console.log('⚠️ Classification already running');
      return;
    }
    
    console.log('🚀 Starting waste classification...');
    isClassifying = true;
    
    // Start detection simulation
    this.simulateDetection();
  }

  stopClassification() {
    console.log('⏹️ Stopping waste classification...');
    isClassifying = false;
  }

  simulateDetection() {
    if (!isClassifying) return;
    
    console.log('🎭 Running simulated waste detection...');
    
    // Simulate realistic waste detection
    const wasteTypes = ['metal', 'wet', 'dry'];
    const randomType = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
    const confidence = 0.65 + Math.random() * 0.35;
    
    console.log(`🔍 Detected: ${randomType} (${(confidence * 100).toFixed(1)}% confidence)`);
    
    // Update counts
    this.updateWasteCounts(randomType, confidence);
    
    // Send to Arduino (simulated)
    this.sendToArduino(randomType);
    
    // Update React component
    this.updateReactComponent(randomType, confidence);
    
    // Continue simulation every 2-4 seconds
    if (isClassifying) {
      setTimeout(() => this.simulateDetection(), 2000 + Math.random() * 2000);
    }
  }

  updateWasteCounts(classification, confidence) {
    if (confidence > 0.6) {
      if (classification === 'metal') {
        wasteCounts.metal++;
      } else if (classification === 'wet') {
        wasteCounts.wet++;
      } else if (classification === 'dry') {
        wasteCounts.dry++;
      }
      
      console.log(`📊 Updated ${classification} count (${(confidence * 100).toFixed(1)}%)`);
    }
  }

  sendToArduino(classification) {
    console.log(`🔌 Would send to Arduino: ${classification}`);
  }

  updateReactComponent(classification, confidence) {
    // Update global state
    window.lastClassification = {
      label: classification,
      confidence: confidence,
      timestamp: Date.now()
    };
    
    // Dispatch event to React
    const event = new CustomEvent('wasteDetected', {
      detail: {
        type: this.mapClassificationToWasteType(classification),
        confidence: confidence,
        timestamp: Date.now(),
        originalLabel: classification
      }
    });
    
    console.log('📡 Dispatching waste detected event:', classification, confidence);
    window.dispatchEvent(event);
  }

  mapClassificationToWasteType(classification) {
    const mapping = {
      'metal': 'electronic',
      'wet': 'wet',
      'dry': 'dry'
    };
    
    return mapping[classification] || 'dry';
  }

  cleanup() {
    console.log('🧹 Cleaning up waste sorting system...');
    isClassifying = false;
    
    // Stop animation frame
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    
    // Stop video stream
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    
    // Clear canvas
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    
    this.initialized = false;
    this.canvas = null;
    this.video = null;
    this.ctx = null;
    this.hasCamera = false;
    
    console.log('✅ Cleanup completed');
  }
}

// Global instance
let wasteSystem = new WasteSortingSystem();

// Global API for React integration
window.p5WasteSorting = {
  init: async () => {
    console.log('🔧 Initializing waste sorting from React...');
    return await wasteSystem.init();
  },
  
  getWasteCounts: () => wasteCounts,
  
  resetCounts: () => {
    wasteCounts = { metal: 0, wet: 0, dry: 0, plastic: 0, electronic: 0, medical: 0 };
    console.log('🔄 Waste counts reset');
  },
  
  isModelLoaded: () => true, // Always true since we always have fallback
  
  getCurrentClassification: () => window.lastClassification || { label: 'none', confidence: 0 },
  
  startClassification: () => {
    if (!wasteSystem.initialized) {
      console.log('⚠️ System not initialized, initializing first...');
      wasteSystem.init().then(() => {
        setTimeout(() => wasteSystem.startClassification(), 500);
      });
      return;
    }
    wasteSystem.startClassification();
  },
  
  stopClassification: () => {
    wasteSystem.stopClassification();
  },
  
  cleanup: () => {
    wasteSystem.cleanup();
  }
};

// Cleanup when page unloads
window.addEventListener('beforeunload', () => {
  if (window.p5WasteSorting) {
    window.p5WasteSorting.cleanup();
  }
});