'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight } from '@phosphor-icons/react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'Evaluate TheoGuard before committing. No credit card required.',
    cta: 'Start free',
    href: 'https://app.theoguard.com',
    highlight: false,
    features: [
      '4 analyses, total',
      'Theological Content Analysis',
      'Worship Song Analysis',
      'All content types: PDF, YouTube, book, text, lyrics',
      'Full doctrinal soundness reports',
      'Critical alert system',
      'Pastoral recommendations',
    ],
  },
  {
    name: 'Monthly',
    price: '$9',
    period: '/month',
    description: 'For active ministry leaders who analyze content regularly.',
    cta: 'Get monthly',
    href: 'https://app.theoguard.com',
    highlight: false,
    features: [
      'Unlimited analyses',
      'Theological Content Analysis',
      'Worship Song Analysis',
      'Speaker & Conference Vetting',
      'All content types',
      'Confessional alignment settings',
      'Cancel anytime',
    ],
  },
  {
    name: 'Lifetime',
    price: '$179',
    period: 'one-time',
    description: 'One payment. Every tool, forever. Includes all future features.',
    cta: 'Get lifetime access',
    href: 'https://app.theoguard.com',
    highlight: true,
    badge: 'Best value',
    features: [
      'Unlimited analyses forever',
      'Theological Content Analysis',
      'Worship Song Analysis',
      'Speaker & Conference Vetting',
      'All content types',
      'Confessional alignment settings',
      'All future tools included',
      'Priority support',
    ],
  },
];

export function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 lg:py-32 bg-stone-50"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl"
        >
          <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Start free. Upgrade when you need it.
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Four analyses are included on every free account — enough to evaluate
            all three tools on real content from your ministry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-stone-900 text-white ring-2 ring-amber-600'
                  : 'bg-white border border-stone-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
                    plan.highlight ? 'text-amber-400' : 'text-amber-700'
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span
                    className={`font-display text-4xl font-bold tracking-tight ${
                      plan.highlight ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm ${plan.highlight ? 'text-stone-400' : 'text-stone-500'}`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.highlight ? 'text-stone-400' : 'text-stone-500'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <a
                href={plan.href}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium text-[15px] transition-all duration-150 active:scale-[0.97] mb-6 ${
                  plan.highlight
                    ? 'bg-amber-600 hover:bg-amber-500 text-white'
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight weight="bold" className="w-4 h-4" />
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle
                      weight="fill"
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-amber-400' : 'text-green-500'
                      }`}
                    />
                    <span className={plan.highlight ? 'text-stone-300' : 'text-stone-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Annual note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center text-sm text-stone-400"
        >
          Annual plan also available at $79/year — save 27% compared to monthly billing.{' '}
          <a href="https://app.theoguard.com" className="text-amber-700 hover:text-amber-800 underline underline-offset-2">
            See all options
          </a>
        </motion.p>
      </div>
    </section>
  );
}
