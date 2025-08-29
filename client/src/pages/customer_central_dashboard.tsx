import { useQuery } from "@tanstack/react-query";
import SummaryCards from "@/components/dashboard/summary-cards";
import QualityDistribution from "@/components/dashboard/quality-distribution";
import OptimalRevenueTable from "@/components/dashboard/optimal-revenue-table";
import MarketCards from "@/components/dashboard/market-cards";
import RevenueCharts from "@/components/dashboard/revenue-charts";
import ChatInterface from "@/components/dashboard/chat-interface";
import { UserCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logoUrl from "@assets/logo_1756410067559.png";
import { useLanguage, type Language } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";
import { Link } from "wouter";

export default function CustomerCentralDashboard() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const { data: summary } = useQuery({
    queryKey: ["/api/consumer/summary"],
  });

  const { data: binTypes } = useQuery({
    queryKey: ["/api/consumer/bin-types"],
  });

  const { data: recyclers } = useQuery({
    queryKey: ["/api/consumer/recyclers"],
  });

  const { data: overallSummary } = useQuery({
    queryKey: ["/api/consumer/overall-summary"],
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest text-white py-0 px-2 shadow-lg">
        <div className="container mx-auto">
          {/* Top row with logo, title, and user info */}
          <div className="flex justify-between items-center -mb-2">
            <div className="flex items-center space-x-2">
              <img src={logoUrl} alt="Sorted Logo" className="h-28 w-28" />
              <h1 className="text-base font-bold" data-testid="header-title">
                {t('consumerTitle')}
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Globe className="h-3 w-3 text-sage" />
                <Select value={currentLanguage} onValueChange={(value) => changeLanguage(value as Language)}>
                  <SelectTrigger className="bg-transparent border-sage text-white w-24 h-7 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(languages).map(([code, name]) => (
                      <SelectItem key={code} value={code}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sage text-xs" data-testid="user-name">
                {t('consumerUserName')}
              </span>
              <UserCircle className="text-lg" />
            </div>
          </div>
          
          {/* Bottom row with navigation menu spread across full width */}
          <nav className="w-full -mt-1 pb-0">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                  data-testid="nav-producer-dashboard"
                >
                  <div className="flex flex-col">
                    <span className="block text-sm leading-tight">Producer</span>
                    <span className="block text-sm leading-tight">Dashboard</span>
                  </div>
                </Button>
              </Link>
              <Link href="/live-waste-sorting">
                <Button 
                  variant="ghost" 
                  className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                  data-testid="nav-live-waste-sorting"
                >
                  <div className="flex flex-col">
                    {t('liveWasteSorting').split(' ').map((word, index) => (
                      <span key={index} className="block text-sm leading-tight">{word}</span>
                    ))}
                  </div>
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-bin-insights"
              >
                <div className="flex flex-col">
                  {t('binInsights').split(' ').map((word, index) => (
                    <span key={index} className="block text-sm leading-tight">{word}</span>
                  ))}
                </div>
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-recycling-tips"
              >
                <div className="flex flex-col">
                  {t('recyclingTips').split(' ').map((word, index) => (
                    <span key={index} className="block text-sm leading-tight">{word}</span>
                  ))}
                </div>
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-eco-rewards"
              >
                <div className="flex flex-col">
                  {t('ecoRewards').split(' ').map((word, index) => (
                    <span key={index} className="block text-sm leading-tight">{word}</span>
                  ))}
                </div>
              </Button>
            </div>
          </nav>
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
              <OptimalRevenueTable key={binType.id} variety={binType} t={t} formatNumber={formatNumber} />
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

      {/* Chat Interface */}
      <ChatInterface t={t} currentLanguage={currentLanguage} />
    </div>
  );
}