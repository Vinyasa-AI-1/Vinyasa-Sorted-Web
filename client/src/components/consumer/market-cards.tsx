import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Building } from "lucide-react";
import type { Market } from "@shared/schema";
import type { translations } from "@/lib/translations";

interface MarketCardsProps {
  markets: Market[];
  t: (key: keyof typeof translations.en) => string;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "local":
      return <MapPin className="text-green-600" size={20} />;
    case "distant":
      return <MapPin className="text-blue-600" size={20} />;
    case "export":
      return <Building className="text-purple-600" size={20} />;
    case "processing":
      return <Building className="text-orange-600" size={20} />;
    case "decompost":
      return <Building className="text-brown-600" size={20} />;
    default:
      return <Building className="text-gray-600" size={20} />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "local":
      return "bg-green-100 text-green-800";
    case "distant":
      return "bg-blue-100 text-blue-800";
    case "export":
      return "bg-purple-100 text-purple-800";
    case "processing":
      return "bg-orange-100 text-orange-800";
    case "decompost":
      return "bg-brown-100 text-brown-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function MarketCards({ markets, t }: MarketCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {markets.map((market) => (
        <Card key={market.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                {getCategoryIcon((market as any).type || 'local')}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor((market as any).type || 'local')}`}>
                  {(market as any).type || t('localMarkets')}
                </span>
              </div>
              {(market as any).rating && (
                <div className="flex items-center">
                  <Star className="text-yellow-500" size={16} />
                  <span className="text-sm font-medium ml-1">{(market as any).rating}</span>
                </div>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-forest mb-2" data-testid={`text-market-name-${market.id}`}>
              {t(market.name as keyof typeof translations.en) || market.name}
            </h3>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin size={14} className="mr-2" />
                <span>{t(market.location as keyof typeof translations.en) || market.location}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('distance')}:</span>
                <span className="font-medium">{market.distance?.toString?.()?.replace?.('km', '') || market.distance || '0'} {t('km' as keyof typeof translations.en) || 'km'}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('capacity')}:</span>
                <span className="font-medium">{((market as any).capacity || market.capacity).replace(/kg\/day|units\/day/g, (match: string) => t(match as keyof typeof translations.en) || match)}</span>
              </div>
              {(market as any).specializes && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {(market as any).specializes.map((item: string, index: number) => (
                    <span key={index} className="px-2 py-1 bg-sage text-white text-xs rounded">
                      {t(item as keyof typeof translations.en) || item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                  ))}
                </div>
              )}
              {(market as any).priceRange && (
                <div className="flex justify-between pt-2 border-t">
                  <span>{t('priceRange' as keyof typeof translations.en) || 'Price Range'}:</span>
                  <span className="font-medium text-fresh">{(market as any).priceRange}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}