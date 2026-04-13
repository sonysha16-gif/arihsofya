import { motion } from 'motion/react';
import { MessageSquare, ClipboardCheck, Clock } from 'lucide-react';

const trustItems = [
  {
    icon: MessageSquare,
    title: 'Без сложного IT-жаргона',
    text: 'Объясняю, что и зачем мы делаем, простым языком. Вы понимаете, за что платите и как это повлияет на бизнес.',
  },
  {
    icon: ClipboardCheck,
    title: 'Фиксируем договорённости',
    text: 'Перед стартом согласуем задачи, сроки и формат работы, чтобы избежать сюрпризов и срывов.',
  },
  {
    icon: Clock,
    title: 'На связи и в срок',
    text: 'Работаю через мессенджеры и email, показываю промежуточный прогресс и не пропадаю.',
  },
];

export default function TrustIntro() {
  return (
    <section className="py-16 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-text-primary mb-6">
            ПОЧЕМУ СО МНОЙ <span className="text-gradient">УДОБНО</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card group"
            >
              <div className="w-14 h-14 rounded-2xl bg-bg-main flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-black transition-all duration-500 border border-white/5">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
