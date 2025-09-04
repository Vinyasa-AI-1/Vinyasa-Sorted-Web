import { useQuery } from "@tanstack/react-query";
import SummaryCards from "@/components/consumer/summary-cards";
import QualityDistribution from "@/components/consumer/quality-distribution";
import OptimalRevenueTable from "@/components/consumer/optimal-revenue-table";
import MarketCards from "@/components/consumer/market-cards";
import RevenueCharts from "@/components/consumer/revenue-charts";
import ChatInterface from "@/components/consumer/chat-interface";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logoUrl from "@assets/logo_1756410067559.png";
import { useLanguage } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";
import { Link } from "wouter";
import ExpandableMenu from "@/components/ui/expandable-menu";
import type { Summary, OverallSummary } from "@shared/schema";

export default function CustomerCentralDashboard() {
  const { currentLanguage } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const { data: summary } = useQuery<Summary>({
    queryKey: ["/api/consumer", { endpoint: "summary" }],
    queryFn: () => fetch("/api/consumer?endpoint=summary").then(res => res.json()),
  });

  const { data: binTypes } = useQuery<any[]>({
    queryKey: ["/api/consumer", { endpoint: "bin-types" }],
    queryFn: () => fetch("/api/consumer?endpoint=bin-types").then(res => res.json()),
  });

  const { data: recyclers } = useQuery<any[]>({
    queryKey: ["/api/consumer", { endpoint: "recyclers" }],
    queryFn: () => fetch("/api/consumer?endpoint=recyclers").then(res => res.json()),
  });

  const { data: overallSummary } = useQuery<any>({
    queryKey: ["/api/consumer", { endpoint: "overall-summary" }],
    queryFn: () => fetch("/api/consumer?endpoint=overall-summary").then(res => res.json()),
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest text-white py-0 px-2 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src={logoUrl} alt="Vinyasa-AI Logo" className="h-16 w-16" />
              <h1 className="text-xl font-bold" data-testid="header-title">
                Vinyasa-AI - {t('consumerTitle')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sage text-sm" data-testid="user-name">
                {t('consumerUserName')}
              </span>
              <UserCircle className="text-xl" />
              <ExpandableMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        {/* Summary Cards */}
        {summary && <SummaryCards summary={summary} t={t} formatNumber={formatNumber} />}

        {/* Quality Distribution */}
        {binTypes && <QualityDistribution varieties={binTypes} t={t} formatNumber={formatNumber} />}

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-forest mb-4">{t('quickActions')}</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-sage text-white hover:bg-green-600" data-testid="button-view-bins">
              {t('viewAllBins')}
            </Button>
            <Button className="bg-harvest text-forest hover:bg-yellow-400" data-testid="button-recycler-prices">
              {t('recyclerPrices')}
            </Button>
            <Button className="bg-fresh text-white hover:bg-green-600" data-testid="button-redeem-coins">
              {t('redeemVinyasaCoins')}
            </Button>
          </div>
        </div>

        {/* Optimal Revenue Plan Tables */}
        {binTypes && Array.isArray(binTypes) && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-forest">{t('optimalRecyclingPlan')}</h2>
            {binTypes.map((binType) => (
              <OptimalRevenueTable key={binType.id} variety={binType} t={t} formatNumber={formatNumber} recyclers={recyclers} />
            ))}
          </div>
        )}

        {/* Recyclers Marketplace */}
        {recyclers && Array.isArray(recyclers) && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-forest">{t('recyclersMarketplace')}</h2>
            <MarketCards markets={recyclers} t={t} />
          </div>
        )}

        {/* Revenue and Volume Charts */}
        <RevenueCharts t={t} />

        {/* Overall Revenue Summary with Vinyasa Coins */}
        {overallSummary && 'totalOptimalRevenue' in overallSummary && (
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-forest">{t('overallSummary')}</h2>
                <div className="text-right space-y-2">
                  <div>
                    <p className="text-3xl font-bold text-fresh" data-testid="text-total-revenue">
                      ₹{formatNumber(overallSummary.totalOptimalRevenue)}
                    </p>
                    <p className="text-gray-600">{t('totalOptimalRevenue')}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-harvest" data-testid="text-total-vinyasa-coins">
                      {formatNumber(Math.floor(overallSummary.totalOptimalRevenue / 10))} {t('vinyasaCoins')}
                    </p>
                    <p className="text-gray-600">{t('totalVinyasaCoins')}</p>
                  </div>
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
                      ₹{formatNumber(item.revenue)}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.category} ({item.percentage}%)
                    </p>
                    <p className="text-xs text-gray-500">{item.items} {t('items')}</p>
                    <p className="text-xs text-harvest font-semibold">
                      {formatNumber(Math.floor(item.revenue / 10))} {t('coins')}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-forest" data-testid="text-summary-stats">
                  {formatNumber(overallSummary.totalItems)} {t('totalItems')} • ₹{formatNumber(overallSummary.avgRevenuePerItem)} {t('avgRevenuePerItem')}
                </p>
                <Button className="mt-4 bg-harvest text-forest hover:bg-yellow-400" data-testid="button-redeem-coins-main">
                  {t('redeemVinyasaCoins')}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Chat Interface - now floating popup */}
      <ChatInterface t={t} currentLanguage={currentLanguage} />
    </div>
  );
}