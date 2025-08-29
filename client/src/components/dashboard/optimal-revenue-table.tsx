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

const getDisposalCategoryColor = (category: string) => {
  switch (category) {
    case "Compost":
      return "bg-green-100 text-green-800";
    case "Plastic Recycling":
      return "bg-blue-100 text-blue-800";
    case "eWaste Recycling":
      return "bg-purple-100 text-purple-800";
    case "Medical Waste Recycling":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function OptimalRevenueTable({ variety, t, formatNumber }: OptimalRevenueTableProps) {
  return (
    <Card className="bg-white rounded-xl shadow-lg">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-forest" data-testid={`text-variety-name-${variety.id}`}>
              {t(variety.id as keyof typeof translations.en) || variety.name}
            </h3>
            <p className="text-gray-600" data-testid={`text-variety-details-${variety.id}`}>
              {variety.binType} • {formatNumber(variety.totalItems)} items total
            </p>
          </div>
          <div className="text-right">
            <div className="flex flex-col space-y-1">
              <div>
                <p className="text-2xl font-bold text-fresh" data-testid={`text-variety-revenue-${variety.id}`}>
                  ₹{formatNumber(variety.totalOptimalRevenue)}
                </p>
                <p className="text-gray-600 text-sm">{t('totalOptimalRevenue')}</p>
              </div>
              {variety.totalVinyasaCoins && (
                <div>
                  <p className="text-xl font-bold text-orange-500" data-testid={`text-variety-coins-${variety.id}`}>
                    {formatNumber(variety.totalVinyasaCoins)} VC
                  </p>
                  <p className="text-gray-600 text-sm">{t('totalVinyasaCoins')}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-forest">{t('wasteCategory')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('items')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('weight')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('recommendedDisposalTo')}</th>
                <th className="text-left p-3 font-semibold text-forest">Recycler</th>
                <th className="text-left p-3 font-semibold text-forest">{t('pricePerKg')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('total')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('changeBuyer')}</th>
                <th className="text-left p-3 font-semibold text-forest">{t('action')}</th>
              </tr>
            </thead>
            <tbody>
              {variety.optimalDisposalPlan.map((plan, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 font-medium" data-testid={`text-waste-${variety.id}-${index}`}>
                    {t(plan.wasteCategory as keyof typeof translations.en) || plan.wasteCategory}
                  </td>
                  <td className="p-3" data-testid={`text-items-${variety.id}-${index}`}>
                    {formatNumber(plan.items)}
                  </td>
                  <td className="p-3" data-testid={`text-weight-${variety.id}-${index}`}>
                    {formatNumber(plan.weight)}
                  </td>
                  <td className="p-3">
                    <span 
                      className={`px-2 py-1 rounded text-xs ${getDisposalCategoryColor(plan.recommendedDisposalTo)}`}
                      data-testid={`text-disposal-category-${variety.id}-${index}`}
                    >
                      {t(plan.recommendedDisposalTo as keyof typeof translations.en) || plan.recommendedDisposalTo}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="text-sm" data-testid={`text-recycler-${variety.id}-${index}`}>
                      <p className="font-medium">{t(plan.recommendedBuyer.name as keyof typeof translations.en) || plan.recommendedBuyer.name}</p>
                      <p className="text-gray-600">
                        {plan.recommendedBuyer.location} • {plan.recommendedBuyer.distance}
                      </p>
                    </div>
                  </td>
                  <td className="p-3 font-medium" data-testid={`text-price-${variety.id}-${index}`}>
                    {plan.currency === 'VC' ? `${formatNumber(plan.pricePerKg)} VC` : `₹${formatNumber(plan.pricePerKg)}`}
                  </td>
                  <td className="p-3 font-bold" data-testid={`text-total-${variety.id}-${index}`}>
                    <span className={plan.currency === 'VC' ? 'text-orange-500' : 'text-fresh'}>
                      {plan.currency === 'VC' ? `${formatNumber(plan.total)} VC` : `₹${formatNumber(plan.total)}`}
                    </span>
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
                      {t('disposeNow')}
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
