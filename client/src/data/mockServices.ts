export type Service = {
  id: number;
  name: string;
  description: string;
  category: "hair" | "salon" | "cosmetology";
  price: string;
  imageUrl: string;
};

export const mockServices: Service[] = [
  {
    id: 1,
    name: "Женская стрижка",
    description: "Индивидуальный подбор формы, мытье головы, укладка.",
    category: "hair",
    price: "от 1500 ₽",
    imageUrl: "/hairstyle-service.jpg"
  },
  {
    id: 2,
    name: "Окрашивание волос",
    description: "Сложные техники окрашивания, тонирование, мелирование.",
    category: "hair",
    price: "от 3000 ₽",
    imageUrl: "/coloring-service.jpg"
  },
  {
    id: 3,
    name: "Маникюр",
    description: "Классический, аппаратный, комбинированный маникюр с покрытием.",
    category: "salon",
    price: "от 1200 ₽",
    imageUrl: "/manicure-service.jpg"
  },
  {
    id: 4,
    name: "Педикюр",
    description: "Полная обработка стоп и пальцев, покрытие гель-лаком.",
    category: "salon",
    price: "от 2000 ₽",
    imageUrl: "https://images.unsplash.com/photo-1519429638631-5968c431d3b8?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Чистка лица",
    description: "Ультразвуковая, механическая или комбинированная чистка.",
    category: "cosmetology",
    price: "от 2500 ₽",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Массаж лица",
    description: "Классический, лимфодренажный или скульптурный массаж.",
    category: "cosmetology",
    price: "от 1800 ₽",
    imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
  }
];

