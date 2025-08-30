export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { endpoint } = req.query;

  // Producer dashboard summary data
  const summaryData = {
    totalSorted: 1910,
    totalWeight: 3670, // in kg
    avgQuality: 88,
    revenue: 245680 // in rupees
  };

  // Producer produce varieties data
  const produceVarieties = [
    {
      id: "alphonso-mango",
      name: "Alphonso Mango",
      variety: "Premium Fruit",
      totalItems: 950,
      totalOptimalRevenue: 89250,
      qualityDistribution: {
        Premium: 450,
        Ripe: 280,
        YetToRipe: 120,
        Overripe: 80,
        Rotten: 20
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Premium",
          items: 450,
          weight: 450,
          recommendedSaleFor: "Export",
          recommendedBuyer: {
            name: "Premium Export Co.",
            location: "Mumbai Port",
            distance: "25 km"
          },
          pricePerKg: 220,
          total: 99000,
          alternativeBuyers: [
            { name: "Elite Fruits Ltd.", location: "Delhi", distance: "1200 km" },
            { name: "Luxury Market", location: "Pune", distance: "150 km" }
          ]
        },
        {
          qualityCategory: "Ripe",
          items: 280,
          weight: 280,
          recommendedSaleFor: "Local Market",
          recommendedBuyer: {
            name: "City Market",
            location: "Local",
            distance: "5 km"
          },
          pricePerKg: 180,
          total: 50400,
          alternativeBuyers: [
            { name: "Wholesale Market", location: "Nearby", distance: "8 km" }
          ]
        }
      ]
    },
    {
      id: "kesar-mango",
      name: "Kesar Mango",
      variety: "Premium Fruit", 
      totalItems: 700,
      totalOptimalRevenue: 67200,
      qualityDistribution: {
        Premium: 320,
        Ripe: 220,
        YetToRipe: 90,
        Overripe: 60,
        Rotten: 10
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Premium",
          items: 320,
          weight: 320,
          recommendedSaleFor: "Export",
          recommendedBuyer: {
            name: "Premium Export Co.",
            location: "Mumbai Port",
            distance: "25 km"
          },
          pricePerKg: 200,
          total: 64000,
          alternativeBuyers: [
            { name: "Elite Fruits Ltd.", location: "Delhi", distance: "1200 km" }
          ]
        }
      ]
    },
    {
      id: "robust-tomato",
      name: "Robust Tomato",
      variety: "Vegetable",
      totalItems: 770,
      totalOptimalRevenue: 42800,
      qualityDistribution: {
        Premium: 290,
        Ripe: 200,
        YetToRipe: 150,
        Overripe: 100,
        Rotten: 30
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Premium",
          items: 290,
          weight: 290,
          recommendedSaleFor: "Distant Market",
          recommendedBuyer: {
            name: "Metro Wholesale",
            location: "Chennai",
            distance: "350 km"
          },
          pricePerKg: 55,
          total: 15950,
          alternativeBuyers: [
            { name: "Fresh Market", location: "Local", distance: "10 km" }
          ]
        }
      ]
    },
    {
      id: "cherry-tomato", 
      name: "Cherry Tomato",
      variety: "Specialty Vegetable",
      totalItems: 475,
      totalOptimalRevenue: 32150,
      qualityDistribution: {
        Premium: 180,
        Ripe: 140,
        YetToRipe: 90,
        Overripe: 50,
        Rotten: 15
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Premium",
          items: 180,
          weight: 180,
          recommendedSaleFor: "Export",
          recommendedBuyer: {
            name: "Specialty Foods Ltd.",
            location: "Bangalore",
            distance: "280 km"
          },
          pricePerKg: 95,
          total: 17100,
          alternativeBuyers: [
            { name: "Gourmet Market", location: "Local", distance: "12 km" }
          ]
        }
      ]
    },
    {
      id: "bell-pepper",
      name: "Bell Pepper",
      variety: "Vegetable",
      totalItems: 400,
      totalOptimalRevenue: 28724,
      qualityDistribution: {
        Premium: 160,
        Ripe: 120,
        YetToRipe: 70,
        Overripe: 40,
        Rotten: 10
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Premium",
          items: 160,
          weight: 160,
          recommendedSaleFor: "Distant Market",
          recommendedBuyer: {
            name: "Fresh Vegetable Co.",
            location: "Hyderabad",
            distance: "450 km"
          },
          pricePerKg: 85,
          total: 13600,
          alternativeBuyers: [
            { name: "Local Wholesaler", location: "Nearby", distance: "15 km" }
          ]
        }
      ]
    }
  ];

  // Revenue comparison data
  const revenueComparison = [
    { month: "Jan", revenue: 45000, target: 50000 },
    { month: "Feb", revenue: 52000, target: 55000 },
    { month: "Mar", revenue: 48000, target: 52000 },
    { month: "Apr", revenue: 61000, target: 58000 },
    { month: "May", revenue: 55000, target: 60000 },
    { month: "Jun", revenue: 67000, target: 65000 }
  ];

  // Volume trends data
  const volumeTrends = [
    { month: "Jan", volume: 2800, trend: "up" },
    { month: "Feb", volume: 3200, trend: "up" },
    { month: "Mar", volume: 2950, trend: "down" },
    { month: "Apr", volume: 3600, trend: "up" },
    { month: "May", volume: 3400, trend: "down" },
    { month: "Jun", volume: 3850, trend: "up" }
  ];

  // Markets data
  const marketsData = [
    {
      id: "premium-export",
      name: "Premium Export Co.",
      location: "Mumbai Port",
      distance: "25 km",
      category: "export",
      capacity: "500 tons/day",
      rating: 4.8,
      type: "Export",
      specializes: ["Premium Fruits", "Organic Produce"],
      priceRange: "₹150-250/kg"
    },
    {
      id: "city-market",
      name: "City Market",
      location: "Local Market Area",
      distance: "5 km", 
      category: "local",
      capacity: "200 tons/day",
      rating: 4.2,
      type: "Local Market",
      specializes: ["Fresh Vegetables", "Daily Fruits"],
      priceRange: "₹30-80/kg"
    },
    {
      id: "metro-wholesale",
      name: "Metro Wholesale",
      location: "Chennai",
      distance: "350 km",
      category: "distant",
      capacity: "800 tons/day", 
      rating: 4.5,
      type: "Distant Market",
      specializes: ["Bulk Vegetables", "Commercial Supply"],
      priceRange: "₹40-120/kg"
    },
    {
      id: "processing-unit",
      name: "Agro Processing Unit",
      location: "Industrial Area",
      distance: "45 km",
      category: "processing",
      capacity: "300 tons/day",
      rating: 4.0,
      type: "Processing Unit", 
      specializes: ["Juice Making", "Pulp Processing"],
      priceRange: "₹20-60/kg"
    },
    {
      id: "specialty-foods",
      name: "Specialty Foods Ltd.",
      location: "Bangalore",
      distance: "280 km",
      category: "export",
      capacity: "150 tons/day",
      rating: 4.7,
      type: "Export",
      specializes: ["Gourmet Items", "Premium Vegetables"],
      priceRange: "₹80-200/kg"
    },
    {
      id: "fresh-vegetable-co",
      name: "Fresh Vegetable Co.",
      location: "Hyderabad", 
      distance: "450 km",
      category: "distant",
      capacity: "600 tons/day",
      rating: 4.3,
      type: "Distant Market",
      specializes: ["Fresh Vegetables", "Daily Supply"],
      priceRange: "₹35-95/kg"
    }
  ];

  // Overall summary data
  const overallSummaryData = {
    totalRevenue: 245680,
    totalProduceSorted: 1910,
    avgOptimization: 92.5,
    topPerformingVariety: "Alphonso Mango"
  };

  switch (endpoint) {
    case 'summary':
      res.status(200).json(summaryData);
      break;
    case 'produce-varieties':
      res.status(200).json(produceVarieties);
      break;
    case 'markets':
      res.status(200).json(marketsData);
      break;
    case 'overall-summary':
      res.status(200).json(overallSummaryData);
      break;
    case 'revenue-comparison':
      res.status(200).json(revenueComparison);
      break;
    case 'volume-trends':
      res.status(200).json(volumeTrends);
      break;
    default:
      res.status(400).json({ message: 'Invalid endpoint' });
  }
}