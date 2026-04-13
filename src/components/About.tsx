import { motion } from 'motion/react';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile/Tablet Heading - only visible below lg */}
        <div className="lg:hidden text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-extrabold text-text-primary leading-tight"
          >
            ПРИВЕТ, <br /> Я <span className="text-gradient">СОФЬЯ</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Desktop Heading - only visible on lg and up */}
            <h2 className="hidden lg:block text-7xl font-display font-extrabold text-text-primary mb-6 leading-tight">
              ПРИВЕТ, <br /> Я <span className="text-gradient">СОФЬЯ</span>
            </h2>
            
            <div className="space-y-6 text-xl text-text-secondary leading-relaxed mb-12 font-medium">
              <p>
                Разрабатываю сайты, небольшие приложения, чат-ботов и автоматизации для бизнеса. Мне важно, чтобы вам было легко со мной общаться, а результат был понятным и полезным.
              </p>
              <p>
                Собираю решения, которые помогают: получать больше заявок, экономить время команды и наводить порядок в процессах.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                'Фокус на бизнес-задачах',
                'Человеческий язык',
                'Прозрачные сроки',
                'Аккуратный дизайн',
              ].map((item) => (
                <div key={item} className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span className="font-semibold text-text-primary">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-bg-main border border-brand-primary/10 shadow-[0_0_30px_rgba(0,255,148,0.05)]">
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-6">Технологии</h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  'React / Next.js',
                  'Tailwind CSS',
                  'TypeScript',
                  'Node.js / Express',
                  'Telegram Bot API',
                  'Make / Zapier',
                  'Figma',
                ].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-xl bg-bg-alt border border-border-subtle text-sm font-bold text-text-primary shadow-sm hover:border-brand-primary transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="w-full max-w-[400px] lg:max-w-none aspect-[4/5] rounded-[3rem] overflow-hidden relative z-10 border border-white/10 shadow-2xl">
              <img
                src="./photo.png"
                alt="Арих Софья"
                className="w-full h-full object-cover contrast-110 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full -z-0 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent/10 rounded-full -z-0 blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
