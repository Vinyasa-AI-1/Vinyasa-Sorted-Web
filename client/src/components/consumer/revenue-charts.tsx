import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { useQuery } from "@tanstack/react-query";
import type { translations } from "@/lib/translations";

interface RevenueChartsProps {
  t: (key: keyof typeof translations.en) => string;
}

export default function RevenueCharts({ t }: RevenueChartsProps) {
  const { data: wasteComparison } = useQuery({
    queryKey: ["/api/consumer/waste-comparison"],
  });

  const { data: wasteTrends } = useQuery({
    queryKey: ["/api/consumer/waste-trends"],
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Value Comparison Chart */}
      <Card className="bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-forest mb-4">{t('revenueComparison')}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wasteComparison?.datasets?.map((dataset: any, index: number) => ({
                name: dataset.label,
                ...wasteComparison.labels.reduce((acc: any, label: string, idx: number) => {
                  acc[label] = dataset.data[idx];
                  return acc;
                }, {})
              })) || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {wasteComparison?.labels?.map((label: string, index: number) => (
                  <Bar key={label} dataKey={label} fill={index === 0 ? "#22543D" : index === 1 ? "#68D391" : "#F6E05E"} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Volume Trends Chart */}
      <Card className="bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-forest mb-4">{t('volumeTrends')}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={wasteTrends?.labels?.map((label: string, index: number) => ({
                name: label,
                ...wasteTrends.datasets.reduce((acc: any, dataset: any) => {
                  acc[dataset.label] = dataset.data[index];
                  return acc;
                }, {})
              })) || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {wasteTrends?.datasets?.map((dataset: any) => (
                  <Line 
                    key={dataset.label} 
                    type="monotone" 
                    dataKey={dataset.label} 
                    stroke={dataset.borderColor} 
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}