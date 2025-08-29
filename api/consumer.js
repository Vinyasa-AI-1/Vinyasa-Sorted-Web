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
    avgQualityScore: 88.5,
    vinyasaCoins: 2450
  };

  // Bin types data
  const binTypes = [
    {
      id: "residential-bin",
      name: "Residential Smart Bin",
      wasteDistribution: {
        Dry: 420,
        Wet: 380,
        Plastic: 280,
        Electronic: 150,
        Medical: 45
      },
      avgValue: 18,
      totalWeight: 275,
      coinsEarned: 825
    },
    {
      id: "office-bin",
      name: "Office Smart Bin", 
      wasteDistribution: {
        Dry: 350,
        Wet: 200,
        Plastic: 320,
        Electronic: 180,
        Medical: 25
      },
      avgValue: 22,
      totalWeight: 215,
      coinsEarned: 645
    },
    {
      id: "public-bin",
      name: "Public Smart Bin",
      wasteDistribution: {
        Dry: 480,
        Wet: 450,
        Plastic: 380,
        Electronic: 95,
        Medical: 35
      },
      avgValue: 15,
      totalWeight: 325,
      coinsEarned: 980
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
    default:
      res.status(400).json({ error: 'Invalid endpoint. Use: summary, bin-types, or recyclers' });
  }
}