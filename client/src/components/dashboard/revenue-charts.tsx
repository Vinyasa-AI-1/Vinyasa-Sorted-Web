import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export default function RevenueCharts() {
  const { data: revenueComparison } = useQuery({
    queryKey: ["/api/revenue-comparison"],
  });

  const { data: volumeTrends } = useQuery({
    queryKey: ["/api/volume-trends"],
  });

  const revenueData = revenueComparison && 'labels' in revenueComparison && 'datasets' in revenueComparison ? 
    revenueComparison.labels.map((label: string, index: number) => ({
      variety: label,
      today: revenueComparison.datasets[0].data[index],
      seasonAvg: revenueComparison.datasets[1].data[index],
      lastYear: revenueComparison.datasets[2].data[index],
    })) : [];

  const volumeData = volumeTrends && 'labels' in volumeTrends && 'datasets' in volumeTrends ? 
    volumeTrends.labels.map((label: string, index: number) => ({
      week: label,
      Alphonso: volumeTrends.datasets[0].data[index],
      Kesar: volumeTrends.datasets[1].data[index],
      Banana: volumeTrends.datasets[2].data[index],
      Bhindi: volumeTrends.datasets[3].data[index],
      Tomato: volumeTrends.datasets[4].data[index],
    })) : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-forest mb-4">Revenue Comparison by Variety</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="variety" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, ""]} />
                <Bar dataKey="today" fill="#22543D" name="Today" />
                <Bar dataKey="seasonAvg" fill="#68D391" name="Season Avg" />
                <Bar dataKey="lastYear" fill="#F6E05E" name="Last Year" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-forest mb-4">Volume Trends by Variety</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Alphonso" stroke="#22543D" strokeWidth={2} />
                <Line type="monotone" dataKey="Kesar" stroke="#68D391" strokeWidth={2} />
                <Line type="monotone" dataKey="Banana" stroke="#F6E05E" strokeWidth={2} />
                <Line type="monotone" dataKey="Bhindi" stroke="#9C4221" strokeWidth={2} />
                <Line type="monotone" dataKey="Tomato" stroke="#DC2626" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
