import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import type { ProduceVariety } from "@shared/schema";
import type { translations } from "@/lib/translations";

interface QualityDistributionProps {
  varieties: ProduceVariety[];
  t: (key: keyof typeof translations.en) => string;
}

const COLORS = {
  Premium: "#22543D", // Forest green
  Ripe: "#68D391", // Sage green
  YetToRipe: "#F6E05E", // Harvest yellow
  Overripe: "#9C4221", // Earth brown
  Rotten: "#DC2626", // Red
};

export default function QualityDistribution({ varieties, t }: QualityDistributionProps) {
  const createChartData = (distribution: Record<string, number>) => {
    return Object.entries(distribution).map(([name, value]) => ({
      name,
      value,
      color: COLORS[name as keyof typeof COLORS],
    }));
  };

  return (
    <Card className="bg-white rounded-xl shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-forest mb-6">{t('qualityDistribution')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {varieties.map((variety) => (
            <div key={variety.id} className="text-center">
              <h3 className="font-semibold text-lg text-forest mb-4" data-testid={`text-variety-${variety.id}`}>
                {variety.name}
              </h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={createChartData(variety.qualityDistribution)}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      innerRadius={30}
                    >
                      {createChartData(variety.qualityDistribution).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600" data-testid={`text-total-items-${variety.id}`}>
                {variety.totalItems} {t('itemsTotal')}
              </p>
              <div className="mt-4 space-y-2">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(variety.qualityDistribution).map(([quality, count]) => (
                    <div key={quality} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-1"
                          style={{ backgroundColor: COLORS[quality as keyof typeof COLORS] }}
                        />
                        <span>{quality}</span>
                      </div>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
