import { type ProduceVariety, type Market, type Summary, type OverallSummary } from "@shared/schema";

export interface IStorage {
  getProduceVarieties(): Promise<ProduceVariety[]>;
  getMarkets(): Promise<Market[]>;
  getSummary(): Promise<Summary>;
  getOverallSummary(): Promise<OverallSummary>;
  getRevenueComparison(): Promise<any>;
  getVolumeTrends(): Promise<any>;
  // Consumer dashboard methods
  getBinTypes(): Promise<any[]>;
  getRecyclers(): Promise<any[]>;
  getConsumerSummary(): Promise<any>;
  getConsumerOverallSummary(): Promise<any>;
  getWasteComparison(): Promise<any>;
  getWasteTrends(): Promise<any>;
}

export class MemStorage implements IStorage {
  private produceVarieties: ProduceVariety[];
  private markets: Market[];
  private summary: Summary;
  private overallSummary: OverallSummary;

  constructor() {
    this.summary = {
      totalSorted: 1910,
      totalWeight: 3670,
      avgQuality: 88,
      revenue: 245680,
    };

    this.produceVarieties = [
      {
        id: "alphonso-mango",
        name: "Alphonso Mango",
        variety: "Svavlamban Hapus",
        totalItems: 280,
        qualityDistribution: {
          Premium: 45,
          Ripe: 120,
          YetToRipe: 80,
          Overripe: 25,
          Rotten: 10,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Premium",
            items: 45,
            weight: 90,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "JNPT Export Terminal",
              location: "Mumbai Port",
              distance: "25 km",
            },
            pricePerKg: 220,
            total: 19800,
            alternativeBuyers: [
              { name: "Local (₹180/kg)", pricePerKg: 180 },
              { name: "Distant (₹190/kg)", pricePerKg: 190 },
            ],
          },
          {
            qualityCategory: "Ripe",
            items: 120,
            weight: 240,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "Dubai Fruit Market",
              location: "Dubai, UAE",
              distance: "International",
            },
            pricePerKg: 200,
            total: 48000,
            alternativeBuyers: [
              { name: "Local (₹160/kg)", pricePerKg: 160 },
              { name: "Distant (₹170/kg)", pricePerKg: 170 },
              { name: "Processing (₹140/kg)", pricePerKg: 140 },
            ],
          },
          {
            qualityCategory: "YetToRipe",
            items: 80,
            weight: 160,
            recommendedSaleFor: "Distant Market",
            recommendedBuyer: {
              name: "Azadpur Mandi",
              location: "Delhi",
              distance: "1,400 km",
            },
            pricePerKg: 130,
            total: 20800,
            alternativeBuyers: [
              { name: "Local (₹120/kg)", pricePerKg: 120 },
              { name: "Processing (₹110/kg)", pricePerKg: 110 },
            ],
          },
          {
            qualityCategory: "Overripe",
            items: 25,
            weight: 50,
            recommendedSaleFor: "Processing Unit",
            recommendedBuyer: {
              name: "ITC Foods Ltd",
              location: "Pune, Maharashtra",
              distance: "150 km",
            },
            pricePerKg: 60,
            total: 3000,
            alternativeBuyers: [
              { name: "Britannia (₹55/kg)", pricePerKg: 55 },
              { name: "Haldiram's (₹50/kg)", pricePerKg: 50 },
            ],
          },
          {
            qualityCategory: "Rotten",
            items: 10,
            weight: 20,
            recommendedSaleFor: "Biogas",
            recommendedBuyer: {
              name: "Biogas Plant",
              location: "Nearby Farm",
              distance: "5 km",
            },
            pricePerKg: 1,
            total: 20,
            alternativeBuyers: [
              { name: "Local Compost (₹2/kg)", pricePerKg: 2 },
            ],
          },
        ],
        totalOptimalRevenue: 91620,
      },
      {
        id: "kesar-mango",
        name: "Kesar Mango",
        variety: "Junagadh Kesar",
        totalItems: 210,
        qualityDistribution: {
          Premium: 35,
          Ripe: 95,
          YetToRipe: 60,
          Overripe: 15,
          Rotten: 5,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Premium",
            items: 35,
            weight: 70,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "JNPT Export Terminal",
              location: "Mumbai Port",
              distance: "25 km",
            },
            pricePerKg: 200,
            total: 14000,
            alternativeBuyers: [
              { name: "Local (₹160/kg)", pricePerKg: 160 },
              { name: "Distant (₹170/kg)", pricePerKg: 170 },
            ],
          },
          {
            qualityCategory: "Ripe",
            items: 95,
            weight: 190,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "Dubai Fruit Market",
              location: "Dubai, UAE",
              distance: "International",
            },
            pricePerKg: 180,
            total: 34200,
            alternativeBuyers: [
              { name: "Local (₹140/kg)", pricePerKg: 140 },
              { name: "Distant (₹150/kg)", pricePerKg: 150 },
              { name: "Processing (₹120/kg)", pricePerKg: 120 },
            ],
          },
          {
            qualityCategory: "YetToRipe",
            items: 60,
            weight: 120,
            recommendedSaleFor: "Distant Market",
            recommendedBuyer: {
              name: "Azadpur Mandi",
              location: "Delhi",
              distance: "1,400 km",
            },
            pricePerKg: 110,
            total: 13200,
            alternativeBuyers: [
              { name: "Local (₹100/kg)", pricePerKg: 100 },
              { name: "Processing (₹90/kg)", pricePerKg: 90 },
            ],
          },
          {
            qualityCategory: "Overripe",
            items: 15,
            weight: 30,
            recommendedSaleFor: "Processing Unit",
            recommendedBuyer: {
              name: "ITC Foods Ltd",
              location: "Pune, Maharashtra",
              distance: "150 km",
            },
            pricePerKg: 50,
            total: 1500,
            alternativeBuyers: [
              { name: "Local (₹70/kg)", pricePerKg: 70 },
            ],
          },
          {
            qualityCategory: "Rotten",
            items: 5,
            weight: 10,
            recommendedSaleFor: "Biogas",
            recommendedBuyer: {
              name: "Biogas Plant",
              location: "Nearby Farm",
              distance: "5 km",
            },
            pricePerKg: 1,
            total: 10,
            alternativeBuyers: [
              { name: "Local Compost (₹2/kg)", pricePerKg: 2 },
            ],
          },
        ],
        totalOptimalRevenue: 62910,
      },
      {
        id: "robusta-banana",
        name: "Robusta Banana",
        variety: "Robusta",
        totalItems: 620,
        qualityDistribution: {
          Premium: 180,
          Ripe: 220,
          YetToRipe: 150,
          Overripe: 50,
          Rotten: 20,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Premium",
            items: 180,
            weight: 360,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "JNPT Export Terminal",
              location: "Mumbai Port",
              distance: "25 km",
            },
            pricePerKg: 60,
            total: 21600,
            alternativeBuyers: [
              { name: "Local (₹45/kg)", pricePerKg: 45 },
              { name: "Distant (₹50/kg)", pricePerKg: 50 },
            ],
          },
          {
            qualityCategory: "Ripe",
            items: 220,
            weight: 440,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "Dubai Fruit Market",
              location: "Dubai, UAE",
              distance: "International",
            },
            pricePerKg: 55,
            total: 24200,
            alternativeBuyers: [
              { name: "Local (₹40/kg)", pricePerKg: 40 },
              { name: "Distant (₹45/kg)", pricePerKg: 45 },
              { name: "Processing (₹35/kg)", pricePerKg: 35 },
            ],
          },
          {
            qualityCategory: "YetToRipe",
            items: 150,
            weight: 300,
            recommendedSaleFor: "Distant Market",
            recommendedBuyer: {
              name: "Azadpur Mandi",
              location: "Delhi",
              distance: "1,400 km",
            },
            pricePerKg: 35,
            total: 10500,
            alternativeBuyers: [
              { name: "Local (₹30/kg)", pricePerKg: 30 },
              { name: "Processing (₹25/kg)", pricePerKg: 25 },
            ],
          },
          {
            qualityCategory: "Overripe",
            items: 50,
            weight: 100,
            recommendedSaleFor: "Processing Unit",
            recommendedBuyer: {
              name: "ITC Foods Ltd",
              location: "Pune, Maharashtra",
              distance: "150 km",
            },
            pricePerKg: 15,
            total: 1500,
            alternativeBuyers: [
              { name: "Local (₹20/kg)", pricePerKg: 20 },
            ],
          },
          {
            qualityCategory: "Rotten",
            items: 20,
            weight: 40,
            recommendedSaleFor: "Biogas",
            recommendedBuyer: {
              name: "Biogas Plant",
              location: "Nearby Farm",
              distance: "5 km",
            },
            pricePerKg: 1,
            total: 40,
            alternativeBuyers: [
              { name: "Local Compost (₹2/kg)", pricePerKg: 2 },
            ],
          },
        ],
        totalOptimalRevenue: 57840,
      },
      {
        id: "bhindi-okra",
        name: "Bhindi (Okra)",
        variety: "Pusa A-4",
        totalItems: 365,
        qualityDistribution: {
          Premium: 85,
          Ripe: 140,
          YetToRipe: 90,
          Overripe: 35,
          Rotten: 15,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Premium",
            items: 85,
            weight: 170,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "JNPT Export Terminal",
              location: "Mumbai Port",
              distance: "25 km",
            },
            pricePerKg: 50,
            total: 8500,
            alternativeBuyers: [
              { name: "Local (₹35/kg)", pricePerKg: 35 },
              { name: "Distant (₹40/kg)", pricePerKg: 40 },
            ],
          },
          {
            qualityCategory: "Ripe",
            items: 140,
            weight: 280,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "Dubai Fruit Market",
              location: "Dubai, UAE",
              distance: "International",
            },
            pricePerKg: 45,
            total: 12600,
            alternativeBuyers: [
              { name: "Local (₹30/kg)", pricePerKg: 30 },
              { name: "Distant (₹35/kg)", pricePerKg: 35 },
              { name: "Processing (₹25/kg)", pricePerKg: 25 },
            ],
          },
          {
            qualityCategory: "YetToRipe",
            items: 90,
            weight: 180,
            recommendedSaleFor: "Distant Market",
            recommendedBuyer: {
              name: "Azadpur Mandi",
              location: "Delhi",
              distance: "1,400 km",
            },
            pricePerKg: 25,
            total: 4500,
            alternativeBuyers: [
              { name: "Local (₹22/kg)", pricePerKg: 22 },
              { name: "Processing (₹18/kg)", pricePerKg: 18 },
            ],
          },
          {
            qualityCategory: "Overripe",
            items: 35,
            weight: 70,
            recommendedSaleFor: "Processing Unit",
            recommendedBuyer: {
              name: "ITC Foods Ltd",
              location: "Pune, Maharashtra",
              distance: "150 km",
            },
            pricePerKg: 10,
            total: 700,
            alternativeBuyers: [
              { name: "Local (₹15/kg)", pricePerKg: 15 },
            ],
          },
          {
            qualityCategory: "Rotten",
            items: 15,
            weight: 30,
            recommendedSaleFor: "Biogas",
            recommendedBuyer: {
              name: "Biogas Plant",
              location: "Nearby Farm",
              distance: "5 km",
            },
            pricePerKg: 1,
            total: 30,
            alternativeBuyers: [
              { name: "Local Compost (₹2/kg)", pricePerKg: 2 },
            ],
          },
        ],
        totalOptimalRevenue: 26330,
      },
      {
        id: "tomato",
        name: "Tomato",
        variety: "Pusa Ruby",
        totalItems: 435,
        qualityDistribution: {
          Premium: 95,
          Ripe: 160,
          YetToRipe: 110,
          Overripe: 45,
          Rotten: 25,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Premium",
            items: 95,
            weight: 190,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "JNPT Export Terminal",
              location: "Mumbai Port",
              distance: "25 km",
            },
            pricePerKg: 40,
            total: 7600,
            alternativeBuyers: [
              { name: "Local (₹28/kg)", pricePerKg: 28 },
              { name: "Distant (₹32/kg)", pricePerKg: 32 },
            ],
          },
          {
            qualityCategory: "Ripe",
            items: 160,
            weight: 320,
            recommendedSaleFor: "Export",
            recommendedBuyer: {
              name: "Dubai Fruit Market",
              location: "Dubai, UAE",
              distance: "International",
            },
            pricePerKg: 35,
            total: 11200,
            alternativeBuyers: [
              { name: "Local (₹24/kg)", pricePerKg: 24 },
              { name: "Distant (₹28/kg)", pricePerKg: 28 },
              { name: "Processing (₹20/kg)", pricePerKg: 20 },
            ],
          },
          {
            qualityCategory: "YetToRipe",
            items: 110,
            weight: 220,
            recommendedSaleFor: "Distant Market",
            recommendedBuyer: {
              name: "Azadpur Mandi",
              location: "Delhi",
              distance: "1,400 km",
            },
            pricePerKg: 20,
            total: 4400,
            alternativeBuyers: [
              { name: "Local (₹18/kg)", pricePerKg: 18 },
              { name: "Processing (₹15/kg)", pricePerKg: 15 },
            ],
          },
          {
            qualityCategory: "Overripe",
            items: 45,
            weight: 90,
            recommendedSaleFor: "Processing Unit",
            recommendedBuyer: {
              name: "ITC Foods Ltd",
              location: "Pune, Maharashtra",
              distance: "150 km",
            },
            pricePerKg: 8,
            total: 720,
            alternativeBuyers: [
              { name: "Local (₹12/kg)", pricePerKg: 12 },
            ],
          },
          {
            qualityCategory: "Rotten",
            items: 25,
            weight: 50,
            recommendedSaleFor: "Biogas",
            recommendedBuyer: {
              name: "Biogas Plant",
              location: "Nearby Farm",
              distance: "5 km",
            },
            pricePerKg: 1,
            total: 50,
            alternativeBuyers: [
              { name: "Local Compost (₹2/kg)", pricePerKg: 2 },
            ],
          },
        ],
        totalOptimalRevenue: 23970,
      },
    ];

    this.markets = [
      {
        id: "vashi-apmc",
        name: "Vashi APMC Market",
        location: "Navi Mumbai, Maharashtra",
        distance: "12 km",
        transport: "Same day",
        capacity: "500 tons/day",
        grades: ["Premium", "Ripe", "Yet-to-ripe"],
        category: "local",
      },
      {
        id: "crawford-market",
        name: "Crawford Market",
        location: "Mumbai, Maharashtra",
        distance: "18 km",
        transport: "Same day",
        capacity: "300 tons/day",
        grades: ["Premium", "Ripe"],
        category: "local",
      },
      {
        id: "azadpur-mandi",
        name: "Azadpur Mandi",
        location: "Delhi",
        distance: "1,400 km",
        transport: "2-3 days",
        capacity: "2000 tons/day",
        grades: ["Premium", "Ripe", "Yet-to-ripe"],
        category: "distant",
      },
      {
        id: "koyambedu-market",
        name: "Koyambedu Market",
        location: "Chennai, Tamil Nadu",
        distance: "1,200 km",
        transport: "2 days",
        capacity: "1500 tons/day",
        grades: ["Premium", "Ripe"],
        category: "distant",
      },
      {
        id: "jnpt-export",
        name: "JNPT Export Terminal",
        location: "Mumbai Port",
        distance: "25 km",
        transport: "International shipping",
        capacity: "10000 tons/month",
        grades: ["Premium"],
        category: "export",
      },
      {
        id: "dubai-fruit",
        name: "Dubai Fruit Market",
        location: "Dubai, UAE",
        distance: "International",
        transport: "Air/Sea freight",
        capacity: "5000 tons/month",
        grades: ["Premium", "Ripe"],
        category: "export",
      },
      {
        id: "itc-foods",
        name: "ITC Foods Ltd",
        location: "Pune, Maharashtra",
        distance: "150 km",
        transport: "1 day",
        capacity: "800 tons/day",
        grades: ["Ripe", "Yet-to-ripe", "Overripe"],
        category: "processing",
      },
      {
        id: "britannia",
        name: "Britannia Industries",
        location: "Mumbai, Maharashtra",
        distance: "35 km",
        transport: "Same day",
        capacity: "600 tons/day",
        grades: ["Ripe", "Yet-to-ripe"],
        category: "processing",
      },
      {
        id: "haldirams",
        name: "Haldiram's",
        location: "Nagpur, Maharashtra",
        distance: "800 km",
        transport: "1-2 days",
        capacity: "400 tons/day",
        grades: ["Ripe", "Overripe"],
        category: "processing",
      },
      {
        id: "nestle",
        name: "Nestle India",
        location: "Goa",
        distance: "450 km",
        transport: "1 day",
        capacity: "500 tons/day",
        grades: ["Premium", "Ripe"],
        category: "processing",
      },
      {
        id: "local-compost",
        name: "Local Compost Unit",
        location: "Nearby Farm",
        distance: "5 km",
        transport: "Same day",
        capacity: "100 tons/day",
        grades: ["Rotten"],
        category: "decompost",
      },
      {
        id: "biogas-plant",
        name: "Biogas Plant",
        location: "Nearby Farm",
        distance: "5 km",
        transport: "Same day",
        capacity: "100 tons/day",
        grades: ["Rotten"],
        category: "decompost",
      },
    ];

    this.overallSummary = {
      totalOptimalRevenue: 260124,
      totalItems: 1910,
      avgRevenuePerItem: 136,
      breakdown: [
        {
          category: "Export",
          revenue: 201700,
          items: 1175,
          percentage: 77.5,
        },
        {
          category: "Distant",
          revenue: 53400,
          items: 490,
          percentage: 20.5,
        },
        {
          category: "Processing",
          revenue: 4452,
          items: 102,
          percentage: 1.7,
        },
        {
          category: "Local",
          revenue: 300,
          items: 75,
          percentage: 0.1,
        },
        {
          category: "Decompost",
          revenue: 272,
          items: 68,
          percentage: 0.1,
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
      labels: ["Alphonso", "Kesar", "Robusta", "Bhindi", "Tomato"],
      datasets: [
        {
          label: "Today",
          data: [90480, 62344, 57360, 26136, 23804],
          backgroundColor: "#22543D",
        },
        {
          label: "Season Avg",
          data: [85000, 58000, 52000, 24000, 22000],
          backgroundColor: "#68D391",
        },
        {
          label: "Last Year",
          data: [80000, 55000, 48000, 23000, 20000],
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
          label: "Alphonso",
          data: [280, 300, 250, 280],
          borderColor: "#22543D",
          backgroundColor: "rgba(34, 84, 61, 0.1)",
        },
        {
          label: "Kesar",
          data: [210, 230, 200, 210],
          borderColor: "#68D391",
          backgroundColor: "rgba(104, 211, 145, 0.1)",
        },
        {
          label: "Banana",
          data: [620, 650, 600, 620],
          borderColor: "#F6E05E",
          backgroundColor: "rgba(246, 224, 94, 0.1)",
        },
        {
          label: "Bhindi",
          data: [365, 380, 350, 365],
          borderColor: "#9C4221",
          backgroundColor: "rgba(156, 66, 33, 0.1)",
        },
        {
          label: "Tomato",
          data: [435, 450, 420, 435],
          borderColor: "#DC2626",
          backgroundColor: "rgba(220, 38, 38, 0.1)",
        },
      ],
    };
  }

  // Consumer Dashboard Methods
  async getBinTypes(): Promise<any[]> {
    return [
      {
        id: "residential-bin",
        name: "Residential Smart Bin",
        type: "Residential",
        totalItems: 450,
        qualityDistribution: {
          dry: 180,
          wet: 150,
          plastic: 80,
          electronic: 25,
          medical: 15,
        },
        optimalRecyclingPlan: [
          {
            wasteCategory: "dry",
            items: 180,
            weight: 90,
            recommendedRecycler: "Green Earth Compost",
            location: "Andheri West",
            distance: "8 km",
            pricePerKg: 12,
            total: 1080,
            vinyasaCoins: 180,
          },
          {
            wasteCategory: "wet",
            items: 150,
            weight: 120,
            recommendedRecycler: "Mumbai Biogas Plant",
            location: "Powai",
            distance: "15 km",
            pricePerKg: 8,
            total: 960,
            vinyasaCoins: 150,
          },
        ],
      },
      {
        id: "office-bin",
        name: "Office Smart Bin",
        type: "Office",
        totalItems: 320,
        qualityDistribution: {
          dry: 50,
          wet: 40,
          plastic: 120,
          electronic: 80,
          medical: 30,
        },
        optimalRecyclingPlan: [
          {
            wasteCategory: "plastic",
            items: 120,
            weight: 60,
            recommendedRecycler: "Plastic Recyclers Ltd",
            location: "Malad",
            distance: "12 km",
            pricePerKg: 25,
            total: 1500,
            vinyasaCoins: 240,
          },
          {
            wasteCategory: "electronic",
            items: 80,
            weight: 40,
            recommendedRecycler: "TechCycle Solutions",
            location: "BKC",
            distance: "5 km",
            pricePerKg: 150,
            total: 6000,
            vinyasaCoins: 400,
          },
        ],
      },
      {
        id: "industrial-bin",
        name: "Industrial Smart Bin",
        type: "Industrial",
        totalItems: 680,
        qualityDistribution: {
          dry: 200,
          wet: 80,
          plastic: 250,
          electronic: 120,
          medical: 30,
        },
        optimalRecyclingPlan: [
          {
            wasteCategory: "plastic",
            items: 250,
            weight: 125,
            recommendedRecycler: "Industrial Plastic Recyclers",
            location: "MIDC Andheri",
            distance: "20 km",
            pricePerKg: 30,
            total: 3750,
            vinyasaCoins: 500,
          },
        ],
      },
      {
        id: "medical-bin",
        name: "Medical Smart Bin",
        type: "Medical",
        totalItems: 180,
        qualityDistribution: {
          dry: 20,
          wet: 10,
          plastic: 40,
          electronic: 30,
          medical: 80,
        },
        optimalRecyclingPlan: [
          {
            wasteCategory: "medical",
            items: 80,
            weight: 40,
            recommendedRecycler: "BioMedical Waste Solutions",
            location: "Turbhe",
            distance: "25 km",
            pricePerKg: 200,
            total: 8000,
            vinyasaCoins: 800,
          },
        ],
      },
    ];
  }

  async getRecyclers(): Promise<any[]> {
    return [
      {
        id: "green-earth",
        name: "Green Earth Compost",
        type: "Compost",
        location: "Andheri West",
        distance: "8 km",
        capacity: "500 kg/day",
        specializes: ["dry", "wet"],
        rating: 4.8,
        priceRange: "₹8-15/kg",
      },
      {
        id: "plastic-recyclers",
        name: "Plastic Recyclers Ltd",
        type: "Plastic Processing",
        location: "Malad",
        distance: "12 km",
        capacity: "2000 kg/day",
        specializes: ["plastic"],
        rating: 4.6,
        priceRange: "₹20-30/kg",
      },
      {
        id: "techcycle",
        name: "TechCycle Solutions",
        type: "E-Waste",
        location: "BKC",
        distance: "5 km",
        capacity: "100 units/day",
        specializes: ["electronic"],
        rating: 4.9,
        priceRange: "₹100-200/kg",
      },
      {
        id: "biomedical-waste",
        name: "BioMedical Waste Solutions",
        type: "Medical Waste",
        location: "Turbhe",
        distance: "25 km",
        capacity: "1000 kg/day",
        specializes: ["medical"],
        rating: 4.7,
        priceRange: "₹150-250/kg",
      },
    ];
  }

  async getConsumerSummary(): Promise<any> {
    return {
      totalSorted: 1630,
      totalWeight: 815,
      avgRecyclingRate: 92,
      revenue: 21290,
      vinyasaCoins: 2270,
    };
  }

  async getConsumerOverallSummary(): Promise<any> {
    return {
      totalOptimalRevenue: 21290,
      totalItems: 1630,
      avgRevenuePerItem: 13.1,
      totalVinyasaCoins: 2270,
      avgCoinsPerItem: 1.4,
    };
  }

  async getWasteComparison(): Promise<any> {
    return {
      labels: ["Residential", "Office", "Industrial", "Medical"],
      datasets: [
        {
          label: "Today",
          data: [21290, 18750, 15600, 12300],
          backgroundColor: "#22543D",
        },
        {
          label: "This Week",
          data: [19500, 17200, 14800, 11800],
          backgroundColor: "#68D391",
        },
        {
          label: "Last Month",
          data: [18200, 16500, 13900, 11200],
          backgroundColor: "#F6E05E",
        },
      ],
    };
  }

  async getWasteTrends(): Promise<any> {
    return {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Residential",
          data: [450, 480, 420, 450],
          borderColor: "#22543D",
          backgroundColor: "rgba(34, 84, 61, 0.1)",
        },
        {
          label: "Office",
          data: [320, 340, 300, 320],
          borderColor: "#68D391",
          backgroundColor: "rgba(104, 211, 145, 0.1)",
        },
        {
          label: "Industrial",
          data: [680, 720, 650, 680],
          borderColor: "#F6E05E",
          backgroundColor: "rgba(246, 224, 94, 0.1)",
        },
        {
          label: "Medical",
          data: [180, 190, 170, 180],
          borderColor: "#DC2626",
          backgroundColor: "rgba(220, 38, 38, 0.1)",
        },
      ],
    };
  }
}

export const storage = new MemStorage();
