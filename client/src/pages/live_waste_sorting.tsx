import { useRef, useEffect } from "react";
import { Camera, Settings, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";
import { Link } from "wouter";
import logoUrl from "@assets/logo_1756410067559.png";

declare global {
  interface Window {
    p5: any;
  }
}

export default function LiveWasteSorting() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load p5.js library
    if (!window.p5) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js';
      script.onload = () => initP5Sketch();
      document.head.appendChild(script);
    } else {
      initP5Sketch();
    }
    
    return () => {
      // Cleanup p5 instance
      if (window.p5 && window.p5.prototype._instance) {
        window.p5.prototype._instance.remove();
      }
    };
  }, []);

  const initP5Sketch = () => {
    if (!window.p5 || !canvasRef.current) return;
    
    new window.p5((p: any) => {
      let wasteCategories = ['DRY', 'WET', 'PLASTIC', 'ELECTRONIC', 'MEDICAL'];
      let currentCategory = 'DRY';
      let categoryIndex = 0;
      let frameCounter = 0;
      
      p.setup = () => {
        p.createCanvas(640, 480);
        p.background(220);
      };
      
      p.draw = () => {
        // Simulate camera feed background
        p.background(220, 240, 220);
        
        // Draw camera frame
        p.stroke(0);
        p.strokeWeight(3);
        p.noFill();
        p.rect(20, 20, p.width - 40, p.height - 40);
        
        // Draw crosshairs for object detection
        p.stroke(255, 0, 0);
        p.strokeWeight(1);
        p.line(p.width/2 - 20, p.height/2, p.width/2 + 20, p.height/2);
        p.line(p.width/2, p.height/2 - 20, p.width/2, p.height/2 + 20);
        
        // Simulate waste detection
        frameCounter++;
        if (frameCounter % 120 === 0) { // Change every 2 seconds
          categoryIndex = (categoryIndex + 1) % wasteCategories.length;
          currentCategory = wasteCategories[categoryIndex];
        }
        
        // Draw detected waste category
        p.fill(0, 0, 0, 150);
        p.noStroke();
        p.rect(30, 30, 180, 50, 5);
        
        p.fill(255);
        p.textAlign(p.LEFT, p.TOP);
        p.textSize(16);
        p.text("DETECTED:", 40, 45);
        p.textSize(20);
        p.text(currentCategory, 40, 65);
        
        // Draw confidence score
        let confidence = Math.floor(85 + Math.random() * 10);
        p.fill(255);
        p.textSize(12);
        p.text(`Confidence: ${confidence}%`, 40, 95);
        
        // Draw simulated waste object
        p.fill(100, 150, 100);
        p.stroke(0);
        p.strokeWeight(1);
        let objX = p.width/2 + Math.sin(frameCounter * 0.02) * 30;
        let objY = p.height/2 + Math.cos(frameCounter * 0.02) * 20;
        p.ellipse(objX, objY, 60, 40);
        
        // Camera status indicator
        p.fill(0, 255, 0);
        p.noStroke();
        p.ellipse(p.width - 30, 30, 10, 10);
        p.fill(255);
        p.textAlign(p.RIGHT, p.TOP);
        p.textSize(12);
        p.text("LIVE", p.width - 45, 25);
      };
    }, canvasRef.current);
  };

  const wasteCategories = [
    { name: 'Dry Waste', count: 245, color: 'bg-green-500', icon: '🗞' },
    { name: 'Wet Waste', count: 189, color: 'bg-orange-500', icon: '🥬' },
    { name: 'Plastic', count: 167, color: 'bg-blue-500', icon: '♻' },
    { name: 'Electronic', count: 23, color: 'bg-purple-500', icon: '⚡' },
    { name: 'Medical', count: 8, color: 'bg-red-500', icon: '🏥' }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/consumer">
              <Button variant="ghost" size="sm" className="text-sage hover:text-white hover:bg-sage/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <img src={logoUrl} alt="Sorted Logo" className="h-16 w-16" />
              <div>
                <h1 className="text-xl font-bold" data-testid="header-title">
                  {t('liveWasteSorting')}
                </h1>
                <p className="text-sage text-sm">Vinyasa-AI Smart Bin Detection</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-fresh text-white">
              <Camera className="w-3 h-3 mr-1" />
              Camera Active
            </Badge>
            <Button variant="ghost" size="sm" className="text-sage hover:text-white hover:bg-sage/20">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Camera Feed */}
          <div className="lg:col-span-2">
            <Card className="bg-white rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-forest flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Live Camera Feed - Waste Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  ref={canvasRef} 
                  className="w-full h-auto border-2 border-sage/20 rounded-lg overflow-hidden"
                  data-testid="camera-feed"
                />
                <div className="flex justify-center space-x-2 mt-4">
                  <Badge className="bg-green-100 text-green-800">AI Detection: ON</Badge>
                  <Badge className="bg-blue-100 text-blue-800">Auto-Sort: ACTIVE</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Quality Check: ENABLED</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real-time Stats */}
          <div className="space-y-6">
            {/* Today's Statistics */}
            <Card className="bg-white rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-forest">Today's Sorting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {wasteCategories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded ${category.color}`}></div>
                      <span className="text-sm font-medium">{category.icon} {category.name}</span>
                    </div>
                    <span className="font-bold text-forest" data-testid={`count-${category.name.toLowerCase().replace(' ', '-')}`}>
                      {category.count}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Active Bins */}
            <Card className="bg-white rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-forest">Active Smart Bins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">BKC-1 Main Bin</span>
                    <Badge className="bg-green-100 text-green-800">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">BKC-1 Recycling</span>
                    <Badge className="bg-green-100 text-green-800">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">BKC-1 Organic</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Maintenance</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Detections */}
            <Card className="bg-white rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-forest">Recent Detections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span>🗞 Paper waste</span>
                    <span className="text-gray-500">2 min ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>♻ Plastic bottle</span>
                    <span className="text-gray-500">3 min ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>🥬 Food waste</span>
                    <span className="text-gray-500">5 min ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>⚡ Battery</span>
                    <span className="text-gray-500">8 min ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vinyasa Coins Earned Today */}
            <Card className="bg-gradient-to-br from-harvest/10 to-harvest/20 border-harvest/20">
              <CardHeader>
                <CardTitle className="text-forest flex items-center">
                  <div className="w-5 h-5 mr-2 text-harvest">🪙</div>
                  Vinyasa Coins Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-harvest" data-testid="text-coins-earned">
                    +247
                  </p>
                  <p className="text-sm text-gray-600 mt-1">coins earned</p>
                  <Button className="mt-3 bg-harvest text-forest hover:bg-yellow-400" size="sm" data-testid="button-redeem-coins">
                    Redeem Coins
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}