import { Service } from "@shared/schema";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  variant?: "minimal" | "full";
}

export function ServiceCard({ service, variant = "full" }: ServiceCardProps) {
  if (variant === "minimal") {
    return (
      <Link href="/services">
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden aspect-[3/4] rounded-sm mb-4">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <img 
              src={service.imageUrl} 
              alt={service.name} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <h3 className="font-display text-xl font-medium mb-1 group-hover:text-primary transition-colors">{service.name}</h3>
          <p className="text-muted-foreground font-light">{service.price}</p>
        </div>
      </Link>
    );
  }

  return (
    <div className="group flex flex-col h-full bg-white border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
          <img 
            src={service.imageUrl} 
            alt={service.name} 
            className="w-1/2 h-1/2 object-contain opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100"
          />
        </div>
        <img 
          src={service.imageUrl} 
          alt={service.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 text-sm font-medium">
          {service.price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
          {service.category === 'hair' ? 'Волосы' : service.category === 'salon' ? 'Салон' : 'Косметология'}
        </span>
        <h3 className="font-display text-2xl mb-3">{service.name}</h3>
        <p className="text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>
        <Link href="/contact">
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
            Записаться <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}
