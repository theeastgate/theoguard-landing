'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Warning,
  CheckCircle,
  FilePdf,
  ArrowRight,
  Spinner,
  Brain,
  BookOpen,
  Quotes,
} from '@phosphor-icons/react';

type Stage = 'upload' | 'analyzing' | 'report';

const stages: { id: Stage; label: string; duration: number }[] = [
  { id: 'upload', label: 'Upload', duration: 2800 },
  { id: 'analyzing', label: 'Analyzing', duration: 3600 },
  { id: 'report', label: 'Report', duration: 4000 },
];

const analysisSteps = [
  'Scanning for psychological frameworks...',
  'Evaluating doctrinal orthodoxy...',
  'Assessing hermeneutical methodology...',
  'Checking source reliability...',
  'Generating pastoral recommendations...',
];

export function AnalysisMockup() {
  const [stage, setStage] = useState<Stage>('upload');
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let stageIndex = 0;

    const advance = () => {
      stageIndex = (stageIndex + 1) % stages.length;
      setStage(stages[stageIndex].id);
      setProgress(0);
      setStepIndex(0);

      const timeout = setTimeout(advance, stages[stageIndex].duration);
      return timeout;
    };

    const timeout = setTimeout(advance, stages[0].duration);
    return () => clearTimeout(timeout);
  }, []);

  // Progress bar animation during analyzing
  useEffect(() => {
    if (stage !== 'analyzing') return;
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 1.4;
      });
    }, 40);

    const stepInterval = setInterval(() => {
      setStepIndex((i) => (i + 1) % analysisSteps.length);
    }, 650);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [stage]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Browser chrome */}
      <div className="bg-stone-800 rounded-t-xl px-4 py-3 flex items-center gap-2.5">
        <div className="w-3 h-3 rounded-full bg-red-400/70" />
        <div className="w-3 h-3 rounded-full bg-amber-400/70" />
        <div className="w-3 h-3 rounded-full bg-green-400/70" />
        <div className="flex-1 mx-3 bg-stone-700 rounded-md h-6 flex items-center px-3">
          <span className="text-stone-400 text-xs font-mono">app.theoguard.com</span>
        </div>
      </div>

      {/* App content */}
      <div className="bg-stone-50 border-x border-b border-stone-200 rounded-b-xl overflow-hidden min-h-[380px]">
        {/* App header bar */}
        <div className="bg-white border-b border-stone-200 px-4 py-2.5 flex items-center gap-2">
          <div className="w-6 h-6 bg-amber-700 rounded flex items-center justify-center">
            <ShieldCheck weight="fill" className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-stone-800 font-display">TheoGuard</span>
          <div className="ml-auto flex gap-1">
            {stages.map((s) => (
              <div
                key={s.id}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  stage === s.id ? 'bg-amber-600' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-5">
          <AnimatePresence mode="wait">
            {stage === 'upload' && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs font-medium text-stone-500 mb-3 uppercase tracking-wider">
                  New Analysis
                </p>
                {/* Drop zone */}
                <div className="border-2 border-dashed border-amber-300 bg-amber-50 rounded-xl p-6 text-center mb-3">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-block"
                  >
                    <FilePdf weight="fill" className="w-10 h-10 text-amber-600 mx-auto mb-2" />
                  </motion.div>
                  <p className="text-sm font-medium text-stone-700">Drop PDF, DOCX, or YouTube URL</p>
                  <p className="text-xs text-stone-400 mt-1">or browse to upload</p>
                </div>

                {/* Recent file appearing */}
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="flex items-center gap-3 bg-white border border-stone-200 rounded-lg px-3 py-2.5"
                >
                  <FilePdf weight="fill" className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-stone-800 truncate">
                      Emotionally Healthy Spirituality.pdf
                    </p>
                    <p className="text-xs text-stone-400">2.3 MB</p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight weight="bold" className="w-4 h-4 text-amber-600" />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {stage === 'analyzing' && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Analyzing
                  </p>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Spinner weight="bold" className="w-4 h-4 text-amber-600" />
                  </motion.div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs text-stone-500 mb-1.5">
                    <span>Processing...</span>
                    <span>{Math.min(Math.round(progress), 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { icon: Brain, label: 'Framework Detection', done: progress > 20 },
                    { icon: BookOpen, label: 'Doctrinal Orthodoxy', done: progress > 45 },
                    { icon: Quotes, label: 'Hermeneutics', done: progress > 70 },
                    { icon: ShieldCheck, label: 'Source Reliability', done: progress > 88 },
                  ].map(({ icon: Icon, label, done }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white border border-stone-100"
                    >
                      <Icon
                        weight="fill"
                        className={`w-4 h-4 transition-colors duration-300 ${
                          done ? 'text-green-500' : 'text-stone-300'
                        }`}
                      />
                      <span className="text-xs text-stone-600 flex-1">{label}</span>
                      {done && (
                        <CheckCircle weight="fill" className="w-3.5 h-3.5 text-green-500" />
                      )}
                    </div>
                  ))}
                </div>

                <motion.p
                  key={stepIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-stone-400 mt-3 text-center"
                >
                  {analysisSteps[stepIndex]}
                </motion.p>
              </motion.div>
            )}

            {stage === 'report' && (
              <motion.div
                key="report"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                      Analysis Complete
                    </p>
                    <p className="text-sm font-semibold text-stone-800 leading-snug max-w-[180px]">
                      Emotionally Healthy Spirituality
                    </p>
                  </div>
                  {/* Score ring */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border-4 border-amber-500 flex items-center justify-center bg-amber-50">
                    <span className="font-display font-bold text-amber-700 text-lg leading-none">
                      2.4
                    </span>
                  </div>
                </div>

                {/* Alerts */}
                <div className="space-y-1.5 mb-3">
                  {[
                    { level: 'CRITICAL', text: 'IFS framework detected throughout', color: 'text-red-600 bg-red-50 border-red-200' },
                    { level: 'HIGH', text: 'Contemplative spirituality language', color: 'text-orange-600 bg-orange-50 border-orange-200' },
                    { level: 'MEDIUM', text: 'Therapeutic gospel framing', color: 'text-yellow-700 bg-yellow-50 border-yellow-200' },
                  ].map(({ level, text, color }, i) => (
                    <motion.div
                      key={level}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.12, duration: 0.25 }}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md border text-xs ${color}`}
                    >
                      <Warning weight="fill" className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-semibold mr-1">{level}</span>
                      <span className="text-stone-600 truncate">{text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-1.5 text-xs text-stone-500 bg-stone-100 rounded-md px-3 py-2"
                >
                  <ShieldCheck weight="fill" className="w-3.5 h-3.5 text-amber-600" />
                  <span>4 pastoral recommendations generated</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
