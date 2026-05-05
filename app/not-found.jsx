'use client'

import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-8xl font-bold text-zinc-100 dark:text-zinc-900 mb-6 select-none">
          404
        </p>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
          Page not found
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8">
          This page doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
        >
          Go home
        </a>
      </motion.div>
    </div>
  )
}
