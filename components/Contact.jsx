'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageCircle, ExternalLink } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'arnoldsidiprasetija@gmail.com',
    href: 'mailto:arnoldsidiprasetija@gmail.com',
    description: 'Best for project inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/arnoldprasetija',
    href: 'https://www.linkedin.com/in/arnoldprasetija/',
    description: "Let's connect professionally",
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/arnoldprasetija',
    href: 'https://github.com/arnoldprasetija',
    description: "See what I'm building",
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62-857-3102-0346',
    href: 'https://wa.me/6285731020346',
    description: 'For a quick chat',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
              Let&apos;s work together
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-12 max-w-md">
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map(({ icon: Icon, label, value, href, description }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -2 }}
              className="group flex items-center gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 hover:shadow-sm dark:hover:shadow-none transition-all duration-300"
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300">
                <Icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{label}</p>
                  <ExternalLink size={11} className="text-zinc-400 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 truncate">{value}</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-0.5">{description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/5">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">Currently open to:</span>{' '}
              Full-time roles, freelance projects, and interesting collaborations in AI/ML, data products,
              or fullstack development. Based in Indonesia, working remotely.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
