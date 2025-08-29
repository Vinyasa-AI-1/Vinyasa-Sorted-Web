import { type ProduceVariety, type Market, type Summary, type OverallSummary, type WasteVariety, type Recycler, type WasteSummary, type WasteOverallSummary } from "@shared/schema";

export interface IStorage {
  getProduceVarieties(): Promise<ProduceVariety[]>;
  getMarkets(): Promise<Market[]>;
  getSummary(): Promise<Summary>;
  getOverallSummary(): Promise<OverallSummary>;
  getRevenueComparison(): Promise<any>;
  getVolumeTrends(): Promise<any>;
  
  // Waste management methods
  getWasteVarieties(): Promise<WasteVariety[]>;
  getRecyclers(): Promise<Recycler[]>;
  getWasteSummary(): Promise<WasteSummary>;
  getWasteOverallSummary(): Promise<WasteOverallSummary>;
  getWasteRevenueComparison(): Promise<any>;
  getWasteVolumeTrends(): Promise<any>;
}

export class MemStorage implements IStorage {
  private produceVarieties: ProduceVariety[];
  private markets: Market[];
  private summary: Summary;
  private overallSummary: OverallSummary;
  
  // Waste management data
  private wasteVarieties: WasteVariety[];
  private recyclers: Recycler[];
  private wasteSummary: WasteSummary;
  private wasteOverallSummary: WasteOverallSummary;

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

    // Initialize waste management data
    this.wasteSummary = {
      totalSorted: 1450,
      totalWeight: 2840,
      avgQuality: 82,
      revenue: 18500,
      totalVinyasaCoins: 2840,
    };

    this.wasteVarieties = [
      {
        id: "dry-waste",
        name: "Dry Waste",
        category: "Dry",
        totalItems: 420,
        qualityDistribution: {
          Fresh: 95,
          Good: 180,
          Average: 100,
          Poor: 35,
          Contaminated: 10,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Fresh",
            items: 95,
            weight: 190,
            recommendedRecycler: "Generic Recyclers",
            recommendedBuyer: {
              name: "Mumbai Paper Mills",
              location: "Thane, Maharashtra",
              distance: "15 km",
            },
            paymentType: "Rupees",
            pricePerKg: 12,
            total: 2280,
            alternativeBuyers: [
              { name: "Local (₹10/kg)", paymentType: "Rupees", pricePerKg: 10 },
              { name: "Vinyasa Coins (15 coins/kg)", paymentType: "Vinyasa Coins", vinyasaCoins: 15 },
            ],
          },
          {
            qualityCategory: "Good",
            items: 180,
            weight: 360,
            recommendedRecycler: "Local Recyclers",
            recommendedBuyer: {
              name: "BKC Recycling Center",
              location: "BKC, Mumbai",
              distance: "2 km",
            },
            paymentType: "Vinyasa Coins",
            vinyasaCoins: 12,
            total: 4320,
            alternativeBuyers: [
              { name: "Generic (₹8/kg)", paymentType: "Rupees", pricePerKg: 8 },
              { name: "Local (10 coins/kg)", paymentType: "Vinyasa Coins", vinyasaCoins: 10 },
            ],
          },
        ],
        totalOptimalRevenue: 6600,
        totalVinyasaCoins: 4320,
      },
      {
        id: "wet-waste",
        name: "Wet Waste", 
        category: "Wet",
        totalItems: 380,
        qualityDistribution: {
          Fresh: 120,
          Good: 140,
          Average: 80,
          Poor: 30,
          Contaminated: 10,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Fresh",
            items: 120,
            weight: 240,
            recommendedRecycler: "Compost",
            recommendedBuyer: {
              name: "Green Earth Composting",
              location: "Mulund, Mumbai",
              distance: "18 km",
            },
            paymentType: "Vinyasa Coins",
            vinyasaCoins: 20,
            total: 4800,
            alternativeBuyers: [
              { name: "Local Compost (₹15/kg)", paymentType: "Rupees", pricePerKg: 15 },
              { name: "Biogas (18 coins/kg)", paymentType: "Vinyasa Coins", vinyasaCoins: 18 },
            ],
          },
        ],
        totalOptimalRevenue: 2400,
        totalVinyasaCoins: 4800,
      },
      {
        id: "plastic-waste",
        name: "Plastic Waste",
        category: "Plastic", 
        totalItems: 350,
        qualityDistribution: {
          Fresh: 80,
          Good: 150,
          Average: 90,
          Poor: 25,
          Contaminated: 5,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Fresh",
            items: 80,
            weight: 160,
            recommendedRecycler: "Plastic Recyclers",
            recommendedBuyer: {
              name: "Mumbai Plastic Industries",
              location: "Andheri, Mumbai", 
              distance: "12 km",
            },
            paymentType: "Rupees",
            pricePerKg: 25,
            total: 4000,
            alternativeBuyers: [
              { name: "Local (₹20/kg)", paymentType: "Rupees", pricePerKg: 20 },
              { name: "Vinyasa (30 coins/kg)", paymentType: "Vinyasa Coins", vinyasaCoins: 30 },
            ],
          },
        ],
        totalOptimalRevenue: 4000,
        totalVinyasaCoins: 4800,
      },
      {
        id: "electronic-waste", 
        name: "Electronic Waste",
        category: "Electronic",
        totalItems: 200,
        qualityDistribution: {
          Fresh: 45,
          Good: 90,
          Average: 50,
          Poor: 12,
          Contaminated: 3,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Fresh",
            items: 45,
            weight: 90,
            recommendedRecycler: "eWaste Recyclers",
            recommendedBuyer: {
              name: "TechnoGreen E-Waste",
              location: "Powai, Mumbai",
              distance: "8 km",
            },
            paymentType: "Rupees",
            pricePerKg: 150,
            total: 13500,
            alternativeBuyers: [
              { name: "Local (₹120/kg)", paymentType: "Rupees", pricePerKg: 120 },
              { name: "Vinyasa (180 coins/kg)", paymentType: "Vinyasa Coins", vinyasaCoins: 180 },
            ],
          },
        ],
        totalOptimalRevenue: 13500,
        totalVinyasaCoins: 16200,
      },
      {
        id: "medical-waste",
        name: "Medical Waste",
        category: "Medical",
        totalItems: 100,
        qualityDistribution: {
          Fresh: 25,
          Good: 40,
          Average: 25,
          Poor: 8,
          Contaminated: 2,
        },
        optimalRevenuePlan: [
          {
            qualityCategory: "Fresh", 
            items: 25,
            weight: 50,
            recommendedRecycler: "Medical Waste Recyclers",
            recommendedBuyer: {
              name: "SafeMed Disposal",
              location: "Mahape, Navi Mumbai",
              distance: "22 km",
            },
            paymentType: "Rupees",
            pricePerKg: 200,
            total: 10000,
            alternativeBuyers: [
              { name: "Authorized Disposal (₹180/kg)", paymentType: "Rupees", pricePerKg: 180 },
              { name: "Vinyasa (250 coins/kg)", paymentType: "Vinyasa Coins", vinyasaCoins: 250 },
            ],
          },
        ],
        totalOptimalRevenue: 10000,
        totalVinyasaCoins: 12500,
      },
    ];

    this.recyclers = [
      {
        id: "green-earth-composting",
        name: "Green Earth Composting",
        location: "Mulund, Mumbai",
        distance: "18 km",
        transport: "Truck",
        capacity: "500 kg/day",
        acceptedWasteTypes: ["Wet"],
        category: "Compost",
        paymentType: "Vinyasa Coins",
        priceRange: "15-20 coins/kg",
      },
      {
        id: "mumbai-plastic-industries",
        name: "Mumbai Plastic Industries", 
        location: "Andheri, Mumbai",
        distance: "12 km",
        transport: "Truck",
        capacity: "1000 kg/day",
        acceptedWasteTypes: ["Plastic"],
        category: "Plastic Recyclers",
        paymentType: "Rupees",
        priceRange: "₹20-25/kg",
      },
      {
        id: "techno-green-ewaste",
        name: "TechnoGreen E-Waste",
        location: "Powai, Mumbai",
        distance: "8 km",
        transport: "Van",
        capacity: "200 kg/day",
        acceptedWasteTypes: ["Electronic"],
        category: "eWaste Recyclers",
        paymentType: "Rupees",
        priceRange: "₹120-150/kg",
      },
      {
        id: "safemed-disposal",
        name: "SafeMed Disposal",
        location: "Mahape, Navi Mumbai",
        distance: "22 km",
        transport: "Specialized Vehicle",
        capacity: "100 kg/day",
        acceptedWasteTypes: ["Medical"],
        category: "Medical Waste Recyclers",
        paymentType: "Rupees", 
        priceRange: "₹180-200/kg",
      },
      {
        id: "bkc-recycling-center",
        name: "BKC Recycling Center",
        location: "BKC, Mumbai",
        distance: "2 km",
        transport: "Cart",
        capacity: "300 kg/day",
        acceptedWasteTypes: ["Dry", "Plastic"],
        category: "Local Recyclers",
        paymentType: "Vinyasa Coins",
        priceRange: "8-12 coins/kg",
      },
    ];

    this.wasteOverallSummary = {
      totalOptimalRevenue: 40900,
      totalVinyasaCoins: 42620,
      totalItems: 1450,
      avgRevenuePerItem: 28.2,
      breakdown: [
        {
          category: "Electronic",
          revenue: 13500,
          vinyasaCoins: 16200,
          items: 200,
          percentage: 13.8,
        },
        {
          category: "Medical",
          revenue: 10000,
          vinyasaCoins: 12500,
          items: 100,
          percentage: 6.9,
        },
        {
          category: "Dry",
          revenue: 6600,
          vinyasaCoins: 4320,
          items: 420,
          percentage: 29.0,
        },
        {
          category: "Plastic",
          revenue: 4000,
          vinyasaCoins: 4800,
          items: 350,
          percentage: 24.1,
        },
        {
          category: "Wet",
          revenue: 2400,
          vinyasaCoins: 4800,
          items: 380,
          percentage: 26.2,
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

  // Waste management methods
  async getWasteVarieties(): Promise<WasteVariety[]> {
    return this.wasteVarieties;
  }

  async getRecyclers(): Promise<Recycler[]> {
    return this.recyclers;
  }

  async getWasteSummary(): Promise<WasteSummary> {
    return this.wasteSummary;
  }

  async getWasteOverallSummary(): Promise<WasteOverallSummary> {
    return this.wasteOverallSummary;
  }

  async getWasteRevenueComparison(): Promise<any> {
    return {
      labels: ["Dry", "Wet", "Plastic", "Electronic", "Medical"],
      datasets: [
        {
          label: "Today",
          data: [6600, 2400, 4000, 13500, 10000],
          backgroundColor: "#22543D",
        },
        {
          label: "Week Avg",
          data: [6200, 2200, 3800, 12800, 9500],
          backgroundColor: "#68D391",
        },
        {
          label: "Last Month",
          data: [5800, 2000, 3500, 12000, 9000],
          backgroundColor: "#F6E05E",
        },
      ],
    };
  }

  async getWasteVolumeTrends(): Promise<any> {
    return {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Dry Waste",
          data: [420, 440, 400, 420],
          borderColor: "#22543D",
          backgroundColor: "rgba(34, 84, 61, 0.1)",
        },
        {
          label: "Wet Waste",
          data: [380, 400, 360, 380],
          borderColor: "#68D391",
          backgroundColor: "rgba(104, 211, 145, 0.1)",
        },
        {
          label: "Plastic",
          data: [350, 370, 330, 350],
          borderColor: "#F6E05E",
          backgroundColor: "rgba(246, 224, 94, 0.1)",
        },
        {
          label: "Electronic",
          data: [200, 220, 180, 200],
          borderColor: "#9C4221",
          backgroundColor: "rgba(156, 66, 33, 0.1)",
        },
        {
          label: "Medical",
          data: [100, 110, 90, 100],
          borderColor: "#DC2626",
          backgroundColor: "rgba(220, 38, 38, 0.1)",
        },
      ],
    };
  }
}

export const storage = new MemStorage();
