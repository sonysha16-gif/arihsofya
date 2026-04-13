import { motion } from 'motion/react';
import { Globe, AppWindow, Bot, Zap, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Сайты и лендинги',
    text: 'Презентация услуг, сбор заявок, подключение аналитики.',
    tag: 'Web',
    size: 'large',
  },
  {
    icon: Bot,
    title: 'Чат-боты',
    text: 'Telegram/WhatsApp: запись, выдача материалов, напоминания.',
    tag: 'Bots',
    size: 'small',
  },
  {
    icon: Zap,
    title: 'Автоматизации',
    text: 'Связываю формы, CRM и таблицы в единую систему.',
    tag: 'Workflow',
    size: 'small',
  },
  {
    icon: AppWindow,
    title: 'Веб-приложения',
    text: 'Калькуляторы, личные кабинеты, простые сервисы.',
    tag: 'Apps',
    size: 'large',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-text-primary mb-6 leading-tight">
              ЧЕМ Я МОГУ <span className="text-gradient">БЫТЬ ПОЛЕЗНА</span>
            </h2>
            <p className="text-xl text-text-secondary font-medium">
              Выбираем формат под вашу задачу: от простого лендинга до автоматизации заявок.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card flex flex-col justify-between group p-6 sm:p-8"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-bg-main flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    <service.icon size={28} />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-bg-main text-text-secondary text-[10px] font-bold uppercase tracking-widest group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-text-primary mb-4 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed max-w-sm">
                  {service.text}
                </p>
              </div>
              
              <div className="mt-12 flex items-center justify-between">
                <a 
                  href="#contact" 
                  className="inline-flex items-center font-bold text-text-primary group-hover:text-brand-primary transition-colors"
                >
                  Обсудить задачу
                </a>
                <div className="w-10 h-10 rounded-full bg-bg-main flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
