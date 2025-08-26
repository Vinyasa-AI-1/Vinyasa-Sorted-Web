import { Box, Weight, Star, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Summary } from "@shared/schema";

interface SummaryCardsProps {
  summary: Summary;
}

export default function SummaryCards({ summary }: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="border-l-4 border-forest">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Sorted</p>
              <p className="text-3xl font-bold text-forest" data-testid="text-total-sorted">
                {summary.totalSorted}
              </p>
            </div>
            <Box className="text-sage text-3xl" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-sage">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Weight</p>
              <p className="text-3xl font-bold text-forest" data-testid="text-total-weight">
                {summary.totalWeight.toLocaleString()} kg
              </p>
            </div>
            <Weight className="text-sage text-3xl" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-harvest">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Avg Quality</p>
              <p className="text-3xl font-bold text-forest" data-testid="text-avg-quality">
                {summary.avgQuality}%
              </p>
            </div>
            <Star className="text-harvest text-3xl" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-fresh">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Revenue</p>
              <p className="text-3xl font-bold text-forest" data-testid="text-revenue">
                ₹{summary.revenue.toLocaleString()}
              </p>
            </div>
            <IndianRupee className="text-fresh text-3xl" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
