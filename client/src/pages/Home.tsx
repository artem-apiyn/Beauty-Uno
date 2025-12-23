import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useServices } from "@/hooks/use-services";
import { ServiceCard } from "@/components/ServiceCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { data: services, isLoading } = useServices();

  const featuredServices = services?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash: Elegant salon interior with warm lighting */}
          <img 
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop" 
            alt="Salon Uno Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium text-[#bd7f28]">
              Добро пожаловать в Uno
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              Искусство <br />
              <span className="italic font-light">Вашей Красоты</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg text-white/80 font-light mb-10 leading-relaxed">
              Премиальные услуги парикмахеров, косметологов и стилистов в атмосфере абсолютного комфорта и роскоши.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services">
                <button className="bg-primary text-white hover:bg-white hover:text-foreground px-8 py-4 uppercase text-sm tracking-widest font-bold transition-all duration-300 min-w-[200px]">
                  Наши услуги
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-white text-white hover:bg-white hover:text-foreground px-8 py-4 uppercase text-sm tracking-widest font-bold transition-all duration-300 min-w-[200px]">
                  Записаться
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Unsplash: Close up of woman with beautiful hair */}
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" 
                alt="Philosophy" 
                className="w-full h-[600px] object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-background p-8 shadow-lg hidden lg:flex flex-col justify-center border border-primary/20">
                <h4 className="font-display text-4xl text-primary mb-2">10+</h4>
                <p className="text-muted-foreground uppercase tracking-widest text-sm">Лет опыта в индустрии красоты</p>
              </div>
            </div>
            
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">О Салоне</span>
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
                Естественная красота <br />в деталях
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-normal">В салоне красоты Uno мы верим, что истинная красота начинается с заботы о себе. Наша философия основана на индивидуальном подходе к каждому гостю. Мы не просто оказываем услуги — мы создаем настроение и уверенность в себе.</p>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-normal">
                Наша команда профессионалов использует только премиальную косметику и передовые методики, чтобы подчеркнуть вашу природную привлекательность.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-full text-primary">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1 text-[20px]">Премиум качество</h5>
                    <p className="text-sm text-muted-foreground">Только лучшие бренды и материалы</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-full text-primary">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1 text-[20px]">Опытные мастера</h5>
                    <p className="text-sm text-muted-foreground">Постоянное повышение квалификации</p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="inline-flex items-center text-primary font-bold uppercase tracking-widest hover:text-foreground transition-colors group">
                Узнать больше <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-3 block">Услуги</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Наши направления</h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-gray-200 animate-pulse rounded-sm" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} variant="minimal" />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="border-b-2 border-foreground pb-1 uppercase tracking-widest font-bold hover:text-primary hover:border-primary transition-all">
                Смотреть все услуги
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl mb-6">Готовы к преображению?</h2>
          <p className="text-white/60 text-lg font-light mb-10 max-w-2xl mx-auto">
            Запишитесь на консультацию или процедуру прямо сейчас. Наши администраторы подберут удобное для вас время.
          </p>
          <Link href="/contact">
            <button className="bg-primary text-white hover:bg-white hover:text-foreground px-10 py-5 uppercase text-sm tracking-widest font-bold transition-all duration-300">
              Записаться онлайн
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
