import { useState } from "react";
import { useServices } from "@/hooks/use-services";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Все услуги" },
  { id: "hair", label: "Парикмахерские услуги" },
  { id: "salon", label: "Услуги салона" },
  { id: "cosmetology", label: "Косметология" },
];

export default function Services() {
  const { data: services, isLoading } = useServices();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = services?.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Header */}
      <div className="bg-foreground text-white pt-40 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Наши Услуги</h1>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Полный спектр процедур для вашей красоты и здоровья. От классических стрижек до передовой косметологии.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm uppercase tracking-widest font-bold transition-all border",
                activeCategory === cat.id
                  ? "bg-foreground text-white border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : filteredServices?.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            В данной категории пока нет услуг.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices?.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
