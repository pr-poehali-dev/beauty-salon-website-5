import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-montserrat font-bold text-beauty-dark">Beauty Room</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-beauty-dark hover:text-beauty-pink transition-colors">Главная</a>
            <a href="#services" className="text-beauty-dark hover:text-beauty-pink transition-colors">Услуги</a>
            <a href="#portfolio" className="text-beauty-dark hover:text-beauty-pink transition-colors">Портфолио</a>
            <a href="#reviews" className="text-beauty-dark hover:text-beauty-pink transition-colors">Отзывы</a>
            <a href="#contacts" className="text-beauty-dark hover:text-beauty-pink transition-colors">Контакты</a>
          </nav>
          <Button className="bg-beauty-pink hover:bg-beauty-pink/90 text-white">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-beauty-white to-beauty-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-montserrat font-bold text-beauty-dark mb-6 leading-tight">
                Красота в каждой 
                <span className="text-beauty-pink"> детали</span>
              </h2>
              <p className="text-xl text-beauty-gray mb-8 leading-relaxed">
                Профессиональные услуги красоты в уютной атмосфере. 
                Мы создаем идеальный образ, подчеркивающий вашу индивидуальность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-beauty-pink hover:bg-beauty-pink/90 text-white px-8 py-3">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться онлайн
                </Button>
                <Button variant="outline" size="lg" className="border-beauty-pink text-beauty-pink hover:bg-beauty-pink/5 px-8 py-3">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/0baf72ec-d35e-46f8-a39d-a956e4c8217c.jpg" 
                alt="Beauty Room Интерьер" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-beauty-dark mb-4">Наши услуги</h3>
            <p className="text-xl text-beauty-gray max-w-2xl mx-auto">
              Широкий спектр профессиональных услуг для вашей красоты
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Scissors",
                title: "Наращивание ресниц",
                description: "Классическое и объемное наращивание ресниц премиум-материалами",
                price: "от 2500 ₽",
                duration: "2-3 часа"
              },
              {
                icon: "Paintbrush",
                title: "Маникюр и педикюр",
                description: "Аппаратный и комбинированный маникюр с покрытием гель-лак",
                price: "от 1800 ₽",
                duration: "1.5-2 часа"
              },
              {
                icon: "Star",
                title: "Перманентный макияж",
                description: "Татуаж бровей, губ, стрелок. Натуральный и яркий эффект",
                price: "от 8000 ₽",
                duration: "2-4 часа"
              },
              {
                icon: "Sparkles",
                title: "Уход за лицом",
                description: "Чистки, пилинги, маски. Индивидуальный подход к каждому типу кожи",
                price: "от 3500 ₽",
                duration: "1-1.5 часа"
              },
              {
                icon: "Eye",
                title: "Оформление бровей",
                description: "Коррекция, окрашивание, ламинирование бровей",
                price: "от 1200 ₽",
                duration: "45 мин"
              },
              {
                icon: "Heart",
                title: "Массаж лица",
                description: "Расслабляющий и лимфодренажный массаж для здоровья кожи",
                price: "от 2000 ₽",
                duration: "45-60 мин"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-beauty-pink/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-beauty-pink/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-beauty-pink" />
                  </div>
                  <h4 className="text-xl font-montserrat font-semibold text-beauty-dark mb-3">{service.title}</h4>
                  <p className="text-beauty-gray mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-beauty-pink">{service.price}</span>
                    <span className="text-sm text-beauty-gray">{service.duration}</span>
                  </div>
                  <Button className="w-full bg-beauty-pink hover:bg-beauty-pink/90 text-white">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-beauty-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-beauty-dark mb-4">Наши работы</h3>
            <p className="text-xl text-beauty-gray max-w-2xl mx-auto">
              Примеры наших лучших работ говорят за нас
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/img/66b6fa97-e64c-47de-bde1-98ec5838e73a.jpg",
                title: "Маникюр премиум",
                category: "Ногтевой сервис"
              },
              {
                image: "/img/64cf5924-0237-4a6b-bae3-109a9ffbe0bd.jpg",
                title: "Наращивание ресниц",
                category: "Lash-услуги"
              },
              {
                image: "/img/0baf72ec-d35e-46f8-a39d-a956e4c8217c.jpg",
                title: "Перманентный макияж",
                category: "Татуаж"
              },
              {
                image: "/img/66b6fa97-e64c-47de-bde1-98ec5838e73a.jpg",
                title: "Педикюр SPA",
                category: "Ногтевой сервис"
              },
              {
                image: "/img/64cf5924-0237-4a6b-bae3-109a9ffbe0bd.jpg",
                title: "Ламинирование бровей",
                category: "Brow-услуги"
              },
              {
                image: "/img/0baf72ec-d35e-46f8-a39d-a956e4c8217c.jpg",
                title: "Уход за лицом",
                category: "Косметология"
              }
            ].map((work, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-beauty-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-montserrat font-semibold mb-2">{work.title}</h4>
                  <p className="text-beauty-light/80">{work.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-beauty-dark mb-4">Отзывы клиентов</h3>
            <p className="text-xl text-beauty-gray max-w-2xl mx-auto">
              Что говорят о нас наши довольные клиенты
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                service: "Наращивание ресниц",
                rating: 5,
                text: "Потрясающий результат! Ресницы выглядят натурально и держатся уже 3 недели. Мастер очень внимательная и профессиональная.",
                date: "2 недели назад"
              },
              {
                name: "Мария Сидорова",
                service: "Маникюр",
                rating: 5,
                text: "Лучший маникюр в городе! Покрытие держится почти месяц, кутикула обработана идеально. Обязательно вернусь еще.",
                date: "1 месяц назад"
              },
              {
                name: "Елена Васильева",
                service: "Перманентный макияж",
                rating: 5,
                text: "Сделала татуаж бровей - результат превзошел все ожидания! Теперь каждое утро экономлю время на макияже.",
                date: "3 недели назад"
              }
            ].map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={18} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-beauty-gray">{review.date}</span>
                  </div>
                  <p className="text-beauty-gray mb-6 italic leading-relaxed">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-montserrat font-semibold text-beauty-dark">{review.name}</p>
                    <p className="text-sm text-beauty-pink">{review.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-beauty-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-beauty-dark mb-4">Контакты</h3>
            <p className="text-xl text-beauty-gray max-w-2xl mx-auto">
              Свяжитесь с нами или посетите наш салон
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-beauty-pink/10 p-3 rounded-full">
                    <Icon name="MapPin" size={24} className="text-beauty-pink" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-beauty-dark mb-2">Адрес</h4>
                    <p className="text-beauty-gray">г. Пятигорск, ул. Примерная, 123</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-beauty-pink/10 p-3 rounded-full">
                    <Icon name="Phone" size={24} className="text-beauty-pink" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-beauty-dark mb-2">Телефон</h4>
                    <p className="text-beauty-gray">+7 (928) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-beauty-pink/10 p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-beauty-pink" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-beauty-dark mb-2">Режим работы</h4>
                    <div className="text-beauty-gray space-y-1">
                      <p>Пн-Пт: 9:00 - 21:00</p>
                      <p>Сб-Вс: 10:00 - 20:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-beauty-pink/10 p-3 rounded-full">
                    <Icon name="Mail" size={24} className="text-beauty-pink" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-beauty-dark mb-2">Email</h4>
                    <p className="text-beauty-gray">info@beautyroom.ru</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <div className="flex space-x-4">
                  <Button className="bg-beauty-pink hover:bg-beauty-pink/90 text-white flex-1">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Онлайн запись
                  </Button>
                  <Button variant="outline" className="border-beauty-pink text-beauty-pink hover:bg-beauty-pink/5 flex-1">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.311089%2C44.892392&z=17&l=map&pt=37.311089,44.892392,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                className="absolute inset-0"
                title="Beauty Room на карте"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beauty-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-montserrat font-bold mb-4">Beauty Room</h4>
              <p className="text-gray-300 mb-4">
                Профессиональные услуги красоты в уютной атмосфере. 
                Мы создаем идеальный образ для каждого клиента.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-beauty-pink rounded-full flex items-center justify-center">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-beauty-pink rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-300">
                <li>Наращивание ресниц</li>
                <li>Маникюр и педикюр</li>
                <li>Перманентный макияж</li>
                <li>Уход за лицом</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <p>г. Пятигорск, ул. Примерная, 123</p>
                <p>+7 (928) 123-45-67</p>
                <p>info@beautyroom.ru</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Beauty Room. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;