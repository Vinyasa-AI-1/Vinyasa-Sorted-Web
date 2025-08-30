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

  // Consumer dashboard summary data
  const summaryData = {
    totalSorted: 1630,
    totalWeight: 815, // in kg
    avgQuality: 88,
    vinyasaCoins: 2450
  };

  // Bin types data  
  const binTypes = [
    {
      id: "residential-bin",
      name: "Residential Smart Bin",
      variety: "Household Waste",
      totalItems: 1275,
      totalOptimalRevenue: 825,
      qualityDistribution: {
        Dry: 420,
        Wet: 380,
        Plastic: 280,
        Electronic: 150,
        Medical: 45
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Dry",
          items: 420,
          weight: 420,
          recommendedSaleFor: "Recycling",
          recommendedBuyer: {
            name: "Green Earth Recyclers",
            location: "Andheri East",
            distance: "3.2 km"
          },
          pricePerKg: 8,
          total: 3360,
          isVinyasaCoins: true,
          alternativeBuyers: [
            { name: "EcoWaste Solutions", location: "Bandra", distance: "5.1 km" }
          ]
        },
        {
          qualityCategory: "Plastic",
          items: 280,
          weight: 280,
          recommendedSaleFor: "Recycling",
          recommendedBuyer: {
            name: "EcoWaste Solutions",
            location: "Bandra",
            distance: "5.1 km"
          },
          pricePerKg: 25,
          total: 7000,
          isVinyasaCoins: true,
          alternativeBuyers: [
            { name: "Green Earth Recyclers", location: "Andheri East", distance: "3.2 km" }
          ]
        }
      ]
    },
    {
      id: "office-bin",
      name: "Office Smart Bin",
      variety: "Commercial Waste", 
      totalItems: 1075,
      totalOptimalRevenue: 645,
      qualityDistribution: {
        Dry: 350,
        Wet: 200,
        Plastic: 320,
        Electronic: 180,
        Medical: 25
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Plastic",
          items: 320,
          weight: 320,
          recommendedSaleFor: "Recycling",
          recommendedBuyer: {
            name: "EcoWaste Solutions",
            location: "Bandra",
            distance: "5.1 km"
          },
          pricePerKg: 12,
          total: 3840,
          isVinyasaCoins: true,
          alternativeBuyers: [
            { name: "Green Earth Recyclers", location: "Andheri East", distance: "3.2 km" }
          ]
        },
        {
          qualityCategory: "Electronic",
          items: 180,
          weight: 180,
          recommendedSaleFor: "E-Waste Recycling",
          recommendedBuyer: {
            name: "Tech Recyclers Ltd.",
            location: "Goregaon",
            distance: "8.2 km"
          },
          pricePerKg: 45,
          total: 8100,
          isVinyasaCoins: true,
          alternativeBuyers: [
            { name: "Digital Waste Co.", location: "Malad", distance: "12 km" }
          ]
        }
      ]
    },
    {
      id: "public-bin",
      name: "Public Smart Bin",
      variety: "Public Waste",
      totalItems: 1440,
      totalOptimalRevenue: 980,
      qualityDistribution: {
        Dry: 480,
        Wet: 450,
        Plastic: 380,
        Electronic: 95,
        Medical: 35
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Wet",
          items: 450,
          weight: 450,
          recommendedSaleFor: "Composting",
          recommendedBuyer: {
            name: "Urban Compost Co.",
            location: "Powai",
            distance: "8.5 km"
          },
          pricePerKg: 6,
          total: 2700,
          isVinyasaCoins: true,
          alternativeBuyers: [
            { name: "City Composting Unit", location: "Kurla", distance: "12 km" }
          ]
        }
      ]
    },
    {
      id: "industrial-bin",
      name: "Industrial Smart Bin",
      variety: "Industrial Waste",
      totalItems: 2150,
      totalOptimalRevenue: 1580,
      qualityDistribution: {
        Dry: 680,
        Wet: 320,
        Plastic: 850,
        Electronic: 250,
        Medical: 50
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Plastic",
          items: 850,
          weight: 850,
          recommendedSaleFor: "Industrial Recycling",
          recommendedBuyer: {
            name: "Industrial Waste Solutions",
            location: "MIDC Andheri",
            distance: "15 km"
          },
          pricePerKg: 18,
          total: 15300,
          isVinyasaCoins: true,
          alternativeBuyers: [
            { name: "Heavy Industries Recycling", location: "Turbhe", distance: "25 km" }
          ]
        },
        {
          qualityCategory: "Electronic",
          items: 250,
          weight: 250,
          recommendedSaleFor: "E-Waste Processing",
          recommendedBuyer: {
            name: "Tech Recyclers Ltd.",
            location: "Goregaon",
            distance: "8.2 km"
          },
          pricePerKg: 50,
          total: 12500,
          isVinyasaCoins: true,
          alternativeBuyers: [
            { name: "Digital Waste Co.", location: "Malad", distance: "12 km" }
          ]
        }
      ]
    },
    {
      id: "hospital-bin",
      name: "Hospital Smart Bin",
      variety: "Medical Waste",
      totalItems: 890,
      totalOptimalRevenue: 720,
      qualityDistribution: {
        Dry: 180,
        Wet: 120,
        Plastic: 250,
        Electronic: 90,
        Medical: 250
      },
      optimalRevenuePlan: [
        {
          qualityCategory: "Medical",
          items: 250,
          weight: 250,
          recommendedSaleFor: "Medical Waste Treatment",
          recommendedBuyer: {
            name: "BioMedical Waste Solutions",
            location: "Thane",
            distance: "22 km"
          },
          pricePerKg: 35,
          total: 8750,
          isVinyasaCoins: true,
          alternativeBuyers: [
            { name: "HealthCare Disposal Ltd.", location: "Navi Mumbai", distance: "28 km" }
          ]
        },
        {
          qualityCategory: "Plastic",
          items: 250,
          weight: 250,
          recommendedSaleFor: "Medical Grade Recycling",
          recommendedBuyer: {
            name: "MedPlastic Recyclers",
            location: "Vashi",
            distance: "18 km"
          },
          pricePerKg: 22,
          total: 5500,
          isVinyasaCoins: true,
          alternativeBuyers: [
            { name: "SafeRecycle Medical", location: "Kalyan", distance: "35 km" }
          ]
        }
      ]
    }
  ];

  // Recyclers data
  const recyclers = [
    {
      id: "green-earth",
      name: "Green Earth Recyclers",
      location: "Andheri East",
      distance: 3.2,
      currentPrices: {
        "Dry": 12,
        "Plastic": 25,
        "Electronic": 45,
        "Medical": 8
      },
      rating: 4.8,
      estimatedRevenue: 8420
    },
    {
      id: "eco-solutions",
      name: "Eco Solutions Pvt Ltd",
      location: "Bandra West", 
      distance: 5.1,
      currentPrices: {
        "Dry": 15,
        "Plastic": 28,
        "Electronic": 50,
        "Medical": 10
      },
      rating: 4.6,
      estimatedRevenue: 9850
    },
    {
      id: "recycle-india",
      name: "Recycle India Co.",
      location: "Kurla",
      distance: 8.7,
      currentPrices: {
        "Dry": 10,
        "Plastic": 22,
        "Electronic": 42,
        "Medical": 6
      },
      rating: 4.4,
      estimatedRevenue: 7320
    }
  ];

  // Overall summary data
  const overallSummaryData = {
    totalVinyasaCoins: 2450,
    totalWasteSorted: 1630,
    avgOptimization: 88.5,
    topPerformingBin: "Public Smart Bin"
  };

  // Revenue comparison data
  const revenueComparison = [
    { month: "Jan", revenue: 1800, target: 2000 },
    { month: "Feb", revenue: 2100, target: 2200 },
    { month: "Mar", revenue: 1950, target: 2100 },
    { month: "Apr", revenue: 2400, target: 2300 },
    { month: "May", revenue: 2200, target: 2400 },
    { month: "Jun", revenue: 2650, target: 2600 }
  ];

  // Volume trends data
  const volumeTrends = [
    { month: "Jan", volume: 1200, trend: "up" },
    { month: "Feb", volume: 1350, trend: "up" },
    { month: "Mar", volume: 1280, trend: "down" },
    { month: "Apr", volume: 1450, trend: "up" },
    { month: "May", volume: 1380, trend: "down" },
    { month: "Jun", volume: 1520, trend: "up" }
  ];

  switch (endpoint) {
    case 'summary':
      res.status(200).json(summaryData);
      break;
    case 'bin-types':
      res.status(200).json(binTypes);
      break;
    case 'recyclers':
      res.status(200).json(recyclers);
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