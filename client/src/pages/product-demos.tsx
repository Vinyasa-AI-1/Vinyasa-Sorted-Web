import { Play, Monitor, Smartphone, Camera, Cpu, Globe } from "lucide-react";
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

interface Demo {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: "Producer" | "Consumer" | "AI Technology";
  features: string[];
  demoUrl: string;
  thumbnailColor: string;
  icon: React.ComponentType<any>;
}

export default function ProductDemos() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const demos: Demo[] = [
    {
      id: "1",
      title: "Live Produce Sorting AI",
      description: "See how our AI-powered camera system identifies and categorizes produce quality in real-time using advanced machine learning.",
      duration: "3:45",
      category: "Producer",
      features: ["Real-time AI Detection", "Quality Classification", "Revenue Optimization", "Multi-variety Support"],
      demoUrl: "/live-produce-sorting",
      thumbnailColor: "bg-green-500",
      icon: Camera
    },
    {
      id: "2",
      title: "Smart Waste Classification",
      description: "Watch our intelligent waste sorting system automatically identify and categorize different types of waste for optimal recycling.",
      duration: "2:30",
      category: "Consumer", 
      features: ["6-Category Detection", "Recycling Optimization", "Smart Bin Integration", "Environmental Impact"],
      demoUrl: "/live-waste-sorting",
      thumbnailColor: "bg-blue-500",
      icon: Monitor
    },
    {
      id: "3",
      title: "Producer Dashboard Overview",
      description: "Explore the comprehensive agricultural dashboard with quality distribution, revenue optimization, and market insights.",
      duration: "4:15",
      category: "Producer",
      features: ["Quality Analytics", "Market Recommendations", "Revenue Tracking", "AI Chat Assistant"],
      demoUrl: "/producer",
      thumbnailColor: "bg-yellow-500",
      icon: Monitor
    },
    {
      id: "4", 
      title: "Consumer Operations Center",
      description: "Tour the waste management dashboard with bin monitoring, recycling optimization, and environmental impact tracking.",
      duration: "3:20",
      category: "Consumer",
      features: ["Bin Monitoring", "Recycling Analytics", "Eco Rewards", "Waste Optimization"],
      demoUrl: "/customer-central",
      thumbnailColor: "bg-purple-500",
      icon: Smartphone
    },
    {
      id: "5",
      title: "Vinyasa-AI Technology Deep Dive",
      description: "Technical overview of our machine learning models, computer vision algorithms, and AI classification systems.",
      duration: "6:00",
      category: "AI Technology",
      features: ["ML5.js Integration", "Teachable Machine", "Real-time Processing", "Edge Computing"],
      demoUrl: "#",
      thumbnailColor: "bg-red-500",
      icon: Cpu
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Producer": return "bg-green-100 text-green-700";
      case "Consumer": return "bg-blue-100 text-blue-700";
      case "AI Technology": return "bg-purple-100 text-purple-700";
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
                Vinyasa-AI - {t('productDemos')}
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
                Demo Center
              </span>
              <UserCircle className="text-xl" />
              <ExpandableMenu />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-6 px-4">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-forest mb-4">
            Experience Vinyasa-AI in Action
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our AI-powered sorting solutions transform agricultural and waste management processes. 
            Try our interactive demos and see the technology in real-time.
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => {
            const IconComponent = demo.icon;
            return (
              <Card key={demo.id} className="border-sage/20 hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-3">
                  {/* Demo Thumbnail */}
                  <div className={`${demo.thumbnailColor} rounded-lg h-32 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                    <IconComponent className="h-12 w-12 text-white" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white/80" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-forest">{demo.title}</CardTitle>
                    <Badge className={getCategoryColor(demo.category)}>
                      {demo.category}
                    </Badge>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Duration: {demo.duration}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{demo.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-forest mb-2">{t('features')}:</h4>
                    <div className="flex flex-wrap gap-1">
                      {demo.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => {
                        if (demo.demoUrl.startsWith('/')) {
                          window.location.href = demo.demoUrl;
                        } else {
                          window.open(demo.demoUrl, '_blank');
                        }
                      }}
                      data-testid={`try-demo-${demo.id}`}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      {t('tryDemo')}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      data-testid={`learn-demo-${demo.id}`}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-forest text-white border-none">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-sage mb-6 max-w-2xl mx-auto">
                Experience the full power of Vinyasa-AI sorting solutions. 
                Choose your path and start optimizing your operations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.location.href = '/producer'}
                  data-testid="start-producer"
                >
                  Start Producer Dashboard
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.location.href = '/customer-central'}
                  data-testid="start-consumer"
                >
                  Start Consumer Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}