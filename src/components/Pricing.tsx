import { motion } from 'motion/react';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Мини-задача',
    description: 'Небольшие правки, настройка виджета, мини-доработки сайта или бота.',
    price: 'от 5 000 ₽',
    duration: '1–3 дня',
    cta: 'Обсудить мини-задачу',
    features: [
      'Одна чётко сформулированная задача',
      'Быстрый старт',
      'Короткий отчёт по результату',
    ],
  },
  {
    name: 'Проект под ключ',
    description: 'Сайт, бот или небольшое приложение: от идеи до запуска.',
    price: 'от 15 000 ₽',
    duration: 'от 2–4 недель',
    cta: 'Обсудить проект',
    features: [
      'Диагностика задачи',
      'Структура и дизайн',
      'Разработка, тестирование и запуск',
      'Поддержка после запуска',
    ],
    highlight: true,
  },
  {
    name: 'Поддержка',
    description: 'Долгосрочная помощь: мелкие задачи, обновления, развитие проекта.',
    price: 'по договорённости',
    duration: 'месяц',
    cta: 'Обсудить формат',
    features: [
      'Пакет часов или абонентская поддержка',
      'Приоритизация задач',
      'Регулярная отчётность',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-text-primary mb-6 uppercase">
            Форматы <span className="text-gradient">работы</span>
          </h2>
          <p className="text-xl text-text-secondary font-medium max-w-2xl mx-auto">
            Подберём формат под вашу задачу и этап бизнеса.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-lg lg:max-w-none mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-10 rounded-[2.5rem] flex flex-col h-full transition-all duration-500 ${
                plan.highlight 
                  ? 'bg-bg-dark text-white shadow-[0_0_60px_rgba(0,255,148,0.3)] border-brand-primary/40 scale-105 z-10' 
                  : 'bg-bg-alt border border-brand-primary/10 shadow-[0_0_40px_rgba(0,255,148,0.1)] hover:shadow-[0_0_60px_rgba(0,255,148,0.2)] hover:border-brand-primary/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-brand px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center shadow-[0_0_20px_rgba(0,255,148,0.4)]">
                  <Star size={12} className="mr-2 fill-current" />
                  Популярный выбор
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-text-primary'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-text-secondary'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className={`text-3xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-text-primary'}`}>
                  {plan.price}
                </div>
                <div className={`text-sm font-medium ${plan.highlight ? 'text-white/50' : 'text-text-secondary'}`}>
                  {plan.duration}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlight ? 'bg-brand-primary text-white' : 'bg-brand-primary/10 text-brand-primary'
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-sm leading-tight ${plan.highlight ? 'text-white/80' : 'text-text-secondary'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex items-center justify-center w-full py-4 rounded-2xl font-bold btn-glow group"
              >
                {plan.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
