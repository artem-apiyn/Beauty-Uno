import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Hero */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Наша история</span>
          <h1 className="font-display text-5xl md:text-7xl mb-8">О Салоне Uno</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl mb-6">Больше чем просто салон красоты</h2>
            <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
              <p>
                Salon Uno был основан с простой, но амбициозной целью: создать пространство, где высочайший профессионализм сочетается с атмосферой абсолютного комфорта и уюта.
              </p>
              <p>
                Мы собрали команду талантливых стилистов, колористов и косметологов, которые не просто следуют трендам, но и создают их. Каждый мастер нашего салона — это художник, для которого ваша красота — главное произведение искусства.
              </p>
              <p>
                В нашей работе мы используем только проверенную косметику премиум-класса и современное оборудование, чтобы гарантировать безупречный результат и безопасность каждой процедуры.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-3xl text-primary mb-2">2014</h4>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Год основания</p>
              </div>
              <div>
                <h4 className="font-display text-3xl text-primary mb-2">5000+</h4>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Счастливых клиентов</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-12 space-y-4">
              {/* Unsplash: Minimalist salon detail */}
              <img 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop" 
                alt="Interior detail" 
                className="w-full h-64 object-cover rounded-sm"
              />
              {/* Unsplash: Beauty tools */}
              <img 
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop" 
                alt="Tools" 
                className="w-full h-48 object-cover rounded-sm"
              />
            </div>
            <div className="space-y-4">
              {/* Unsplash: Stylist working */}
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" 
                alt="Stylist" 
                className="w-full h-48 object-cover rounded-sm"
              />
              {/* Unsplash: Salon atmosphere */}
              <img 
                src="https://images.unsplash.com/photo-1630230350325-10255c256794?q=80&w=1000&auto=format&fit=crop" 
                alt="Atmosphere" 
                className="w-full h-64 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section Placeholder - simplistic for this demo */}
      <section className="bg-foreground text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl mb-12">Ждем вас в гости</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg font-light mb-10">
            Позвольте нам позаботиться о вас. Запишитесь на визит и откройте для себя новый уровень сервиса.
          </p>
          <Link href="/contact">
            <button className="bg-primary text-white hover:bg-white hover:text-foreground px-10 py-4 uppercase text-sm tracking-widest font-bold transition-all">
              Связаться с нами
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
