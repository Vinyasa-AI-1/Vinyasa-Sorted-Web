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

  // Overall summary data
  const overallSummary = {
    totalWasteSorted: 1630,
    totalWeightProcessed: 815,
    recyclingRate: 85.3,
    coinsEarned: 2450,
    environmentalImpact: 92.8,
    wasteReduction: 18.5
  };

  // Waste comparison data
  const wasteComparison = [
    { month: "Jan", current: 180, previous: 220 },
    { month: "Feb", current: 165, previous: 195 },
    { month: "Mar", current: 190, previous: 210 },
    { month: "Apr", current: 155, previous: 185 },
    { month: "May", current: 175, previous: 200 },
    { month: "Jun", current: 145, previous: 175 }
  ];

  // Waste trends data
  const wasteTrends = [
    { month: "Jan", dry: 120, wet: 95, plastic: 85, electronic: 45, medical: 15 },
    { month: "Feb", dry: 115, wet: 88, plastic: 78, electronic: 42, medical: 12 },
    { month: "Mar", dry: 135, wet: 102, plastic: 92, electronic: 48, medical: 18 },
    { month: "Apr", dry: 108, wet: 85, plastic: 75, electronic: 38, medical: 14 },
    { month: "May", dry: 125, wet: 98, plastic: 88, electronic: 45, medical: 16 },
    { month: "Jun", dry: 98, wet: 78, plastic: 68, electronic: 35, medical: 11 }
  ];

  switch (endpoint) {
    case 'overall-summary':
      res.status(200).json(overallSummary);
      break;
    case 'waste-comparison':
      res.status(200).json(wasteComparison);
      break;
    case 'waste-trends':
      res.status(200).json(wasteTrends);
      break;
    default:
      res.status(400).json({ error: 'Invalid endpoint. Use: overall-summary, waste-comparison, or waste-trends' });
  }
}