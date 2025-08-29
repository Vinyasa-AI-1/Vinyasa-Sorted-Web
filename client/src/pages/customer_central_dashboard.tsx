import { useQuery } from "@tanstack/react-query";
import SummaryCards from "@/components/dashboard/summary-cards";
import QualityDistribution from "@/components/dashboard/quality-distribution";
import OptimalRevenueTable from "@/components/dashboard/optimal-revenue-table";
import MarketCards from "@/components/dashboard/market-cards";
import RevenueCharts from "@/components/dashboard/revenue-charts";
import ChatInterface from "@/components/dashboard/chat-interface";
import { UserCircle, Globe, Coins, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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

export default function CustomerCentralDashboard() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t, formatNumber } = useTranslation(currentLanguage);
  
  const { data: summary } = useQuery({
    queryKey: ["/api/waste-summary"],
  });

  const { data: varieties } = useQuery({
    queryKey: ["/api/waste-varieties"],
  });

  const { data: recyclers } = useQuery({
    queryKey: ["/api/recyclers"],
  });

  const { data: overallSummary } = useQuery({
    queryKey: ["/api/waste-overall-summary"],
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
                Sorted! Consumer Central Ops Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-sage hover:text-white hover:bg-sage/20">
                  Producer Dashboard
                </Button>
              </Link>
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
                BKC-1 EcoCycler
              </span>
              <UserCircle className="text-lg" />
            </div>
          </div>
          
          {/* Bottom row with navigation menu spread across full width */}
          <nav className="w-full -mt-1 pb-0">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1">
              <Link to="/live-waste-sorting">
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
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-26"
                data-testid="nav-recycler-marketplace"
              >
                <div className="flex flex-col">
                  <span className="block text-sm leading-tight">Recyclers</span>
                  <span className="block text-sm leading-tight">Marketplace</span>
                </div>
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-waste-insights"
              >
                <div className="flex flex-col">
                  <span className="block text-sm leading-tight">Waste</span>
                  <span className="block text-sm leading-tight">Insights</span>
                </div>
              </Button>
              <Button 
                variant="ghost" 
                className="text-sage hover:text-white hover:bg-sage/20 px-3 py-0 text-sm font-medium text-center leading-tight min-w-0 w-20"
                data-testid="nav-smart-bins"
              >
                <div className="flex flex-col">
                  <span className="block text-sm leading-tight">Smart</span>
                  <span className="block text-sm leading-tight">Bins</span>
                </div>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        {/* Summary Cards with Vinyasa Coins */}
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{t('totalSorted')}</p>
                    <p className="text-2xl font-bold text-forest" data-testid="text-total-sorted">
                      {formatNumber(summary.totalSorted)}
                    </p>
                  </div>
                  <Recycle className="h-8 w-8 text-sage" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{t('weight')} (kg)</p>
                    <p className="text-2xl font-bold text-forest" data-testid="text-total-weight">
                      {formatNumber(summary.totalWeight)}
                    </p>
                  </div>
                  <div className="h-8 w-8 text-sage">⚖</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Quality</p>
                    <p className="text-2xl font-bold text-forest" data-testid="text-avg-quality">
                      {summary.avgQuality}%
                    </p>
                  </div>
                  <div className="h-8 w-8 text-sage">✓</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-fresh" data-testid="text-revenue">
                      ₹{formatNumber(summary.revenue)}
                    </p>
                  </div>
                  <div className="h-8 w-8 text-fresh">₹</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Vinyasa Coins</p>
                    <p className="text-2xl font-bold text-harvest" data-testid="text-vinyasa-coins">
                      {formatNumber(summary.totalVinyasaCoins)}
                    </p>
                  </div>
                  <Coins className="h-8 w-8 text-harvest" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quality Distribution for Waste */}
        {varieties && <QualityDistribution varieties={varieties} t={t} formatNumber={formatNumber} />}

        {/* Quick Actions for Consumer Dashboard */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-forest mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-sage text-white hover:bg-green-600" data-testid="button-view-waste">
              View All Waste Categories
            </Button>
            <Button className="bg-harvest text-forest hover:bg-yellow-400" data-testid="button-redeem-coins">
              <Coins className="w-4 h-4 mr-2" />
              Redeem Vinyasa Coins
            </Button>
            <Button className="bg-fresh text-white hover:bg-green-600" data-testid="button-find-recyclers">
              Find Nearby Recyclers
            </Button>
          </div>
        </div>

        {/* Optimal Revenue Plan Tables for Waste */}
        {varieties && Array.isArray(varieties) && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-forest">Optimal Revenue Plan by Waste Category</h2>
            {varieties.map((variety) => (
              <OptimalRevenueTable key={variety.id} variety={variety} t={t} formatNumber={formatNumber} />
            ))}
          </div>
        )}

        {/* Recyclers Marketplace */}
        {recyclers && Array.isArray(recyclers) && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-forest mb-6">Recyclers Marketplace</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recyclers.map((recycler) => (
                <Card key={recycler.id} className="border-sage/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-forest" data-testid={`recycler-name-${recycler.id}`}>
                        {recycler.name}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        recycler.paymentType === 'Vinyasa Coins' 
                          ? 'bg-harvest/20 text-harvest' 
                          : 'bg-fresh/20 text-fresh'
                      }`}>
                        {recycler.paymentType}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{recycler.category}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      📍 {recycler.location} • {recycler.distance}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      Capacity: {recycler.capacity}
                    </p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-forest mb-1">Accepts:</p>
                      <div className="flex flex-wrap gap-1">
                        {recycler.acceptedWasteTypes.map((type) => (
                          <span key={type} className="px-2 py-1 bg-sage/20 text-sage text-xs rounded">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-forest">
                      Price: {recycler.priceRange}
                    </p>
                    <Button className="w-full mt-3 bg-sage text-white hover:bg-green-600" size="sm">
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Revenue and Volume Charts */}
        <RevenueCharts t={t} />

        {/* Overall Revenue Summary with Vinyasa Coins */}
        {overallSummary && 'totalOptimalRevenue' in overallSummary && (
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-forest">Overall Waste Management Summary</h2>
                <div className="text-right space-y-2">
                  <div>
                    <p className="text-3xl font-bold text-fresh" data-testid="text-total-revenue">
                      ₹{formatNumber(overallSummary.totalOptimalRevenue)}
                    </p>
                    <p className="text-gray-600">Total Revenue</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-harvest" data-testid="text-total-coins">
                      {formatNumber(overallSummary.totalVinyasaCoins)}
                    </p>
                    <p className="text-gray-600">Vinyasa Coins</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                {overallSummary.breakdown && overallSummary.breakdown.map((item: any) => (
                  <div 
                    key={item.category} 
                    className={`text-center p-4 rounded-lg ${
                      item.category === 'Electronic' ? 'bg-blue-50' :
                      item.category === 'Medical' ? 'bg-red-50' :
                      item.category === 'Plastic' ? 'bg-orange-50' :
                      item.category === 'Dry' ? 'bg-green-50' : 'bg-purple-50'
                    }`}
                  >
                    <p className={`text-2xl font-bold ${
                      item.category === 'Electronic' ? 'text-blue-600' :
                      item.category === 'Medical' ? 'text-red-600' :
                      item.category === 'Plastic' ? 'text-orange-600' :
                      item.category === 'Dry' ? 'text-green-600' : 'text-purple-600'
                    }`} data-testid={`text-revenue-${item.category.toLowerCase()}`}>
                      ₹{formatNumber(item.revenue)}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.category} ({item.percentage}%)
                    </p>
                    <p className="text-xs text-gray-500">{item.items} items</p>
                    <p className={`text-sm font-medium mt-1 ${
                      item.category === 'Electronic' ? 'text-blue-600' :
                      item.category === 'Medical' ? 'text-red-600' :
                      item.category === 'Plastic' ? 'text-orange-600' :
                      item.category === 'Dry' ? 'text-green-600' : 'text-purple-600'
                    }`}>
                      {formatNumber(item.vinyasaCoins)} coins
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-forest" data-testid="text-summary-stats">
                  {formatNumber(overallSummary.totalItems)} items • ₹{formatNumber(overallSummary.avgRevenuePerItem)} avg/item
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