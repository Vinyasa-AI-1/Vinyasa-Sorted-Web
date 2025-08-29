import p5 from 'p5';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Play, Pause, RotateCcw, Leaf } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

interface ProduceCounts {
  Premium: number;
  Ripe: number;
  YetToRipe: number;
  Overripe: number;
  Rotten: number;
}

const produceCategories = ['Premium', 'Ripe', 'YetToRipe', 'Overripe', 'Rotten'] as const;

export default function LiveProduceSorting() {
  const { currentLanguage } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  const [produceCounts, setProduceCounts] = useState<ProduceCounts>({
    Premium: 0,
    Ripe: 0,
    YetToRipe: 0,
    Overripe: 0,
    Rotten: 0,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalProcessed, setTotalProcessed] = useState(0);
  const p5Instance = useRef<p5 | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Simulated produce detection
  const simulateProduceDetection = () => {
    if (!isProcessing) return;
    
    // Randomly detect produce (simulating AI detection)
    if (Math.random() < 0.3) { // 30% chance of detection
      const categories = Object.keys(produceCounts) as Array<keyof ProduceCounts>;
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      
      setProduceCounts(prev => ({
        ...prev,
        [randomCategory]: prev[randomCategory] + 1
      }));
      setTotalProcessed(prev => prev + 1);
    }
  };

  // Keyboard simulation for testing
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isProcessing) return;
      
      const keyMap: { [key: string]: keyof ProduceCounts } = {
        'p': 'Premium',
        'r': 'Ripe',
        'y': 'YetToRipe',
        'o': 'Overripe',
        'x': 'Rotten'
      };
      
      const category = keyMap[event.key.toLowerCase()];
      if (category) {
        setProduceCounts(prev => ({
          ...prev,
          [category]: prev[category] + 1
        }));
        setTotalProcessed(prev => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isProcessing]);

  // p5.js sketch
  useEffect(() => {
    if (!canvasRef.current) return;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(640, 480);
        p.background(50);
      };

      p.draw = () => {
        // Camera feed simulation
        p.background(50);
        
        // Grid pattern to simulate camera feed
        p.stroke(100);
        p.strokeWeight(1);
        for (let i = 0; i < p.width; i += 20) {
          p.line(i, 0, i, p.height);
        }
        for (let i = 0; i < p.height; i += 20) {
          p.line(0, i, p.width, i);
        }
        
        // Camera placeholder
        p.fill(100);
        p.noStroke();
        p.ellipse(p.width / 2, p.height / 2, 80, 80);
        p.fill(200);
        p.ellipse(p.width / 2, p.height / 2, 40, 40);
        
        // Processing indicator
        if (isProcessing) {
          p.fill(0, 255, 0, 150);
          p.noStroke();
          p.rect(0, 0, p.width, 30);
          p.fill(255);
          p.textAlign(p.CENTER, p.CENTER);
          p.textSize(16);
          p.text('AI PROCESSING PRODUCE...', p.width / 2, 15);
          
          // Simulate produce detection boxes
          if (p.frameCount % 30 < 15) {
            p.stroke(0, 255, 0);
            p.strokeWeight(3);
            p.noFill();
            p.rect(150, 100, 120, 80);
            p.fill(0, 255, 0);
            p.noStroke();
            p.rect(150, 100, 80, 20);
            p.fill(0);
            p.textSize(12);
            p.text('Premium', 190, 110);
          }
        } else {
          p.fill(255, 255, 255, 100);
          p.noStroke();
          p.rect(0, 0, p.width, p.height);
          p.fill(100);
          p.textAlign(p.CENTER, p.CENTER);
          p.textSize(24);
          p.text('Camera Feed Paused', p.width / 2, p.height / 2);
        }
      };

      p.mousePressed = () => {
        if (isProcessing && p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
          // Simulate clicking to detect produce
          const categories = Object.keys(produceCounts) as Array<keyof ProduceCounts>;
          const randomCategory = categories[Math.floor(Math.random() * categories.length)];
          setProduceCounts(prev => ({
            ...prev,
            [randomCategory]: prev[randomCategory] + 1
          }));
          setTotalProcessed(prev => prev + 1);
        }
      };
    };

    p5Instance.current = new p5(sketch, canvasRef.current);

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, [isProcessing, produceCounts]);

  // Auto-detection simulation
  useEffect(() => {
    const interval = setInterval(simulateProduceDetection, 2000);
    return () => clearInterval(interval);
  }, [isProcessing]);

  const toggleProcessing = () => {
    setIsProcessing(!isProcessing);
  };

  const resetCounts = () => {
    setProduceCounts({
      Premium: 0,
      Ripe: 0,
      YetToRipe: 0,
      Overripe: 0,
      Rotten: 0,
    });
    setTotalProcessed(0);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Premium': return 'text-green-600';
      case 'Ripe': return 'text-blue-600';
      case 'YetToRipe': return 'text-yellow-600';
      case 'Overripe': return 'text-orange-600';
      case 'Rotten': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-yellow-600 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Leaf className="h-8 w-8" />
              <h1 className="text-3xl font-bold" data-testid="header-title">
                Live Produce Sorting
              </h1>
              <p className="text-green-100">AI-Powered Quality Assessment</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 border border-gray-300 rounded px-4 py-2 text-lg text-black">
                Total Processed: {totalProcessed}
              </div>
              <Button
                onClick={toggleProcessing}
                className={`${isProcessing ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                data-testid="button-toggle-processing"
              >
                {isProcessing ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                {isProcessing ? 'Stop Processing' : 'Start Processing'}
              </Button>
              <Button
                onClick={resetCounts}
                variant="outline"
                className="border-white text-green-600 hover:bg-white/10"
                data-testid="button-reset"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Camera Feed */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="mr-2 h-5 w-5" />
                  Live Camera Feed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div ref={canvasRef} className="w-full border rounded-lg overflow-hidden" />
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Testing Controls:</strong></p>
                  <p>• Press P (Premium), R (Ripe), Y (Yet to Ripe), O (Overripe), X (Rotten)</p>
                  <p>• Click on camera feed to simulate produce detection</p>
                  <p>• Auto-detection runs every 2 seconds when processing</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real-time Counts */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quality Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                {produceCategories.map((category) => (
                  <div key={category} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${category === 'Premium' ? 'bg-green-500' : 
                        category === 'Ripe' ? 'bg-blue-500' :
                        category === 'YetToRipe' ? 'bg-yellow-500' :
                        category === 'Overripe' ? 'bg-orange-500' : 'bg-red-500'}`} />
                      <span className="font-medium" data-testid={`text-category-${category.toLowerCase()}`}>
                        {category}
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded px-3 py-1 text-lg font-semibold" data-testid={`count-${category.toLowerCase()}`}>
                      {produceCounts[category]}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Quality Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Premium Rate:</span>
                    <span className="font-semibold text-green-600">
                      {totalProcessed > 0 ? ((produceCounts.Premium / totalProcessed) * 100).toFixed(1) : 0}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketable:</span>
                    <span className="font-semibold text-blue-600">
                      {totalProcessed > 0 ? (((produceCounts.Premium + produceCounts.Ripe) / totalProcessed) * 100).toFixed(1) : 0}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Waste Rate:</span>
                    <span className="font-semibold text-red-600">
                      {totalProcessed > 0 ? (((produceCounts.Overripe + produceCounts.Rotten) / totalProcessed) * 100).toFixed(1) : 0}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Statistics Table */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Detailed Quality Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" data-testid="table-produce-stats">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Quality Grade</th>
                    <th className="text-left p-3 font-semibold">Count</th>
                    <th className="text-left p-3 font-semibold">Percentage</th>
                    <th className="text-left p-3 font-semibold">Market Value</th>
                    <th className="text-left p-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {produceCategories.map((category) => {
                    const count = produceCounts[category];
                    const percentage = totalProcessed > 0 ? ((count / totalProcessed) * 100).toFixed(1) : '0.0';
                    const marketValue = category === 'Premium' ? 'High' :
                                      category === 'Ripe' ? 'Medium' :
                                      category === 'YetToRipe' ? 'Low' :
                                      category === 'Overripe' ? 'Processing' : 'Compost';
                    
                    return (
                      <tr key={category} className="border-b hover:bg-gray-50">
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${category === 'Premium' ? 'bg-green-500' : 
                              category === 'Ripe' ? 'bg-blue-500' :
                              category === 'YetToRipe' ? 'bg-yellow-500' :
                              category === 'Overripe' ? 'bg-orange-500' : 'bg-red-500'}`} />
                            <span className={getCategoryColor(category)} data-testid={`table-category-${category.toLowerCase()}`}>
                              {category}
                            </span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold" data-testid={`table-count-${category.toLowerCase()}`}>
                          {count}
                        </td>
                        <td className="p-3" data-testid={`table-percentage-${category.toLowerCase()}`}>
                          {percentage}%
                        </td>
                        <td className="p-3">
                          <span className={`font-medium ${marketValue === 'High' ? 'text-green-600' :
                            marketValue === 'Medium' ? 'text-blue-600' :
                            marketValue === 'Low' ? 'text-yellow-600' :
                            marketValue === 'Processing' ? 'text-orange-600' : 'text-red-600'}`}>
                            {marketValue}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className={`px-2 py-1 rounded text-xs font-medium ${count > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                            {count > 0 ? 'Detected' : 'None'}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}