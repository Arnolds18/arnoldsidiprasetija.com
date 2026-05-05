'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

export function ProjectCard({ id, title, description, tech, thumbnail, github, demo, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:border-indigo-500/40 dark:hover:border-indigo-500/30 hover:shadow-md dark:hover:shadow-none transition-all duration-300"
    >
      {/* Image */}
      <Link href={`/works/${id}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <span className="text-xl font-bold text-indigo-400">{title.charAt(0)}</span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <Link href={`/works/${id}`} className="block mb-2">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              {t}
            </span>
          ))}
          {tech.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs text-zinc-400 dark:text-zinc-600">
              +{tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                <Github size={12} />
                Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                <ExternalLink size={12} />
                Demo
              </a>
            )}
          </div>
          <Link
            href={`/works/${id}`}
            className="flex items-center gap-1 text-xs text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            View details
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
