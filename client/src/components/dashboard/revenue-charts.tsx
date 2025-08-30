import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import type { translations } from "@/lib/translations";

interface RevenueChartsProps {
  t: (key: keyof typeof translations.en) => string;
  revenueComparison?: any[];
  volumeTrends?: any[];
}

export default function RevenueCharts({ t, revenueComparison, volumeTrends }: RevenueChartsProps) {
  // Fetch producer-specific chart data
  const { data: fetchedRevenueData } = useQuery({
    queryKey: ["/api/producer", { endpoint: "revenue-comparison" }],
    queryFn: () => fetch("/api/producer?endpoint=revenue-comparison").then(res => res.json()),
  });

  const { data: fetchedVolumeData } = useQuery({
    queryKey: ["/api/producer", { endpoint: "volume-trends" }],
    queryFn: () => fetch("/api/producer?endpoint=volume-trends").then(res => res.json()),
  });

  // Use fetched data first, then props, then fallback data
  const revenueData = fetchedRevenueData || revenueComparison || [
    { month: "Jan", revenue: 45000, target: 50000 },
    { month: "Feb", revenue: 52000, target: 55000 },
    { month: "Mar", revenue: 48000, target: 52000 },
    { month: "Apr", revenue: 61000, target: 58000 },
    { month: "May", revenue: 55000, target: 60000 },
    { month: "Jun", revenue: 67000, target: 65000 }
  ];

  const volumeData = fetchedVolumeData || volumeTrends || [
    { month: "Jan", volume: 2800 },
    { month: "Feb", volume: 3200 },
    { month: "Mar", volume: 2950 },
    { month: "Apr", volume: 3600 },
    { month: "May", volume: 3400 },
    { month: "Jun", volume: 3850 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-forest mb-4">{t('revenueComparisonByVariety')}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
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

      <Card className="bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-forest mb-4">{t('volumeTrends')}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={volumeData}>
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
