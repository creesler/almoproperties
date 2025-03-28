import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Almo Properties - Real Estate Management',
  description: 'Professional real estate management services for your property portfolio.',
  icons: {
    icon: '/logo/ico.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/ico.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 