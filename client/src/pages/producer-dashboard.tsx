import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Coins, 
  Camera, 
  BarChart,
  Package,
  Globe,
  Target,
  DollarSign,
  Calendar
} from 'lucide-react';
import { Link } from 'wouter';
import logoUrl from "@assets/logo_1756410067559.png";

export default function ProducerDashboard() {
  const { data: summary } = useQuery({
    queryKey: ["/api/summary"],
  });

  const { data: varieties } = useQuery({
    queryKey: ["/api/produce-varieties"],
  });

  const { data: markets } = useQuery({
    queryKey: ["/api/markets"],
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-yellow-600 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <img src={logoUrl} alt="Vinyasa-AI Logo" className="h-12 w-12 cursor-pointer" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold" data-testid="header-title">
                  Producer Dashboard
                </h1>
                <p className="text-green-100">Optimize your produce sales with AI insights</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="text-green-600 border-white hover:bg-white/10">
                  ← Back to Home
                </Button>
              </Link>
              <div className="text-right">
                <p className="text-sm text-green-100">Welcome, Producer</p>
                <p className="text-lg font-semibold">Green Valley Farm</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 py-4">
            <Button variant="ghost" className="text-green-600 font-medium">
              <BarChart className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Link href="/live-produce-sorting">
              <Button variant="ghost" className="hover:text-green-600">
                <Camera className="mr-2 h-4 w-4" />
                Live Sorting
              </Button>
            </Link>
            <Button variant="ghost" className="hover:text-green-600">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Marketplace
            </Button>
            <Button variant="ghost" className="hover:text-green-600">
              <Package className="mr-2 h-4 w-4" />
              Inventory
            </Button>
            <Button variant="ghost" className="hover:text-green-600">
              <DollarSign className="mr-2 h-4 w-4" />
              Earnings
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Harvest</p>
                  <p className="text-2xl font-bold text-gray-900">2,450 kg</p>
                  <p className="text-xs text-green-600">+12% from last week</p>
                </div>
                <Package className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">₹1,24,500</p>
                  <p className="text-xs text-green-600">+8% this month</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Vinyasa Coins</p>
                  <p className="text-2xl font-bold text-gray-900">2,850 VC</p>
                  <p className="text-xs text-yellow-600">Earned this week</p>
                </div>
                <Coins className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Quality Score</p>
                  <p className="text-2xl font-bold text-gray-900">94.2%</p>
                  <p className="text-xs text-blue-600">Premium grade</p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Produce Quality Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="mr-2 h-5 w-5 text-green-600" />
                  Produce Quality Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Premium</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 px-2 py-1 rounded text-sm font-semibold">45%</div>
                      <span className="text-gray-600">1,102 kg</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Ripe</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 px-2 py-1 rounded text-sm font-semibold">32%</div>
                      <span className="text-gray-600">784 kg</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">Yet to Ripe</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-yellow-100 px-2 py-1 rounded text-sm font-semibold">18%</div>
                      <span className="text-gray-600">441 kg</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Overripe</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-100 px-2 py-1 rounded text-sm font-semibold">4%</div>
                      <span className="text-gray-600">98 kg</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Rotten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 px-2 py-1 rounded text-sm font-semibold">1%</div>
                      <span className="text-gray-600">25 kg</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-blue-600" />
                  Market Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-green-700">Export Market</h4>
                        <p className="text-sm text-gray-600">Premium & Ripe grades</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Recommended</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">₹85/kg</span>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Connect Buyers
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-blue-700">Local Market</h4>
                        <p className="text-sm text-gray-600">All quality grades</p>
                      </div>
                      <Badge variant="outline">Available</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">₹65/kg</span>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-orange-700">Processing Unit</h4>
                        <p className="text-sm text-gray-600">Overripe grade</p>
                      </div>
                      <Badge variant="secondary">Bulk Orders</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">₹25/kg</span>
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/live-produce-sorting">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Camera className="mr-2 h-4 w-4" />
                    Start Live Sorting
                  </Button>
                </Link>
                <Button className="w-full" variant="outline">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Browse Marketplace
                </Button>
                <Button className="w-full" variant="outline">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Price Analytics
                </Button>
                <Button className="w-full" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Find Buyers
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="font-medium">Quality assessment completed</p>
                      <p className="text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShoppingCart className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="font-medium">New buyer inquiry received</p>
                      <p className="text-gray-500">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coins className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="font-medium">Earned 150 Vinyasa Coins</p>
                      <p className="text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="font-medium">Price alert: Tomatoes +15%</p>
                      <p className="text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Earnings Summary */}
            <Card>
              <CardHeader>
                <CardTitle>This Week's Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Produce Sales</span>
                    <span className="font-semibold">₹45,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quality Bonus</span>
                    <span className="font-semibold">₹3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vinyasa Coins</span>
                    <span className="font-semibold">850 VC</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Value</span>
                    <span className="text-green-600">₹48,700</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}