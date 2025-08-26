import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Ship, Factory } from "lucide-react";
import type { Market } from "@shared/schema";

interface MarketCardsProps {
  markets: Market[];
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "export":
      return <Ship className="text-blue-500 mr-2" />;
    case "processing":
      return <Factory className="text-purple-500 mr-2" />;
    default:
      return <MapPin className="text-sage mr-2" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "export":
      return "border-blue-500";
    case "processing":
      return "border-purple-500";
    default:
      return "border-sage";
  }
};

const getCategoryTitle = (category: string) => {
  switch (category) {
    case "local":
      return "Local Markets";
    case "distant":
      return "Distant Markets";
    case "export":
      return "Export Markets";
    case "processing":
      return "Processing Units";
    case "decompost":
      return "Decompost Markets";
    default:
      return "Markets";
  }
};

export default function MarketCards({ markets }: MarketCardsProps) {
  const marketsByCategory = markets.reduce((acc, market) => {
    if (!acc[market.category]) {
      acc[market.category] = [];
    }
    acc[market.category].push(market);
    return acc;
  }, {} as Record<string, Market[]>);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-forest">Market Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(marketsByCategory).slice(0, 3).map(([category, categoryMarkets]) => (
          <Card key={category} className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-forest mb-4 flex items-center" data-testid={`text-category-${category}`}>
                {getCategoryIcon(category)}
                {getCategoryTitle(category)}
              </h3>
              <div className="space-y-4">
                {categoryMarkets.slice(0, 2).map((market) => (
                  <div key={market.id} className={`border-l-4 ${getCategoryColor(category)} pl-4`}>
                    <h4 className="font-semibold" data-testid={`text-market-name-${market.id}`}>
                      {market.name}
                    </h4>
                    <p className="text-sm text-gray-600" data-testid={`text-market-location-${market.id}`}>
                      {market.location}
                    </p>
                    <p className="text-sm" data-testid={`text-market-details-${market.id}`}>
                      Distance: {market.distance} • Capacity: {market.capacity}
                    </p>
                    <Button 
                      className={`mt-2 text-white px-3 py-1 rounded text-sm ${
                        category === "export" ? "bg-blue-500 hover:bg-blue-600" :
                        category === "processing" ? "bg-purple-500 hover:bg-purple-600" :
                        "bg-sage hover:bg-green-600"
                      }`}
                      data-testid={`button-sell-${market.id}`}
                    >
                      Sell
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
