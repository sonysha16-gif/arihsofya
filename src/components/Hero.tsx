import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, FileText, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden min-h-[90vh]">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-10" />
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-brand-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-accent/20 blur-[150px] rounded-full" />
      </div>
 
      {/* Integrated Photo */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-[75vh] lg:h-full -z-10 opacity-50 md:opacity-80 lg:opacity-100 pointer-events-none">
        <div className="relative w-full h-full flex items-start justify-center lg:justify-end">
          {/* Mobile/Tablet Photo */}
          <div className="lg:hidden w-full h-full relative">
            <img
              src="./photo.png"
              alt="Арих Софья"
              className="w-full h-full object-contain object-center filter grayscale contrast-120 brightness-75 scale-100 origin-top"
              style={{ 
                maskImage: 'radial-gradient(ellipse at 50% 40%, black 40%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 40%, transparent 95%)'
              }}
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Desktop Photo */}
          <div className="hidden lg:block w-full h-full relative">
            <img
              src="./photo.png"
              alt="Арих Софья"
              className="w-full h-full object-cover object-right-top filter grayscale contrast-120 brightness-75 scale-[0.85] translate-x-[18%] origin-top"
              style={{ 
                maskImage: 'linear-gradient(to left, black 40%, rgba(0,0,0,0.4) 75%, transparent 98%)',
                WebkitMaskImage: 'linear-gradient(to left, black 40%, rgba(0,0,0,0.4) 75%, transparent 98%)'
              }}
              referrerPolicy="no-referrer"
            />
            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-main to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Badge at the top */}
        <div className="mt-8 lg:mt-0 mb-[35vh] lg:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto lg:mx-0"
          >
            <Sparkles className="text-brand-primary mr-2" size={16} />
            <span className="text-sm font-bold tracking-tight text-brand-primary uppercase">
              Разработка под задачи бизнеса
            </span>
          </motion.div>
        </div>
 
        {/* Content in the lower third */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-full lg:max-w-[35%] mx-auto lg:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter text-text-primary leading-[1.0] mb-6"
          >
            САЙТЫ, БОТЫ И <br /> <span className="text-gradient">АВТОМАТИЗАЦИЯ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0"
          >
            Я Арих Софья. Создаю аккуратные цифровые решения, которые экономят время и приносят заявки.
          </motion.p>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="https://t.me/sofi_arih"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center btn-glow px-10 py-5 rounded-2xl font-bold text-lg group"
            >
              Обсудить проект
              <MessageCircle className="ml-3 group-hover:rotate-12 transition-transform" size={22} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center btn-glow px-10 py-5 rounded-2xl font-bold text-lg"
            >
              Заполнить бриф
              <FileText className="ml-3" size={22} />
            </a>
          </motion.div>
        </div>

        {/* Visual Grid / Bento-ish Hero Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bento-card bg-bg-dark/50 backdrop-blur-md md:col-span-2 overflow-hidden relative group border-brand-primary/20">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">Сайты под ключ</h3>
              <p className="text-text-secondary max-w-md leading-relaxed">От идеи до запуска: лендинги, которые продают и приложения, которые работают.</p>
            </div>
            <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-brand-primary/10 blur-3xl rounded-full group-hover:bg-brand-primary/20 transition-all duration-700" />
          </div>
          <div className="bento-card bg-bg-dark/50 backdrop-blur-md flex flex-col justify-between border-brand-secondary/20">
            <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white tracking-tight">Автоматизация</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Связываю CRM, ботов и таблицы в единую систему.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
