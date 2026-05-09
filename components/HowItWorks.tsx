'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Upload, Cpu, FileText } from '@phosphor-icons/react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Submit your content',
    description:
      'Upload a PDF sermon, Word document, YouTube link, or search by book title. TheoGuard accepts the formats your ministry already uses.',
    detail: 'PDF, DOCX, TXT, YouTube URLs, book titles by author',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI theological analysis',
    description:
      'Our model — calibrated to historic Reformed orthodoxy — scans for doctrinal deviations, psychological frameworks, worldly philosophies, and hermeneutical problems.',
    detail: 'Typically completes in 60 to 90 seconds',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Receive your report',
    description:
      'Get a structured doctrinal soundness report with severity-rated alerts, specific evidence from the text, biblical counterpoints, and clear recommendations for what to do next.',
    detail: 'Saved to your account, searchable, exportable',
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 lg:py-32 bg-stone-50"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2
            id="how-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight max-w-lg"
          >
            From upload to report in three steps.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connector lines (desktop) */}
          <div className="hidden md:block absolute top-8 left-[33%] right-[33%] h-px bg-stone-200" />
          <div className="hidden md:block absolute top-8 left-[33%] w-[33%] h-px bg-stone-200" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Step indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-amber-700 flex items-center justify-center flex-shrink-0">
                      <Icon weight="fill" className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 text-[10px] font-bold text-amber-700 bg-amber-100 border border-amber-200 rounded-full w-5 h-5 flex items-center justify-center leading-none">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-4 max-w-[40ch]">
                  {step.description}
                </p>
                <p className="text-xs text-stone-400 font-medium">{step.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-stone-200"
        >
          <a
            href="https://app.theoguard.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px]"
          >
            Try it free — no credit card required
          </a>
        </motion.div>
      </div>
    </section>
  );
}
