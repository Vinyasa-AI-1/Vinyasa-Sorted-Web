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

  const revenueComparison = {
    labels: ["Alphonso", "Kesar", "Robust Tomato", "Cherry Tomato", "Bell Pepper"],
    datasets: [
      {
        name: "Current Revenue",
        data: [89250, 67200, 42800, 32150, 28724]
      },
      {
        name: "Potential Revenue",
        data: [95000, 72000, 48000, 36000, 32000]
      }
    ]
  };

  res.status(200).json(revenueComparison);
}