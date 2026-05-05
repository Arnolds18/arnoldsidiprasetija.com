'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, GithubIcon, Linkedin, Mail, Code2, Music } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

// ─── Code Panel ──────────────────────────────────────────────────────────────

const CODE_LINES = [
  { indent: 0, text: 'def build_ai_pipeline():', color: '#a78bfa' },
  { indent: 1, text: 'data = load_dataset()', color: '#93c5fd' },
  { indent: 1, text: 'model = Transformer()', color: '#93c5fd' },
  { indent: 1, text: 'model.train(data)', color: '#6ee7b7' },
  { indent: 1, text: 'return model.deploy()', color: '#6ee7b7' },
  { indent: 0, text: '', color: '' },
  { indent: 0, text: '# Ship it 🚀', color: '#52525b' },
  { indent: 0, text: 'pipeline = build_ai_pipeline()', color: '#fcd34d' },
]

function CodePanel() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleLines(v => (v >= CODE_LINES.length ? 0 : v + 1))
    }, 700)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-zinc-950/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden w-full">
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-white/[0.07] bg-zinc-900/60">
        <span className="w-2 h-2 rounded-full bg-red-500/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <span className="w-2 h-2 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[10px] text-zinc-500 font-mono">pipeline.py</span>
      </div>
      <div className="p-3.5 font-mono text-[11px] leading-[1.65] min-h-[100px]">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            style={{ paddingLeft: `${line.indent * 14}px`, color: line.color || 'transparent' }}
          >
            {line.text || ' '}
          </div>
        ))}
        {visibleLines < CODE_LINES.length && (
          <motion.span
            className="inline-block w-[5px] h-[13px] bg-indigo-400 ml-px align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
          />
        )}
      </div>
    </div>
  )
}

// ─── Piano Panel ─────────────────────────────────────────────────────────────

const WHITE_KEY_COUNT = 8
const BLACK_KEY_OFFSETS = [0, 1, 3, 4, 5]
const MELODY = [0, 2, 4, 5, 4, 2, 0, 4, 7, 5, 4, 2, 4, 0, 2, 5]

function EqualizerBar({ height, delay }) {
  return (
    <motion.span
      className="inline-block w-0.5 rounded-full bg-amber-400/70"
      animate={{ height: [height * 0.4, height, height * 0.6, height * 0.2, height] }}
      transition={{ repeat: Infinity, duration: 0.8 + delay * 0.3, ease: 'easeInOut', delay }}
      style={{ height }}
    />
  )
}

function PianoPanel() {
  const [activeKey, setActiveKey] = useState(null)
  const [notes, setNotes] = useState([])
  const noteId = useRef(0)
  const step = useRef(0)

  useEffect(() => {
    const id = setInterval(() => {
      const idx = MELODY[step.current % MELODY.length]
      step.current += 1
      setActiveKey(idx)
      setNotes(prev => [...prev.slice(-5), { id: ++noteId.current, x: idx }])
      setTimeout(() => setActiveKey(null), 280)
    }, 430)
    return () => clearInterval(id)
  }, [])

  const wPct = 100 / WHITE_KEY_COUNT

  return (
    <div className="bg-zinc-950/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden w-full max-w-[260px]">
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/[0.07] bg-zinc-900/60">
        <Music size={11} className="text-amber-400" />
        <span className="text-[10px] text-zinc-500 font-mono">melody.wav</span>
        <span className="ml-auto flex items-end gap-px">
          <EqualizerBar height={8} delay={0} />
          <EqualizerBar height={12} delay={0.15} />
          <EqualizerBar height={8} delay={0.05} />
        </span>
      </div>
      <div className="px-3 pb-3.5 pt-2">
        <div className="relative h-7 overflow-hidden">
          <AnimatePresence>
            {notes.map(n => (
              <motion.span
                key={n.id}
                className="absolute text-amber-400 text-sm pointer-events-none select-none"
                style={{ left: `${(n.x / WHITE_KEY_COUNT) * 100 + wPct / 2}%` }}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -28 }}
                exit={{}}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                ♪
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
        <div className="relative h-12 select-none">
          {Array.from({ length: WHITE_KEY_COUNT }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 rounded-b-md border border-zinc-600 transition-all duration-100"
              style={{
                left: `${i * wPct}%`,
                width: `${wPct - 0.6}%`,
                background: activeKey === i ? 'rgba(251,191,36,0.85)' : 'rgba(238,238,238,0.95)',
                boxShadow: activeKey === i ? '0 0 10px rgba(251,191,36,0.5)' : '0 2px 4px rgba(0,0,0,0.3)',
                transform: activeKey === i ? 'scaleY(1.05)' : 'scaleY(1)',
                transformOrigin: 'top',
              }}
            />
          ))}
          {BLACK_KEY_OFFSETS.map((after, i) => (
            <div
              key={i}
              className="absolute top-0 z-10 rounded-b-sm bg-zinc-900 border border-zinc-700"
              style={{
                left: `${(after + 1) * wPct - wPct * 0.31}%`,
                width: `${wPct * 0.6}%`,
                height: '60%',
                boxShadow: '0 3px 6px rgba(0,0,0,0.6)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Side Panels ─────────────────────────────────────────────────────────────

function LeftPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
      className="w-[160px] sm:w-[220px] md:w-[280px] lg:w-[380px]"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="relative"
        style={{ rotate: -3 }}
      >
        <div className="opacity-90">
          <CodePanel />
        </div>
        <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <span className="w-5 h-5 rounded-lg bg-indigo-500/20 flex items-center justify-center">
            <Code2 size={11} className="text-indigo-400" />
          </span>
          <div className="leading-tight">
            <p className="text-[8px] text-zinc-500">Currently</p>
            <p className="text-[10px] text-white font-medium">Building AI</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function RightPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.6, ease: 'easeOut' }}
      className="w-[160px] sm:w-[220px] md:w-[280px] lg:w-[380px]"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        className="relative"
        style={{ rotate: 3 }}
      >
        <div className="opacity-90">
          <PianoPanel />
        </div>
        <div className="absolute -top-3 -left-3 flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <span className="w-5 h-5 rounded-lg bg-amber-500/20 flex items-center justify-center">
            <Music size={11} className="text-amber-400" />
          </span>
          <div className="leading-tight">
            <p className="text-[8px] text-zinc-500">Also plays</p>
            <p className="text-[10px] text-white font-medium">Piano</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  const handleScroll = href => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 hidden dark:block grid-bg pointer-events-none" />
      <div className="absolute inset-0 block dark:hidden grid-bg-light pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-[25%] left-[2%] w-[260px] h-[260px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute top-[25%] right-[2%] w-[260px] h-[260px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[2%] w-[280px] h-[280px] bg-amber-500/8 dark:bg-amber-500/12 blur-[80px] rounded-full pointer-events-none" />

      {/* ── Left panel (absolute, no flow impact) ── */}
      <div className="absolute left-2 sm:left-6 lg:left-10 top-[18%] sm:top-[22%] opacity-60 sm:opacity-70 hover:opacity-100 transition-opacity duration-300">
        <LeftPanel />
      </div>

      {/* ── Right panel (absolute, no flow impact) ── */}
      <div className="absolute right-2 sm:right-6 lg:right-10 bottom-[12%] sm:bottom-[18%] opacity-60 sm:opacity-70 hover:opacity-100 transition-opacity duration-300">
        <RightPanel />
      </div>

      {/* ── Center content — always perfectly centered ── */}
      <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-2xl mx-auto text-center"
        >
          <motion.div variants={item} className="flex justify-center mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-indigo-500/30 bg-indigo-500/10 dark:text-indigo-400 text-indigo-600">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5 leading-[1.05]"
          >
            <span className="gradient-text dark:gradient-text gradient-text-light">Arnold</span>
            <br />
            <span className="gradient-text dark:gradient-text gradient-text-light">Sidiprasetija</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg font-medium text-zinc-500 dark:text-zinc-400 mb-4 tracking-wide"
          >
            Software Developer &nbsp;·&nbsp; AI Enthusiast &nbsp;·&nbsp; Product Manager
          </motion.p>

          <motion.p
            variants={item}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto"
          >
            I build intelligent products at the intersection of data, AI,
            and seamless user experience — from ML pipelines to polished interfaces.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={() => handleScroll('#projects')}
              className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
              See My Work
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="px-6 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 active:scale-95"
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <a
              href="https://github.com/Arnolds18"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-150"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/arnoldprasetija/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-150"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:arnoldsidiprasetija@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-150"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
