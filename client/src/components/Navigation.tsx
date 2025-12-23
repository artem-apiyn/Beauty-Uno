import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/about", label: "О нас" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-6 text-[#ffffff]"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl md:text-3xl font-bold tracking-wider text-foreground">
          UNO<span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary border-b border-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-primary text-white px-6 py-2 rounded-sm uppercase text-xs tracking-widest font-bold hover:bg-primary/90 transition-all">
              Записаться
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg py-8 px-4 flex flex-col items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-display uppercase tracking-widest transition-colors",
                location === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-primary text-white px-8 py-3 rounded-sm uppercase text-sm tracking-widest font-bold mt-4">
              Записаться
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
