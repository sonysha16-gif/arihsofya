import { motion } from 'motion/react';
import { Send, MessageCircle, Mail, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-7xl font-display font-extrabold text-text-primary mb-8 leading-tight">
              РАССКАЖИТЕ <br /> О <span className="text-gradient">ЗАДАЧЕ</span>
            </h2>
            <p className="text-xl text-text-secondary font-medium">
              Напишите пару слов о том, чем занимаетесь и что хотите улучшить. Я отвечу, предложу формат и ориентиры по срокам и бюджету.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <a
                href="https://t.me/sofi_arih"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 rounded-3xl bg-bg-alt border border-brand-primary/20 shadow-[0_0_30px_rgba(0,255,148,0.05)] hover:border-brand-primary hover:shadow-[0_0_50px_rgba(0,255,148,0.3)] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mr-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <MessageCircle size={28} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-1">Telegram</p>
                  <p className="text-xl font-bold text-text-primary">@sofi_arih</p>
                </div>
              </a>

              <a
                href="mailto:s.a.16@yandex.ru"
                className="flex items-center p-6 rounded-3xl bg-bg-alt border border-brand-primary/20 shadow-[0_0_30px_rgba(0,255,148,0.05)] hover:border-brand-primary hover:shadow-[0_0_50px_rgba(0,255,148,0.3)] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mr-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Mail size={28} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-1">Email</p>
                  <p className="text-xl font-bold text-text-primary">s.a.16@yandex.ru</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-block p-10 order-1 lg:order-2"
          >
            <form id="contact_form" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-text-primary ml-1">Имя</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Как к вам обращаться"
                    className="w-full px-6 py-4 rounded-2xl bg-bg-main border border-border-subtle focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact" className="text-sm font-bold text-text-primary ml-1">Контакт</label>
                  <input
                    type="text"
                    id="contact"
                    placeholder="Telegram или email"
                    className="w-full px-6 py-4 rounded-2xl bg-bg-main border border-border-subtle focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="business" className="text-sm font-bold text-text-primary ml-1">Чем вы занимаетесь?</label>
                <textarea
                  id="business"
                  rows={3}
                  placeholder="Например: онлайн-курсы, студия йоги, консалтинг..."
                  className="w-full px-6 py-4 rounded-2xl bg-bg-main border border-border-subtle focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all resize-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="goal" className="text-sm font-bold text-text-primary ml-1">Что хотите улучшить?</label>
                <select
                  id="goal"
                  className="w-full px-6 py-4 rounded-2xl bg-bg-main border border-border-subtle focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all appearance-none"
                  required
                >
                  <option value="">Выберите вариант</option>
                  <option value="site">Нужен новый сайт или лендинг</option>
                  <option value="bot">Нужен чат-бот</option>
                  <option value="automation">Нужна автоматизация процессов</option>
                  <option value="multi">Хочу обсудить несколько вариантов</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-glow py-5 rounded-2xl font-bold text-lg flex items-center justify-center group"
              >
                Отправить задачу
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </button>

              <p className="text-xs text-text-secondary text-center">
                Отправляя форму, вы соглашаетесь на связь со мной по указанным контактам. Никакого спама.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
