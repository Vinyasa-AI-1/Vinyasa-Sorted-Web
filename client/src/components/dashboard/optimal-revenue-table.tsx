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

interface OptimalRevenueTableProps {
  variety: ProduceVariety;
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

export default function OptimalRevenueTable({ variety }: OptimalRevenueTableProps) {
  return (
    <Card className="bg-white rounded-xl shadow-lg">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-forest" data-testid={`text-variety-name-${variety.id}`}>
              {variety.name}
            </h3>
            <p className="text-gray-600" data-testid={`text-variety-details-${variety.id}`}>
              {variety.variety} • {variety.totalItems} items total
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-fresh" data-testid={`text-variety-revenue-${variety.id}`}>
              ₹{variety.totalOptimalRevenue.toLocaleString()}
            </p>
            <p className="text-gray-600">Total Optimal Revenue</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-forest">Quality Category</th>
                <th className="text-left p-3 font-semibold text-forest">Items</th>
                <th className="text-left p-3 font-semibold text-forest">Weight (kg)</th>
                <th className="text-left p-3 font-semibold text-forest">Recommended Sale For</th>
                <th className="text-left p-3 font-semibold text-forest">Recommended Sale To</th>
                <th className="text-left p-3 font-semibold text-forest">Price/kg</th>
                <th className="text-left p-3 font-semibold text-forest">Total</th>
                <th className="text-left p-3 font-semibold text-forest">Change Buyer</th>
                <th className="text-left p-3 font-semibold text-forest">Action</th>
              </tr>
            </thead>
            <tbody>
              {variety.optimalRevenuePlan.map((plan, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 font-medium" data-testid={`text-quality-${variety.id}-${index}`}>
                    {plan.qualityCategory}
                  </td>
                  <td className="p-3" data-testid={`text-items-${variety.id}-${index}`}>
                    {plan.items}
                  </td>
                  <td className="p-3" data-testid={`text-weight-${variety.id}-${index}`}>
                    {plan.weight}
                  </td>
                  <td className="p-3">
                    <span 
                      className={`px-2 py-1 rounded text-xs ${getSaleCategoryColor(plan.recommendedSaleFor)}`}
                      data-testid={`text-sale-category-${variety.id}-${index}`}
                    >
                      {plan.recommendedSaleFor}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="text-sm" data-testid={`text-buyer-${variety.id}-${index}`}>
                      <p className="font-medium">{plan.recommendedBuyer.name}</p>
                      <p className="text-gray-600">
                        {plan.recommendedBuyer.location} • {plan.recommendedBuyer.distance}
                      </p>
                    </div>
                  </td>
                  <td className="p-3 font-medium" data-testid={`text-price-${variety.id}-${index}`}>
                    ₹{plan.pricePerKg}
                  </td>
                  <td className="p-3 font-bold text-fresh" data-testid={`text-total-${variety.id}-${index}`}>
                    ₹{plan.total.toLocaleString()}
                  </td>
                  <td className="p-3">
                    <Select data-testid={`select-buyer-${variety.id}-${index}`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={plan.recommendedBuyer.name} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">{plan.recommendedBuyer.name}</SelectItem>
                        {plan.alternativeBuyers.map((buyer, buyerIndex) => (
                          <SelectItem key={buyerIndex} value={`alt-${buyerIndex}`}>
                            {buyer.name}
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
                      Sell Now
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
