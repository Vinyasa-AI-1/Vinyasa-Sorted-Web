import { z } from "zod";

export const qualityCategories = ['Premium', 'Ripe', 'YetToRipe', 'Overripe', 'Rotten'] as const;
export const saleCategories = ['Export', 'Local Market', 'Distant Market', 'Processing Unit', 'Biogas', 'Decompost'] as const;

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

export type ProduceVariety = z.infer<typeof produceVarietySchema>;
export type Market = z.infer<typeof marketSchema>;
export type Summary = z.infer<typeof summarySchema>;
export type OverallSummary = z.infer<typeof overallSummarySchema>;
