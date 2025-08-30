import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { useQuery } from "@tanstack/react-query";
import type { translations } from "@/lib/translations";

interface RevenueChartsProps {
  t: (key: keyof typeof translations.en) => string;
}

export default function RevenueCharts({ t }: RevenueChartsProps) {
  const { data: revenueComparison } = useQuery({
    queryKey: ["/api/consumer", { endpoint: "revenue-comparison" }],
    queryFn: () => fetch("/api/consumer?endpoint=revenue-comparison").then(res => res.json()),
  });

  const { data: volumeTrends } = useQuery({
    queryKey: ["/api/consumer", { endpoint: "volume-trends" }],
    queryFn: () => fetch("/api/consumer?endpoint=volume-trends").then(res => res.json()),
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Value Comparison Chart */}
      <Card className="bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-forest mb-4">{t('revenueComparison')}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueComparison || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, ""]} />
                <Bar dataKey="revenue" fill="#22543D" name={t('Revenue')} />
                <Bar dataKey="target" fill="#68D391" name={t('Target')} />
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
              <LineChart data={volumeTrends || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="volume" stroke="#22543D" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}