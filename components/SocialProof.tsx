'use client';

const denominations = [
  'Reformed Baptist',
  'Presbyterian Church in America',
  'Southern Baptist Convention',
  'Anglican Church in North America',
  'Reformed Church of America',
  'Evangelical Free Church',
  'Acts 29 Network',
  'Reformed Presbyterian Church',
  'Conservative Congregational',
  'Associate Reformed Presbyterian',
];

export function SocialProof() {
  const doubled = [...denominations, ...denominations];

  return (
    <section className="py-12 border-y border-stone-200 bg-white overflow-hidden" aria-label="Trusted by">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6">
        <p className="text-xs font-medium text-stone-400 uppercase tracking-widest text-center">
          Trusted by pastors across these traditions
        </p>
      </div>

      <div className="marquee-track relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-inner flex gap-8 animate-marquee w-max">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 bg-stone-50 whitespace-nowrap flex-shrink-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <span className="text-sm text-stone-600 font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
