import { useState } from "react";
import { Search, MapPin, Star, Recycle, Truck, Filter } from "lucide-react";
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

interface Recycler {
  id: string;
  name: string;
  category: string;
  location: string;
  distance: number;
  rating: number;
  price: string;
  capacity: string;
  wasteTypes: string[];
  certifications: string[];
  verified: boolean;
}

export default function RecyclersMarketplace() {
  const { currentLanguage } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const recyclers: Recycler[] = [
    {
      id: "1",
      name: "Green Earth Compost",
      category: "Organic Waste",
      location: "Andheri West",
      distance: 5,
      rating: 4.8,
      price: "₹2-8/kg",
      capacity: "500 kg/day",
      wasteTypes: ["Wet Waste", "Garden Waste", "Food Scraps"],
      certifications: ["ISO 14001", "CPCB Approved"],
      verified: true
    },
    {
      id: "2",
      name: "Plastic Recyclers Ltd",
      category: "Plastic Processing",
      location: "Malad",
      distance: 8,
      rating: 4.6,
      price: "₹12-25/kg", 
      capacity: "2 tons/day",
      wasteTypes: ["PET Bottles", "HDPE", "Packaging Plastic"],
      certifications: ["BIS Standard", "Pollution Control Board"],
      verified: true
    },
    {
      id: "3",
      name: "TechCycle Solutions",
      category: "E-Waste",
      location: "BKC",
      distance: 12,
      rating: 4.9,
      price: "₹50-200/kg",
      capacity: "1 ton/day",
      wasteTypes: ["Computers", "Mobile Phones", "Appliances"],
      certifications: ["E-Waste License", "Data Destruction Certificate"],
      verified: true
    },
    {
      id: "4",
      name: "EcoWaste Management",
      category: "Mixed Waste",
      location: "Turbhe",
      distance: 15,
      rating: 4.5,
      price: "₹5-15/kg",
      capacity: "10 tons/day",
      wasteTypes: ["Dry Waste", "Metal", "Paper", "Cardboard"],
      certifications: ["Municipal License", "Environmental Clearance"],
      verified: false
    },
    {
      id: "5", 
      name: "BioMedical Waste Solutions",
      category: "Medical Waste",
      location: "Powai",
      distance: 18,
      rating: 4.7,
      price: "₹25-80/kg",
      capacity: "200 kg/day", 
      wasteTypes: ["Syringes", "Medicines", "Contaminated Materials"],
      certifications: ["Biomedical Waste License", "Hospital Approved"],
      verified: true
    },
    {
      id: "6",
      name: "Mumbai Recycling Hub", 
      category: "Multi-Category",
      location: "Ghatkopar",
      distance: 22,
      rating: 4.4,
      price: "₹3-30/kg",
      capacity: "5 tons/day",
      wasteTypes: ["All Categories", "Sorting Services", "Bulk Processing"],
      certifications: ["Multi-Waste License", "Quality Assurance"],
      verified: true
    }
  ];
  
  const filterRecyclers = () => {
    return recyclers.filter(recycler => {
      const matchesSearch = searchTerm === "" || 
        recycler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recycler.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recycler.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recycler.wasteTypes.some(type => type.toLowerCase().includes(searchTerm.toLowerCase()));
        
      const matchesCategory = selectedCategory === "all" || 
        recycler.category.toLowerCase().includes(selectedCategory.toLowerCase());
        
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
                Vinyasa-AI - {t('recyclersMarketplace')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
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
        {/* Search and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
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
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-48" data-testid="category-filter">
              <SelectValue placeholder={t('category')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="organic">Organic Waste</SelectItem>
              <SelectItem value="plastic">Plastic Processing</SelectItem>
              <SelectItem value="e-waste">E-Waste</SelectItem>
              <SelectItem value="mixed">Mixed Waste</SelectItem>
              <SelectItem value="medical">Medical Waste</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filterRecyclers().length} recyclers • {searchTerm && `Results for "${searchTerm}"`}
          </p>
        </div>

        {/* Recyclers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterRecyclers().map((recycler) => (
            <Card key={recycler.id} className="border-sage/20 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-forest">{recycler.name}</CardTitle>
                  {recycler.verified && (
                    <Badge variant="secondary" className="bg-forest/10 text-forest">
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-sage">
                    {recycler.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {recycler.location} • {recycler.distance} km
                </div>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  {recycler.rating}/5.0
                </div>
                <div className="text-sm">
                  <span className="font-medium text-forest">{t('price')}: </span>
                  {recycler.price}
                </div>
                <div className="text-sm">
                  <span className="font-medium text-forest">{t('capacity')}: </span>
                  {recycler.capacity}
                </div>
                <div className="text-xs text-gray-500">
                  <div className="mb-1">
                    <span className="font-medium">Accepts: </span>
                    {recycler.wasteTypes.join(", ")}
                  </div>
                  <div>
                    <span className="font-medium">Certifications: </span>
                    {recycler.certifications.join(", ")}
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1" data-testid={`connect-recycler-${recycler.id}`}>
                    <Recycle className="h-4 w-4 mr-1" />
                    {t('connect')}
                  </Button>
                  <Button variant="outline" size="sm" data-testid={`details-recycler-${recycler.id}`}>
                    {t('viewDetails')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filterRecyclers().length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">No recyclers found. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}