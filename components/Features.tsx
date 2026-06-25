'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  CaretDown,
  Warning,
  Brain,
  BookOpen,
  Scales,
  MagnifyingGlass,
  Quotes,
  ShieldCheck,
  ChartBar,
  Bell,
  ArrowsOut,
  MusicNote,
  UserFocus,
} from '@phosphor-icons/react';

const features = [
  {
    icon: MusicNote,
    title: 'Worship Song Analysis',
    summary: 'Score any song across six theological categories before it reaches your congregation.',
    detail:
      'Paste lyrics, search by song title, or submit a YouTube link. TheoGuard scores each song across Biblical Faithfulness, God-centeredness, Doctrinal Clarity, Trinitarian Clarity, Gospel Substance, and Congregational Singability — then flags specific concerns with the language that triggered them. Available on the free tier.',
  },
  {
    icon: UserFocus,
    title: 'Speaker & Conference Vetting',
    summary: 'Twelve-category theological profile before you extend a pulpit invitation.',
    detail:
      'Submit a speaker\'s name, bio, public statements, or a YouTube sermon link. TheoGuard builds a 12-category theological profile with epistemic confidence scoring — and explicitly notes what cannot be determined from available information, so the tool is never used to smear rather than inform. Gated to Pro tier.',
  },
  {
    icon: Warning,
    title: 'Doctrinal Soundness Scoring',
    summary: 'A 1–5 scale rating grounded in historic Christian orthodoxy.',
    detail:
      'Every analysis produces a calibrated score across key doctrinal categories: Trinitarian orthodoxy, Christology, soteriology, bibliology, and ecclesiology. The score is not a gut feeling — it derives from specific textual evidence, weighted by severity. A 4.8 is markedly different from a 3.1, and the report explains why in plain language your elders can follow.',
  },
  {
    icon: Brain,
    title: 'Psychological Framework Detection',
    summary: 'Identifies IFS, enneagram, contemplative mysticism, and therapeutic gospel language.',
    detail:
      'Internal Family Systems (IFS), the enneagram, Jungian archetypes, and centering prayer have infiltrated mainstream Christian publishing. TheoGuard scans for the specific vocabulary, assumptions, and counseling models these frameworks introduce — and explains why each is theologically incompatible with a biblical anthropology. Confidence scores indicate how clearly a framework appears.',
  },
  {
    icon: BookOpen,
    title: 'Worldly Philosophy Analysis',
    summary: 'Detects secular ideologies embedded in theological language.',
    detail:
      'Moralistic Therapeutic Deism, therapeutic self-actualization, social justice frameworks misapplied to Scripture, neo-Gnostic dualism, and prosperity theology often enter churches dressed in scriptural language. This feature identifies infiltration level — Subtle, Moderate, or Pervasive — with direct quotations from the analyzed content as evidence.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Source Reliability Assessment',
    summary: 'Rates every cited author and reference by theological reliability.',
    detail:
      "Books and sermons that appear orthodox often cite authors whose broader body of work is not. TheoGuard assesses each cited source on a Reliable / Caution / Problematic scale, explains the concern, and notes where the citation appears in the content. This protects against endorsement by association — one of the most common pathways for false teaching to enter a congregation's reading list.",
  },
  {
    icon: Quotes,
    title: 'Hermeneutical Methodology Review',
    summary: 'Evaluates how Scripture is interpreted and applied.',
    detail:
      'Eisegesis, allegory misuse, context stripping, and reader-response interpretation are flagged alongside a rating of the content\'s overall exegetical faithfulness. The review covers both direct Scripture quotations and the author\'s general framework for interpretation — whether they treat the Bible as authoritative revelation or as a spiritual resource for personal experience.',
  },
  {
    icon: Scales,
    title: 'Confessional Alignment Analysis',
    summary: 'Measures agreement with your chosen theological tradition.',
    detail:
      'Configure TheoGuard to evaluate content against Reformed, Evangelical, Anglican, or your specific denominational standards. A sermon that fits broadly evangelical orthodoxy may conflict with the Westminster Confession of Faith on specific points. The alignment analysis surfaces those points of divergence explicitly, so your elders can make informed decisions.',
  },
  {
    icon: Bell,
    title: 'Critical Alert System',
    summary: 'CRITICAL, HIGH, MEDIUM, and LOW severity alerts with biblical responses.',
    detail:
      "Not every doctrinal problem carries the same weight. A CRITICAL alert indicates a direct denial of an essential doctrine (the deity of Christ, the resurrection, justification by faith). A LOW alert might flag imprecise language that could be clarified. Each alert includes the specific passage from the content that triggered it, a biblical counterpoint, and a recommended action for the pastor.",
  },
  {
    icon: ShieldCheck,
    title: 'Pastoral Recommendations',
    summary: 'Actionable guidance tailored to your ministry role and risk level.',
    detail:
      'The report concludes with prioritized recommendations your leadership can act on immediately: whether to use the content as-is, use with caveats and guided discussion, use excerpts only, or avoid entirely. Each recommendation includes implementation guidance — how to present the decision to your congregation, what supplemental teaching might help, and what to watch for in follow-up content.',
  },
  {
    icon: ChartBar,
    title: 'Analysis History and Trend Tracking',
    summary: 'Review past analyses and spot patterns across your reading list.',
    detail:
      "All analyses are saved to your account, searchable, and filterable by content type, rating, and date. Over time, patterns emerge: if a recurring author consistently earns caution ratings, or if a particular series keeps triggering the same psychological framework alerts, you'll see it. Your history is yours to export as a CSV for elder board review.",
  },
  {
    icon: ArrowsOut,
    title: 'Multi-Format Content Support',
    summary: 'PDF, DOCX, YouTube, book search, and plain text.',
    detail:
      "Sermons arrive as PDFs. Recommendations come as YouTube links. Books come as titles. TheoGuard handles all of them without requiring you to reformat content. The YouTube integration extracts the transcript automatically. The book search identifies the work from the title and author using its training knowledge, making book analysis as simple as typing a name.",
  },
];

function FeatureItem({
  feature,
  index,
  inView,
}: {
  feature: (typeof features)[number];
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-stone-200 last:border-0"
    >
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-start gap-4 py-5 text-left group"
          aria-expanded={open}
          aria-label={`Toggle details for ${feature.title}`}
        >

        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 ${
            open ? 'bg-amber-700' : 'bg-stone-100 group-hover:bg-amber-100'
          }`}
        >
          <Icon
            weight="fill"
            className={`w-4.5 h-4.5 transition-colors duration-200 ${
              open ? 'text-white' : 'text-stone-500 group-hover:text-amber-700'
            }`}
            aria-hidden="true"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-stone-900 text-[15px] leading-snug mb-0.5">
                {feature.title}
              </h3>
              <p className="text-sm text-stone-500">{feature.summary}</p>
            </div>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 mt-0.5"
            >
              <CaretDown weight="bold" className="w-4 h-4 text-stone-400" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-[52px] pb-5 pr-6">
              <p className="text-stone-600 leading-relaxed text-[15px]">{feature.detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left: sticky label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
              Features
            </p>
            <h2
              id="features-heading"
              className="font-display text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-6"
            >
              Every layer of theological review.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              Three specialized tools — content analysis, worship song scoring, and speaker vetting —
              each examining the specific risks your congregation faces.
            </p>
            <a
              href="https://app.theoguard.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800 link-underline transition-colors"
            >
              Start analyzing for free
            </a>
          </motion.div>

          {/* Right: accordion */}
          <div className="divide-y divide-stone-200 border-t border-stone-200">
            {features.map((feature, i) => (
              <FeatureItem key={feature.title} feature={feature} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
