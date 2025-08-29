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
    avgQualityScore: 92.5,
    valueUnlocked: 260124 // in rupees
  };

  // Producer produce varieties data
  const produceVarieties = [
    {
      id: "alphonso-mango",
      name: "Alphonso Mango",
      qualityDistribution: {
        Premium: 450,
        Ripe: 280,
        YetToRipe: 120,
        Overripe: 80,
        Rotten: 20
      },
      avgPrice: 180,
      totalWeight: 850,
      valueUnlocked: 89250
    },
    {
      id: "kesar-mango",
      name: "Kesar Mango", 
      qualityDistribution: {
        Premium: 320,
        Ripe: 220,
        YetToRipe: 90,
        Overripe: 60,
        Rotten: 10
      },
      avgPrice: 160,
      totalWeight: 700,
      valueUnlocked: 67200
    },
    {
      id: "robust-tomato",
      name: "Robust Tomato",
      qualityDistribution: {
        Premium: 290,
        Ripe: 200,
        YetToRipe: 150,
        Overripe: 100,
        Rotten: 30
      },
      avgPrice: 45,
      totalWeight: 1200,
      valueUnlocked: 42800
    },
    {
      id: "cherry-tomato", 
      name: "Cherry Tomato",
      qualityDistribution: {
        Premium: 180,
        Ripe: 140,
        YetToRipe: 90,
        Overripe: 50,
        Rotten: 15
      },
      avgPrice: 85,
      totalWeight: 475,
      valueUnlocked: 32150
    },
    {
      id: "bell-pepper",
      name: "Bell Pepper",
      qualityDistribution: {
        Premium: 160,
        Ripe: 120,
        YetToRipe: 70,
        Overripe: 40,
        Rotten: 10
      },
      avgPrice: 75,
      totalWeight: 400,
      valueUnlocked: 28724
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

  switch (endpoint) {
    case 'summary':
      res.status(200).json(summaryData);
      break;
    case 'produce-varieties':
      res.status(200).json(produceVarieties);
      break;
    case 'revenue-comparison':
      res.status(200).json(revenueComparison);
      break;
    case 'volume-trends':
      res.status(200).json(volumeTrends);
      break;
    default:
      res.status(400).json({ error: 'Invalid endpoint. Use: summary, produce-varieties, revenue-comparison, or volume-trends' });
  }
}