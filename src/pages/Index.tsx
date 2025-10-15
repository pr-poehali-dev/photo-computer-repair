import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время!");
    setFormData({ name: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: "Monitor",
      title: "Ремонт ПК",
      description: "Диагностика и ремонт стационарных компьютеров",
    },
    {
      icon: "Laptop",
      title: "Ремонт ноутбуков",
      description: "Замена комплектующих, чистка, настройка",
    },
    {
      icon: "HardDrive",
      title: "Восстановление данных",
      description: "Спасение важных файлов с поврежденных носителей",
    },
    {
      icon: "Settings",
      title: "Настройка ПО",
      description: "Установка и настройка программного обеспечения",
    },
    {
      icon: "Wifi",
      title: "Настройка сети",
      description: "Подключение интернета, настройка роутеров",
    },
    {
      icon: "Shield",
      title: "Защита от вирусов",
      description: "Антивирусная защита и удаление вредоносных программ",
    },
  ];

  const advantages = [
    {
      icon: "Zap",
      title: "Быстро",
      description: "Большинство работ выполняется в день обращения",
    },
    {
      icon: "Award",
      title: "Опыт",
      description: "Более 10 лет работы в сфере ремонта техники",
    },
    {
      icon: "ThumbsUp",
      title: "Гарантия",
      description: "Предоставляем гарантию на все виды работ",
    },
    {
      icon: "DollarSign",
      title: "Честные цены",
      description: "Прозрачное ценообразование без скрытых платежей",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-orange-500 to-secondary py-20 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Ремонт компьютеров
                <span className="block text-4xl md:text-5xl mt-2">быстро и надёжно</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Профессиональный мастер с опытом более 10 лет. 
                Диагностика бесплатно!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 shadow-xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Услуги
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-left hidden md:block">
              <img 
                src="https://cdn.poehali.dev/projects/a496bf0e-2ad5-473d-b37d-a4449dd5e125/files/7d4d78ae-3b39-474c-97ae-66a9538aea29.jpg"
                alt="Ремонт компьютеров"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию компьютерной техники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg">
                  <Icon name={advantage.icon} className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card className="shadow-2xl border-2 animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900">
                    Ваше имя
                  </label>
                  <Input
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-lg border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900">
                    Телефон
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 text-lg border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900">
                    Опишите проблему
                  </label>
                  <Textarea
                    required
                    placeholder="Например: Компьютер не включается..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-lg border-2 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-xl text-xl py-6 font-bold"
                >
                  <Icon name="Send" className="mr-2" size={24} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-secondary to-primary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="tel:+79999999999" className="hover:scale-110 transition-transform">
              <Icon name="Phone" size={28} />
            </a>
            <a href="mailto:info@example.com" className="hover:scale-110 transition-transform">
              <Icon name="Mail" size={28} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="MessageCircle" size={28} />
            </a>
          </div>
          <p className="text-lg text-white/90">
            © 2024 Ремонт компьютеров. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;