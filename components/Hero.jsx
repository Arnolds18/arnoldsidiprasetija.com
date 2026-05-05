'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background — grid pattern, different per theme */}
      <div className="absolute inset-0 hidden dark:block grid-bg pointer-events-none" />
      <div className="absolute inset-0 block dark:hidden grid-bg-light pointer-events-none" />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/8 blur-3xl rounded-full pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-indigo-500/30 bg-indigo-500/10 dark:text-indigo-400 text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]"
        >
          <span className="gradient-text dark:gradient-text gradient-text-light">
            Arnold
          </span>
          <br />
          <span className="gradient-text dark:gradient-text gradient-text-light">
            Sidiprasetija
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg font-medium text-zinc-500 dark:text-zinc-400 mb-4 tracking-wide"
        >
          Software Developer &nbsp;·&nbsp; AI Builder
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto"
        >
          I build intelligent products at the intersection of data, AI,
          and seamless user experience — from ML pipelines to polished interfaces.
        </motion.p>

        {/* CTAs */}
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

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <a
            href="https://github.com/arnoldprasetija"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-150"
            aria-label="GitHub"
          >
            <Github size={16} />
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors group"
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
