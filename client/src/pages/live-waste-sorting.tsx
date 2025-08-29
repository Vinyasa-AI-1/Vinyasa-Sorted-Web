import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Play, Pause, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTranslation } from '@/lib/translations';

interface WasteCounts {
  Dry: number;
  Wet: number;
  Plastic: number;
  Electronic: number;
  Medical: number;
}

const wasteCategories = ['Dry', 'Wet', 'Plastic', 'Electronic', 'Medical'] as const;

export default function LiveWasteSorting() {
  const { currentLanguage } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  const [wasteCounts, setWasteCounts] = useState<WasteCounts>({
    Dry: 0,
    Wet: 0,
    Plastic: 0,
    Electronic: 0,
    Medical: 0,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalProcessed, setTotalProcessed] = useState(0);
  const p5ContainerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load p5.js dynamically
    const loadP5 = async () => {
      if (typeof window !== 'undefined') {
        const p5 = await import('p5');
        
        const sketch = (p: any) => {
          p.setup = () => {
            const canvas = p.createCanvas(640, 480);
            canvas.parent(p5ContainerRef.current);
            p.background(50);
            p.textAlign(p.CENTER, p.CENTER);
            p.textSize(24);
            p.fill(255);
          };

          p.draw = () => {
            p.background(50);
            p.fill(255);
            p.text('Camera Feed Placeholder', p.width / 2, p.height / 2 - 50);
            p.textSize(16);
            p.text('Click anywhere to simulate waste detection', p.width / 2, p.height / 2);
            p.textSize(12);
            p.text('Press keys: D=Dry, W=Wet, P=Plastic, E=Electronic, M=Medical', p.width / 2, p.height / 2 + 30);
            
            // Draw border
            p.stroke(100);
            p.strokeWeight(2);
            p.noFill();
            p.rect(0, 0, p.width, p.height);
          };

          p.mousePressed = () => {
            if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
              simulateWasteDetection();
            }
          };

          p.keyPressed = () => {
            const keyMap: { [key: string]: keyof WasteCounts } = {
              'd': 'Dry',
              'w': 'Wet', 
              'p': 'Plastic',
              'e': 'Electronic',
              'm': 'Medical'
            };
            
            const category = keyMap[p.key.toLowerCase()];
            if (category) {
              incrementWasteCount(category);
            }
          };
        };

        if (p5ContainerRef.current && !p5InstanceRef.current) {
          p5InstanceRef.current = new (p5 as any).default(sketch);
        }
      }
    };

    loadP5();

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  const simulateWasteDetection = () => {
    const categories = wasteCategories;
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    incrementWasteCount(randomCategory);
  };

  const incrementWasteCount = (category: keyof WasteCounts) => {
    setWasteCounts(prev => ({
      ...prev,
      [category]: prev[category] + 1
    }));
    setTotalProcessed(prev => prev + 1);
  };

  const resetCounts = () => {
    setWasteCounts({
      Dry: 0,
      Wet: 0,
      Plastic: 0,
      Electronic: 0,
      Medical: 0,
    });
    setTotalProcessed(0);
  };

  const toggleProcessing = () => {
    setIsProcessing(!isProcessing);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Dry: 'bg-yellow-500',
      Wet: 'bg-green-500',
      Plastic: 'bg-blue-500',
      Electronic: 'bg-purple-500',
      Medical: 'bg-red-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/20 to-forest/10">
      {/* Header */}
      <div className="border-b bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-3xl font-bold text-forest" data-testid="text-page-title">
                {t('liveSorting')}
              </h1>
              <p className="text-gray-600">{t('farmName')}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 border border-gray-300 rounded px-4 py-2 text-lg">
                Total Processed: {totalProcessed}
              </div>
              <Button
                onClick={toggleProcessing}
                className={`${isProcessing ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                data-testid="button-toggle-processing"
              >
                {isProcessing ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isProcessing ? 'Stop' : 'Start'} Processing
              </Button>
              <Button
                onClick={resetCounts}
                variant="outline"
                data-testid="button-reset-counts"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Camera Feed */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Live Camera Feed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  ref={p5ContainerRef}
                  className="w-full h-[480px] bg-gray-900 rounded-lg flex items-center justify-center"
                  data-testid="container-camera-feed"
                >
                  {/* p5.js canvas will be inserted here */}
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>• Click on the camera feed to simulate waste detection</p>
                  <p>• Use keyboard shortcuts: D=Dry, W=Wet, P=Plastic, E=Electronic, M=Medical</p>
                  <p>• Processing status: <span className={`font-semibold ${isProcessing ? 'text-green-600' : 'text-red-600'}`}>{isProcessing ? 'Active' : 'Inactive'}</span></p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Waste Category Counts */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Waste Counts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {wasteCategories.map((category) => (
                  <div key={category} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${getCategoryColor(category)}`}></div>
                      <span className="font-medium" data-testid={`text-category-${category.toLowerCase()}`}>
                        {t(category.toLowerCase() as any)}
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded px-3 py-1 text-lg font-semibold" data-testid={`count-${category.toLowerCase()}`}>
                      {wasteCounts[category]}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Live Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Session Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Items:</span>
                  <span className="font-semibold" data-testid="text-total-items">{totalProcessed}</span>
                </div>
                {totalProcessed > 0 && (
                  <>
                    <div className="border-t pt-3">
                      <h4 className="font-medium mb-2">Distribution:</h4>
                      {wasteCategories.map((category) => {
                        const percentage = ((wasteCounts[category] / totalProcessed) * 100).toFixed(1);
                        return (
                          <div key={category} className="flex justify-between text-sm">
                            <span>{t(category.toLowerCase() as any)}:</span>
                            <span data-testid={`percentage-${category.toLowerCase()}`}>{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Waste Processing Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Category</th>
                    <th className="text-left p-3">Count</th>
                    <th className="text-left p-3">Percentage</th>
                    <th className="text-left p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {wasteCategories.map((category) => {
                    const count = wasteCounts[category];
                    const percentage = totalProcessed > 0 ? ((count / totalProcessed) * 100).toFixed(1) : '0.0';
                    return (
                      <tr key={category} className="border-b hover:bg-gray-50">
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${getCategoryColor(category)}`}></div>
                            <span className="font-medium">{t(category.toLowerCase() as any)}</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold" data-testid={`table-count-${category.toLowerCase()}`}>
                          {count}
                        </td>
                        <td className="p-3" data-testid={`table-percentage-${category.toLowerCase()}`}>
                          {percentage}%
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