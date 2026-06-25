import { ShieldCheck } from '@phosphor-icons/react/dist/ssr';

const links = {
  Tools: [
    { label: 'Content Analysis', href: '/content-analysis' },
    { label: 'Worship Song Analysis', href: '/worship-song-analysis' },
    { label: 'Speaker Vetting', href: '/speaker-vetting' },
  ],
  Product: [
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Launch app', href: 'https://app.theoguard.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-amber-700 rounded-md flex items-center justify-center">
                <ShieldCheck weight="fill" className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-display font-semibold text-white text-[15px]">TheoGuard</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[36ch] mb-6">
              AI-powered theological discernment for pastors and church leaders — content
              analysis, worship song scoring, and speaker vetting in one platform.
            </p>
            <a
              href="https://app.theoguard.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors duration-150 mb-4"
            >
              Start free
            </a>
            <div className="mt-2">
              <p className="text-xs text-stone-600 mb-1.5">Also from the same team:</p>
              <a
                href="https://sermonbuild.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-400 hover:text-amber-400 transition-colors duration-150"
              >
                SermonBuild — AI sermon preparation ↗
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">
                {group}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-stone-400 hover:text-white transition-colors duration-150"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} TheoGuard. All rights reserved.
          </p>
          <p className="text-xs text-stone-700">
            Built for the faithful stewardship of God&apos;s Word.
          </p>
        </div>
      </div>
    </footer>
  );
}
