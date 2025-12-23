import { db } from "./db";
import {
  services,
  inquiries,
  type Service,
  type InsertService,
  type InsertInquiry,
  type Inquiry
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  // Helper for seeding
  createService(service: InsertService): Promise<Service>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getService(id: number): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(insertService).returning();
    return service;
  }
}

export const storage = new DatabaseStorage();
