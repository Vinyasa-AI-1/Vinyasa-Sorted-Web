import { useState, useEffect, useRef } from "react";
import { UserCircle, Globe, Camera, Play, Pause, Leaf } from "lucide-react";
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

interface ProduceCounts {
  premium: number;
  ripe: number;
  yetToRipe: number;
  overripe: number;
  rotten: number;
}

export default function LiveProduceSorting() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const [selectedVariety, setSelectedVariety] = useState("Apples");
  const [isStreaming, setIsStreaming] = useState(false);
  const [produceCounts, setProduceCounts] = useState<ProduceCounts>({
    premium: 0,
    ripe: 0,
    yetToRipe: 0,
    overripe: 0,
    rotten: 0
  });
  const [isP5Active, setIsP5Active] = useState(false);
  const [currentClassification, setCurrentClassification] = useState<{label: string, confidence: number} | null>(null);
  const [isVinyasaSorterConnected, setIsVinyasaSorterConnected] = useState(false);
  const cameraContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Available produce varieties
  const produceVarieties = [
    "Apples", "Mangoes", "Tomatoes", "Bananas", "Oranges", "Grapes", 
    "Potatoes", "Onions", "Carrots", "Bell Peppers", "Cucumbers", "Spinach"
  ];

  // Integration with P5.js produce detection
  useEffect(() => {
    // Set up event listener for P5.js produce detection events
    const handleProduceDetected = (event: CustomEvent) => {
      const { type, confidence, originalLabel } = event.detail;
      console.log('🎯 React received produce detected event:', type, confidence, originalLabel);
      
      if (confidence > 0.5 && type && type in produceCounts) {
        console.log('📊 Updating produce counts for type:', type);
        setProduceCounts(prev => ({
          ...prev,
          [type]: prev[type as keyof ProduceCounts] + 1
        }));
        
        setCurrentClassification({
          label: originalLabel,
          confidence: confidence
        });
      } else {
        console.log('⚠️ Classification not counted - confidence too low or invalid type:', confidence, type);
      }
    };

    window.addEventListener('produceDetected', handleProduceDetected as EventListener);
    
    // Set up model status callback
    (window as any).updateProduceModelStatus = (loaded: boolean) => {
      console.log('Produce model status updated:', loaded);
      setIsP5Active(loaded);
    };
    
    return () => {
      window.removeEventListener('produceDetected', handleProduceDetected as EventListener);
      delete (window as any).updateProduceModelStatus;
    };
  }, []);

  // Initialize camera system when component mounts
  useEffect(() => {
    const initializeCamera = async () => {
      // Wait for the canvas to be available
      if (!canvasRef.current || !(window as any).p5ProduceSorting) {
        console.log('Canvas or produce sorting system not ready, retrying...');
        setTimeout(initializeCamera, 200);
        return;
      }

      console.log('Initializing produce camera system...');
      
      // First initialize the camera
      const success = await (window as any).p5ProduceSorting.init();
      if (success) {
        console.log('Produce camera initialized successfully');
        
        // Then attach to our canvas
        (window as any).p5ProduceSorting.attachToCanvas(canvasRef.current);
      } else {
        console.error('Failed to initialize produce camera');
      }
    };

    // Wait for DOM and libraries to load
    setTimeout(initializeCamera, 1000);
    
    return () => {
      // Properly cleanup camera and stop all processes on unmount
      if ((window as any).p5ProduceSorting) {
        console.log('🧹 Component unmounting - cleaning up produce camera system');
        (window as any).p5ProduceSorting.cleanup();
      }
    };
  }, []); // Empty dependency array ensures this runs on every page mount

  // Handle streaming toggle with P5.js integration
  useEffect(() => {
    if (isStreaming && (window as any).p5ProduceSorting) {
      console.log('🚀 Starting produce classification from React...');
      (window as any).p5ProduceSorting.startClassification();
    } else if (!isStreaming && (window as any).p5ProduceSorting) {
      console.log('⏹️ Stopping produce classification from React...');
      (window as any).p5ProduceSorting.stopClassification();
    }
  }, [isStreaming]);

  const handleToggleStream = () => {
    setIsStreaming(!isStreaming);
  };

  const handleReset = () => {
    setProduceCounts({
      premium: 0,
      ripe: 0,
      yetToRipe: 0,
      overripe: 0,
      rotten: 0
    });
    
    // Reset P5.js counts as well
    if ((window as any).p5ProduceSorting) {
      (window as any).p5ProduceSorting.resetCounts();
    }
    
    setCurrentClassification(null);
  };

  const handleVinyasaSorterConnect = async () => {
    if ((window as any).p5ProduceSorting) {
      console.log('🔌 User requesting Vinyasa Sorter connection...');
      const success = await (window as any).p5ProduceSorting.connectSorter();
      setIsVinyasaSorterConnected(success);
      
      if (success) {
        console.log('✅ Vinyasa Sorter connection established - UI updated');
      } else {
        console.log('❌ Vinyasa Sorter connection failed - UI updated');
      }
    }
  };

  const handleVinyasaSorterDisconnect = async () => {
    if ((window as any).p5ProduceSorting) {
      console.log('🔌 User disconnecting Vinyasa Sorter...');
      await (window as any).p5ProduceSorting.disconnectSorter();
      setIsVinyasaSorterConnected(false);
      console.log('🔌 Vinyasa Sorter disconnected - UI updated');
    }
  };

  const getProduceQualityColor = (quality: string) => {
    switch (quality) {
      case 'premium':
        return 'bg-green-100 text-green-800';
      case 'ripe':
        return 'bg-blue-100 text-blue-800';
      case 'yetToRipe':
        return 'bg-yellow-100 text-yellow-800';
      case 'overripe':
        return 'bg-orange-100 text-orange-800';
      case 'rotten':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRecommendedAction = (quality: string) => {
    switch (quality) {
      case 'premium':
        return t('exportMarkets');
      case 'ripe':
        return t('localMarkets');
      case 'yetToRipe':
        return t('storage');
      case 'overripe':
        return t('processingUnits');
      case 'rotten':
        return t('decompostMarkets');
      default:
        return t('processing');
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
                {t('liveProduceSorting')}
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
                {t('producerUserName')}
              </span>
              <UserCircle className="text-lg" />
            </div>
          </div>
          
          {/* Bottom row with navigation menu spread across full width */}
          <nav className="w-full -mt-1 pb-0">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1">
              <Link href="/producer">
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
                data-testid="nav-live-produce-sorting-active"
              >
                <div className="flex flex-col">
                  {t('liveProduceSorting').split(' ').map((word, index) => (
                    <span key={index} className="block text-sm leading-tight">{word}</span>
                  ))}
                </div>
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-harvest-insights"
              >
                <div className="flex flex-col">
                  {t('harvestInsights').split(' ').map((word, index) => (
                    <span key={index} className="block text-sm leading-tight">{word}</span>
                  ))}
                </div>
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-crop-recommendations"
              >
                <div className="flex flex-col">
                  {t('cropRecommendations').split(' ').map((word, index) => (
                    <span key={index} className="block text-sm leading-tight">{word}</span>
                  ))}
                </div>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        {/* Variety Selection */}
        <Card className="bg-white rounded-xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Leaf className="h-6 w-6 text-forest" />
                <h2 className="text-xl font-bold text-forest">{t('selectProduce')}</h2>
              </div>
              <Select value={selectedVariety} onValueChange={setSelectedVariety}>
                <SelectTrigger className="w-48" data-testid="select-variety">
                  <SelectValue placeholder={t('selectVariety')} />
                </SelectTrigger>
                <SelectContent>
                  {produceVarieties.map((variety) => (
                    <SelectItem key={variety} value={variety}>
                      {variety}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Camera Stream Section */}
        <Card className="bg-white rounded-xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-forest">Vinyasa-AI Smart Produce Camera</h2>
              <div className="flex gap-4">
                <Button
                  onClick={handleToggleStream}
                  className={`${isStreaming ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                  data-testid="button-toggle-stream"
                >
                  {isStreaming ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {isStreaming ? t('stopStream') : t('startStream')}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                  data-testid="button-reset-counts"
                >
                  {t('resetCounts')}
                </Button>
                <Button
                  onClick={isVinyasaSorterConnected ? handleVinyasaSorterDisconnect : handleVinyasaSorterConnect}
                  variant="outline"
                  className={`${isVinyasaSorterConnected ? 'border-red-500 text-red-500 hover:bg-red-500' : 'border-blue-500 text-blue-500 hover:bg-blue-500'} hover:text-white`}
                  data-testid="button-vinyasa-sorter-connection"
                >
                  {isVinyasaSorterConnected ? t('disconnectVinyasaSorter') : t('connectVinyasaSorter')}
                </Button>
              </div>
            </div>
            
            {/* Camera Stream */}
            <div className="relative">
              <div 
                id="produce-camera-container" 
                ref={cameraContainerRef} 
                className="w-full h-96 bg-gray-900 rounded-lg overflow-hidden relative"
                style={{ position: 'relative', width: '640px', height: '480px', maxWidth: '100%' }}
              >
                {/* React-managed canvas */}
                <canvas 
                  ref={canvasRef}
                  width={640}
                  height={480}
                  className="absolute top-0 left-0 w-full h-full object-cover z-10"
                />
                
                {!isP5Active && (
                  <div className="absolute inset-0 flex items-center justify-center text-center z-20 bg-gray-900">
                    <div>
                      <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-white text-lg">
                        {isStreaming ? t('loadingAiModel') : t('cameraStreamInactive')}
                      </p>
                      <p className="text-gray-300 text-sm mt-2">
                        {isStreaming ? t('initializingVinyasaAi') : t('clickStartStream')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Live Classification Display */}
              {currentClassification && isStreaming && (
                <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg">
                  <p className="text-sm font-semibold">
                    {t('detected')}: {currentClassification.label}
                  </p>
                  <p className="text-xs">
                    {t('confidence')}: {(currentClassification.confidence * 100).toFixed(1)}%
                  </p>
                </div>
              )}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${
                  isStreaming && isP5Active ? 'bg-green-500 animate-pulse' : 
                  isStreaming ? 'bg-yellow-500 animate-pulse' : 'bg-red-500'
                }`}></div>
                <span className="text-sm text-gray-600">
                  {isStreaming && isP5Active ? t('liveAiDetectionActive') : 
                   isStreaming ? t('loadingAiModel') : t('detectionStopped')}
                </span>
              </div>
              
              <div className="text-xs text-gray-500">
                Model: {isP5Active ? t('vinyasaAiLoaded') : t('loading')} | {t('vinyasaSorterMachine')}: {isVinyasaSorterConnected ? t('connected') : t('disconnected')}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Produce Quality Counts Table */}
        <Card className="bg-white rounded-xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-forest mb-6">{t('produceQualityCounts')}</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-forest">{t('qualityCategory')}</th>
                    <th className="text-left p-4 font-semibold text-forest">{t('count')}</th>
                    <th className="text-left p-4 font-semibold text-forest">{t('percentage')}</th>
                    <th className="text-left p-4 font-semibold text-forest">{t('recommendedSaleTo')}</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(produceCounts).map(([quality, count]) => {
                    const total = Object.values(produceCounts).reduce((sum, val) => sum + val, 0);
                    const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : '0.0';
                    
                    return (
                      <tr key={quality} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getProduceQualityColor(quality)}`}>
                            {t(quality)}
                          </span>
                        </td>
                        <td className="p-4 font-semibold text-lg" data-testid={`count-${quality}`}>
                          {formatNumber(count)}
                        </td>
                        <td className="p-4 text-gray-600">
                          {percentage}%
                        </td>
                        <td className="p-4 text-gray-600">
                          {getRecommendedAction(quality)}
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
                  {formatNumber(Object.values(produceCounts).reduce((sum, val) => sum + val, 0))}
                </p>
                <p className="text-gray-600">{t('totalItemsDetected')}</p>
              </div>
              <div className="bg-harvest/10 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-forest" data-testid="detection-rate">
                  {isStreaming ? `1 ${t('itemsPerSec').replace('items/sec', 'item/2sec')}` : `0 ${t('itemsPerSec')}`}
                </p>
                <p className="text-gray-600">{t('detectionRate')}</p>
              </div>
              <div className="bg-fresh/10 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-forest" data-testid="accuracy-rate">
                  95.8%
                </p>
                <p className="text-gray-600">{t('aiAccuracy')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}