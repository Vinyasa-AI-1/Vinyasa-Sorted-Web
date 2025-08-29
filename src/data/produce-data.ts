// This file contains static data for the agricultural produce dashboard
// In a real application, this would come from the API

export const PRODUCE_VARIETIES = [
  "Alphonso Mango",
  "Kesar Mango", 
  "Robusta Banana",
  "Bhindi (Okra)",
  "Tomato"
] as const;

export const QUALITY_CATEGORIES = [
  "Premium",
  "Ripe", 
  "YetToRipe",
  "Overripe",
  "Rotten"
] as const;

export const SALE_CATEGORIES = [
  "Export",
  "Local Market",
  "Distant Market", 
  "Processing Unit",
  "Biogas",
  "Decompost"
] as const;

export const MARKET_CATEGORIES = [
  "local",
  "distant",
  "export",
  "processing", 
  "decompost"
] as const;
