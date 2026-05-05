'use client'

import { Code2, Monitor, Brain, BarChart2, Smartphone, Cloud, Bug } from 'lucide-react'
import { AnimatedSection, AnimatedItem } from './AnimatedSection'

const categories = [
  {
    name: 'Languages',
    icon: Code2,
    items: ['Python', 'JavaScript', 'TypeScript', 'Swift'],
  },
  {
    name: 'Frontend',
    icon: Monitor,
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    name: 'AI & ML',
    icon: Brain,
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'FbProphet'],
  },
  {
    name: 'Data',
    icon: BarChart2,
    items: ['SQL', 'Power BI', 'Pandas', 'NumPy'],
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    items: ['iOS', 'Swift', 'SwiftUI', 'UIKit'],
  },
  {
    name: 'Testing & QA',
    icon: Bug,
    items: ['Playwright', 'Manual Testing', 'Test Automation', 'CI/CD'],
  },
  {
    name: 'Cloud & Tools',
    icon: Cloud,
    items: ['Google Cloud', 'Vercel', 'Git & GitHub', 'Docker'],
  },
]

export function TechStack() {
  return (
    <section className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-4">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Tools I work with
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-12 max-w-lg">
            A generalist stack — I go wherever the problem takes me, from training models to shipping UIs to automating tests.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            const isLoneLastItem =
              i === categories.length - 1 && categories.length % 3 === 1
            return (
              <AnimatedItem
                key={cat.name}
                index={i}
                className={isLoneLastItem ? 'lg:col-start-2' : undefined}
              >
                <div className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 hover:shadow-sm dark:hover:shadow-none transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedItem>
            )
          })}
        </div>
      </div>
    </section>
  )
}
