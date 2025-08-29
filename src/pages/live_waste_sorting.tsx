import { useState, useEffect } from "react";
import { UserCircle, Globe, Camera, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logoUrl from "@assets/logo_1756410067559.png";
import { useLanguage, type Language } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";
import { Link } from "wouter";

interface WasteCounts {
  dry: number;
  wet: number;
  plastic: number;
  electronic: number;
  medical: number;
}

export default function LiveWasteSorting() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const [isStreaming, setIsStreaming] = useState(false);
  const [wasteCounts, setWasteCounts] = useState<WasteCounts>({
    dry: 0,
    wet: 0,
    plastic: 0,
    electronic: 0,
    medical: 0
  });

  // Simulate waste detection for demo purposes
  useEffect(() => {
    if (isStreaming) {
      const interval = setInterval(() => {
        const wasteTypes = ['dry', 'wet', 'plastic', 'electronic', 'medical'] as const;
        const randomType = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
        
        setWasteCounts(prev => ({
          ...prev,
          [randomType]: prev[randomType] + 1
        }));
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [isStreaming]);

  const handleToggleStream = () => {
    setIsStreaming(!isStreaming);
  };

  const handleReset = () => {
    setWasteCounts({
      dry: 0,
      wet: 0,
      plastic: 0,
      electronic: 0,
      medical: 0
    });
  };

  const getWasteTypeColor = (type: string) => {
    switch (type) {
      case 'dry':
        return 'bg-blue-100 text-blue-800';
      case 'wet':
        return 'bg-green-100 text-green-800';
      case 'plastic':
        return 'bg-yellow-100 text-yellow-800';
      case 'electronic':
        return 'bg-purple-100 text-purple-800';
      case 'medical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest text-white py-0 px-2 shadow-lg">
        <div className="container mx-auto">
          {/* Top row with logo, title, and user info */}
          <div className="flex justify-between items-center -mb-2">
            <div className="flex items-center space-x-2">
              <img src={logoUrl} alt="Sorted Logo" className="h-28 w-28" />
              <h1 className="text-base font-bold" data-testid="header-title">
                {t('liveWasteSorting')}
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Globe className="h-3 w-3 text-sage" />
                <Select value={currentLanguage} onValueChange={(value) => changeLanguage(value as Language)}>
                  <SelectTrigger className="bg-transparent border-sage text-white w-24 h-7 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(languages).map(([code, name]) => (
                      <SelectItem key={code} value={code}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sage text-xs" data-testid="user-name">
                {t('consumerUserName')}
              </span>
              <UserCircle className="text-lg" />
            </div>
          </div>
          
          {/* Bottom row with navigation menu spread across full width */}
          <nav className="w-full -mt-1 pb-0">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1">
              <Link href="/customer-central">
                <Button 
                  variant="ghost" 
                  className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                  data-testid="nav-dashboard"
                >
                  <div className="flex flex-col">
                    <span className="block text-sm leading-tight">Dashboard</span>
                  </div>
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                className="text-white bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-live-waste-sorting-active"
              >
                <div className="flex flex-col">
                  {t('liveWasteSorting').split(' ').map((word, index) => (
                    <span key={index} className="block text-sm leading-tight">{word}</span>
                  ))}
                </div>
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-bin-insights"
              >
                <div className="flex flex-col">
                  {t('binInsights').split(' ').map((word, index) => (
                    <span key={index} className="block text-sm leading-tight">{word}</span>
                  ))}
                </div>
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-recycling-tips"
              >
                <div className="flex flex-col">
                  {t('recyclingTips').split(' ').map((word, index) => (
                    <span key={index} className="block text-sm leading-tight">{word}</span>
                  ))}
                </div>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        {/* Camera Stream Section */}
        <Card className="bg-white rounded-xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-forest">Vinyasa-AI Smart Bin Camera</h2>
              <div className="flex gap-4">
                <Button
                  onClick={handleToggleStream}
                  className={`${isStreaming ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                  data-testid="button-toggle-stream"
                >
                  {isStreaming ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {isStreaming ? 'Stop Stream' : 'Start Stream'}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                  data-testid="button-reset-counts"
                >
                  Reset Counts
                </Button>
              </div>
            </div>
            
            {/* Camera Placeholder */}
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  {isStreaming ? 'AI Waste Sorting Camera Active' : 'Camera Stream Inactive'}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {isStreaming ? 'Detecting and sorting waste in real-time...' : 'Click "Start Stream" to begin waste detection'}
                </p>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${isStreaming ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-sm text-gray-600">
                {isStreaming ? 'Live Detection Active' : 'Detection Stopped'}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Waste Counts Table */}
        <Card className="bg-white rounded-xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-forest mb-6">Waste Category Counts</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-forest">Waste Category</th>
                    <th className="text-left p-4 font-semibold text-forest">Count</th>
                    <th className="text-left p-4 font-semibold text-forest">Percentage</th>
                    <th className="text-left p-4 font-semibold text-forest">Recycler Type</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(wasteCounts).map(([type, count]) => {
                    const total = Object.values(wasteCounts).reduce((sum, val) => sum + val, 0);
                    const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : '0.0';
                    
                    return (
                      <tr key={type} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getWasteTypeColor(type)}`}>
                            {type.charAt(0).toUpperCase() + type.slice(1)} Waste
                          </span>
                        </td>
                        <td className="p-4 font-semibold text-lg" data-testid={`count-${type}`}>
                          {formatNumber(count)}
                        </td>
                        <td className="p-4 text-gray-600">
                          {percentage}%
                        </td>
                        <td className="p-4 text-gray-600">
                          {type === 'dry' && 'Compost Recyclers'}
                          {type === 'wet' && 'Biogas Plants'}
                          {type === 'plastic' && 'Plastic Recyclers'}
                          {type === 'electronic' && 'eWaste Recyclers'}
                          {type === 'medical' && 'Medical Waste Recyclers'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Summary Stats */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-sage/10 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-forest" data-testid="total-items-detected">
                  {formatNumber(Object.values(wasteCounts).reduce((sum, val) => sum + val, 0))}
                </p>
                <p className="text-gray-600">Total Items Detected</p>
              </div>
              <div className="bg-harvest/10 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-forest" data-testid="detection-rate">
                  {isStreaming ? '1 item/2sec' : '0 items/sec'}
                </p>
                <p className="text-gray-600">Detection Rate</p>
              </div>
              <div className="bg-fresh/10 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-forest" data-testid="accuracy-rate">
                  95.8%
                </p>
                <p className="text-gray-600">AI Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}