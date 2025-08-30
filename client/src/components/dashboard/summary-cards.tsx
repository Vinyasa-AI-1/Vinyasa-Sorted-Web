import { Box, Weight, Star, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Summary } from "@shared/schema";
import type { translations } from "@/lib/translations";

interface SummaryCardsProps {
  summary: Summary;
  t: (key: keyof typeof translations.en) => string;
  formatNumber: (num: number) => string;
}

export default function SummaryCards({ summary, t, formatNumber }: SummaryCardsProps) {
  // Add null safety for summary
  if (!summary) {
    return <div>Loading summary...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="border-l-4 border-forest">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">{t('totalSorted')}</p>
              <p className="text-3xl font-bold text-forest" data-testid="text-total-sorted">
                {formatNumber(summary?.totalSorted || 0)}
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
              <p className="text-gray-600 text-sm font-medium">{t('totalWeight')}</p>
              <p className="text-3xl font-bold text-forest" data-testid="text-total-weight">
                {formatNumber(summary?.totalWeight || 0)} kg
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
              <p className="text-gray-600 text-sm font-medium">{t('avgQuality')}</p>
              <p className="text-3xl font-bold text-forest" data-testid="text-avg-quality">
                {formatNumber(summary?.avgQuality || 0)}%
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
              <p className="text-gray-600 text-sm font-medium">{t('revenue')}</p>
              <p className="text-3xl font-bold text-forest" data-testid="text-revenue">
                ₹{formatNumber(summary.revenue)}
              </p>
            </div>
            <IndianRupee className="text-fresh text-3xl" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
