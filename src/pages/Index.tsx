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
      icon: "UserCheck",
      title: "Честный мастер",
      description: "Работаем прозрачно и честно с каждым клиентом",
    },
    {
      icon: "Users",
      title: "Скидки пенсионерам",
      description: "Специальные цены для пенсионеров и инвалидов",
    },
    {
      icon: "Zap",
      title: "Качественно-Быстро",
      description: "Выполняем работу быстро и на высоком уровне",
    },
    {
      icon: "DollarSign",
      title: "Недорого",
      description: "Доступные цены на все виды услуг",
    },
    {
      icon: "Home",
      title: "Выезд на дом",
      description: "Приедем к вам домой или в офис",
    },
    {
      icon: "Clock",
      title: "Без выходных",
      description: "Работаем с 10 до 22 часов каждый день",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-orange-500 to-secondary py-20 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ussuri-Technicol
                <span className="block text-3xl md:text-4xl mt-2">Ремонт компьютерной техники</span>
              </h1>
              <div className="space-y-3 mb-8">
                <p className="text-2xl font-bold text-white">
                  ЧЕСТНЫЙ МАСТЕР
                </p>
                <p className="text-lg text-white/90">
                  Пенсионерам и инвалидам скидки
                </p>
                <p className="text-lg text-white/90">
                  Качественно-Быстро и Недорого!
                </p>
                <p className="text-lg text-white/90">
                  Выезд по адресу, а также в населенные пункты
                </p>
              </div>
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
                src="https://cdn.poehali.dev/projects/a496bf0e-2ad5-473d-b37d-a4449dd5e125/files/82332b7b-4baf-41ac-a46d-507e0d83537b.jpg"
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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/a496bf0e-2ad5-473d-b37d-a4449dd5e125/files/4075eb3b-1be7-4811-8f78-53182075869b.jpg"
                alt="Ремонт компьютеров - процесс работы"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/a496bf0e-2ad5-473d-b37d-a4449dd5e125/files/6a1172f7-7400-4ce2-8c76-af5ee9ede79a.jpg"
                alt="Диагностика компьютерной техники"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-xl">
                <Icon name="Phone" size={24} className="text-primary" />
                <a href="tel:+79910681672" className="hover:text-primary transition-colors font-semibold">
                  +7 (991) 068-16-72
                </a>
                <span className="text-muted-foreground">(WhatsApp)</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-xl">
                <Icon name="Phone" size={24} className="text-primary" />
                <a href="tel:+79644491228" className="hover:text-primary transition-colors font-semibold">
                  +7 (964) 449-12-28
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg text-muted-foreground">
                <Icon name="Clock" size={20} />
                <span>Работаем с 10 до 22 ч., без выходных</span>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Или оставьте заявку и мы свяжемся с вами
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
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ussuri-Technicol</h3>
              <p className="text-white/90">Ремонт компьютерной техники</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-white/90">
                <a href="tel:+79910681672" className="block hover:text-white transition-colors">
                  +7 (991) 068-16-72 (WhatsApp)
                </a>
                <a href="tel:+79644491228" className="block hover:text-white transition-colors">
                  +7 (964) 449-12-28
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Режим работы</h4>
              <p className="text-white/90">С 10 до 22 часов</p>
              <p className="text-white/90">Без выходных</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-white/90">
              © 2024 Ussuri-Technicol. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;