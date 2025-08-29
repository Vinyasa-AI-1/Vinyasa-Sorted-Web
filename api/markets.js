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

  const markets = [
    {
      id: "vashi-apmc",
      name: "Vashi APMC Market",
      location: "Navi Mumbai",
      distance: 12,
      currentPrices: {
        "alphonso-mango": 185,
        "kesar-mango": 165,
        "robust-tomato": 48,
        "cherry-tomato": 88,
        "bell-pepper": 78
      },
      demand: "High",
      estimatedRevenue: 89420
    },
    {
      id: "azadpur-mandi",
      name: "Azadpur Mandi",
      location: "Delhi",
      distance: 1420,
      currentPrices: {
        "alphonso-mango": 195,
        "kesar-mango": 170,
        "robust-tomato": 52,
        "cherry-tomato": 92,
        "bell-pepper": 82
      },
      demand: "Medium",
      estimatedRevenue: 94850
    },
    {
      id: "koyambedu",
      name: "Koyambedu Market",
      location: "Chennai",
      distance: 1340,
      currentPrices: {
        "alphonso-mango": 180,
        "kesar-mango": 155,
        "robust-tomato": 45,
        "cherry-tomato": 80,
        "bell-pepper": 72
      },
      demand: "High",
      estimatedRevenue: 84320
    }
  ];

  res.status(200).json(markets);
}