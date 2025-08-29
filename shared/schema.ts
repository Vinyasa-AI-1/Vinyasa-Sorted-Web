import { z } from "zod";

export const qualityCategories = ['Premium', 'Ripe', 'YetToRipe', 'Overripe', 'Rotten'] as const;
export const saleCategories = ['Export', 'Local Market', 'Distant Market', 'Processing Unit', 'Biogas', 'Decompost'] as const;

// Waste management schemas
export const wasteCategories = ['Dry', 'Wet', 'Plastic', 'Electronic', 'Medical'] as const;
export const recyclerTypes = ['Compost', 'Plastic Recyclers', 'eWaste Recyclers', 'Medical Waste Recyclers', 'Generic Recyclers', 'Local Recyclers'] as const;
export const paymentTypes = ['Rupees', 'Vinyasa Coins'] as const;

export const produceVarietySchema = z.object({
  id: z.string(),
  name: z.string(),
  variety: z.string(),
  totalItems: z.number(),
  qualityDistribution: z.record(z.enum(qualityCategories), z.number()),
  optimalRevenuePlan: z.array(z.object({
    qualityCategory: z.enum(qualityCategories),
    items: z.number(),
    weight: z.number(),
    recommendedSaleFor: z.enum(saleCategories),
    recommendedBuyer: z.object({
      name: z.string(),
      location: z.string(),
      distance: z.string(),
    }),
    pricePerKg: z.number(),
    total: z.number(),
    alternativeBuyers: z.array(z.object({
      name: z.string(),
      pricePerKg: z.number(),
    })),
  })),
  totalOptimalRevenue: z.number(),
});

export const marketSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  distance: z.string(),
  transport: z.string(),
  capacity: z.string(),
  grades: z.array(z.string()),
  category: z.enum(['local', 'distant', 'export', 'processing', 'decompost']),
});

export const summarySchema = z.object({
  totalSorted: z.number(),
  totalWeight: z.number(),
  avgQuality: z.number(),
  revenue: z.number(),
});

export const overallSummarySchema = z.object({
  totalOptimalRevenue: z.number(),
  totalItems: z.number(),
  avgRevenuePerItem: z.number(),
  breakdown: z.array(z.object({
    category: z.string(),
    revenue: z.number(),
    items: z.number(),
    percentage: z.number(),
  })),
});

export const wasteVarietySchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(wasteCategories),
  totalItems: z.number(),
  qualityDistribution: z.record(z.enum(['Fresh', 'Good', 'Average', 'Poor', 'Contaminated']), z.number()),
  optimalRevenuePlan: z.array(z.object({
    qualityCategory: z.enum(['Fresh', 'Good', 'Average', 'Poor', 'Contaminated']),
    items: z.number(),
    weight: z.number(),
    recommendedRecycler: z.enum(recyclerTypes),
    recommendedBuyer: z.object({
      name: z.string(),
      location: z.string(),
      distance: z.string(),
    }),
    paymentType: z.enum(paymentTypes),
    pricePerKg: z.number().optional(),
    vinyasaCoins: z.number().optional(),
    total: z.number(),
    alternativeBuyers: z.array(z.object({
      name: z.string(),
      paymentType: z.enum(paymentTypes),
      pricePerKg: z.number().optional(),
      vinyasaCoins: z.number().optional(),
    })),
  })),
  totalOptimalRevenue: z.number(),
  totalVinyasaCoins: z.number(),
});

export const recyclerSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  distance: z.string(),
  transport: z.string(),
  capacity: z.string(),
  acceptedWasteTypes: z.array(z.enum(wasteCategories)),
  category: z.enum(recyclerTypes),
  paymentType: z.enum(paymentTypes),
  priceRange: z.string(),
});

export const wasteSummarySchema = z.object({
  totalSorted: z.number(),
  totalWeight: z.number(),
  avgQuality: z.number(),
  revenue: z.number(),
  totalVinyasaCoins: z.number(),
});

export const wasteOverallSummarySchema = z.object({
  totalOptimalRevenue: z.number(),
  totalVinyasaCoins: z.number(),
  totalItems: z.number(),
  avgRevenuePerItem: z.number(),
  breakdown: z.array(z.object({
    category: z.string(),
    revenue: z.number(),
    vinyasaCoins: z.number(),
    items: z.number(),
    percentage: z.number(),
  })),
});

export type ProduceVariety = z.infer<typeof produceVarietySchema>;
export type Market = z.infer<typeof marketSchema>;
export type Summary = z.infer<typeof summarySchema>;
export type OverallSummary = z.infer<typeof overallSummarySchema>;
export type WasteVariety = z.infer<typeof wasteVarietySchema>;
export type Recycler = z.infer<typeof recyclerSchema>;
export type WasteSummary = z.infer<typeof wasteSummarySchema>;
export type WasteOverallSummary = z.infer<typeof wasteOverallSummarySchema>;
