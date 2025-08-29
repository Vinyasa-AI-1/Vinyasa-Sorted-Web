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

  res.status(200).json(binTypes);
}