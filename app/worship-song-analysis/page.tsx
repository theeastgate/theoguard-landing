import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { ToolPageHeader } from '@/components/ToolPageHeader';
import { Footer } from '@/components/Footer';
import { FAQSection, generateFAQSchema, generateHowToSchema } from '@/components/FAQSection';
import Script from 'next/script';
import {
  MusicNote,
  BookOpen,
  Star,
  Cross,
  Heart,
  Users,
  Sparkle,
  YoutubeLogo,
  TextT,
  MagnifyingGlass,
  ArrowRight,
  ShieldCheck,
  Warning,
  BookmarkSimple,
  UserFocus,
} from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = buildMetadata({
  title: 'Worship Song Analysis — Theological Scoring for Your Worship Set',
  description:
    'Score any worship song across six theological categories — Biblical Faithfulness, God-centeredness, Doctrinal Clarity, and Gospel Substance. Paste lyrics or search by title.',
  path: '/worship-song-analysis',
});

const categories = [
  {
    icon: BookOpen,
    title: 'Biblical Faithfulness',
    body: 'Is the song grounded in Scripture? Does it accurately represent biblical themes, or does it impose ideas the Bible does not teach? This score assesses direct scriptural alignment.',
  },
  {
    icon: Star,
    title: 'God-centeredness',
    body: 'Does the song magnify God — his character, his works, his glory — or does it primarily center the worshipper\'s feelings and experience? Worship that turns inward can subtly shift the congregation\'s posture.',
  },
  {
    icon: BookmarkSimple,
    title: 'Doctrinal Clarity',
    body: 'Are theological concepts stated precisely? Vague or ambiguous language about salvation, atonement, or grace often appears orthodox on first hearing but introduces confusion over time.',
  },
  {
    icon: Cross,
    title: 'Trinitarian Clarity',
    body: 'Does the song properly distinguish the Father, Son, and Holy Spirit? Modalist language, generic "God" references, and Spirit-only songs all warrant scrutiny in corporate worship.',
  },
  {
    icon: Heart,
    title: 'Gospel Substance',
    body: 'Does the song communicate the gospel — humanity\'s sin, Christ\'s atoning work, justification by faith? Songs that celebrate Jesus without naming why he came can quietly empty the pews of the gospel.',
  },
  {
    icon: Users,
    title: 'Congregational Singability',
    body: 'Is the song appropriate for corporate worship — singable by a congregation, not just a performance piece? Considers range, lyric complexity, and whether the song invites participation.',
  },
];

const inputMethods = [
  {
    icon: TextT,
    title: 'Paste lyrics',
    body: 'Copy and paste the full song lyrics directly into the text field. The fastest method for songs you already have.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Search by song title',
    body: 'Type the song title and artist. TheoGuard retrieves lyrics automatically via our integrated search.',
  },
  {
    icon: YoutubeLogo,
    title: 'Submit a YouTube link',
    body: 'Paste a YouTube URL for a live worship recording or official lyric video. The transcript is extracted and analyzed.',
  },
];

const faqs = [
  {
    question: 'How does TheoGuard score worship songs?',
    answer: 'Each song is scored 1–10 across six theological categories: Biblical Faithfulness, God-centeredness, Doctrinal Clarity, Trinitarian Clarity, Gospel Substance, and Congregational Singability. Specific lyrical language that triggered any concern is quoted directly in the report.',
  },
  {
    question: 'Can I analyze any worship song?',
    answer: 'Yes. You can paste lyrics directly, search by song title and artist, or submit a YouTube link. TheoGuard works with contemporary worship hymns, choruses, and traditional hymns alike.',
  },
  {
    question: 'Is Worship Song Analysis available on the free plan?',
    answer: 'Yes. Worship Song Analysis is included in the free tier. Your 4 free analyses can be used across both Theological Content Analysis and Worship Song Analysis.',
  },
  {
    question: 'What if a song scores well overall but has one concerning lyric?',
    answer: 'The report flags specific concerns at the lyric level, even when the overall score is positive. This helps you make informed decisions — whether to use the song as-is, with a note to your congregation, or to select an alternative.',
  },
  {
    question: 'Does TheoGuard account for different theological traditions?',
    answer: 'The scoring is grounded in historic Christian orthodoxy. You can configure confessional alignment settings to evaluate songs against Reformed, Evangelical, or Anglican standards, surfacing tradition-specific concerns.',
  },
];

const howToSteps = [
  { name: 'Submit your song', text: 'Paste lyrics, search by song title and artist, or submit a YouTube link to a worship recording.' },
  { name: 'Theological scoring', text: 'TheoGuard analyzes the song across six theological categories, identifying specific lyrical concerns and strengths.' },
  { name: 'Review your report', text: 'Receive category scores, specific concern flags with exact lyrics, and an overall recommendation for congregational use.' },
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
    href: '/speaker-vetting',
    icon: UserFocus,
    title: 'Speaker & Conference Vetting',
    body: 'Twelve-category theological profile before you extend a pulpit invitation.',
    tier: 'Pro',
  },
];

export default function WorshipSongAnalysisPage() {
  return (
    <>
      <ToolPageHeader />

      <main>
        {/* Hero */}
        <section className="bg-stone-50 py-20 lg:py-28 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-medium mb-6">
                <MusicNote weight="fill" className="w-3.5 h-3.5" />
                Free tier — included in all plans
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6">
                Know what your congregation is singing — theologically.
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-[58ch]">
                Worship music shapes doctrine as powerfully as preaching. Score any song
                across six theological categories and get specific concern flags before it
                reaches your congregation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.theoguard.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px]"
                >
                  Analyze your first song free
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

        {/* Why It Matters */}
        <section className="py-14 bg-amber-700 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-medium text-amber-200 uppercase tracking-widest mb-4">
                Why worship song theology matters
              </p>
              <blockquote className="font-display text-2xl lg:text-3xl font-semibold leading-snug text-white mb-4">
                &ldquo;The church that sings what it does not believe will eventually believe what
                it sings.&rdquo;
              </blockquote>
              <p className="text-amber-200 leading-relaxed max-w-[58ch]">
                Lex orandi, lex credendi — the rule of prayer is the rule of belief. What your
                congregation sings week after week forms their theology as surely as your
                sermons do. A single popular song with imprecise atonement language, sung
                fifty times a year, shapes belief.
              </p>
            </div>
          </div>
        </section>

        {/* 6 Categories */}
        <section className="py-20 lg:py-28 bg-white" aria-labelledby="categories-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
                The scoring framework
              </p>
              <h2
                id="categories-heading"
                className="font-display text-4xl font-bold text-stone-900 tracking-tight max-w-xl"
              >
                Six categories. One score. Clear concern flags.
              </h2>
              <p className="text-stone-600 mt-4 max-w-[56ch] leading-relaxed">
                Each category is scored 1–10. Specific lyrical language that triggered any
                concern is quoted directly in the report, so you can evaluate the reasoning
                yourself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className="p-6 rounded-xl border border-stone-200 bg-stone-50 hover:border-amber-200 hover:bg-amber-50/40 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Icon weight="fill" className="w-4 h-4 text-amber-700" />
                    </div>
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                      Category {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-stone-900 text-[15px] mb-2">{title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
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
                Three ways to submit
              </p>
              <h2
                id="input-heading"
                className="font-display text-3xl font-bold text-stone-900 tracking-tight"
              >
                Submit songs the way you already have them.
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

        {/* Sample output callout */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-stone-900 rounded-2xl p-8 lg:p-10">
              <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-4">
                What the report includes
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Star, text: 'Individual score (1–10) for each of the six categories' },
                  { icon: Warning, text: 'Specific concern flags with the exact lyric that triggered them' },
                  { icon: Sparkle, text: 'Strengths noted alongside concerns — not just a critique' },
                  { icon: Users, text: 'Overall recommendation for congregational use' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-amber-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon weight="fill" className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="text-stone-300 text-[15px] leading-relaxed">{text}</p>
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
                Building a message around your worship theme?
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
                — our AI sermon preparation tool — to develop and structure your message
                after you&apos;ve evaluated your worship set with TheoGuard.
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
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide ${tier === 'Pro' ? 'bg-stone-900 text-white' : 'bg-amber-100 text-amber-800'}`}>
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

        {/* FAQ */}
        <FAQSection faqs={faqs} id="worship-song-faq" />

        {/* Bottom CTA */}
        <section className="py-20 bg-stone-50 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-stone-900 tracking-tight mb-4">
              Guard what your congregation sings.
            </h2>
            <p className="text-stone-600 mb-8 max-w-[48ch] mx-auto leading-relaxed">
              Start with four free analyses. No credit card required. Results in under two minutes.
            </p>
            <a
              href="https://app.theoguard.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px]"
            >
              Analyze your first song free
              <ArrowRight weight="bold" className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateFAQSchema(faqs),
            generateHowToSchema('How to Analyze a Worship Song with TheoGuard', 'Score any worship song theologically in three steps.', howToSteps),
          ]),
        }}
      />
    </>
  );
}
