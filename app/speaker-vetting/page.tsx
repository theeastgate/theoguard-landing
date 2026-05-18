import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { ToolPageHeader } from '@/components/ToolPageHeader';
import { Footer } from '@/components/Footer';
import {
  UserFocus,
  Cross,
  BookOpen,
  Person,
  Church,
  Lightning,
  Globe,
  Books,
  Warning,
  SealWarning,
  CheckCircle,
  YoutubeLogo,
  TextT,
  IdentificationCard,
  ArrowRight,
  ShieldCheck,
  MusicNote,
  Scales,
  Lock,
} from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = buildMetadata({
  title: 'Speaker & Conference Vetting — Theological Profile Before the Invitation',
  description:
    'Build a 12-category theological profile of any speaker using their name, public bio, statements, or a YouTube sermon link. With epistemic confidence scoring and an explicit "What Cannot Be Determined" section. Pro tier.',
  path: '/speaker-vetting',
});

const categories = [
  { icon: Cross, title: 'Trinitarian Orthodoxy', body: 'How the speaker treats the Father, Son, and Spirit — whether they affirm or blur distinct personhood and co-equal divinity.' },
  { icon: Person, title: 'Christology', body: 'The deity and humanity of Christ, the hypostatic union, and how the speaker speaks about the incarnation and resurrection.' },
  { icon: BookOpen, title: 'Soteriology', body: 'Views on justification, atonement, regeneration, and the role of faith and works. Key for identifying synergism, universalism, or prosperity distortions.' },
  { icon: Books, title: 'Bibliology', body: 'How the speaker views Scripture — inerrancy, infallibility, authority, and sufficiency. A foundational category that shapes everything else.' },
  { icon: Church, title: 'Ecclesiology', body: 'Views on the church, ordinances, church membership, discipline, and polity. Relevant when vetting for a specific denominational context.' },
  { icon: Globe, title: 'Eschatology', body: 'End-times views including millennial position, rapture theology, and how eschatology shapes the speaker\'s overall ministry posture.' },
  { icon: Lightning, title: 'Pneumatology', body: 'Views on the Holy Spirit\'s work, spiritual gifts, and continuationist vs. cessationist positions. Critical for charismatic conference vetting.' },
  { icon: Globe, title: 'Social & Cultural Engagement', body: 'How the speaker addresses social justice, cultural issues, and political topics. Are these rightly subordinate to the gospel or elevated above it?' },
  { icon: Lightning, title: 'Charismatic Distinctives', body: 'Specific claims regarding prophecy, tongues, healing, and revelatory gifts. Documented positions and any known incidents of false prophecy.' },
  { icon: SealWarning, title: 'Associations & Endorsements', body: 'Who endorses the speaker and who they publicly endorse. Association patterns often reveal theological positioning more clearly than stated positions.' },
  { icon: Books, title: 'Publishing & Platform History', body: 'Books published, platforms hosted on, and media appearances. Establishes a documented record of public theological positions over time.' },
  { icon: Warning, title: 'Known Controversies', body: 'Any documented controversies, retractions, public corrections, or significant criticism from within orthodox Christianity.' },
];

const inputMethods = [
  {
    icon: IdentificationCard,
    title: 'Name search',
    body: 'Enter the speaker\'s full name. TheoGuard draws on its training knowledge of the speaker\'s public theological positions, published works, and platform.',
  },
  {
    icon: TextT,
    title: 'Bio or statements',
    body: 'Paste a bio, published statements, an interview transcript, or any written material the speaker has produced. Analyzed directly.',
  },
  {
    icon: YoutubeLogo,
    title: 'YouTube sermon link',
    body: 'Paste a link to a sermon, conference talk, or interview. TheoGuard extracts the transcript and analyzes the theological content.',
  },
];

const otherTools = [
  {
    href: '/content-analysis',
    icon: ShieldCheck,
    title: 'Theological Content Analysis',
    body: 'Eight-dimension analysis for sermons, books, YouTube videos, and any text content.',
    tier: 'Free',
  },
  {
    href: '/worship-song-analysis',
    icon: MusicNote,
    title: 'Worship Song Analysis',
    body: 'Six-category scoring for any worship song — lyrics, title search, or YouTube.',
    tier: 'Free',
  },
];

export default function SpeakerVettingPage() {
  return (
    <>
      <ToolPageHeader />

      <main>
        {/* Hero */}
        <section className="bg-stone-50 py-20 lg:py-28 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 text-white text-xs font-medium mb-6">
                <Lock weight="fill" className="w-3.5 h-3.5" />
                Pro plan — Monthly, Annual, or Lifetime
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6">
                Vet every speaker before they reach your pulpit.
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-[58ch]">
                A 12-category theological profile built from the speaker&apos;s public
                record — with epistemic confidence scores and an explicit acknowledgment of
                what cannot be determined from available information.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.theoguard.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px]"
                >
                  Start with Pro
                  <ArrowRight weight="bold" className="w-4 h-4" />
                </a>
                <Link
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-100 text-stone-700 font-medium rounded-lg border border-stone-200 transition-all duration-150 text-[15px]"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Fairness Commitment */}
        <section className="py-14 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-4">
                  Our commitment to epistemic fairness
                </p>
                <h2 className="font-display text-3xl font-bold text-white mb-4 leading-tight">
                  Built to inform pastoral decisions. Not to smear.
                </h2>
                <p className="text-stone-400 leading-relaxed">
                  Speaker Vetting was designed with a hard constraint: every report must
                  include a dedicated &ldquo;What Cannot Be Determined&rdquo; section. No
                  speaker&apos;s profile is complete from public information alone, and
                  presenting incomplete data as a full verdict is dishonest.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: Scales,
                    title: 'Epistemic confidence scores',
                    body: 'Each category is rated by how clearly the evidence supports the conclusion. A category with one ambiguous quote is rated differently than one with a documented published position.',
                  },
                  {
                    icon: CheckCircle,
                    title: '"What Cannot Be Determined" section',
                    body: 'Explicit in every report. Where the public record is insufficient to draw a conclusion, the report says so — rather than extrapolating.',
                  },
                  {
                    icon: Lock,
                    title: 'Temperature 0.1 — maximum consistency',
                    body: 'Speaker Vetting runs at the lowest AI temperature setting, minimizing speculation and maximizing reproducibility across identical inputs.',
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon weight="fill" className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-[15px] mb-1">{title}</p>
                      <p className="text-stone-400 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12 Categories */}
        <section className="py-20 lg:py-28 bg-white" aria-labelledby="categories-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
                Theological profile
              </p>
              <h2
                id="categories-heading"
                className="font-display text-4xl font-bold text-stone-900 tracking-tight max-w-xl"
              >
                Twelve categories. One complete picture.
              </h2>
              <p className="text-stone-600 mt-4 max-w-[56ch] leading-relaxed">
                The report covers every major area of systematic theology that directly
                affects whether a speaker is appropriate for your congregation and context.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className="p-5 rounded-xl border border-stone-200 bg-stone-50 hover:border-amber-200 hover:bg-amber-50/40 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-md bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Icon weight="fill" className="w-3.5 h-3.5 text-amber-700" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-stone-900 text-sm mb-1.5">{title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Input Methods */}
        <section className="py-16 bg-stone-50 border-y border-stone-200" aria-labelledby="input-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
                Three ways to vet
              </p>
              <h2
                id="input-heading"
                className="font-display text-3xl font-bold text-stone-900 tracking-tight"
              >
                Work from whatever information you have.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inputMethods.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon weight="fill" className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 text-[15px] mb-1">{title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 lg:p-10">
              <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-4">
                When to use it
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Before inviting a guest preacher to your pulpit',
                  'Vetting speakers for a church conference or retreat',
                  'Evaluating a recommended author before a sermon series',
                  'Responding to a congregant who is following a specific teacher',
                  'Reviewing potential small group curriculum leaders',
                  'Assessing speakers at a regional or denominational event',
                ].map((use) => (
                  <div key={use} className="flex items-start gap-2.5">
                    <CheckCircle weight="fill" className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <p className="text-[15px] text-stone-700">{use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SermonBuild Cross-Promo */}
        <section className="py-14 bg-stone-50 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-2">
                From the same team
              </p>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-2">
                Vetting complete. Now prepare your teaching.
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed max-w-[52ch]">
                Use{' '}
                <a
                  href="https://sermonbuild.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-800 underline underline-offset-2 transition-colors"
                >
                  SermonBuild
                </a>{' '}
                — our AI-powered sermon preparation tool — to develop a message that
                responds clearly to what your congregation is encountering.
              </p>
            </div>
            <a
              href="https://sermonbuild.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg transition-colors duration-150 text-sm whitespace-nowrap"
            >
              Try SermonBuild
              <ArrowRight weight="bold" className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Other Tools */}
        <section className="py-20 bg-white border-t border-stone-200" aria-labelledby="other-tools-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2
              id="other-tools-heading"
              className="font-display text-3xl font-bold text-stone-900 tracking-tight mb-10"
            >
              Two more tools in your platform.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherTools.map(({ href, icon: Icon, title, body, tier }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex gap-4 p-6 rounded-xl bg-stone-50 border border-stone-200 hover:border-amber-300 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-700 transition-colors duration-200">
                    <Icon weight="fill" className="w-5 h-5 text-amber-700 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-stone-900 text-[15px]">{title}</h3>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide bg-amber-100 text-amber-800">
                        {tier}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                  </div>
                  <ArrowRight weight="bold" className="w-4 h-4 text-stone-300 group-hover:text-amber-700 flex-shrink-0 mt-1 transition-colors duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-stone-50 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-stone-900 tracking-tight mb-4">
              Know who&apos;s teaching your congregation.
            </h2>
            <p className="text-stone-600 mb-8 max-w-[48ch] mx-auto leading-relaxed">
              Speaker Vetting is included on all Pro plans — Monthly, Annual, or Lifetime.
              Start free with 4 analyses on the other tools, then upgrade when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://app.theoguard.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px]"
              >
                Get Pro access
                <ArrowRight weight="bold" className="w-4 h-4" />
              </a>
              <a
                href="https://app.theoguard.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-stone-100 text-stone-700 font-medium rounded-lg border border-stone-200 transition-all duration-150 text-[15px]"
              >
                Start free — 4 analyses
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
