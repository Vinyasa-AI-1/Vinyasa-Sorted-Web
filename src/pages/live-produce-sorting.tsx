import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Play, Pause, RotateCcw, Camera, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
import ChatInterface from "@/components/consumer/chat-interface";

export default function LiveProduceSorting() {
  const { language, setLanguage } = useLanguage();
  const t = (key: keyof typeof translations.en) => {
    return translations[language as keyof typeof translations]?.[key] || translations.en[key] || key;
  };

  const [isRunning, setIsRunning] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [sortedCount, setSortedCount] = useState(0);

  // Mock produce items being sorted
  const produceItems = [
    { name: "Alphonso Mango", quality: "Premium", confidence: 98, action: "Export" },
    { name: "Kesar Mango", quality: "Ripe", confidence: 95, action: "Local Market" },
    { name: "Robust Tomato", quality: "YetToRipe", confidence: 92, action: "Storage" },
    { name: "Cherry Tomato", quality: "Premium", confidence: 97, action: "Export" },
    { name: "Bell Pepper", quality: "Ripe", confidence: 89, action: "Distant Market" },
    { name: "Cucumber", quality: "Premium", confidence: 96, action: "Export" },
  ];

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(language === 'hi' ? 'hi-IN' : language === 'bn' ? 'bn-BD' : 'en-IN').format(num);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentItem((prev) => (prev + 1) % produceItems.length);
        setSortedCount((prev) => prev + 1);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isRunning, produceItems.length]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setCurrentItem(0);
    setSortedCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Leaf className="h-8 w-8 text-forest mr-2" />
                <span className="text-2xl font-bold text-forest">Vinyasa-AI</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-forest transition-colors">
                {t('home')}
              </Link>
              <Link href="/producer" className="text-gray-700 hover:text-forest transition-colors">
                {t('producerDashboard')}
              </Link>
              <Link href="/customer-central" className="text-gray-700 hover:text-forest transition-colors">
                {t('consumerDashboard')}
              </Link>
              <Link href="/live-waste-sorting" className="text-gray-700 hover:text-forest transition-colors">
                {t('liveWasteSorting')}
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-forest"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="bn">বাংলা</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-forest mb-4">
              {t('liveProduceSorting')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('liveProduceSortingDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Control Panel */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-forest">{t('sortingControls')}</span>
                <div className="flex items-center space-x-4">
                  <Badge variant={isRunning ? "default" : "secondary"} className="bg-forest">
                    {isRunning ? t('running') : t('stopped')}
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  onClick={handleStart}
                  disabled={isRunning}
                  className="bg-forest hover:bg-green-800 text-white"
                >
                  <Play className="h-4 w-4 mr-2" />
                  {t('startSorting')}
                </Button>
                <Button
                  onClick={handlePause}
                  disabled={!isRunning}
                  variant="outline"
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  <Pause className="h-4 w-4 mr-2" />
                  {t('pauseSorting')}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-gray-400 text-gray-600 hover:bg-gray-100"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  {t('resetSorting')}
                </Button>
                <div className="ml-auto text-sm text-gray-600">
                  {t('totalSorted')}: <span className="font-semibold text-forest">{formatNumber(sortedCount)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Live Sorting View */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Camera Feed Simulation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-forest" />
                  {t('cameraFeed')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {isRunning ? (
                      <div className="text-center text-white">
                        <div className="w-32 h-32 bg-gradient-to-br from-forest to-sage rounded-lg mx-auto mb-4 flex items-center justify-center text-4xl font-bold">
                          {produceItems[currentItem]?.name[0]}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{produceItems[currentItem]?.name}</h3>
                        <Badge className="bg-forest text-white">
                          {t('analyzing')}...
                        </Badge>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <Camera className="h-16 w-16 mx-auto mb-4" />
                        <p>{t('cameraIdle')}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Live indicator */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isRunning ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
                    <span className="text-white text-sm font-medium">
                      {isRunning ? 'LIVE' : 'OFFLINE'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-forest" />
                  {t('currentAnalysis')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isRunning && produceItems[currentItem] ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-forest mb-2">
                        {produceItems[currentItem].name}
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-forest/10 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">{t('quality')}</div>
                          <div className="text-lg font-semibold text-forest">
                            {produceItems[currentItem].quality}
                          </div>
                        </div>
                        <div className="bg-sage/10 p-4 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">{t('confidence')}</div>
                          <div className="text-lg font-semibold text-sage">
                            {formatNumber(produceItems[currentItem].confidence)}%
                          </div>
                        </div>
                      </div>

                      <div className="bg-fresh/10 p-4 rounded-lg mb-4">
                        <div className="text-sm text-gray-600 mb-1">{t('recommendedAction')}</div>
                        <div className="text-lg font-semibold text-fresh">
                          {produceItems[currentItem].action}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">{t('sortingComplete')}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <AlertCircle className="h-12 w-12 mx-auto mb-4" />
                    <p>{t('waitingForProduce')}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-forest">{t('recentActivity')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {produceItems.slice(0, Math.min(sortedCount, 5)).map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-forest to-sage rounded-full flex items-center justify-center text-white font-bold">
                        {item.name[0]}
                      </div>
                      <div>
                        <div className="font-medium text-forest">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.quality} • {formatNumber(item.confidence)}% {t('confidence')}</div>
                      </div>
                    </div>
                    <Badge className="bg-forest text-white">
                      {item.action}
                    </Badge>
                  </div>
                ))}
                {sortedCount === 0 && (
                  <div className="text-center py-4 text-gray-500">
                    <p>{t('noActivityYet')}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Global AI Assistant */}
      <ChatInterface t={t} currentLanguage={language} />
    </div>
  );
}