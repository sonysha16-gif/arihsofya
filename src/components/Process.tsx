import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Handshake, Lightbulb, Layout, Code, Rocket, ChevronDown } from 'lucide-react';

const steps = [
  {
    label: 'Шаг 1',
    title: 'Знакомство и задача',
    text: 'Вы рассказываете о бизнесе и том, что хотите улучшить: больше заявок, меньше рутины, новый формат онлайн-присутствия.',
    icon: Handshake,
  },
  {
    label: 'Шаг 2',
    title: 'Предложение решения',
    text: 'Я предлагаю формат: сайт, бот, автоматизация или комбинация, примерный объём, сроки и бюджет.',
    icon: Lightbulb,
  },
  {
    label: 'Шаг 3',
    title: 'Структура и дизайн',
    text: 'Согласуем структуру, ключевые экраны и сценарии так, чтобы наш взгляд совпал.',
    icon: Layout,
  },
  {
    label: 'Шаг 4',
    title: 'Разработка и тестирование',
    text: 'Собираю решение по шагам, показываю прогресс, тестируем на реальных сценариях.',
    icon: Code,
  },
  {
    label: 'Шаг 5',
    title: 'Запуск и поддержка',
    text: 'Помогаю с запуском, объясняю, как пользоваться. По договорённости — доработки и поддержка.',
    icon: Rocket,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <section id="process" className="py-16 bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-text-primary mb-6 uppercase">
            Как мы будем <span className="text-gradient">работать</span>
          </h2>
          <p className="text-xl text-text-secondary font-medium">
            Прозрачный процесс, без айтишного хаоса.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:flex justify-between relative mb-20">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border-subtle -translate-y-1/2 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-1/5 px-4">
              <motion.button
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                  activeStep === index 
                    ? 'bg-brand-primary text-black shadow-brand-primary/30 scale-110' 
                    : 'bg-bg-alt text-text-secondary hover:text-brand-primary border border-white/5'
                }`}
              >
                <step.icon size={28} />
              </motion.button>
              <div className="mt-6 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-2 block">
                  {step.label}
                </span>
                <h3 className="text-sm font-bold text-text-primary">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Active Step Details */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            {activeStep !== null && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-bg-alt p-10 rounded-[2.5rem] border border-brand-primary/20 shadow-[0_0_50px_rgba(0,255,148,0.15)] text-center max-w-3xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-4">{steps[activeStep].title}</h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {steps[activeStep].text}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-3xl border transition-all ${
                activeStep === index 
                  ? 'bg-bg-alt border-brand-primary/40 shadow-[0_0_40px_rgba(0,255,148,0.15)]' 
                  : 'bg-bg-dark border-border-subtle hover:border-brand-primary/20 shadow-[0_0_20px_rgba(0,255,148,0.05)]'
              }`}
            >
              <button
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                className="flex items-center justify-between w-full text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeStep === index ? 'bg-brand-primary text-black' : 'bg-bg-main text-text-secondary'
                  }`}>
                    <step.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary block">
                      {step.label}
                    </span>
                    <h3 className="font-bold text-text-primary">{step.title}</h3>
                  </div>
                </div>
                <ChevronDown 
                  className={`transition-transform duration-300 ${activeStep === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {activeStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-text-secondary leading-relaxed pt-4 border-t border-border-subtle">
                      {step.text}
                    </p>
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
