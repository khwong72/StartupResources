import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
// @ts-ignore
import apiRouter from "./api/index";

export async function registerRoutes(app: Express): Promise<Server> {
  // Mount the main API router at /api path
  app.use("/api", apiRouter);
  
  // Additional application routes can go here
  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
