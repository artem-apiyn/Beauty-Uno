import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    const services = [
      {
        name: "Женская стрижка",
        description: "Индивидуальный подбор формы, мытье головы, укладка.",
        category: "hair",
        price: "от 1500 ₽",
        imageUrl: "/hairstyle-service.jpg"
      },
      {
        name: "Окрашивание волос",
        description: "Сложные техники окрашивания, тонирование, мелирование.",
        category: "hair",
        price: "от 3000 ₽",
        imageUrl: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80"
      },
      {
        name: "Маникюр",
        description: "Классический, аппаратный, комбинированный маникюр с покрытием.",
        category: "salon",
        price: "от 1200 ₽",
        imageUrl: "/manicure-service.jpg"
      },
      {
        name: "Педикюр",
        description: "Полная обработка стоп и пальцев, покрытие гель-лаком.",
        category: "salon",
        price: "от 2000 ₽",
        imageUrl: "https://images.unsplash.com/photo-1519429638631-5968c431d3b8?auto=format&fit=crop&q=80"
      },
      {
        name: "Чистка лица",
        description: "Ультразвуковая, механическая или комбинированная чистка.",
        category: "cosmetology",
        price: "от 2500 ₽",
        imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
      },
      {
        name: "Массаж лица",
        description: "Классический, лимфодренажный или скульптурный массаж.",
        category: "cosmetology",
        price: "от 1800 ₽",
        imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
      }
    ];

    for (const service of services) {
      await storage.createService(service);
    }
    console.log("Database seeded with initial services");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database
  seedDatabase().catch(console.error);

  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.services.get.path, async (req, res) => {
    const service = await storage.getService(Number(req.params.id));
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
