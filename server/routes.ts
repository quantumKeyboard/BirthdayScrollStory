import type { Express } from "express";
import express from "express";
import { createServer } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // Serve static files
  app.use("/static", express.static(path.join(__dirname, "public")));

  return httpServer;
}