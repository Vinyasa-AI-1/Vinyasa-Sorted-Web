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

  const volumeTrends = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        name: "Premium",
        data: [350, 400, 380, 420, 390, 450]
      },
      {
        name: "Ripe", 
        data: [280, 320, 300, 340, 310, 360]
      },
      {
        name: "YetToRipe",
        data: [180, 200, 190, 220, 200, 240]
      }
    ]
  };

  res.status(200).json(volumeTrends);
}