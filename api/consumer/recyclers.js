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

  res.status(200).json(recyclers);
}