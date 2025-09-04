import { TrendingUp, Lightbulb, Target, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ExpandableMenu from "@/components/ui/expandable-menu";
import { UserCircle } from "lucide-react";
import logoUrl from "@assets/logo_1756410067559.png";
import { useLanguage } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: "High" | "Medium" | "Low";
  effort: "Easy" | "Moderate" | "Complex";
  category: "yield" | "revenue";
  icon: React.ComponentType<any>;
}

export default function HarvestOptimizations() {
  const { currentLanguage } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const personalizedRecommendations: Recommendation[] = [
    {
      id: "p1",
      title: "Optimize Mango Harvest Timing",
      description: "Based on your Alphonso mangoes data, harvesting 2-3 days earlier could increase premium quality by 15% and boost revenue by ₹25,000/acre.",
      impact: "High",
      effort: "Easy",
      category: "revenue",
      icon: Target
    },
    {
      id: "p2",
      title: "Improve Storage Conditions", 
      description: "Your current produce shows 8% overripe rate. Controlled atmosphere storage could reduce this to 3% and increase shelf life by 40%.",
      impact: "High",
      effort: "Moderate",
      category: "yield",
      icon: TrendingUp
    },
    {
      id: "p3",
      title: "Premium Market Expansion",
      description: "Your premium quality produce (78%) qualifies for export markets. Consider Dubai International buyer offering ₹240/kg vs current ₹180/kg.",
      impact: "High",
      effort: "Moderate", 
      category: "revenue",
      icon: BarChart3
    },
    {
      id: "p4",
      title: "Integrated Pest Management",
      description: "Introducing beneficial insects and organic methods could reduce pesticide costs by 30% while maintaining quality standards.",
      impact: "Medium",
      effort: "Moderate",
      category: "yield", 
      icon: Lightbulb
    }
  ];
  
  const genericRecommendations: Recommendation[] = [
    {
      id: "g1",
      title: "Drip Irrigation System",
      description: "Modern drip irrigation can increase water efficiency by 40% and improve crop yield by 25% while reducing water costs.",
      impact: "High",
      effort: "Complex",
      category: "yield",
      icon: TrendingUp
    },
    {
      id: "g2",
      title: "Soil Health Monitoring",
      description: "Regular soil testing and nutrient management can increase overall farm productivity by 20-35% across all crop varieties.",
      impact: "High",
      effort: "Easy",
      category: "yield",
      icon: Target
    },
    {
      id: "g3",
      title: "Crop Rotation Strategy",
      description: "Implementing 3-crop rotation can improve soil fertility, reduce pest pressure, and increase long-term farm profitability.",
      impact: "Medium",
      effort: "Moderate",
      category: "yield",
      icon: Lightbulb
    },
    {
      id: "g4",
      title: "Market Diversification",
      description: "Selling to multiple buyer categories (export, local, processing) can increase price stability and reduce market risk by 45%.",
      impact: "Medium",
      effort: "Moderate",
      category: "revenue",
      icon: BarChart3
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
  
  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "Easy": return "bg-green-100 text-green-700";
      case "Moderate": return "bg-yellow-100 text-yellow-700";
      case "Complex": return "bg-red-100 text-red-700";
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
                Vinyasa-AI - {t('harvestOptimizations')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sage text-sm" data-testid="user-info">
                {t('farmName')}
              </span>
              <UserCircle className="text-xl" />
              <ExpandableMenu />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-6 px-4">
        {/* Personalized Recommendations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-forest mb-4" data-testid="personalized-section-title">
            {t('personalizedRecommendations')}
          </h2>
          <p className="text-gray-600 mb-6">
            Based on your Svavlamban Farms data and current produce performance
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {personalizedRecommendations.map((rec) => {
              const IconComponent = rec.icon;
              return (
                <Card key={rec.id} className="border-sage/20 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5 text-forest" />
                        <CardTitle className="text-lg text-forest">{rec.title}</CardTitle>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge className={getImpactColor(rec.impact)}>{rec.impact} Impact</Badge>
                        <Badge className={getEffortColor(rec.effort)}>{rec.effort}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{rec.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" data-testid={`implement-${rec.id}`}>
                        Implement Now
                      </Button>
                      <Button variant="outline" size="sm" data-testid={`learn-more-${rec.id}`}>
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Generic Recommendations */}
        <section>
          <h2 className="text-2xl font-bold text-forest mb-4" data-testid="generic-section-title">
            {t('genericRecommendations')}
          </h2>
          <p className="text-gray-600 mb-6">
            Best practices for agricultural optimization and revenue growth
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {genericRecommendations.map((rec) => {
              const IconComponent = rec.icon;
              return (
                <Card key={rec.id} className="border-sage/20 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5 text-forest" />
                        <CardTitle className="text-lg text-forest">{rec.title}</CardTitle>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge className={getImpactColor(rec.impact)}>{rec.impact} Impact</Badge>
                        <Badge className={getEffortColor(rec.effort)}>{rec.effort}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{rec.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" data-testid={`learn-${rec.id}`}>
                        Learn More
                      </Button>
                      <Button variant="outline" size="sm" data-testid={`resources-${rec.id}`}>
                        Resources
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}