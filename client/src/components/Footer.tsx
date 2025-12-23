import { Link } from "wouter";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl font-bold mb-6">UNO.</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Ваше пространство красоты и гармонии. Мы создаем образы, которые вдохновляют и раскрывают вашу индивидуальность.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-primary">Меню</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-primary transition-colors">Главная</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-primary transition-colors">О нас</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-primary">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span>ул. Ленина, 45, Москва</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-primary" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@unobeauty.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-primary">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8">
              <h5 className="font-display text-lg mb-2">Время работы</h5>
              <p className="text-white/60">Пн - Вс: 10:00 - 22:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; 2024 Salon Uno. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
