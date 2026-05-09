'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Warning } from '@phosphor-icons/react';

export function EmailCapture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setEmail('');
    } catch {
      setErrorMsg('Could not connect. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-stone-900 relative overflow-hidden"
      aria-labelledby="subscribe-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 80% at 50% 100%, rgba(180, 83, 9, 0.2) 0%, transparent 60%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-3">
              Discernment newsletter
            </p>
            <h2
              id="subscribe-heading"
              className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
            >
              Stay ahead of theological drift.
            </h2>
            <p className="text-stone-400 leading-relaxed mb-10 max-w-[48ch] mx-auto">
              Join pastors and believers receiving our monthly newsletter on doctrinal discernment,
              ministry resources, and TheoGuard feature updates. No marketing. Unsubscribe anytime.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center gap-3 py-4 px-6 bg-green-900/30 border border-green-700/50 rounded-xl"
              >
                <CheckCircle weight="fill" className="w-5 h-5 text-green-400" />
                <p className="text-green-300 font-medium">
                  You're in. Check your inbox for a welcome email.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="flex-1">
                    <label htmlFor="email-input" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="your@church.com"
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3.5 bg-stone-800 border border-stone-700 text-white placeholder-stone-500 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors disabled:opacity-60"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading' || !email.trim()}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px] whitespace-nowrap"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Subscribing...
                      </span>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight weight="bold" className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 mt-3 text-red-400 text-sm"
                  >
                    <Warning weight="fill" className="w-4 h-4" />
                    {errorMsg}
                  </motion.div>
                )}

                <p className="text-xs text-stone-600 mt-4">
                  No spam. Unsubscribe with one click at any time.
                </p>
              </form>
            )}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-stone-800"
          >
            <p className="text-stone-400 mb-4 text-sm">
              Ready to start analyzing? Your first five reports are free.
            </p>
            <a
              href="https://app.theoguard.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-stone-100 text-stone-900 font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px]"
            >
              Create your free account
              <ArrowRight weight="bold" className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
