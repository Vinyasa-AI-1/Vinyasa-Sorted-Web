import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
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

  // Fallback data for consumer charts
  const fallbackRevenueData = [
    { month: "Jan", revenue: 12000, target: 15000 },
    { month: "Feb", revenue: 18000, target: 20000 },
    { month: "Mar", revenue: 16000, target: 18000 },
    { month: "Apr", revenue: 22000, target: 25000 },
    { month: "May", revenue: 19000, target: 22000 },
    { month: "Jun", revenue: 25000, target: 28000 }
  ];

  const fallbackVolumeData = [
    { month: "Jan", volume: 1200 },
    { month: "Feb", volume: 1800 },
    { month: "Mar", volume: 1600 },
    { month: "Apr", volume: 2200 },
    { month: "May", volume: 1900 },
    { month: "Jun", volume: 2500 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Value Comparison Chart */}
      <Card className="bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-forest mb-4">{t('revenueComparison')}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueComparison || fallbackRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, ""]} />
                <Legend />
                <Bar dataKey="revenue" fill="#22543D" name="Revenue" />
                <Bar dataKey="target" fill="#68D391" name="Target" />
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
              <LineChart data={volumeTrends || fallbackVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="volume" stroke="#22543D" strokeWidth={2} name="Volume (kg)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}