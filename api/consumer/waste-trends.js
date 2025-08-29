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

  const wasteTrends = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        name: "Dry Waste",
        data: [280, 320, 300, 350, 330, 380]
      },
      {
        name: "Wet Waste", 
        data: [250, 290, 270, 310, 285, 325]
      },
      {
        name: "Plastic",
        data: [180, 210, 195, 230, 220, 260]
      },
      {
        name: "Electronic",
        data: [80, 95, 85, 110, 105, 125]
      }
    ]
  };

  res.status(200).json(wasteTrends);
}