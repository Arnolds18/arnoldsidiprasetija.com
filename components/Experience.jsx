import { AnimatedSection, AnimatedItem } from './AnimatedSection'

const experiences = [
  {
    year: '2025 – Present',
    role: 'QA Engineer',
    company: 'Growise.io',
    companyUrl: 'https://growise.io/',
    current: true,
    description:
      'Driving software quality at Growise Inc, an SaaS startup focused on data-driven TAM AI solutions. Responsible for end-to-end testing — from test planning and manual regression to Playwright-based automation. Partnering with engineers to shift testing left, integrate CI/CD pipelines, and ensure fast, high-quality releases.',
  },
  {
    year: 'Apr 2025 – Apr 2026',
    role: 'Associate Product Manager',
    company: 'PT Semesta Integrasi Digital · Sekolahmu',
    companyUrl: 'https://www.sekolah.mu/',
    current: false,
    description:
      'Built the design and delivery of a modular product architecture — a flexible, component-based system that decouples features so they can be independently built, deployed, and scaled. Each module (learning content, assessments, progress tracking, reporting) operates as a standalone unit with well-defined interfaces, enabling cross-functional teams to ship in parallel without creating interdependencies. This significantly reduced feature delivery time and made the platform easier to maintain and extend.',
  },
  {
    year: '2023 – 2025',
    role: 'Associate Data Product Manager',
    company: 'PT Semesta Integrasi Digital · Sekolahmu',
    companyUrl: 'https://www.sekolah.mu/',
    current: false,
    description:
      'Built data-driven products that helped educators and learners make better decisions. Led development of analytics dashboards, AI-powered recommendation tools, and internal reporting systems — translating raw data into actionable insights across the Sekolahmu platform.',
  },
  {
    year: '2022 – 2023',
    role: 'iOS Developer',
    company: 'Apple Developer Academy @ UC',
    companyUrl: null,
    current: false,
    description:
      'Designed and shipped production-ready iOS apps using Swift, SwiftUI, and UIKit through Apple\'s intensive developer program. Gained deep experience with Apple\'s Human Interface Guidelines, agile collaboration, and challenge-based learning — building real apps from concept to TestFlight.',
  },
  {
    year: '2022',
    role: 'Machine Learning Engineer',
    company: 'Bangkit Academy · Google, GoTo & Traveloka',
    companyUrl: null,
    current: false,
    description:
      'Specialised in machine learning through an intensive program backed by Google, GoTo, and Traveloka. Collaborated with Indosat Ooredoo Hutchison on a capstone project — training and deploying a classification model to solve a real-world business problem.',
  },
  {
    year: '2019 – 2023',
    role: 'Bachelor of Computer Engineering',
    company: 'Institut Teknologi Sepuluh Nopember (ITS)',
    companyUrl: null,
    current: false,
    description:
      'Studied computer engineering with a focus on software systems, algorithms, and data structures. Actively participated in national competitions and technology communities throughout the degree.',
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800/60"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            The journey so far
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-12 max-w-lg">
            From engineering student to product builder to QA — shaped by hands-on experience across ML, iOS, product, and testing.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />

          <div className="space-y-10 pl-8">
            {experiences.map((exp, i) => (
              <AnimatedItem key={`${exp.role}-${i}`} index={i}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[37px] top-1 w-[9px] h-[9px] rounded-full ring-2 ring-white dark:ring-zinc-950 ${
                      exp.current
                        ? 'bg-indigo-500 ring-offset-0 shadow-sm shadow-indigo-500/50'
                        : 'bg-zinc-400 dark:bg-zinc-600'
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
                    <div className="sm:w-40 flex-shrink-0 flex items-center gap-2">
                      <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 tracking-wide">
                        {exp.year}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                          Now
                        </span>
                      )}
                    </div>
                    <div className="mt-1 sm:mt-0 flex-1">
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                        {exp.role}
                      </h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mt-0.5 mb-2 inline-block hover:underline underline-offset-4"
                        >
                          {exp.company} ↗
                        </a>
                      ) : (
                        <p className="text-sm text-zinc-500 dark:text-zinc-500 font-medium mt-0.5 mb-2">
                          {exp.company}
                        </p>
                      )}
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
