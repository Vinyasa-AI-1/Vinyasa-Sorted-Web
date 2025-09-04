import { useState } from "react";
import { Search, MapPin, Star, Users, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useLanguage } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";

interface Supplier {
  id: string;
  name: string;
  category: string;
  location: string;
  distance: number;
  rating: number;
  price: string;
  products: string[];
  verified: boolean;
}

interface Buyer {
  id: string;
  name: string;
  category: string;
  location: string;
  distance: number;
  rating: number;
  price: string;
  capacity: string;
  requirements: string[];
}

export default function HarvestMarketplace() {
  const { currentLanguage } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState<"suppliers" | "buyers">("suppliers");
  
  const suppliers: Supplier[] = [
    {
      id: "1",
      name: "AgriTech Solutions",
      category: "Seeds & Fertilizers",
      location: "Pune",
      distance: 45,
      rating: 4.8,
      price: "₹500-2000/acre",
      products: ["Hybrid Seeds", "Organic Fertilizers", "Pesticides"],
      verified: true
    },
    {
      id: "2", 
      name: "FarmEquip Maharashtra",
      category: "Farm Equipment",
      location: "Nashik",
      distance: 85,
      rating: 4.6,
      price: "₹50,000-5,00,000",
      products: ["Tractors", "Harvesters", "Irrigation Systems"],
      verified: true
    },
    {
      id: "3",
      name: "GreenGrow Nursery",
      category: "Seedlings & Plants", 
      location: "Thane",
      distance: 25,
      rating: 4.9,
      price: "₹10-500/plant",
      products: ["Fruit Saplings", "Vegetable Seedlings", "Grafted Plants"],
      verified: false
    },
    {
      id: "4",
      name: "Krishi Knowledge Center",
      category: "Consulting & Training",
      location: "Mumbai",
      distance: 15,
      rating: 4.7,
      price: "₹1000-5000/session",
      products: ["Farming Training", "Soil Testing", "Crop Planning"],
      verified: true
    }
  ];
  
  const buyers: Buyer[] = [
    {
      id: "1",
      name: "JNPT Export Terminal",
      category: "Export",
      location: "Navi Mumbai",
      distance: 30,
      rating: 4.9,
      price: "₹180-250/kg",
      capacity: "500 tons/day",
      requirements: ["Premium Quality", "Export Standards", "Certification"]
    },
    {
      id: "2",
      name: "Vashi APMC Market", 
      category: "Local Market",
      location: "Vashi",
      distance: 20,
      rating: 4.5,
      price: "₹70-140/kg",
      capacity: "200 tons/day",
      requirements: ["Fresh Produce", "Local Standards", "Quick Delivery"]
    },
    {
      id: "3",
      name: "Godrej Agrovet",
      category: "Processing Unit",
      location: "Vikhroli",
      distance: 35,
      rating: 4.8,
      price: "₹120-180/kg", 
      capacity: "1000 tons/day",
      requirements: ["Bulk Quantity", "Consistent Quality", "Processing Grade"]
    },
    {
      id: "4",
      name: "Reliance Fresh",
      category: "Retail Chain",
      location: "Multiple Locations",
      distance: 12,
      rating: 4.6,
      price: "₹100-200/kg",
      capacity: "50 tons/day", 
      requirements: ["Retail Ready", "Packaging", "Freshness"]
    }
  ];
  
  const filterData = (data: (Supplier | Buyer)[]) => {
    return data.filter(item => {
      const matchesSearch = searchTerm === "" || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesCategory = selectedCategory === "all" || 
        item.category.toLowerCase().includes(selectedCategory.toLowerCase());
        
      return matchesSearch && matchesCategory;
    });
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
                Vinyasa-AI - {t('harvestMarketplace')}
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
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="search-input"
              />
            </div>
            
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48" data-testid="category-filter">
                <SelectValue placeholder={t('category')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('all') || "All"}</SelectItem>
                <SelectItem value="seeds">Seeds & Fertilizers</SelectItem>
                <SelectItem value="equipment">Farm Equipment</SelectItem>
                <SelectItem value="plants">Seedlings & Plants</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="export">Export</SelectItem>
                <SelectItem value="processing">Processing Unit</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-sage/20 mb-6">
            <Button
              variant={activeTab === "suppliers" ? "default" : "ghost"}
              onClick={() => setActiveTab("suppliers")}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-forest"
              data-testid="tab-suppliers"
            >
              {t('suppliers')} ({suppliers.length})
            </Button>
            <Button
              variant={activeTab === "buyers" ? "default" : "ghost"}
              onClick={() => setActiveTab("buyers")}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-forest"
              data-testid="tab-buyers"
            >
              {t('buyers')} ({buyers.length})
            </Button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "suppliers" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterData(suppliers).map((supplier) => (
              <Card key={supplier.id} className="border-sage/20 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-forest">{supplier.name}</CardTitle>
                    {supplier.verified && (
                      <Badge variant="secondary" className="bg-forest/10 text-forest">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sage text-sm">{supplier.category}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {supplier.location} • {supplier.distance} km
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {supplier.rating}/5.0
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-forest">{t('price')}: </span>
                    {supplier.price}
                  </div>
                  <div className="text-xs text-gray-500">
                    Products: {supplier.products.join(", ")}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1" data-testid={`connect-supplier-${supplier.id}`}>
                      <Users className="h-4 w-4 mr-1" />
                      {t('connect')}
                    </Button>
                    <Button variant="outline" size="sm" data-testid={`details-supplier-${supplier.id}`}>
                      {t('viewDetails')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "buyers" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterData(buyers).map((buyer) => (
              <Card key={buyer.id} className="border-sage/20 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-forest">{buyer.name}</CardTitle>
                  <p className="text-sage text-sm">{buyer.category}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {buyer.location} • {buyer.distance} km
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {buyer.rating}/5.0
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-forest">{t('price')}: </span>
                    {buyer.price}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-forest">{t('capacity')}: </span>
                    {buyer.capacity}
                  </div>
                  <div className="text-xs text-gray-500">
                    Requirements: {buyer.requirements.join(", ")}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1" data-testid={`connect-buyer-${buyer.id}`}>
                      <Truck className="h-4 w-4 mr-1" />
                      {t('connect')}
                    </Button>
                    <Button variant="outline" size="sm" data-testid={`details-buyer-${buyer.id}`}>
                      {t('viewDetails')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty state */}
        {(activeTab === "suppliers" ? filterData(suppliers) : filterData(buyers)).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No results found. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}