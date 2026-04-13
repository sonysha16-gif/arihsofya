import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: 'Сколько времени занимает проект?',
    answer: 'Мини-задачи — от 1–3 дней. Небольшие лендинги — от 2–3 недель. Более сложные решения обсуждаем индивидуально после знакомства с задачей.',
  },
  {
    question: 'Как мы будем общаться?',
    answer: 'Через удобные вам мессенджеры (Telegram/WhatsApp) и email. При необходимости проводим созвоны.',
  },
  {
    question: 'Что нужно от меня для старта?',
    answer: 'Краткое описание бизнеса, текущие материалы (если есть) и пример того, какой результат вы хотите получить.',
  },
  {
    question: 'Как устроена оплата?',
    answer: 'Обычно — предоплата и финальный платёж после сдачи. Для крупных задач можем разбить оплату на этапы.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-bg-alt">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Частые вопросы
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl border transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-bg-alt border-brand-primary/50 shadow-[0_0_50px_rgba(0,255,148,0.25)]' 
                  : 'bg-bg-main border-border-subtle hover:border-brand-primary/40 hover:shadow-[0_0_40px_rgba(0,255,148,0.15)] shadow-[0_0_25px_rgba(0,255,148,0.08)]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left group/faq"
              >
                <span className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? 'text-brand-primary' : 'text-text-primary group-hover/faq:text-brand-primary'}`}>{item.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? 'bg-brand-primary text-white' : 'bg-bg-main text-text-secondary'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-border-subtle mx-6 mt-0 py-6">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
