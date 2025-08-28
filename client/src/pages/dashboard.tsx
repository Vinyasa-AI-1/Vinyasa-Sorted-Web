import { useQuery } from "@tanstack/react-query";
import SummaryCards from "@/components/dashboard/summary-cards";
import QualityDistribution from "@/components/dashboard/quality-distribution";
import OptimalRevenueTable from "@/components/dashboard/optimal-revenue-table";
import MarketCards from "@/components/dashboard/market-cards";
import RevenueCharts from "@/components/dashboard/revenue-charts";
import ChatInterface from "@/components/dashboard/chat-interface";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logoUrl from "@assets/logo_1756410067559.png";

export default function Dashboard() {
  const { data: summary } = useQuery({
    queryKey: ["/api/summary"],
  });

  const { data: varieties } = useQuery({
    queryKey: ["/api/produce-varieties"],
  });

  const { data: markets } = useQuery({
    queryKey: ["/api/markets"],
  });

  const { data: overallSummary } = useQuery({
    queryKey: ["/api/overall-summary"],
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logoUrl} alt="Sorted Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-bold" data-testid="header-title">
              Sorted! Producer Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sage" data-testid="farm-name">
              Svavlamban Farms
            </span>
            <UserCircle className="text-2xl" />
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        {/* Summary Cards */}
        {summary && <SummaryCards summary={summary} />}

        {/* Quality Distribution */}
        {varieties && <QualityDistribution varieties={varieties} />}

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-forest mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-sage text-white hover:bg-green-600" data-testid="button-view-produce">
              View All Produce
            </Button>
            <Button className="bg-harvest text-forest hover:bg-yellow-400" data-testid="button-price-analysis">
              Price Analysis
            </Button>
            <Button className="bg-fresh text-white hover:bg-green-600" data-testid="button-market-trends">
              Market Trends
            </Button>
          </div>
        </div>

        {/* Optimal Revenue Plan Tables */}
        {varieties && Array.isArray(varieties) && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-forest">Optimal Revenue Plan by Variety</h2>
            {varieties.map((variety) => (
              <OptimalRevenueTable key={variety.id} variety={variety} />
            ))}
          </div>
        )}

        {/* Market Information Cards */}
        {markets && Array.isArray(markets) && <MarketCards markets={markets} />}

        {/* Revenue and Volume Charts */}
        <RevenueCharts />

        {/* Overall Revenue Summary */}
        {overallSummary && 'totalOptimalRevenue' in overallSummary && (
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-forest">Overall Optimal Revenue Summary</h2>
                <div className="text-right">
                  <p className="text-3xl font-bold text-fresh" data-testid="text-total-revenue">
                    ₹{overallSummary.totalOptimalRevenue.toLocaleString()}
                  </p>
                  <p className="text-gray-600">Total Optimal Revenue</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                {overallSummary.breakdown && overallSummary.breakdown.map((item: any) => (
                  <div 
                    key={item.category} 
                    className={`text-center p-4 rounded-lg ${
                      item.category === 'Export' ? 'bg-blue-50' :
                      item.category === 'Distant' ? 'bg-orange-50' :
                      item.category === 'Processing' ? 'bg-purple-50' :
                      item.category === 'Local' ? 'bg-green-50' : 'bg-red-50'
                    }`}
                  >
                    <p className={`text-2xl font-bold ${
                      item.category === 'Export' ? 'text-blue-600' :
                      item.category === 'Distant' ? 'text-orange-600' :
                      item.category === 'Processing' ? 'text-purple-600' :
                      item.category === 'Local' ? 'text-green-600' : 'text-red-600'
                    }`} data-testid={`text-revenue-${item.category.toLowerCase()}`}>
                      ₹{item.revenue.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.category} ({item.percentage}%)
                    </p>
                    <p className="text-xs text-gray-500">{item.items} items</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-forest" data-testid="text-summary-stats">
                  {overallSummary.totalItems} Total Items • ₹{overallSummary.avgRevenuePerItem} Avg Revenue per Item
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Chat Interface */}
      <ChatInterface />
    </div>
  );
}
