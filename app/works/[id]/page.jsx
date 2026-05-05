import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export function generateMetadata({ params }) {
  const project = getProject(params.id)
  if (!project) return {}
  return {
    title: `${project.title} — Arnold Sidiprasetija`,
    description: project.description,
  }
}

export default function ProjectPage({ params }) {
  const project = getProject(params.id)
  if (!project) notFound()

  const { title, subtitle, longDescription, tech, images, thumbnail, github, demo, highlights, category } = project

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-10 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase mb-4 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
            {category === 'data-ai' ? 'Data & AI' : 'App'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
            {title}
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400">{subtitle}</p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Hero image */}
        {(thumbnail || images?.[0]) && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-10 bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={images?.[0] ?? thumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {/* Links */}
        {(github || demo) && (
          <div className="flex items-center gap-3 mb-10">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
              >
                <Github size={15} />
                View Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        )}

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            About this project
          </h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
            {longDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Highlights */}
        {highlights?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Key highlights
            </h2>
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Gallery */}
        {images && images.length > 1 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.slice(1).map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900"
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 360px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer nav */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            All projects
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            Get in touch →
          </Link>
        </div>

      </div>
    </div>
  )
}
