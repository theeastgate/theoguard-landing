'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, List, X } from '@phosphor-icons/react';

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'All tools', href: '/content-analysis' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group" aria-label="TheoGuard home">
              <div className="w-8 h-8 bg-amber-700 rounded-md flex items-center justify-center transition-transform duration-150 group-hover:scale-105 active:scale-95">
                <ShieldCheck weight="fill" className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-semibold text-stone-900 text-[15px] tracking-tight">
                TheoGuard
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm text-stone-600 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://app.theoguard.com"
                className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 rounded-md transition-all duration-150 active:scale-[0.97]"
              >
                Start free
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
                aria-label="Open menu"
              >
                <List weight="bold" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0.1 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-stone-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-amber-700 rounded flex items-center justify-center">
                    <ShieldCheck weight="fill" className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-display font-semibold text-stone-900 text-sm">TheoGuard</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <X weight="bold" className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col p-4 gap-1 flex-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors text-[15px]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="p-4 border-t border-stone-200">
                <a
                  href="https://app.theoguard.com"
                  className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 rounded-lg transition-colors active:scale-[0.98]"
                >
                  Start free — 4 analyses included
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
