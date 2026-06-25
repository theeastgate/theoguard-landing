import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { ToolPageHeader } from '@/components/ToolPageHeader';
import { Footer } from '@/components/Footer';
import { FAQSection, generateFAQSchema, generateHowToSchema } from '@/components/FAQSection';
import Script from 'next/script';
import {
  Warning,
  Brain,
  BookOpen,
  Scales,
  MagnifyingGlass,
  Quotes,
  ShieldCheck,
  ChartBar,
  Bell,
  FilePdf,
  FileDoc,
  YoutubeLogo,
  BookBookmark,
  TextT,
  ArrowRight,
  MusicNote,
  UserFocus,
} from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = buildMetadata({
  title: 'Theological Content Analysis',
  description:
    'Upload a sermon, book, or YouTube video and receive an 8-dimension theological report — doctrinal scoring, framework detection, and pastoral recommendations.',
  path: '/content-analysis',
});

const dimensions = [
  {
    icon: Warning,
    title: 'Doctrinal Soundness Score',
    body: 'A 1–5 scale grounded in historic Christian orthodoxy, calibrated across Trinitarian doctrine, Christology, soteriology, bibliology, and ecclesiology. Each score is backed by specific textual evidence.',
  },
  {
    icon: Brain,
    title: 'Psychological Framework Detection',
    body: 'Scans for Internal Family Systems (IFS), the enneagram, Jungian archetypes, centering prayer, and therapeutic gospel language — with confidence scores and theological explanation for each.',
  },
  {
    icon: BookOpen,
    title: 'Worldly Philosophy Analysis',
    body: 'Identifies Moralistic Therapeutic Deism, social justice misapplication, neo-Gnostic dualism, and prosperity theology — rated Subtle, Moderate, or Pervasive with direct quotations as evidence.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Source Reliability Assessment',
    body: 'Every cited author rated Reliable, Caution, or Problematic. Protects against endorsement by association — one of the most common pathways for false teaching to enter a congregation.',
  },
  {
    icon: Quotes,
    title: 'Hermeneutical Methodology',
    body: 'Flags eisegesis, allegory misuse, context stripping, and reader-response interpretation. Rates overall exegetical faithfulness and how the author treats Scripture as authority.',
  },
  {
    icon: Scales,
    title: 'Confessional Alignment',
    body: 'Measures agreement with your chosen tradition — Reformed, Evangelical, Anglican, or your denomination\'s standards. Surfaces points of divergence explicitly so elders can make informed decisions.',
  },
  {
    icon: Bell,
    title: 'Critical Alert System',
    body: 'CRITICAL, HIGH, MEDIUM, and LOW severity alerts. Each includes the specific passage that triggered it, a biblical counterpoint, and a recommended pastoral action.',
  },
  {
    icon: ShieldCheck,
    title: 'Pastoral Recommendations',
    body: 'Prioritized guidance: use as-is, use with caveats, use excerpts only, or avoid. Each recommendation includes implementation guidance and what to watch for in follow-up content.',
  },
];

const formats = [
  { icon: FilePdf, label: 'PDF', detail: 'Sermons, study guides, books' },
  { icon: FileDoc, label: 'DOCX', detail: 'Word documents and manuscripts' },
  { icon: YoutubeLogo, label: 'YouTube', detail: 'Auto-transcribed sermon videos' },
  { icon: BookBookmark, label: 'Book title', detail: 'Analyzed from model knowledge' },
  { icon: TextT, label: 'Plain text', detail: 'Paste any content directly' },
];

const faqs = [
  {
    question: 'What content formats does TheoGuard accept?',
    answer: 'TheoGuard accepts PDF files, Word documents (DOCX), YouTube URLs (auto-transcribed), book titles, and plain text. You can analyze sermons, books, study guides, conference talks, and any written theological content.',
  },
  {
    question: 'How accurate is the doctrinal analysis?',
    answer: 'TheoGuard uses GPT-4o calibrated to historic Reformed orthodoxy. The analysis is designed to assist pastoral judgment, not replace it. Each finding includes specific textual evidence so you can evaluate the reasoning independently.',
  },
  {
    question: 'Is my submitted content kept confidential?',
    answer: 'Yes. Your submitted content is transmitted to OpenAI\'s API for analysis but is not used to train AI models. Analysis reports are stored privately in your account and are never shared with other users or made publicly accessible.',
  },
  {
    question: 'What does the free plan include?',
    answer: 'The free plan includes 4 total analyses usable across Theological Content Analysis and Worship Song Analysis. No credit card is required. These analyses do not expire.',
  },
  {
    question: 'Can I export my analysis reports?',
    answer: 'Yes. All analyses are saved to your account and can be exported as CSV for elder board review or personal records. You can also delete individual reports or your entire account at any time.',
  },
];

const howToSteps = [
  { name: 'Submit your content', text: 'Upload a PDF, DOCX, paste a YouTube URL, type a book title, or paste text directly into TheoGuard.' },
  { name: 'AI theological review', text: 'GPT-4o processes your content across eight dimensions of doctrinal review, calibrated to historic Christian orthodoxy. Typically completes in 60–90 seconds.' },
  { name: 'Receive your report', text: 'Review your structured, severity-rated report with specific textual evidence, biblical counterpoints, and pastoral recommendations. Saved to your account.' },
];

const otherTools = [
  {
    href: '/worship-song-analysis',
    icon: MusicNote,
    title: 'Worship Song Analysis',
    body: 'Score any song across six theological categories before it reaches your congregation.',
    tier: 'Free',
  },
  {
    href: '/speaker-vetting',
    icon: UserFocus,
    title: 'Speaker & Conference Vetting',
    body: 'Build a 12-category theological profile before you extend a pulpit invitation.',
    tier: 'Pro',
  },
];

export default function ContentAnalysisPage() {
  return (
    <>
      <ToolPageHeader />

      <main>
        {/* Hero */}
        <section className="bg-stone-50 py-20 lg:py-28 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-medium mb-6">
                <ShieldCheck weight="fill" className="w-3.5 h-3.5" />
                Free tier — 4 analyses included
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6">
                Every sermon, book, and video — analyzed for doctrinal soundness.
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-[58ch]">
                Upload any format and receive a structured theological report across eight
                dimensions of doctrinal review. Powered by GPT-4o, grounded in historic
                Christian orthodoxy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.theoguard.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px]"
                >
                  Start your first analysis free
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

        {/* 8 Dimensions */}
        <section className="py-20 lg:py-28 bg-white" aria-labelledby="dimensions-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
                What it analyzes
              </p>
              <h2
                id="dimensions-heading"
                className="font-display text-4xl font-bold text-stone-900 tracking-tight max-w-xl"
              >
                Eight dimensions of doctrinal review — in a single report.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {dimensions.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex gap-4 p-6 rounded-xl border border-stone-200 bg-stone-50 hover:border-amber-200 hover:bg-amber-50/40 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon weight="fill" className="w-4.5 h-4.5 text-amber-700" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 text-[15px] mb-1.5">{title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Formats */}
        <section className="py-16 bg-stone-50 border-y border-stone-200" aria-labelledby="formats-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="lg:w-72 flex-shrink-0">
                <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
                  Supported formats
                </p>
                <h2
                  id="formats-heading"
                  className="font-display text-3xl font-bold text-stone-900 tracking-tight"
                >
                  Submit content the way you already have it.
                </h2>
              </div>
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {formats.map(({ icon: Icon, label, detail }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-stone-200 gap-2"
                  >
                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center">
                      <Icon weight="fill" className="w-5 h-5 text-stone-600" />
                    </div>
                    <p className="font-semibold text-stone-900 text-sm">{label}</p>
                    <p className="text-xs text-stone-500 leading-snug">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 lg:py-28 bg-white" aria-labelledby="how-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
                How it works
              </p>
              <h2
                id="how-heading"
                className="font-display text-4xl font-bold text-stone-900 tracking-tight"
              >
                Upload. Analyze. Report. In under two minutes.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  n: '01',
                  title: 'Submit your content',
                  body: 'Upload a PDF, DOCX, paste a YouTube URL, type a book title, or paste text directly. No reformatting required.',
                },
                {
                  n: '02',
                  title: 'AI theological review',
                  body: 'GPT-4o processes your content against eight dimensions of doctrinal review, calibrated to historic Christian orthodoxy. Typically 60–90 seconds.',
                },
                {
                  n: '03',
                  title: 'Receive your report',
                  body: 'A structured, severity-rated report with specific textual evidence, biblical counterpoints, and clear pastoral recommendations. Saved to your account.',
                },
              ].map(({ n, title, body }) => (
                <div key={n} className="relative pl-14">
                  <span className="absolute left-0 top-0 font-display text-5xl font-bold text-stone-100 leading-none select-none">
                    {n}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-stone-900 mb-3 mt-1">{title}</h3>
                  <p className="text-stone-600 leading-relaxed text-[15px]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SermonBuild Cross-Promo */}
        <section className="py-14 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-2">
                From the same team
              </p>
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Analyzed the content. Now build the sermon.
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed max-w-[52ch]">
                Once you know a source is sound, use{' '}
                <a
                  href="https://sermonbuild.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
                >
                  SermonBuild
                </a>{' '}
                to structure and develop your message with AI-assisted sermon preparation.
              </p>
            </div>
            <a
              href="https://sermonbuild.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-colors duration-150 text-sm whitespace-nowrap"
            >
              Try SermonBuild
              <ArrowRight weight="bold" className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Other Tools */}
        <section className="py-20 bg-stone-50 border-t border-stone-200" aria-labelledby="other-tools-heading">
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
                  className="group flex gap-4 p-6 rounded-xl bg-white border border-stone-200 hover:border-amber-300 hover:shadow-sm transition-all duration-200"
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
        <FAQSection faqs={faqs} id="content-analysis-faq" />

        {/* Bottom CTA */}
        <section className="py-20 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-stone-900 tracking-tight mb-4">
              Start with four free analyses.
            </h2>
            <p className="text-stone-600 mb-8 max-w-[48ch] mx-auto leading-relaxed">
              No credit card required. Analyze your first sermon, book, or YouTube video
              in under two minutes.
            </p>
            <a
              href="https://app.theoguard.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] text-[15px]"
            >
              Create your free account
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
            generateHowToSchema('How to Analyze Content with TheoGuard', 'Upload any content format and receive a structured theological report in three steps.', howToSteps),
          ]),
        }}
      />
    </>
  );
}
