import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Leaf, Recycle, TrendingUp, Coins } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
import ChatInterface from "@/components/consumer/chat-interface";
import produceImage from "@assets/generated_images/AI_produce_sorting_system_c9018f61.png";
import wasteImage from "@assets/generated_images/AI_waste_sorting_system_9fb6ea58.png";
import producerVideoThumb from "@assets/generated_images/Producer_explainer_video_thumbnail_e70d74bb.png";
import consumerVideoThumb from "@assets/generated_images/Consumer_explainer_video_thumbnail_93951c82.png";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = (key: keyof typeof translations.en) => {
    return translations[language as keyof typeof translations]?.[key] || translations.en[key] || key;
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(language === 'hi' ? 'hi-IN' : language === 'bn' ? 'bn-BD' : 'en-IN').format(num);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-forest mr-2" />
              <span className="text-2xl font-bold text-forest">Vinyasa-AI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/producer" className="text-gray-700 hover:text-forest transition-colors">
                {t('producerDashboard')}
              </Link>
              <Link href="/customer-central" className="text-gray-700 hover:text-forest transition-colors">
                {t('consumerDashboard')}
              </Link>
              <Link href="/live-waste-sorting" className="text-gray-700 hover:text-forest transition-colors">
                {t('liveWasteSorting')}
              </Link>
              <Link href="/live-produce-sorting" className="text-gray-700 hover:text-forest transition-colors">
                {t('liveProduceSorting')}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-forest transition-colors">
                {t('aboutUs')}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-forest transition-colors">
                {t('contactUs')}
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-forest transition-colors">
                {t('buyProducts')}
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
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/producer">
                <Button className="bg-forest hover:bg-green-800 text-white px-8 py-3 text-lg">
                  {t('getStartedProducer')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/customer-central">
                <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 text-lg">
                  {t('getStartedConsumer')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src={produceImage} 
                  alt="AI Produce Sorting"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{t('producerFeatures')}</h3>
                    <p>{t('producerFeaturesDesc')}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src={wasteImage} 
                  alt="AI Waste Sorting"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{t('consumerFeatures')}</h3>
                    <p>{t('consumerFeaturesDesc')}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">{t('featuresTitle')}</h2>
            <p className="text-xl text-gray-600">{t('featuresSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Leaf className="h-12 w-12 text-forest mx-auto" />
                <h3 className="text-xl font-semibold">{t('smartSorting')}</h3>
                <p className="text-gray-600">{t('smartSortingDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Recycle className="h-12 w-12 text-sage mx-auto" />
                <h3 className="text-xl font-semibold">{t('wasteOptimization')}</h3>
                <p className="text-gray-600">{t('wasteOptimizationDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <TrendingUp className="h-12 w-12 text-fresh mx-auto" />
                <h3 className="text-xl font-semibold">{t('valueMaximization')}</h3>
                <p className="text-gray-600">{t('valueMaximizationDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Coins className="h-12 w-12 text-harvest mx-auto" />
                <h3 className="text-xl font-semibold">{t('vinyasaRewards')}</h3>
                <p className="text-gray-600">{t('vinyasaRewardsDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Explainer Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">{t('howItWorks')}</h2>
            <p className="text-xl text-gray-600">{t('howItWorksDesc')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Producer Video */}
            <Card className="overflow-hidden shadow-xl">
              <div className="relative group cursor-pointer">
                <img 
                  src={producerVideoThumb} 
                  alt="Producer Explainer Video"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{t('producerVideoTitle')}</h3>
                    <p>{t('producerVideoDesc')}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Consumer Video */}
            <Card className="overflow-hidden shadow-xl">
              <div className="relative group cursor-pointer">
                <img 
                  src={consumerVideoThumb} 
                  alt="Consumer Explainer Video"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{t('consumerVideoTitle')}</h3>
                    <p>{t('consumerVideoDesc')}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('ctaDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/producer">
              <Button className="bg-white text-forest hover:bg-gray-100 px-8 py-3 text-lg">
                {t('startSortingProduce')}
              </Button>
            </Link>
            <Link href="/customer-central">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest px-8 py-3 text-lg">
                {t('startSortingWaste')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-sage mr-2" />
                <span className="text-2xl font-bold">Vinyasa-AI</span>
              </div>
              <p className="text-gray-400 mb-4">{t('footerDescription')}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('products')}</h4>
              <div className="space-y-2">
                <Link href="/producer" className="block text-gray-400 hover:text-white transition-colors">
                  {t('producerDashboard')}
                </Link>
                <Link href="/customer-central" className="block text-gray-400 hover:text-white transition-colors">
                  {t('consumerDashboard')}
                </Link>
                <Link href="/live-waste-sorting" className="block text-gray-400 hover:text-white transition-colors">
                  {t('liveWasteSorting')}
                </Link>
                <Link href="/live-produce-sorting" className="block text-gray-400 hover:text-white transition-colors">
                  {t('liveProduceSorting')}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('company')}</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  {t('aboutUs')}
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  {t('contactUs')}
                </Link>
                <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                  {t('privacy')}
                </Link>
                <Link href="/products" className="block text-gray-400 hover:text-white transition-colors">
                  {t('buyProducts')}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('newsletter')}</h4>
              <p className="text-gray-400 mb-4">{t('newsletterDescription')}</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-sage"
                />
                <Button className="bg-sage hover:bg-green-600 px-4 py-2 rounded-l-none">
                  {t('subscribe')}
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vinyasa-AI. {t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>

      {/* Global AI Assistant */}
      <ChatInterface t={t} currentLanguage={language} />
    </div>
  );
}