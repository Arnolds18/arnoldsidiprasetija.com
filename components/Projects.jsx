'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import { ProjectCard } from './ProjectCard'
import { projects, categories } from '@/lib/projects'

export function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered =
    activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-4">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Things I&apos;ve built
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 max-w-lg">
            From ML models to iOS apps to data dashboards &mdash; a selection of work spanning AI, data, and product.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-fit mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="relative px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 focus:outline-none"
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-lg shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-150 ${
                    activeTab === cat.id
                      ? 'text-zinc-900 dark:text-zinc-50'
                      : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
