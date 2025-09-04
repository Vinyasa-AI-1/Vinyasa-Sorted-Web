import { useState } from "react";
import { Lightbulb, ShoppingCart, Leaf, TrendingDown, ExternalLink, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ExpandableMenu from "@/components/ui/expandable-menu";
import { UserCircle } from "lucide-react";
import logoUrl from "@assets/logo_1756410067559.png";
import { useLanguage, type Language } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";

interface ReductionTip {
  id: string;
  title: string;
  description: string;
  impact: "High" | "Medium" | "Low";
  wasteCategory?: string;
  icon: React.ComponentType<any>;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  wasteReduction: string;
  category: string;
  link: string;
  rating: number;
}

export default function WasteReduction() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const [activeTab, setActiveTab] = useState<"tips" | "products">("tips");
  
  const personalizedTips: ReductionTip[] = [
    {
      id: "p1",
      title: "Reduce Plastic Waste Generation",
      description: "Your bins show 35% plastic waste. Switch to reusable bags, glass containers, and biodegradable packaging to reduce by 60%.",
      impact: "High",
      wasteCategory: "Plastic",
      icon: TrendingDown
    },
    {
      id: "p2", 
      title: "Compost Organic Waste",
      description: "You generate 8kg wet waste daily. Home composting could eliminate 90% of this and create nutrient-rich soil.",
      impact: "High",
      wasteCategory: "Wet",
      icon: Leaf
    },
    {
      id: "p3",
      title: "E-Waste Optimization", 
      description: "Your electronic waste disposal could be improved. Proper recycling could recover ₹500-2000 in valuable materials monthly.",
      impact: "Medium",
      wasteCategory: "Electronic",
      icon: Lightbulb
    }
  ];
  
  const genericTips: ReductionTip[] = [
    {
      id: "g1",
      title: "Buy in Bulk",
      description: "Purchasing household items in bulk reduces packaging waste by 40% and saves 15-20% on costs.",
      impact: "Medium",
      icon: ShoppingCart
    },
    {
      id: "g2",
      title: "Repair Before Replace",
      description: "Repairing electronics and appliances instead of replacing can reduce e-waste by 70% and save significant money.",
      impact: "High", 
      icon: Lightbulb
    },
    {
      id: "g3",
      title: "Digital Receipts",
      description: "Switch to digital receipts and bills to reduce paper waste by up to 80% in your household.",
      impact: "Low",
      icon: TrendingDown
    }
  ];
  
  const recommendedProducts: Product[] = [
    {
      id: "1",
      name: "Stainless Steel Food Containers Set",
      description: "Replace plastic storage with durable steel containers. Reduces plastic waste by 80%.",
      price: "₹1,200-2,500",
      wasteReduction: "80% plastic reduction",
      category: "Kitchen",
      link: "#",
      rating: 4.7
    },
    {
      id: "2",
      name: "Home Composting Kit",
      description: "Convert your wet waste into compost at home. Eliminates 90% of organic waste disposal.",
      price: "₹2,000-4,000", 
      wasteReduction: "90% organic waste reduction",
      category: "Garden",
      link: "#",
      rating: 4.8
    },
    {
      id: "3",
      name: "Reusable Shopping Bags Set",
      description: "Eco-friendly jute and cotton bags. Eliminates need for plastic bags.",
      price: "₹300-800",
      wasteReduction: "100% plastic bag elimination",
      category: "Shopping",
      link: "#",
      rating: 4.6
    },
    {
      id: "4",
      name: "Water Filtration System",
      description: "Reduce plastic bottle waste by 95% with home water filtration.",
      price: "₹3,000-8,000",
      wasteReduction: "95% plastic bottle reduction", 
      category: "Water",
      link: "#",
      rating: 4.9
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-red-100 text-red-700";
      case "Medium": return "bg-yellow-100 text-yellow-700";
      case "Low": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest text-white py-0 px-2 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src={logoUrl} alt="Vinyasa-AI Logo" className="h-16 w-16" />
              <h1 className="text-xl font-bold" data-testid="header-title">
                Vinyasa-AI - {t('wasteReduction')}
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
              <span className="text-sage text-sm" data-testid="user-info">
                {t('consumerUserName')}
              </span>
              <UserCircle className="text-xl" />
              <ExpandableMenu />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-6 px-4">
        {/* Tabs */}
        <div className="flex border-b border-sage/20 mb-6">
          <Button
            variant={activeTab === "tips" ? "default" : "ghost"}
            onClick={() => setActiveTab("tips")}
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-forest"
            data-testid="tab-tips"
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            Reduction Tips
          </Button>
          <Button
            variant={activeTab === "products" ? "default" : "ghost"}
            onClick={() => setActiveTab("products")}
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-forest"
            data-testid="tab-products"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Recommended Products
          </Button>
        </div>

        {activeTab === "tips" && (
          <div>
            {/* Personalized Tips */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-forest mb-4" data-testid="personalized-tips-title">
                {t('personalizedRecommendations')}
              </h2>
              <p className="text-gray-600 mb-6">
                Based on your waste sorting data from BKC-1 EcoCycler
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {personalizedTips.map((tip) => {
                  const IconComponent = tip.icon;
                  return (
                    <Card key={tip.id} className="border-sage/20">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            <IconComponent className="h-5 w-5 text-forest" />
                            <CardTitle className="text-lg text-forest">{tip.title}</CardTitle>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Badge className={getImpactColor(tip.impact)}>{tip.impact} Impact</Badge>
                            {tip.wasteCategory && (
                              <Badge variant="outline" className="text-sage">
                                {tip.wasteCategory}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{tip.description}</p>
                        <Button size="sm" data-testid={`implement-tip-${tip.id}`}>
                          Start Implementation
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Generic Tips */}
            <section>
              <h2 className="text-2xl font-bold text-forest mb-4" data-testid="generic-tips-title">
                {t('genericRecommendations')}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {genericTips.map((tip) => {
                  const IconComponent = tip.icon;
                  return (
                    <Card key={tip.id} className="border-sage/20">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            <IconComponent className="h-5 w-5 text-forest" />
                            <CardTitle className="text-lg text-forest">{tip.title}</CardTitle>
                          </div>
                          <Badge className={getImpactColor(tip.impact)}>{tip.impact} Impact</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{tip.description}</p>
                        <Button variant="outline" size="sm" data-testid={`learn-tip-${tip.id}`}>
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {activeTab === "products" && (
          <div>
            <h2 className="text-2xl font-bold text-forest mb-4" data-testid="products-title">
              Recommended Products for Waste Reduction
            </h2>
            <p className="text-gray-600 mb-6">
              Products selected based on your waste patterns to help reduce future waste generation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedProducts.map((product) => (
                <Card key={product.id} className="border-sage/20 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-forest">{product.name}</CardTitle>
                    <Badge variant="outline" className="text-sage w-fit">
                      {product.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm">{product.description}</p>
                    
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {product.rating}/5.0
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-medium text-forest">{t('price')}: </span>
                      {product.price}
                    </div>
                    
                    <Badge className="bg-green-100 text-green-700">
                      {product.wasteReduction}
                    </Badge>
                    
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(product.link, '_blank')}
                        data-testid={`buy-product-${product.id}`}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Buy Now
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        data-testid={`details-product-${product.id}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}