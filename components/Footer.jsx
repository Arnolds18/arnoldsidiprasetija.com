export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Arnold Sidiprasetija. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Arnolds1809"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arnoldprasetija/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:arnoldsidiprasetija@gmail.com"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
