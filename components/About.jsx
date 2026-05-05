'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-4">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
                Building things that matter
              </h2>

              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  I&apos;m Arnold, a software engineer from Indonesia who loves turning complex systems into reliable, high-quality products people actually enjoy using. My work sits at the intersection of quality engineering, automation, and thoughtful product development.
                </p>

                {/* <p>
                  Right now, I&apos;m working as a QA Engineer at 
                  <a
                    href="https://growise.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-indigo-500 hover:underline"
                  >
                    Growise
                  </a>
                  — ensuring the quality of data-driven SaaS products for TAM AI (Technology Acceptance Model). I focus on the full testing lifecycle, from designing test strategies and running regression testing to building end-to-end automation with Playwright and integrating it into CI/CD pipelines.
                </p> */}

                <p>
                  I care about clean code, reliable systems, and shipping products that actually make a difference.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1N2WURB4RboOBm009oHlCFL59d1gqGhZg/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  View Resume
                  <ExternalLink size={13} />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0 lg:w-72">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-lg" />
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src="/images/arnold.jpg"
                    alt="Arnold Sidiprasetija"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 288px"
                    priority
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { value: '3+', label: 'Years building' },
                  { value: '10+', label: 'Projects shipped' },
                  { value: '2', label: 'Platforms: iOS & Web' },
                  { value: 'AI', label: 'First, always' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4"
                  >
                    <p className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{value}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
