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

  const wasteComparison = {
    labels: ["Residential", "Office", "Public", "Commercial", "Industrial"],
    datasets: [
      {
        name: "Current Value",
        data: [825, 645, 980, 1120, 1580]
      },
      {
        name: "Potential Value",
        data: [950, 750, 1150, 1350, 1850]
      }
    ]
  };

  res.status(200).json(wasteComparison);
}