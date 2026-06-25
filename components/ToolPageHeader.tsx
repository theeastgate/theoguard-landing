import Link from 'next/link';
import { ShieldCheck } from '@phosphor-icons/react/dist/ssr';

export function ToolPageHeader() {
  return (
    <header className="border-b border-stone-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="TheoGuard home">
          <div className="w-8 h-8 bg-amber-700 rounded-md flex items-center justify-center transition-transform duration-150 group-hover:scale-105">
            <ShieldCheck weight="fill" className="w-4 h-4 text-white" aria-hidden="true" />
          </div>
          <span className="font-display font-semibold text-stone-900 text-[15px] tracking-tight">
            TheoGuard
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1" aria-label="Tools navigation">
          <Link
            href="/content-analysis"
            className="px-3 py-1.5 text-sm text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors duration-150"
          >
            Content Analysis
          </Link>
          <Link
            href="/worship-song-analysis"
            className="px-3 py-1.5 text-sm text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors duration-150"
          >
            Worship Songs
          </Link>
          <Link
            href="/speaker-vetting"
            className="px-3 py-1.5 text-sm text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors duration-150"
          >
            Speaker Vetting
          </Link>
        </nav>

        <a
          href="https://app.theoguard.com"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 rounded-md transition-all duration-150 active:scale-[0.97]"
        >
          Start free
        </a>
      </div>
    </header>
  );
}
