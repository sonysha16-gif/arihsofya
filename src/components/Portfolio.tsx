import { motion } from 'motion/react';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Лендинг онлайн-курса',
    description: 'Страница курса с акцентом на программе и записи, структура из 7 блоков, удобная форма заявки.',
    tags: ['Лендинг', 'Образование'],
    link: '#',
    badge: 'Demo',
    image: 'https://picsum.photos/seed/course/1200/800',
    result: 'Конверсия 12%',
  },
  {
    title: 'Чат-бот для записей',
    description: 'Сценарий бота для записи на консультации: выбор слотов, напоминания, сбор контактов.',
    tags: ['Бот', 'Услуги'],
    link: '#',
    badge: 'Demo',
    image: 'https://picsum.photos/seed/bot/1200/800',
    result: 'Автоматизация 80%',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-bg-alt relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-main -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-7xl font-display font-extrabold text-text-primary mb-8 leading-tight">
              ИЗБРАННЫЕ <span className="text-gradient">ПРОЕКТЫ</span>
            </h2>
            <p className="text-xl text-text-secondary font-medium">
              Собираю портфолио на проектах, где приоритет — понятный результат и аккуратная реализация.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}
            >
              <div className="w-full lg:w-3/5 relative">
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-bg-dark/20 group-hover:bg-bg-dark/0 transition-colors duration-500" />
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-black shadow-xl">
                    {project.badge}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-2/5 space-y-8 p-8 lg:p-12 rounded-[2.5rem] bg-bg-main/50 border border-white/5 backdrop-blur-sm">
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-text-primary group-hover:text-brand-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="pt-6 flex items-center justify-between border-t border-white/10">
                  <div className="text-sm font-bold text-text-primary">
                    Результат: <span className="text-brand-primary">{project.result}</span>
                  </div>
                  <a
                    href={project.link}
                    className="w-14 h-14 rounded-full btn-glow flex items-center justify-center group-hover:rotate-45"
                  >
                    <ArrowUpRight size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-12 rounded-[3rem] bg-bg-main border border-dashed border-border-subtle text-center relative overflow-hidden group"
        >
          <div className="relative z-10">
            <p className="text-2xl font-display font-bold text-text-primary mb-4">
              Ваш проект может стать следующим
            </p>
            <p className="text-text-secondary font-medium mb-8">
              Давайте создадим что-то особенное вместе.
            </p>
            <a href="#contact" className="inline-flex items-center btn-glow px-8 py-4 rounded-2xl font-bold">
              Начать обсуждение <ArrowUpRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}


