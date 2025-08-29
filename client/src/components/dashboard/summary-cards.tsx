import { Box, Weight, Star, IndianRupee, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Summary } from "@shared/schema";
import type { translations } from "@/lib/translations";

interface SummaryCardsProps {
  summary: Summary;
  t: (key: keyof typeof translations.en) => string;
  formatNumber: (num: number) => string;
}

export default function SummaryCards({ summary, t, formatNumber }: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <Card className="border-l-4 border-forest">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">{t('totalSorted')}</p>
              <p className="text-3xl font-bold text-forest" data-testid="text-total-sorted">
                {formatNumber(summary.totalSorted)}
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
                {formatNumber(summary.totalWeight)} kg
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
                {formatNumber(summary.avgQuality)}%
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

      {summary.vinyasaCoins && (
        <Card className="border-l-4 border-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{t('vinyasaCoins')}</p>
                <p className="text-3xl font-bold text-forest" data-testid="text-vinyasa-coins">
                  {formatNumber(summary.vinyasaCoins)} VC
                </p>
              </div>
              <Coins className="text-orange-500 text-3xl" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
