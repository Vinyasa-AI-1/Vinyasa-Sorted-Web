import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Leaf, Recycle, TrendingUp, Coins, UserCircle, Globe, ShoppingCart, Building, 
         BarChart3, PieChart, Star, Check, Zap, Shield, Camera, Users, Award,
         Target, Database, Smartphone, Wifi, Clock } from "lucide-react";
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
              <Link href="/producer">
                <Button className="bg-forest hover:bg-green-800 text-white px-8 py-3 text-lg">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Watch Video <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Feature Images with Enhanced CTAs */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
              <div className="relative">
                <img 
                  src={produceImage} 
                  alt="AI Produce Sorting"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-forest text-white">{t('forFarmers')}</Badge>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold mb-3">{t('producerFeatures')}</h3>
                  <p className="text-base opacity-90 mb-4">{t('producerFeaturesDesc')}</p>
                  <div className="flex gap-2 mb-4">
                    <Link href="/live-produce-sorting">
                      <Button className="bg-forest hover:bg-green-800 text-white">
                        <Camera className="mr-2 h-4 w-4" />
                        Try Live Demo
                      </Button>
                    </Link>
                    <Link href="/producer">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
              <div className="relative">
                <img 
                  src={wasteImage} 
                  alt="AI Waste Sorting" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-sage text-white">{t('forCities')}</Badge>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold mb-3">{t('consumerFeatures')}</h3>
                  <p className="text-base opacity-90 mb-4">{t('consumerFeaturesDesc')}</p>
                  <div className="flex gap-2 mb-4">
                    <Link href="/live-waste-sorting">
                      <Button className="bg-sage hover:bg-green-700 text-white">
                        <Camera className="mr-2 h-4 w-4" />
                        Try Live Demo
                      </Button>
                    </Link>
                    <Link href="/customer-central">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sage">
                        <PieChart className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest mb-4">Impact & Results</h2>
            <p className="text-lg text-gray-600">Transforming agriculture and waste management globally</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-forest mb-2">
                {formatNumber(2500)}+
              </div>
              <div className="text-gray-600 font-medium">Waste Reduced (kg)</div>
              <div className="text-sm text-gray-500 mt-1">Monthly reduction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-sage mb-2">
                {formatNumber(150)}+
              </div>
              <div className="text-gray-600 font-medium">Farmers Helped</div>
              <div className="text-sm text-gray-500 mt-1">Revenue increased by 40%</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-fresh mb-2">
                {formatNumber(5)}+
              </div>
              <div className="text-gray-600 font-medium">Cities Connected</div>
              <div className="text-sm text-gray-500 mt-1">Smart waste management</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-harvest mb-2">
                {formatNumber(10000)}+
              </div>
              <div className="text-gray-600 font-medium">Coins Earned</div>
              <div className="text-sm text-gray-500 mt-1">Environmental rewards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">Advanced AI Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge computer vision, machine learning, and IoT integration for comprehensive sorting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-l-4 border-forest">
              <CardContent className="space-y-4">
                <Camera className="h-16 w-16 text-forest mx-auto" />
                <h3 className="text-xl font-semibold">99.2% AI Accuracy</h3>
                <p className="text-gray-600">Advanced computer vision with real-time object detection and quality assessment</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">Industry Leading</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-l-4 border-sage">
              <CardContent className="space-y-4">
                <Database className="h-16 w-16 text-sage mx-auto" />
                <h3 className="text-xl font-semibold">Real-Time Analytics</h3>
                <p className="text-gray-600">Live dashboards with predictive insights and market optimization recommendations</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Live Data</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-l-4 border-fresh">
              <CardContent className="space-y-4">
                <Wifi className="h-16 w-16 text-fresh mx-auto" />
                <h3 className="text-xl font-semibold">IoT Integration</h3>
                <p className="text-gray-600">Connected sensors and smart bins with automated sorting and rewards system</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <Smartphone className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Smart Connected</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-l-4 border-harvest">
              <CardContent className="space-y-4">
                <Coins className="h-16 w-16 text-harvest mx-auto" />
                <h3 className="text-xl font-semibold">Vinyasa Rewards</h3>
                <p className="text-gray-600">Blockchain-based reward system encouraging sustainable practices with redeemable coins</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">Eco Rewards</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-l-4 border-forest">
              <CardContent className="space-y-4">
                <Target className="h-16 w-16 text-forest mx-auto" />
                <h3 className="text-xl font-semibold">Revenue Optimization</h3>
                <p className="text-gray-600">AI-powered market analysis and pricing recommendations to maximize farmer income</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">40% Increase</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-l-4 border-sage">
              <CardContent className="space-y-4">
                <Users className="h-16 w-16 text-sage mx-auto" />
                <h3 className="text-xl font-semibold">Connected Marketplace</h3>
                <p className="text-gray-600">Direct farmer-to-buyer connections with certified recycler networks and quality assurance</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <Building className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Global Network</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-l-4 border-harvest">
              <CardContent className="space-y-4">
                <Database className="h-16 w-16 text-harvest mx-auto" />
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <h3 className="text-xl font-semibold">Blockchain Traceability</h3>
                  <Badge className="bg-harvest/20 text-harvest px-2 py-1 text-xs font-medium">Coming Soon</Badge>
                </div>
                <p className="text-gray-600">Complete supply chain transparency from farm to consumer with immutable blockchain records</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <Shield className="h-4 w-4 text-harvest" />
                  <span className="text-sm font-medium">Full Transparency</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Previews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">Powerful Dashboard Insights</h2>
            <p className="text-xl text-gray-600">Comprehensive analytics and management tools for all stakeholders</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Producer Dashboard Preview */}
            <Card className="overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-forest to-sage text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Producer Dashboard</h3>
                <p className="opacity-90">Comprehensive farm management and revenue optimization</p>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-forest rounded-full"></div>
                      <span className="font-medium">Total Sorted Today</span>
                    </div>
                    <span className="font-bold text-forest">{formatNumber(1910)} kg</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-sage rounded-full"></div>
                      <span className="font-medium">Optimal Revenue</span>
                    </div>
                    <span className="font-bold text-sage">₹{formatNumber(260124)}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-fresh rounded-full"></div>
                      <span className="font-medium">Quality Score</span>
                    </div>
                    <span className="font-bold text-fresh">92.5%</span>
                  </div>
                  <div className="space-y-2 mt-6">
                    <h4 className="font-semibold text-gray-700">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center"><Check className="h-4 w-4 text-forest mr-2" />Quality distribution analysis</li>
                      <li className="flex items-center"><Check className="h-4 w-4 text-forest mr-2" />Market price optimization</li>
                      <li className="flex items-center"><Check className="h-4 w-4 text-forest mr-2" />Revenue comparison charts</li>
                      <li className="flex items-center"><Check className="h-4 w-4 text-forest mr-2" />Harvest planning tools</li>
                      <li className="flex items-center"><Badge className="bg-harvest/20 text-harvest mr-2 px-2 py-1 text-xs">Coming Soon</Badge>Blockchain tracking from farm to consumer</li>
                    </ul>
                  </div>
                </div>
                <Link href="/producer">
                  <Button className="w-full mt-6 bg-forest hover:bg-green-800 text-white">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Producer Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Consumer Dashboard Preview */}
            <Card className="overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-sage to-fresh text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Consumer Dashboard</h3>
                <p className="opacity-90">Smart waste management and reward tracking</p>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-sage rounded-full"></div>
                      <span className="font-medium">Waste Sorted Today</span>
                    </div>
                    <span className="font-bold text-sage">{formatNumber(850)} kg</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-harvest rounded-full"></div>
                      <span className="font-medium">Vinyasa Coins Earned</span>
                    </div>
                    <span className="font-bold text-harvest">{formatNumber(2847)}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-fresh rounded-full"></div>
                      <span className="font-medium">Recycling Rate</span>
                    </div>
                    <span className="font-bold text-fresh">89.2%</span>
                  </div>
                  <div className="space-y-2 mt-6">
                    <h4 className="font-semibold text-gray-700">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center"><Check className="h-4 w-4 text-sage mr-2" />Smart bin monitoring</li>
                      <li className="flex items-center"><Check className="h-4 w-4 text-sage mr-2" />Recycler marketplace</li>
                      <li className="flex items-center"><Check className="h-4 w-4 text-sage mr-2" />Environmental impact tracking</li>
                      <li className="flex items-center"><Check className="h-4 w-4 text-sage mr-2" />Reward redemption system</li>
                      <li className="flex items-center"><Badge className="bg-harvest/20 text-harvest mr-2 px-2 py-1 text-xs">Coming Soon</Badge>Blockchain tracking from farm to consumer</li>
                    </ul>
                  </div>
                </div>
                <Link href="/customer-central">
                  <Button className="w-full mt-6 bg-sage hover:bg-green-700 text-white">
                    <PieChart className="mr-2 h-4 w-4" />
                    View Consumer Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-20 bg-gradient-to-br from-forest/5 to-sage/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">See Our Technology in Action</h2>
            <p className="text-xl text-gray-600">Watch real-time demonstrations of our AI-powered sorting systems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <video 
                  className="w-full h-80 object-cover" 
                  poster={producerVideoThumb}
                  controls
                  preload="metadata"
                >
                  <source src="@assets/Producer - video_1757097200426.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-forest mb-3">AI Produce Sorting Demo</h3>
                <p className="text-gray-600 mb-4">
                  Watch our AI system automatically identify, sort, and grade agricultural produce in real-time. 
                  See how farmers can maximize revenue by 40% through intelligent quality assessment.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />3:45 mins</span>
                  <span className="flex items-center"><Users className="h-4 w-4 mr-1" />15K+ views</span>
                  <span className="flex items-center"><Star className="h-4 w-4 mr-1" />4.9/5 rating</span>
                </div>
                <Link href="/live-produce-sorting">
                  <Button className="mt-4 bg-forest hover:bg-green-800 text-white">
                    <Camera className="mr-2 h-4 w-4" />
                    Try Live Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <video 
                  className="w-full h-80 object-cover" 
                  poster={consumerVideoThumb}
                  controls
                  preload="metadata"
                >
                  <source src="@assets/consumer - video_1757097200425.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-forest mb-3">Smart Waste Management Demo</h3>
                <p className="text-gray-600 mb-4">
                  Discover how our intelligent bins automatically sort waste materials and reward users with Vinyasa Coins. 
                  Perfect for smart cities and sustainable communities.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />2:30 mins</span>
                  <span className="flex items-center"><Users className="h-4 w-4 mr-1" />12K+ views</span>
                  <span className="flex items-center"><Star className="h-4 w-4 mr-1" />4.8/5 rating</span>
                </div>
                <Link href="/live-waste-sorting">
                  <Button className="mt-4 bg-sage hover:bg-green-700 text-white">
                    <Camera className="mr-2 h-4 w-4" />
                    Try Live Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 bg-gradient-to-r from-forest to-sage text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Connected Ecosystems</h2>
            <p className="text-xl opacity-90">Linking producers, consumers, and recyclers in a sustainable circular economy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <ShoppingCart className="h-12 w-12 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">{t('harvestMarketplace')}</h3>
                    <Badge className="bg-white/20 text-white mt-1">Live Now</Badge>
                  </div>
                </div>
                <p className="opacity-90 mb-6 text-lg">
                  Connect directly with verified buyers for your sorted produce. Get premium prices for quality grades with transparent market analytics.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center"><Check className="h-4 w-4 mr-2" />Direct farmer-to-buyer connections</div>
                  <div className="flex items-center"><Check className="h-4 w-4 mr-2" />Quality-based pricing tiers</div>
                  <div className="flex items-center"><Check className="h-4 w-4 mr-2" />Real-time market rates</div>
                  <div className="flex items-center"><Check className="h-4 w-4 mr-2" />Secure payment systems</div>
                </div>
                <Link href="/harvest-marketplace">
                  <Button className="bg-white text-forest hover:bg-gray-100">
                    Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Recycle className="h-12 w-12 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">{t('recyclersMarketplace')}</h3>
                    <Badge className="bg-harvest/80 text-white mt-1">Coming Soon</Badge>
                  </div>
                </div>
                <p className="opacity-90 mb-6 text-lg">
                  Find certified recyclers for your sorted waste materials. Maximize environmental impact with our verified recycling network.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center"><Check className="h-4 w-4 mr-2" />Certified recycler network</div>
                  <div className="flex items-center"><Check className="h-4 w-4 mr-2" />Environmental impact tracking</div>
                  <div className="flex items-center"><Check className="h-4 w-4 mr-2" />Vinyasa Coin rewards</div>
                  <div className="flex items-center"><Check className="h-4 w-4 mr-2" />Sustainability certificates</div>
                </div>
                <Button className="bg-white/30 text-white hover:bg-white/40" disabled>
                  Coming Q2 2024 <Building className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of farmers and smart cities already transforming their operations with AI-powered sorting technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/producer">
              <Button className="bg-white text-forest hover:bg-gray-100 px-8 py-4 text-lg">
                <Leaf className="mr-2 h-5 w-5" />
                {t('producerDashboard')}
              </Button>
            </Link>
            <Link href="/customer-central">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest px-8 py-4 text-lg">
                <Recycle className="mr-2 h-5 w-5" />
                {t('consumerDashboard')}
              </Button>
            </Link>
          </div>
          <div className="flex justify-center space-x-8 text-sm opacity-75">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              Enterprise Grade Security
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-1" />
              99.9% Uptime SLA
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1" />
              ISO 27001 Certified
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-forest mb-4">{t('newsletter')}</h2>
          <p className="text-gray-600 mb-8">Get updates on the latest features, sustainability tips, and industry insights</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder={t('emailPlaceholder')}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest"
            />
            <Button className="bg-forest hover:bg-green-800 text-white px-8 py-3">
              {t('subscribe')}
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">Join 25,000+ subscribers • Unsubscribe anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <img src={logoUrl} alt="Vinyasa-AI Logo" className="h-10 w-10 mr-3" />
                <span className="text-xl font-bold">Vinyasa-AI</span>
              </div>
              <p className="text-gray-300 mb-6">{t('footerDescription')}</p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Star className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Users className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('products')}</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/live-produce-sorting" className="hover:text-white transition-colors">{t('liveProduceSorting')}</Link></li>
                <li><Link href="/live-waste-sorting" className="hover:text-white transition-colors">{t('liveWasteSorting')}</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">{t('buyProducts')}</Link></li>
                <li><Link href="/harvest-marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('company')}</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">{t('aboutUs')}</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">{t('contactUs')}</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">{t('privacy')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Dashboards</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/producer" className="hover:text-white transition-colors">{t('producerDashboard')}</Link></li>
                <li><Link href="/customer-central" className="hover:text-white transition-colors">{t('consumerDashboard')}</Link></li>
                <li><Link href="/harvest-marketplace" className="hover:text-white transition-colors">{t('harvestMarketplace')}</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">&copy; 2024 Vinyasa-AI. {t('allRightsReserved')}</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-white">Terms of Service</Link>
              <span>Made with 🌱 for a sustainable future</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Global AI Assistant */}
      <ChatInterface t={t} currentLanguage={currentLanguage} />
    </div>
  );
}