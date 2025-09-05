import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Leaf, Recycle, TrendingUp, Coins, UserCircle, Globe, ShoppingCart, Building } from "lucide-react";
import { useLanguage, type Language } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";
import ChatInterface from "@/components/consumer/chat-interface";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ExpandableMenu from "@/components/ui/expandable-menu";
import logoUrl from "@assets/logo_1756410067559.png";
import produceImage from "@assets/generated_images/AI_camera_produce_sorting_system_dd81726e.png";
import wasteImage from "@assets/generated_images/AI_camera_waste_sorting_system_79af4a88.png";
import producerVideoThumb from "@assets/generated_images/Producer_complete_video_thumbnail_26332595.png";
import consumerVideoThumb from "@assets/generated_images/Consumer_complete_video_thumbnail_e10b1b3e.png";

export default function Home() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-forest text-white py-0 px-2 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src={logoUrl} alt="Vinyasa-AI Logo" className="h-16 w-16" />
              <h1 className="text-xl font-bold" data-testid="header-title">
                Vinyasa-AI - {t('heroTitle')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-sage" />
                <Select value={currentLanguage} onValueChange={(value) => changeLanguage(value as Language)}>
                  <SelectTrigger className="bg-transparent border-sage text-white w-28 h-8 text-xs">
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
              <span className="text-sage text-sm" data-testid="company-tagline">
                Increase Value, Reduce Waste
              </span>
              <UserCircle className="text-xl" />
              <ExpandableMenu />
            </div>
          </div>
        </div>
      </header>

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
              <Button className="bg-forest hover:bg-green-800 text-white px-8 py-3 text-lg">
                {t('learnMore')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 text-lg">
                {t('watchVideo')} <Play className="ml-2 h-5 w-5" />
              </Button>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{t('producerFeatures')}</h3>
                  <p className="text-sm opacity-90">{t('producerFeaturesDesc')}</p>
                  <Link href="/live-produce-sorting">
                    <Button className="bg-forest hover:bg-green-800 text-white mt-4">
                      Try Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{t('consumerFeatures')}</h3>
                  <p className="text-sm opacity-90">{t('consumerFeaturesDesc')}</p>
                  <Link href="/live-waste-sorting">
                    <Button className="bg-sage hover:bg-green-700 text-white mt-4">
                      Try Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-forest mb-2">
                {formatNumber(250000)}
              </div>
              <div className="text-gray-600">{t('wasteReduced')} (kg)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sage mb-2">
                {formatNumber(15000)}
              </div>
              <div className="text-gray-600">{t('farmersHelped')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-fresh mb-2">
                {formatNumber(50)}
              </div>
              <div className="text-gray-600">{t('citiesConnected')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-harvest mb-2">
                {formatNumber(1000000)}
              </div>
              <div className="text-gray-600">{t('coinsEarned')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">{t('featuresTitle')}</h2>
            <p className="text-xl text-gray-600">Advanced AI technology for sustainable waste management</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Leaf className="h-12 w-12 text-forest mx-auto" />
                <h3 className="text-xl font-semibold">{t('smartSorting')}</h3>
                <p className="text-gray-600">{t('smartSortingDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <TrendingUp className="h-12 w-12 text-sage mx-auto" />
                <h3 className="text-xl font-semibold">{t('realTimeAnalytics')}</h3>
                <p className="text-gray-600">{t('realTimeAnalyticsDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Coins className="h-12 w-12 text-fresh mx-auto" />
                <h3 className="text-xl font-semibold">{t('vinyasaRewards')}</h3>
                <p className="text-gray-600">{t('vinyasaRewardsDesc')}</p>
              </CardContent>
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
                {t('producerDashboard')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/customer-central">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest px-8 py-3 text-lg">
                {t('consumerDashboard')}
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
                <span className="text-xl font-bold">Vinyasa-AI</span>
              </div>
              <p className="text-gray-300 mb-4">{t('footerDescription')}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('products')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/live-produce-sorting" className="hover:text-white">{t('liveProduceSorting')}</Link></li>
                <li><Link href="/live-waste-sorting" className="hover:text-white">{t('liveWasteSorting')}</Link></li>
                <li><Link href="/products" className="hover:text-white">{t('buyProducts')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('company')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">{t('aboutUs')}</Link></li>
                <li><Link href="/contact" className="hover:text-white">{t('contactUs')}</Link></li>
                <li><Link href="/privacy" className="hover:text-white">{t('privacy')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Dashboards</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/producer" className="hover:text-white">{t('producerDashboard')}</Link></li>
                <li><Link href="/customer-central" className="hover:text-white">{t('consumerDashboard')}</Link></li>
                <li><Link href="/harvest-marketplace" className="hover:text-white">{t('harvestMarketplace')}</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Vinyasa-AI. {t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>

      {/* Global AI Assistant */}
      <ChatInterface t={t} currentLanguage={currentLanguage} />
    </div>
  );
}