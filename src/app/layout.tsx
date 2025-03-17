import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Almo Properties | Luxury Real Estate Management',
  description: 'Expert real estate solutions for managing and growing your property portfolio. Luxury properties, professional services, and comprehensive real estate analysis.',
  keywords: 'real estate management, luxury properties, property investment, real estate analysis, property portfolio',
  openGraph: {
    title: 'Almo Properties | Luxury Real Estate Management',
    description: 'Expert real estate solutions for managing and growing your property portfolio. Discover luxury properties and professional services.',
    images: ['/logo/logowhite.png'],
    url: 'https://almoproperties.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Almo Properties | Luxury Real Estate Management',
    description: 'Expert real estate solutions for managing and growing your property portfolio.',
    images: ['/logo/logowhite.png'],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  canonical: 'https://almoproperties.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 