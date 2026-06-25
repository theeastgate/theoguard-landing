'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from '@phosphor-icons/react';
import { AnalysisMockup } from './AnalysisMockup';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-stone-50"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 60% 50%, rgba(180, 83, 9, 0.06) 0%, transparent 70%)`,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(87, 83, 78, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(87, 83, 78, 0.06) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-medium">
                <ShieldCheck weight="fill" className="w-3.5 h-3.5" aria-hidden="true" />
                Trusted by pastors worldwide
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              id="hero-heading"
              className="font-display text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6"
            >
              Know what you&apos;re{' '}
              <span className="text-amber-700">really</span>{' '}
              consuming.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-stone-600 leading-relaxed mb-8 max-w-[52ch]"
            >
              Three tools in one platform: analyze sermons and books for doctrinal
              soundness, evaluate worship songs for theological faithfulness, and
              vet speakers before you invite them to your pulpit.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://app.theoguard.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px]"
              >
                Start free — 4 analyses
                <ArrowRight weight="bold" className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-100 text-stone-700 font-medium rounded-lg border border-stone-200 transition-all duration-150 active:scale-[0.97] text-[15px]"
              >
                See how it works
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-stone-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck weight="fill" className="w-4 h-4 text-green-500" aria-hidden="true" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck weight="fill" className="w-4 h-4 text-green-500" aria-hidden="true" />
                <span>4 free analyses</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck weight="fill" className="w-4 h-4 text-green-500" aria-hidden="true" />
                <span>Results in minutes</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Animated mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Decorative blur behind mockup */}
            <div className="absolute -inset-8 bg-amber-500/10 rounded-3xl blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <AnalysisMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
