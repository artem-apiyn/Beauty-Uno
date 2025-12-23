import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'hair', 'salon', 'cosmetology'
  price: text("price").notNull(), // text to allow "from $X"
  imageUrl: text("image_url").notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });

export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
