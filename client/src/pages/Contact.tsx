import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { insertInquirySchema } from "@shared/schema";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Clock } from "lucide-react";
import { MessageCircle, Send } from "lucide-react";
import { z } from "zod";

type ContactForm = z.infer<typeof insertInquirySchema>;

export default function Contact() {
  const { toast } = useToast();
  const mutation = useCreateInquiry();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "no-reply@uno.local",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactForm) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Заявка отправлена",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Ошибка",
          description: error.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-3 block">Контакты</span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground">Свяжитесь с нами</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto bg-white p-8 md:p-12 shadow-xl shadow-primary/5 rounded-sm border border-border/50">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-3xl mb-8">Информация</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 uppercase tracking-wider text-sm">Адрес</h5>
                  <p className="text-muted-foreground font-light">Саратов, улица имени Ю.И. Менякина, 4</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 uppercase tracking-wider text-sm">Телефон</h5>
                  <p className="text-muted-foreground font-light">+7 (845) 290-04-25</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 uppercase tracking-wider text-sm">Время работы</h5>
                  <p className="text-muted-foreground font-light">9:00 - 20:00</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full text-primary shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold mb-3 uppercase tracking-wider text-sm">Мы в мессенджерах</h5>
                  <div className="flex gap-3">
                    <a href="https://t.me/unosaratov64" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full hover:opacity-80 transition-opacity">
                      <Send className="w-4 h-4" />
                    </a>
                    <a href="https://wa.me/79085577588" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full hover:opacity-80 transition-opacity">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 w-full bg-gray-100 rounded-sm overflow-hidden flex items-center justify-center">
               {/* Apple Maps Link */}
               <a 
                 href="https://maps.apple.com/place?place-id=IF3C1079797230D1F&address=%D0%98%D0%BC.+%D0%9C%D0%B5%D0%BD%D1%8F%D0%BA%D0%B8%D0%BD%D0%B0+%D0%AE.%D0%B8.+%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2C+4%2C+%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%2C+%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%2C+410037&coordinate=51.57607%2C46.075982&name=Uno%2C+%D1%81%D0%B0%D0%BB%D0%BE%D0%BD+%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D1%8B&_provider=9902"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex flex-col items-center justify-center gap-3 px-6 py-8 text-center hover:bg-gray-200/50 transition-colors w-full h-full"
               >
                 <MapPin className="w-8 h-8 text-primary" />
                 <p className="font-bold text-foreground">Посмотреть на Apple Maps</p>
                 <p className="text-sm text-muted-foreground">Саратов, ул. имени Ю.И. Менякина, 4</p>
               </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="font-display text-3xl mb-8">Напишите нам</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Имя</label>
                <Input 
                  {...form.register("name")} 
                  className="bg-secondary/20 border-border focus:border-primary h-12" 
                  placeholder="Ваше имя"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Телефон</label>
                <Input 
                  {...form.register("phone")} 
                  className="bg-secondary/20 border-border focus:border-primary h-12" 
                  placeholder="+7 (999) 000-00-00"
                />
                {form.formState.errors.phone && (
                  <p className="text-destructive text-sm">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Сообщение</label>
                <Textarea 
                  {...form.register("message")} 
                  className="bg-secondary/20 border-border focus:border-primary min-h-[150px]" 
                  placeholder="Опишите желаемую услугу или задайте вопрос..."
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full bg-primary text-white hover:bg-foreground transition-colors py-4 uppercase font-bold tracking-widest disabled:opacity-50"
              >
                {mutation.isPending ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
