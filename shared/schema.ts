import { z } from "zod";

export const wasteCategories = ['Dry', 'Wet', 'Plastic', 'Electronic', 'Medical'] as const;
export const recyclingCategories = ['Compost', 'Plastic Recycling', 'eWaste Recycling', 'Medical Waste Recycling', 'General Waste'] as const;

export const wasteTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  binType: z.string(),
  totalItems: z.number(),
  wasteDistribution: z.record(z.enum(wasteCategories), z.number()),
  optimalDisposalPlan: z.array(z.object({
    wasteCategory: z.enum(wasteCategories),
    items: z.number(),
    weight: z.number(),
    recommendedDisposalTo: z.enum(recyclingCategories),
    recommendedBuyer: z.object({
      name: z.string(),
      location: z.string(),
      distance: z.string(),
    }),
    pricePerKg: z.number(),
    total: z.number(),
    currency: z.enum(['INR', 'VC']).optional(),
    alternativeBuyers: z.array(z.object({
      name: z.string(),
      pricePerKg: z.number(),
    })),
  })),
  totalOptimalRevenue: z.number(),
  totalVinyasaCoins: z.number().optional(),
});

export const recyclerSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  distance: z.string(),
  transport: z.string(),
  capacity: z.string(),
  acceptedWaste: z.array(z.string()),
  category: z.enum(['compost', 'plastic', 'ewaste', 'medical', 'general']),
});

export const summarySchema = z.object({
  totalSorted: z.number(),
  totalWeight: z.number(),
  avgQuality: z.number(),
  revenue: z.number(),
  vinyasaCoins: z.number().optional(),
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

export type WasteType = z.infer<typeof wasteTypeSchema>;
export type Recycler = z.infer<typeof recyclerSchema>;
export type Summary = z.infer<typeof summarySchema>;
export type OverallSummary = z.infer<typeof overallSummarySchema>;

// Legacy types for backward compatibility
export type ProduceVariety = WasteType;
export type Market = Recycler;
