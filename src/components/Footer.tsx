import { Github, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-extrabold tracking-tighter mb-6 block">
              АРИХ<span className="text-brand-primary">СОФЬЯ</span>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed mb-8">
              Разработчик сайтов, приложений и ботов для бизнеса. Сайт, бот или автоматизация — давайте сделаем ваш следующий шаг в цифре.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/sofi_arih" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="mailto:s.a.16@yandex.ru" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/sofi_arih" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Навигация</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#portfolio" className="text-white/60 hover:text-white transition-colors">Портфолио</a></li>
              <li><a href="#process" className="text-white/60 hover:text-white transition-colors">Процесс</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">Обо мне</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Контакты</h4>
            <ul className="space-y-4">
              <li className="text-white/60">Сочи, Россия</li>
              <li><a href="https://t.me/sofi_arih" className="text-white/60 hover:text-white transition-colors">@sofi_arih</a></li>
              <li><a href="mailto:s.a.16@yandex.ru" className="text-white/60 hover:text-white transition-colors">s.a.16@yandex.ru</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Арих Софья. Все права защищены.
          </p>
          <p className="text-white/40 text-sm">
            Сделано с любовью и кодом.
          </p>
        </div>
      </div>
    </footer>
  );
}
