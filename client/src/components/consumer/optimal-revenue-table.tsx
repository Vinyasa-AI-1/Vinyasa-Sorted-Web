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
  // Calculate totals for value unlocked and Vinyasa Coins
  const totalValueUnlocked = variety.optimalRevenuePlan
    .filter(plan => !(plan as any).isVinyasaCoins)
    .reduce((sum, plan) => sum + plan.total, 0);
  
  const totalVinyasaCoins = variety.optimalRevenuePlan
    .filter(plan => (plan as any).isVinyasaCoins)
    .reduce((sum, plan) => sum + plan.total, 0);

  return (
    <Card className="bg-white rounded-xl shadow-lg">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-forest" data-testid={`text-variety-name-${variety.id}`}>
              {t(variety.id as keyof typeof translations.en) || variety.name}
            </h3>
            <p className="text-gray-600" data-testid={`text-variety-details-${variety.id}`}>
              {variety.variety} • {formatNumber(variety.totalItems)} items total
            </p>
          </div>
          <div className="text-right space-y-2">
            <div>
              <p className="text-2xl font-bold text-fresh" data-testid={`text-variety-value-unlocked-${variety.id}`}>
                ₹{formatNumber(totalValueUnlocked)}
              </p>
              <p className="text-gray-600">{t('valueUnlocked')}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-harvest" data-testid={`text-variety-vinyasa-coins-${variety.id}`}>
                {formatNumber(totalVinyasaCoins)} {t('coins')}
              </p>
              <p className="text-gray-600">{t('rewardsEarned')}</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-forest">{t('qualityCategory')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('items')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('weight')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('recommendedSaleFor')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('recommendedSaleTo')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('pricePerKg')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('total')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('changeBuyer')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('action')}</th>
              </tr>
            </thead>
            <tbody>
              {variety.optimalRevenuePlan.map((plan, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 font-medium" data-testid={`text-quality-${variety.id}-${index}`}>
                    {t(plan.qualityCategory as keyof typeof translations.en) || plan.qualityCategory}
                  </td>
                  <td className="p-3" data-testid={`text-items-${variety.id}-${index}`}>
                    {formatNumber(plan.items)}
                  </td>
                  <td className="p-3" data-testid={`text-weight-${variety.id}-${index}`}>
                    {formatNumber(plan.weight)}
                  </td>
                  <td className="p-3">
                    <span 
                      className={`px-2 py-1 rounded text-xs ${getSaleCategoryColor(plan.recommendedSaleFor)}`}
                      data-testid={`text-sale-category-${variety.id}-${index}`}
                    >
                      {t(plan.recommendedSaleFor as keyof typeof translations.en) || plan.recommendedSaleFor}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="text-sm" data-testid={`text-buyer-${variety.id}-${index}`}>
                      <p className="font-medium">{t(plan.recommendedBuyer.name as keyof typeof translations.en) || plan.recommendedBuyer.name}</p>
                      <p className="text-gray-600">
                        {plan.recommendedBuyer.location} • {plan.recommendedBuyer.distance}
                      </p>
                    </div>
                  </td>
                  <td className="p-3 font-medium" data-testid={`text-price-${variety.id}-${index}`}>
                    {(plan as any).isVinyasaCoins ? (
                      <span className="text-harvest">{formatNumber(plan.pricePerKg)} {t('coins')}</span>
                    ) : (
                      <span className="text-fresh">₹{formatNumber(plan.pricePerKg)}/kg</span>
                    )}
                  </td>
                  <td className="p-3 font-bold text-lg" data-testid={`text-total-${variety.id}-${index}`}>
                    {(plan as any).isVinyasaCoins ? (
                      <span className="text-harvest">{formatNumber(plan.total)} {t('coins')}</span>
                    ) : (
                      <span className="text-fresh">₹{formatNumber(plan.total)}</span>
                    )}
                  </td>
                  <td className="p-3">
                    <Select data-testid={`select-buyer-${variety.id}-${index}`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t(plan.recommendedBuyer.name as keyof typeof translations.en) || plan.recommendedBuyer.name} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">{t(plan.recommendedBuyer.name as keyof typeof translations.en) || plan.recommendedBuyer.name}</SelectItem>
                        {plan.alternativeBuyers.map((buyer, buyerIndex) => (
                          <SelectItem key={buyerIndex} value={`alt-${buyerIndex}`}>
                            {t(buyer.name as keyof typeof translations.en) || buyer.name}
                          </SelectItem>
                        ))}
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