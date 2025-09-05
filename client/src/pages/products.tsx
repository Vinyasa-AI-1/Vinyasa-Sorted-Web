import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Leaf, ShoppingCart, Star, Check, Zap, Shield } from "lucide-react";
import { useLanguage, type Language } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";
import ChatInterface from "@/components/consumer/chat-interface";

export default function Products() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);

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
              <Link href="/about" className="text-gray-700 hover:text-forest transition-colors">
                {t('aboutUs')}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-forest transition-colors">
                {t('contactUs')}
              </Link>
              <Link href="/producer" className="text-gray-700 hover:text-forest transition-colors">
                {t('producerDashboard')}
              </Link>
              <Link href="/customer-central" className="text-gray-700 hover:text-forest transition-colors">
                {t('consumerDashboard')}
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={currentLanguage} onValueChange={(value) => changeLanguage(value as Language)}>
                <SelectTrigger className="w-28">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6">
              {t('buyProductsTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('buyProductsSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Smart Produce Sorting System */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge className="bg-forest text-white">{t('bestseller')}</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-forest to-sage rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                    PS
                  </div>
                  <h3 className="text-2xl font-bold text-forest mb-2">{t('produceSystemName')}</h3>
                  <p className="text-gray-600 mb-4">{t('produceSystemDesc')}</p>
                  <div className="text-3xl font-bold text-forest mb-2">₹{formatNumber(299999)}</div>
                  <div className="flex items-center justify-center mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-forest mr-2" />
                    <span className="text-sm">{t('feature1')}</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-forest mr-2" />
                    <span className="text-sm">{t('feature2')}</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-forest mr-2" />
                    <span className="text-sm">{t('feature3')}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link href="/live-produce-sorting">
                    <Button className="w-full bg-forest hover:bg-green-800 text-white">
                      Try Live Demo
                    </Button>
                  </Link>
                  <Button className="w-full bg-sage hover:bg-green-700 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t('addToCart')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Smart Waste Sorting Bins */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge className="bg-sage text-white">{t('popular')}</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage to-fresh rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                    WS
                  </div>
                  <h3 className="text-2xl font-bold text-forest mb-2">{t('wasteSystemName')}</h3>
                  <p className="text-gray-600 mb-4">{t('wasteSystemDesc')}</p>
                  <div className="text-3xl font-bold text-forest mb-2">₹{formatNumber(149999)}</div>
                  <div className="flex items-center justify-center mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-sage mr-2" />
                    <span className="text-sm">{t('wasteFeature1')}</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-sage mr-2" />
                    <span className="text-sm">{t('wasteFeature2')}</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-sage mr-2" />
                    <span className="text-sm">{t('wasteFeature3')}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link href="/live-waste-sorting">
                    <Button className="w-full bg-sage hover:bg-green-700 text-white">
                      Try Live Demo
                    </Button>
                  </Link>
                  <Button className="w-full bg-fresh hover:bg-green-600 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t('addToCart')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Analytics Dashboard */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge className="bg-fresh text-white">{t('new')}</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-fresh to-harvest rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                    AI
                  </div>
                  <h3 className="text-2xl font-bold text-forest mb-2">{t('analyticsSystemName')}</h3>
                  <p className="text-gray-600 mb-4">{t('analyticsSystemDesc')}</p>
                  <div className="text-3xl font-bold text-forest mb-2">₹{formatNumber(99999)}</div>
                  <div className="flex items-center justify-center mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.7)</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-fresh mr-2" />
                    <span className="text-sm">{t('analyticsFeature1')}</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-fresh mr-2" />
                    <span className="text-sm">{t('analyticsFeature2')}</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-fresh mr-2" />
                    <span className="text-sm">{t('analyticsFeature3')}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-fresh hover:bg-green-600 text-white">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {t('addToCart')}
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">{t('whyChooseUs')}</h2>
            <p className="text-xl text-gray-600">{t('whyChooseUsDesc')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Zap className="h-12 w-12 text-forest mx-auto" />
                <h3 className="text-xl font-semibold">{t('fastShipping')}</h3>
                <p className="text-gray-600">{t('fastShippingDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Shield className="h-12 w-12 text-sage mx-auto" />
                <h3 className="text-xl font-semibold">{t('warranty')}</h3>
                <p className="text-gray-600">{t('warrantyDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Check className="h-12 w-12 text-fresh mx-auto" />
                <h3 className="text-xl font-semibold">{t('support')}</h3>
                <p className="text-gray-600">{t('supportDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('readyToOrder')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('readyToOrderDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-forest hover:bg-gray-100 px-8 py-3 text-lg">
                {t('getQuote')}
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest px-8 py-3 text-lg">
              {t('scheduleDemo')}
            </Button>
          </div>
        </div>
      </section>

      {/* Global AI Assistant */}
      <ChatInterface t={t} currentLanguage={currentLanguage} />
    </div>
  );
}