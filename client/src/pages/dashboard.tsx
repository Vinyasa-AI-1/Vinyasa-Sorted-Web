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

export default function Dashboard() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  
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
      <header className="bg-forest text-white p-2 shadow-lg">
        <div className="container mx-auto">
          {/* Top row with logo, title, and user info */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-4">
              <img src={logoUrl} alt="Sorted Logo" className="h-24 w-24" />
              <h1 className="text-xl font-bold" data-testid="header-title">
                {t('title')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-sage" />
                <Select value={currentLanguage} onValueChange={(value) => changeLanguage(value as Language)}>
                  <SelectTrigger className="bg-transparent border-sage text-white w-32">
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
              <span className="text-sage" data-testid="farm-name">
                {t('farmName')}
              </span>
              <UserCircle className="text-2xl" />
            </div>
          </div>
          
          {/* Bottom row with navigation menu spread across full width */}
          <nav className="w-full">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-6 py-2 text-lg font-medium whitespace-nowrap"
                data-testid="nav-live-sorting"
              >
                {t('liveSorting')}
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-6 py-2 text-lg font-medium whitespace-nowrap"
                data-testid="nav-harvest-insights"
              >
                {t('harvestInsights')}
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-6 py-2 text-lg font-medium whitespace-nowrap"
                data-testid="nav-crop-recommendations"
              >
                {t('cropRecommendations')}
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-6 py-2 text-lg font-medium whitespace-nowrap"
                data-testid="nav-yield-optimization"
              >
                {t('yieldOptimization')}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        {/* Summary Cards */}
        {summary && <SummaryCards summary={summary} t={t} />}

        {/* Quality Distribution */}
        {varieties && <QualityDistribution varieties={varieties} t={t} />}

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-forest mb-4">{t('quickActions')}</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-sage text-white hover:bg-green-600" data-testid="button-view-produce">
              {t('viewAllProduce')}
            </Button>
            <Button className="bg-harvest text-forest hover:bg-yellow-400" data-testid="button-price-analysis">
              {t('priceAnalysis')}
            </Button>
            <Button className="bg-fresh text-white hover:bg-green-600" data-testid="button-market-trends">
              {t('marketTrends')}
            </Button>
          </div>
        </div>

        {/* Optimal Revenue Plan Tables */}
        {varieties && Array.isArray(varieties) && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-forest">{t('optimalRevenuePlan')}</h2>
            {varieties.map((variety) => (
              <OptimalRevenueTable key={variety.id} variety={variety} t={t} />
            ))}
          </div>
        )}

        {/* Market Information Cards */}
        {markets && Array.isArray(markets) && <MarketCards markets={markets} t={t} />}

        {/* Revenue and Volume Charts */}
        <RevenueCharts t={t} />

        {/* Overall Revenue Summary */}
        {overallSummary && 'totalOptimalRevenue' in overallSummary && (
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-forest">{t('overallSummary')}</h2>
                <div className="text-right">
                  <p className="text-3xl font-bold text-fresh" data-testid="text-total-revenue">
                    ₹{overallSummary.totalOptimalRevenue.toLocaleString()}
                  </p>
                  <p className="text-gray-600">{t('totalOptimalRevenue')}</p>
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
                    <p className="text-xs text-gray-500">{item.items} {t('items')}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-forest" data-testid="text-summary-stats">
                  {overallSummary.totalItems} {t('totalItems')} • ₹{overallSummary.avgRevenuePerItem} {t('avgRevenuePerItem')}
                </p>
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
