import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import chatRoutes from "./routes/chat";

export async function registerRoutes(app: Express): Promise<Server> {
  // New consolidated API endpoints to match Vercel functions
  app.get("/api/producer", async (req, res) => {
    const { endpoint } = req.query;
    try {
      switch (endpoint) {
        case 'summary':
          const summary = await storage.getSummary();
          res.json(summary);
          break;
        case 'produce-varieties':
          const varieties = await storage.getProduceVarieties();
          res.json(varieties);
          break;
        case 'revenue-comparison':
          const revenueComparison = await storage.getRevenueComparison();
          res.json(revenueComparison);
          break;
        case 'volume-trends':
          const volumeTrends = await storage.getVolumeTrends();
          res.json(volumeTrends);
          break;
        default:
          res.status(400).json({ message: "Invalid endpoint" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch producer data" });
    }
  });

  app.get("/api/producer-data", async (req, res) => {
    const { endpoint } = req.query;
    try {
      switch (endpoint) {
        case 'markets':
          const markets = await storage.getMarkets();
          res.json(markets);
          break;
        case 'overall-summary':
          const overallSummary = await storage.getOverallSummary();
          res.json(overallSummary);
          break;
        default:
          res.status(400).json({ message: "Invalid endpoint" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch producer data" });
    }
  });

  app.get("/api/consumer", async (req, res) => {
    const { endpoint } = req.query;
    try {
      switch (endpoint) {
        case 'summary':
          const summary = await storage.getConsumerSummary();
          res.json(summary);
          break;
        case 'bin-types':
          const binTypes = await storage.getBinTypes();
          res.json(binTypes);
          break;
        case 'recyclers':
          const recyclers = await storage.getRecyclers();
          res.json(recyclers);
          break;
        case 'revenue-comparison':
          const revenueComparison = await storage.getWasteComparison();
          res.json(revenueComparison);
          break;
        case 'volume-trends':
          const volumeTrends = await storage.getWasteTrends();
          res.json(volumeTrends);
          break;
        default:
          res.status(400).json({ message: "Invalid endpoint" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consumer data" });
    }
  });

  app.get("/api/consumer-data", async (req, res) => {
    const { endpoint } = req.query;
    try {
      switch (endpoint) {
        case 'overall-summary':
          const overallSummary = await storage.getConsumerOverallSummary();
          res.json(overallSummary);
          break;
        case 'waste-comparison':
        case 'revenue-comparison':
          const wasteComparison = await storage.getWasteComparison();
          res.json(wasteComparison);
          break;
        case 'waste-trends':
        case 'volume-trends':
          const wasteTrends = await storage.getWasteTrends();
          res.json(wasteTrends);
          break;
        default:
          res.status(400).json({ message: "Invalid endpoint" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consumer data" });
    }
  });

  // Legacy individual endpoints (keeping for backward compatibility)
  app.get("/api/produce-varieties", async (_req, res) => {
    try {
      const varieties = await storage.getProduceVarieties();
      res.json(varieties);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch produce varieties" });
    }
  });

  app.get("/api/markets", async (_req, res) => {
    try {
      const markets = await storage.getMarkets();
      res.json(markets);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch markets" });
    }
  });

  app.get("/api/summary", async (_req, res) => {
    try {
      const summary = await storage.getSummary();
      res.json(summary);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch summary" });
    }
  });

  app.get("/api/overall-summary", async (_req, res) => {
    try {
      const overallSummary = await storage.getOverallSummary();
      res.json(overallSummary);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch overall summary" });
    }
  });

  app.get("/api/revenue-comparison", async (_req, res) => {
    try {
      const revenueComparison = await storage.getRevenueComparison();
      res.json(revenueComparison);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch revenue comparison" });
    }
  });

  app.get("/api/volume-trends", async (_req, res) => {
    try {
      const volumeTrends = await storage.getVolumeTrends();
      res.json(volumeTrends);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch volume trends" });
    }
  });

  // Legacy consumer endpoints (keeping for backward compatibility)
  app.get("/api/consumer/bin-types", async (_req, res) => {
    try {
      const binTypes = await storage.getBinTypes();
      res.json(binTypes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bin types" });
    }
  });

  app.get("/api/consumer/recyclers", async (_req, res) => {
    try {
      const recyclers = await storage.getRecyclers();
      res.json(recyclers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recyclers" });
    }
  });

  app.get("/api/consumer/summary", async (_req, res) => {
    try {
      const summary = await storage.getConsumerSummary();
      res.json(summary);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consumer summary" });
    }
  });

  app.get("/api/consumer/overall-summary", async (_req, res) => {
    try {
      const overallSummary = await storage.getConsumerOverallSummary();
      res.json(overallSummary);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consumer overall summary" });
    }
  });

  app.get("/api/consumer/waste-comparison", async (_req, res) => {
    try {
      const wasteComparison = await storage.getWasteComparison();
      res.json(wasteComparison);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch waste comparison" });
    }
  });

  app.get("/api/consumer/waste-trends", async (_req, res) => {
    try {
      const wasteTrends = await storage.getWasteTrends();
      res.json(wasteTrends);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch waste trends" });
    }
  });

  // Chat API
  app.use("/api/chat", chatRoutes);

  const httpServer = createServer(app);
  return httpServer;
}
