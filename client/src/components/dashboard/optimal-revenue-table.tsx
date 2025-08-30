import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ProduceVariety } from "@shared/schema";
import type { translations } from "@/lib/translations";

interface OptimalRevenueTableProps {
  variety: ProduceVariety;
  t: (key: keyof typeof translations.en) => string;
  formatNumber: (num: number) => string;
}

const getSaleCategoryColor = (category: string) => {
  switch (category) {
    case "Export":
      return "bg-blue-100 text-blue-800";
    case "Distant Market":
      return "bg-orange-100 text-orange-800";
    case "Processing Unit":
      return "bg-purple-100 text-purple-800";
    case "Local Market":
      return "bg-green-100 text-green-800";
    case "Biogas":
    case "Decompost":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function OptimalRevenueTable({ variety, t, formatNumber }: OptimalRevenueTableProps) {
  // Add null safety for variety
  if (!variety) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="bg-white rounded-xl shadow-lg">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-forest" data-testid={`text-variety-name-${variety?.id || 'unknown'}`}>
              {t((variety?.id || 'unknown') as keyof typeof translations.en) || variety?.name || 'Unknown'}
            </h3>
            <p className="text-gray-600" data-testid={`text-variety-details-${variety?.id || 'unknown'}`}>
              {variety?.variety || 'Unknown'} • {formatNumber(variety?.totalItems || 0)} items total
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-fresh" data-testid={`text-variety-revenue-${variety?.id || 'unknown'}`}>
              ₹{formatNumber(variety?.totalOptimalRevenue || 0)}
            </p>
            <p className="text-gray-600">{t('totalOptimalRevenue')}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-forest">{t('qualityCategory')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('items')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('weight')}</th>
                <th className="text-left p-3 font-semibold text-forest">Sale For</th>
                <th className="text-left p-3 font-semibold text-forest">Sale To</th>
                <th className="text-left p-3 font-semibold text-forest">{t('pricePerKg')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('total')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('changeBuyer')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('action')}</th>
              </tr>
            </thead>
            <tbody>
              {(variety?.optimalRevenuePlan || []).map((plan, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 font-medium" data-testid={`text-quality-${variety?.id || 'unknown'}-${index}`}>
                    {t((plan?.qualityCategory || 'unknown') as keyof typeof translations.en) || plan?.qualityCategory || 'N/A'}
                  </td>
                  <td className="p-3" data-testid={`text-items-${variety?.id || 'unknown'}-${index}`}>
                    {formatNumber(plan?.items || 0)}
                  </td>
                  <td className="p-3" data-testid={`text-weight-${variety?.id || 'unknown'}-${index}`}>
                    {formatNumber(plan?.weight || 0)}
                  </td>
                  <td className="p-3">
                    <span 
                      className={`px-2 py-1 rounded text-xs ${getSaleCategoryColor(plan?.recommendedSaleFor || 'unknown')}`}
                      data-testid={`text-sale-category-${variety?.id || 'unknown'}-${index}`}
                    >
                      {t((plan?.recommendedSaleFor || 'unknown') as keyof typeof translations.en) || plan?.recommendedSaleFor || 'N/A'}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="text-sm" data-testid={`text-buyer-${variety?.id || 'unknown'}-${index}`}>
                      <p className="font-medium">{t((plan?.recommendedBuyer?.name || 'unknown') as keyof typeof translations.en) || plan?.recommendedBuyer?.name || 'N/A'}</p>
                      <p className="text-gray-600">
                        {plan?.recommendedBuyer?.location || 'N/A'} • {plan?.recommendedBuyer?.distance || 'N/A'}
                      </p>
                    </div>
                  </td>
                  <td className="p-3 font-medium" data-testid={`text-price-${variety?.id || 'unknown'}-${index}`}>
                    ₹{formatNumber(plan?.pricePerKg || 0)}
                  </td>
                  <td className="p-3 font-bold text-fresh" data-testid={`text-total-${variety?.id || 'unknown'}-${index}`}>
                    ₹{formatNumber(plan?.total || 0)}
                  </td>
                  <td className="p-3">
                    <Select data-testid={`select-buyer-${variety?.id || 'unknown'}-${index}`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t((plan?.recommendedBuyer?.name || 'unknown') as keyof typeof translations.en) || plan?.recommendedBuyer?.name || 'N/A'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">{t((plan?.recommendedBuyer?.name || 'unknown') as keyof typeof translations.en) || plan?.recommendedBuyer?.name || 'N/A'}</SelectItem>
                        {plan?.alternativeBuyers?.map?.((buyer, buyerIndex) => (
                          <SelectItem key={buyerIndex} value={`alt-${buyerIndex}`}>
                            {t((buyer?.name || 'unknown') as keyof typeof translations.en) || buyer?.name || 'N/A'}
                          </SelectItem>
                        )) || []}
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="p-3">
                    <Button 
                      className="bg-sage text-white hover:bg-green-600 transition-colors"
                      data-testid={`button-sell-${variety.id}-${index}`}
                    >
                      {t('sellNow')}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
