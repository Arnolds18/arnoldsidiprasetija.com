import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/CustomCursor'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Arnold Sidiprasetija — Software Engineer & AI Builder',
  description:
    'Software engineer from Indonesia specializing in AI, data products, and fullstack development. Building at the intersection of data, ML, and great UX.',
  keywords: ['software engineer', 'AI', 'machine learning', 'fullstack', 'iOS', 'Next.js', 'Python'],
  authors: [{ name: 'Arnold Sidiprasetija' }],
  openGraph: {
    title: 'Arnold Sidiprasetija — Software Engineer & AI Builder',
    description:
      'Building intelligent products at the intersection of data, AI, and seamless user experience.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@arnoldprasetija',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-white dark:bg-zinc-950 antialiased">
        <Providers>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
