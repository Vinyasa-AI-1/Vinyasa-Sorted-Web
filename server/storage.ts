import { type ProduceVariety, type Market, type Summary, type OverallSummary } from "@shared/schema";

export interface IStorage {
  getProduceVarieties(): Promise<ProduceVariety[]>;
  getMarkets(): Promise<Market[]>;
  getSummary(): Promise<Summary>;
  getOverallSummary(): Promise<OverallSummary>;
  getRevenueComparison(): Promise<any>;
  getVolumeTrends(): Promise<any>;
}

export class MemStorage implements IStorage {
  private produceVarieties: ProduceVariety[];
  private markets: Market[];
  private summary: Summary;
  private overallSummary: OverallSummary;

  constructor() {
    this.summary = {
      totalSorted: 2150,
      totalWeight: 1820,
      avgQuality: 92,
      revenue: 158420,
      vinyasaCoins: 3250,
    };

    this.produceVarieties = [
      {
        id: "smart-bin-residential",
        name: "Residential Smart Bin",
        binType: "EcoCycler Pro",
        totalItems: 580,
        wasteDistribution: {
          Dry: 150,
          Wet: 280,
          Plastic: 90,
          Electronic: 35,
          Medical: 25,
        },
        optimalDisposalPlan: [
          {
            wasteCategory: "Dry",
            items: 150,
            weight: 120,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "Mumbai Plastic Recyclers",
              location: "Goregaon, Mumbai",
              distance: "12 km",
            },
            pricePerKg: 18,
            total: 2160,
            alternativeBuyers: [
              { name: "Local Recycler (₹15/kg)", pricePerKg: 15 },
              { name: "Distant Recycler (₹16/kg)", pricePerKg: 16 },
            ],
          },
          {
            wasteCategory: "Wet",
            items: 280,
            weight: 350,
            recommendedDisposalTo: "Compost",
            recommendedBuyer: {
              name: "BKC Organic Compost",
              location: "Bandra Kurla Complex",
              distance: "2 km",
            },
            pricePerKg: 8,
            total: 2800,
            alternativeBuyers: [
              { name: "Local Compost (₹6/kg)", pricePerKg: 6 },
              { name: "City Compost (₹7/kg)", pricePerKg: 7 },
            ],
          },
          {
            wasteCategory: "Plastic",
            items: 90,
            weight: 45,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "EcoPlast Recyclers",
              location: "Andheri, Mumbai",
              distance: "8 km",
            },
            pricePerKg: 22,
            total: 990,
            alternativeBuyers: [
              { name: "Local Plastic (₹20/kg)", pricePerKg: 20 },
              { name: "City Plastic (₹21/kg)", pricePerKg: 21 },
            ],
          },
          {
            wasteCategory: "Electronic",
            items: 35,
            weight: 28,
            recommendedDisposalTo: "eWaste Recycling",
            recommendedBuyer: {
              name: "Mumbai eWaste Solutions",
              location: "Malad, Mumbai",
              distance: "15 km",
            },
            pricePerKg: 450,
            total: 12600,
            alternativeBuyers: [
              { name: "Local eWaste (₹400/kg)", pricePerKg: 400 },
              { name: "City eWaste (₹420/kg)", pricePerKg: 420 },
            ],
          },
          {
            wasteCategory: "Medical",
            items: 25,
            weight: 15,
            recommendedDisposalTo: "Medical Waste Recycling",
            recommendedBuyer: {
              name: "Safe Medical Disposal",
              location: "Worli, Mumbai",
              distance: "6 km",
            },
            pricePerKg: 180,
            total: 2700,
            alternativeBuyers: [
              { name: "City Medical (₹160/kg)", pricePerKg: 160 },
              { name: "Regional Medical (₹170/kg)", pricePerKg: 170 },
            ],
          },
        ],
        totalOptimalRevenue: 21250,
      },
      {
        id: "smart-bin-commercial",
        name: "Commercial Smart Bin",
        binType: "EcoCycler Business",
        totalItems: 420,
        wasteDistribution: {
          Dry: 120,
          Wet: 180,
          Plastic: 85,
          Electronic: 25,
          Medical: 10,
        },
        optimalDisposalPlan: [
          {
            wasteCategory: "Dry",
            items: 120,
            weight: 96,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "Commercial Recyclers Ltd",
              location: "Powai, Mumbai",
              distance: "10 km",
            },
            pricePerKg: 16,
            total: 1536,
            alternativeBuyers: [
              { name: "Local Recycler (₹14/kg)", pricePerKg: 14 },
              { name: "City Recycler (₹15/kg)", pricePerKg: 15 },
            ],
          },
          {
            wasteCategory: "Wet",
            items: 180,
            weight: 225,
            recommendedDisposalTo: "Compost",
            recommendedBuyer: {
              name: "Mumbai Organic Compost",
              location: "Kandivali, Mumbai",
              distance: "18 km",
            },
            pricePerKg: 7,
            total: 1575,
            alternativeBuyers: [
              { name: "Local Compost (₹5/kg)", pricePerKg: 5 },
              { name: "City Compost (₹6/kg)", pricePerKg: 6 },
            ],
          },
          {
            wasteCategory: "Plastic",
            items: 85,
            weight: 42,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "GreenCycle Plastics",
              location: "Thane, Mumbai",
              distance: "14 km",
            },
            pricePerKg: 20,
            total: 840,
            alternativeBuyers: [
              { name: "Local Plastic (₹18/kg)", pricePerKg: 18 },
              { name: "Regional Plastic (₹19/kg)", pricePerKg: 19 },
            ],
          },
          {
            wasteCategory: "Electronic",
            items: 25,
            weight: 20,
            recommendedDisposalTo: "eWaste Recycling",
            recommendedBuyer: {
              name: "TechRecycle Solutions",
              location: "Ghatkopar, Mumbai",
              distance: "22 km",
            },
            pricePerKg: 380,
            total: 7600,
            alternativeBuyers: [
              { name: "Local eWaste (₹350/kg)", pricePerKg: 350 },
              { name: "City eWaste (₹365/kg)", pricePerKg: 365 },
            ],
          },
          {
            wasteCategory: "Medical",
            items: 10,
            weight: 8,
            recommendedDisposalTo: "Medical Waste Recycling",
            recommendedBuyer: {
              name: "BioSafe Medical Disposal",
              location: "Lower Parel, Mumbai",
              distance: "4 km",
            },
            pricePerKg: 200,
            total: 1600,
            alternativeBuyers: [
              { name: "City Medical (₹180/kg)", pricePerKg: 180 },
              { name: "Regional Medical (₹190/kg)", pricePerKg: 190 },
            ],
          },
        ],
        totalOptimalRevenue: 13151,
      },
      {
        id: "smart-bin-industrial",
        name: "Industrial Smart Bin",
        binType: "EcoCycler Heavy Duty",
        totalItems: 950,
        wasteDistribution: {
          Dry: 320,
          Wet: 280,
          Plastic: 180,
          Electronic: 120,
          Medical: 50,
        },
        optimalDisposalPlan: [
          {
            wasteCategory: "Dry",
            items: 320,
            weight: 256,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "Industrial Recyclers Mumbai",
              location: "Mahape, Navi Mumbai",
              distance: "28 km",
            },
            pricePerKg: 14,
            total: 3584,
            alternativeBuyers: [
              { name: "Local Recycler (₹12/kg)", pricePerKg: 12 },
              { name: "Regional Recycler (₹13/kg)", pricePerKg: 13 },
            ],
          },
          {
            wasteCategory: "Wet",
            items: 280,
            weight: 350,
            recommendedDisposalTo: "Compost",
            recommendedBuyer: {
              name: "Industrial Compost Solutions",
              location: "Nashik, Maharashtra",
              distance: "165 km",
            },
            pricePerKg: 5,
            total: 1750,
            alternativeBuyers: [
              { name: "Local Compost (₹3/kg)", pricePerKg: 3 },
              { name: "Regional Compost (₹4/kg)", pricePerKg: 4 },
            ],
          },
          {
            wasteCategory: "Plastic",
            items: 180,
            weight: 90,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "Mega Plastic Industries",
              location: "Vasai, Mumbai",
              distance: "35 km",
            },
            pricePerKg: 25,
            total: 2250,
            alternativeBuyers: [
              { name: "Local Plastic (₹22/kg)", pricePerKg: 22 },
              { name: "Regional Plastic (₹24/kg)", pricePerKg: 24 },
            ],
          },
          {
            wasteCategory: "Electronic",
            items: 120,
            weight: 96,
            recommendedDisposalTo: "eWaste Recycling",
            recommendedBuyer: {
              name: "Industrial eWaste Corp",
              location: "Pune, Maharashtra",
              distance: "150 km",
            },
            pricePerKg: 500,
            total: 48000,
            alternativeBuyers: [
              { name: "Local eWaste (₹480/kg)", pricePerKg: 480 },
              { name: "Regional eWaste (₹490/kg)", pricePerKg: 490 },
            ],
          },
          {
            wasteCategory: "Medical",
            items: 50,
            weight: 40,
            recommendedDisposalTo: "Medical Waste Recycling",
            recommendedBuyer: {
              name: "Industrial Medical Waste",
              location: "Aurangabad, Maharashtra",
              distance: "350 km",
            },
            pricePerKg: 250,
            total: 10000,
            alternativeBuyers: [
              { name: "Regional Medical (₹230/kg)", pricePerKg: 230 },
              { name: "State Medical (₹240/kg)", pricePerKg: 240 },
            ],
          },
        ],
        totalOptimalRevenue: 65584,
      },
      {
        id: "smart-bin-office",
        name: "Office Smart Bin",
        binType: "EcoCycler Compact",
        totalItems: 365,
        wasteDistribution: {
          Dry: 85,
          Wet: 140,
          Plastic: 90,
          Electronic: 35,
          Medical: 15,
        },
        optimalDisposalPlan: [
          {
            wasteCategory: "Dry",
            items: 85,
            weight: 68,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "Office Recyclers Mumbai",
              location: "Nariman Point, Mumbai",
              distance: "3 km",
            },
            pricePerKg: 20,
            total: 1360,
            alternativeBuyers: [
              { name: "Local Recycler (₹18/kg)", pricePerKg: 18 },
              { name: "City Recycler (₹19/kg)", pricePerKg: 19 },
            ],
          },
          {
            wasteCategory: "Wet",
            items: 140,
            weight: 175,
            recommendedDisposalTo: "Compost",
            recommendedBuyer: {
              name: "Corporate Compost Services",
              location: "Fort, Mumbai",
              distance: "2 km",
            },
            pricePerKg: 10,
            total: 1750,
            alternativeBuyers: [
              { name: "Local Compost (₹8/kg)", pricePerKg: 8 },
              { name: "City Compost (₹9/kg)", pricePerKg: 9 },
            ],
          },
          {
            wasteCategory: "Plastic",
            items: 90,
            weight: 45,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "Corporate Plastic Solutions",
              location: "Worli, Mumbai",
              distance: "5 km",
            },
            pricePerKg: 25,
            total: 1125,
            alternativeBuyers: [
              { name: "Local Plastic (₹23/kg)", pricePerKg: 23 },
              { name: "Regional Plastic (₹24/kg)", pricePerKg: 24 },
            ],
          },
          {
            wasteCategory: "Electronic",
            items: 35,
            weight: 28,
            recommendedDisposalTo: "eWaste Recycling",
            recommendedBuyer: {
              name: "Corporate eWaste Solutions",
              location: "Parel, Mumbai",
              distance: "7 km",
            },
            pricePerKg: 520,
            total: 14560,
            alternativeBuyers: [
              { name: "Local eWaste (₹500/kg)", pricePerKg: 500 },
              { name: "Regional eWaste (₹510/kg)", pricePerKg: 510 },
            ],
          },
          {
            wasteCategory: "Medical",
            items: 15,
            weight: 12,
            recommendedDisposalTo: "Medical Waste Recycling",
            recommendedBuyer: {
              name: "Corporate Medical Disposal",
              location: "Andheri, Mumbai",
              distance: "12 km",
            },
            pricePerKg: 220,
            total: 2640,
            alternativeBuyers: [
              { name: "Local Medical (₹200/kg)", pricePerKg: 200 },
              { name: "Regional Medical (₹210/kg)", pricePerKg: 210 },
            ],
          },
        ],
        totalOptimalRevenue: 21435,
      },
      {
        id: "smart-bin-hospital",
        name: "Hospital Smart Bin",
        binType: "EcoCycler Medical",
        totalItems: 435,
        wasteDistribution: {
          Dry: 95,
          Wet: 160,
          Plastic: 110,
          Electronic: 45,
          Medical: 25,
        },
        optimalDisposalPlan: [
          {
            wasteCategory: "Dry",
            items: 95,
            weight: 76,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "Medical Facility Recyclers",
              location: "Parel, Mumbai",
              distance: "8 km",
            },
            pricePerKg: 12,
            total: 912,
            alternativeBuyers: [
              { name: "Local Recycler (₹10/kg)", pricePerKg: 10 },
              { name: "City Recycler (₹11/kg)", pricePerKg: 11 },
            ],
          },
          {
            wasteCategory: "Wet",
            items: 160,
            weight: 200,
            recommendedDisposalTo: "Compost",
            recommendedBuyer: {
              name: "Medical Organic Disposal",
              location: "Kalina, Mumbai",
              distance: "12 km",
            },
            pricePerKg: 6,
            total: 1200,
            alternativeBuyers: [
              { name: "Local Compost (₹4/kg)", pricePerKg: 4 },
              { name: "Regional Compost (₹5/kg)", pricePerKg: 5 },
            ],
          },
          {
            wasteCategory: "Plastic",
            items: 110,
            weight: 55,
            recommendedDisposalTo: "Plastic Recycling",
            recommendedBuyer: {
              name: "Medical Plastic Recyclers",
              location: "Vikhroli, Mumbai",
              distance: "20 km",
            },
            pricePerKg: 15,
            total: 825,
            alternativeBuyers: [
              { name: "Local Plastic (₹13/kg)", pricePerKg: 13 },
              { name: "Regional Plastic (₹14/kg)", pricePerKg: 14 },
            ],
          },
          {
            wasteCategory: "Electronic",
            items: 45,
            weight: 36,
            recommendedDisposalTo: "eWaste Recycling",
            recommendedBuyer: {
              name: "Medical eWaste Specialists",
              location: "Turbhe, Navi Mumbai",
              distance: "25 km",
            },
            pricePerKg: 600,
            total: 21600,
            alternativeBuyers: [
              { name: "Local eWaste (₹580/kg)", pricePerKg: 580 },
              { name: "Regional eWaste (₹590/kg)", pricePerKg: 590 },
            ],
          },
          {
            wasteCategory: "Medical",
            items: 25,
            weight: 20,
            recommendedDisposalTo: "Medical Waste Recycling",
            recommendedBuyer: {
              name: "Hospital Medical Waste Inc",
              location: "Chembur, Mumbai",
              distance: "15 km",
            },
            pricePerKg: 300,
            total: 6000,
            alternativeBuyers: [
              { name: "Regional Medical (₹280/kg)", pricePerKg: 280 },
              { name: "State Medical (₹290/kg)", pricePerKg: 290 },
            ],
          },
        ],
        totalOptimalRevenue: 30537,
      },
    ];

    this.markets = [
      {
        id: "bkc-compost",
        name: "BKC Organic Compost",
        location: "Bandra Kurla Complex",
        distance: "2 km",
        transport: "Same day",
        capacity: "50 tons/day",
        grades: ["Wet"],
        category: "compost",
      },
      {
        id: "mumbai-plastic",
        name: "Mumbai Plastic Recyclers",
        location: "Goregaon, Mumbai",
        distance: "12 km",
        transport: "Same day",
        capacity: "80 tons/day",
        grades: ["Dry", "Plastic"],
        category: "plastic",
      },
      {
        id: "mumbai-ewaste",
        name: "Mumbai eWaste Solutions",
        location: "Malad, Mumbai",
        distance: "15 km",
        transport: "Same day",
        capacity: "5 tons/day",
        grades: ["Electronic"],
        category: "ewaste",
      },
      {
        id: "safe-medical",
        name: "Safe Medical Disposal",
        location: "Worli, Mumbai",
        distance: "6 km",
        transport: "Same day",
        capacity: "2 tons/day",
        grades: ["Medical"],
        category: "medical",
      },
      {
        id: "commercial-recyclers",
        name: "Commercial Recyclers Ltd",
        location: "Powai, Mumbai",
        distance: "10 km",
        transport: "Same day",
        capacity: "120 tons/day",
        grades: ["Dry", "Plastic"],
        category: "plastic",
      },
      {
        id: "industrial-recyclers",
        name: "Industrial Recyclers Mumbai",
        location: "Mahape, Navi Mumbai",
        distance: "28 km",
        transport: "Same day",
        capacity: "200 tons/day",
        grades: ["Dry", "Plastic"],
        category: "plastic",
      },
      {
        id: "ecoplast-recyclers",
        name: "EcoPlast Recyclers",
        location: "Andheri, Mumbai",
        distance: "8 km",
        transport: "Same day",
        capacity: "60 tons/day",
        grades: ["Plastic"],
        category: "plastic",
      },
      {
        id: "techrecycle-solutions",
        name: "TechRecycle Solutions",
        location: "Ghatkopar, Mumbai",
        distance: "22 km",
        transport: "Same day",
        capacity: "8 tons/day",
        grades: ["Electronic"],
        category: "ewaste",
      },
      {
        id: "biosafe-medical",
        name: "BioSafe Medical Disposal",
        location: "Lower Parel, Mumbai",
        distance: "4 km",
        transport: "Same day",
        capacity: "3 tons/day",
        grades: ["Medical"],
        category: "medical",
      },
      {
        id: "mega-plastic",
        name: "Mega Plastic Industries",
        location: "Vasai, Mumbai",
        distance: "35 km",
        transport: "1 day",
        capacity: "150 tons/day",
        grades: ["Plastic"],
        category: "plastic",
      },
      {
        id: "industrial-ewaste",
        name: "Industrial eWaste Corp",
        location: "Pune, Maharashtra",
        distance: "150 km",
        transport: "1 day",
        capacity: "15 tons/day",
        grades: ["Electronic"],
        category: "ewaste",
      },
      {
        id: "hospital-medical",
        name: "Hospital Medical Waste Inc",
        location: "Chembur, Mumbai",
        distance: "15 km",
        transport: "Same day",
        capacity: "5 tons/day",
        grades: ["Medical"],
        category: "medical",
      },
      {
        id: "powai-generic",
        name: "EcoGeneral Recyclers",
        location: "Powai, Mumbai",
        distance: "12 km",
        transport: "Same day",
        capacity: "30 tons/day",
        grades: ["Dry", "Plastic"],
        category: "generic",
      },
      {
        id: "thane-local",
        name: "GreenCycle Local",
        location: "Thane, Mumbai",
        distance: "14 km",
        transport: "Next day",
        capacity: "15 tons/day",
        grades: ["Dry", "Wet"],
        category: "local",
      },
    ];

    this.overallSummary = {
      totalOptimalRevenue: 151957,
      totalItems: 2750,
      avgRevenuePerItem: 55,
      breakdown: [
        {
          category: "eWaste Recycling",
          revenue: 89800,
          items: 225,
          percentage: 59.1,
        },
        {
          category: "Medical Waste Recycling", 
          revenue: 22940,
          items: 125,
          percentage: 15.1,
        },
        {
          category: "Plastic Recycling",
          revenue: 32167,
          items: 1480,
          percentage: 21.2,
        },
        {
          category: "Compost",
          revenue: 7050,
          items: 920,
          percentage: 4.6,
        },
      ],
    };
  }

  async getProduceVarieties(): Promise<ProduceVariety[]> {
    return this.produceVarieties;
  }

  async getMarkets(): Promise<Market[]> {
    return this.markets;
  }

  async getSummary(): Promise<Summary> {
    return this.summary;
  }

  async getOverallSummary(): Promise<OverallSummary> {
    return this.overallSummary;
  }

  async getRevenueComparison(): Promise<any> {
    return {
      labels: ["Residential", "Commercial", "Industrial", "Office", "Hospital"],
      datasets: [
        {
          label: "Today",
          data: [21250, 13151, 65584, 21435, 30537],
          backgroundColor: "#22543D",
        },
        {
          label: "Monthly Avg",
          data: [19500, 12800, 62000, 20500, 28000],
          backgroundColor: "#68D391",
        },
        {
          label: "Last Month",
          data: [18200, 11900, 58500, 19200, 26800],
          backgroundColor: "#F6E05E",
        },
      ],
    };
  }

  async getVolumeTrends(): Promise<any> {
    return {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Residential",
          data: [580, 620, 560, 580],
          borderColor: "#22543D",
          backgroundColor: "rgba(34, 84, 61, 0.1)",
        },
        {
          label: "Commercial",
          data: [420, 450, 400, 420],
          borderColor: "#68D391",
          backgroundColor: "rgba(104, 211, 145, 0.1)",
        },
        {
          label: "Industrial",
          data: [950, 980, 920, 950],
          borderColor: "#F6E05E",
          backgroundColor: "rgba(246, 224, 94, 0.1)",
        },
        {
          label: "Office",
          data: [365, 380, 350, 365],
          borderColor: "#9C4221",
          backgroundColor: "rgba(156, 66, 33, 0.1)",
        },
        {
          label: "Hospital",
          data: [435, 450, 420, 435],
          borderColor: "#DC2626",
          backgroundColor: "rgba(220, 38, 38, 0.1)",
        },
      ],
    };
  }
}

export const storage = new MemStorage();
