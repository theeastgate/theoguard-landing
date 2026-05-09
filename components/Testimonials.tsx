'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quotes } from '@phosphor-icons/react';

const testimonials = [
  {
    quote:
      'TheoGuard flagged IFS language in a book I was about to recommend to our small group leaders. I had no idea. It saved us from introducing a therapeutic framework dressed in spiritual language to sixty families.',
    name: 'Rev. Thomas Alcott',
    title: 'Lead Pastor',
    church: 'Covenant Community Church, Nashville',
  },
  {
    quote:
      "The doctrinal scoring surprised me with its accuracy. I ran three books I already knew well through it — the scores matched exactly what I'd concluded from years of careful reading. Now I trust it on content I haven't vetted.",
    name: 'Pastor Miriam Esterhuyse',
    title: 'Preaching Pastor',
    church: 'Reformation Fellowship, Charlotte',
  },
  {
    quote:
      'Our elder board now uses TheoGuard before approving any book for the church library or small group curriculum. It gives us a common vocabulary for discussing theological concerns — and it catches things we miss.',
    name: 'Elder Caleb Worthington',
    title: 'Elder and Ministry Director',
    church: 'Grace Presbyterian Church, Denver',
  },
  {
    quote:
      "I analyzed a YouTube sermon from a speaker we were considering for a conference. The report found three HIGH-severity alerts I hadn't noticed on first watch. We redirected the invitation. Worth every penny.",
    name: 'Dr. Adaeze Okonkwo',
    title: 'Theology Director',
    church: 'Emmanuel Bible Church, Houston',
  },
  {
    quote:
      'The hermeneutics section is what sets this apart. It tells me not just what a speaker believes, but how they read Scripture — and that matters more for long-term congregational health.',
    name: 'Rev. Jonathan Hargreaves',
    title: 'Pastor of Preaching',
    church: 'Westgate Reformed Church, Portland',
  },
  {
    quote:
      "We run every guest preacher through TheoGuard before they enter our pulpit. The pastoral recommendations section has become our internal checklist. It has completely changed how we vet speakers.",
    name: 'Pastor Ruth Nakamura',
    title: 'Senior Pastor',
    church: 'Anchor Point Community Church, Seattle',
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
            From the field
          </p>
          <h2
            id="testimonials-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight"
          >
            Pastors who caught what slipped through.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`p-6 rounded-xl border border-stone-200 flex flex-col ${
                i === 1 || i === 4 ? 'md:mt-6' : ''
              }`}
            >
              <Quotes weight="fill" className="w-6 h-6 text-amber-300 mb-4 flex-shrink-0" />
              <blockquote className="text-stone-700 leading-relaxed text-[15px] flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="border-t border-stone-100 pt-4">
                <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                <p className="text-xs text-stone-500 mt-0.5">{t.title}</p>
                <p className="text-xs text-stone-400">{t.church}</p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
