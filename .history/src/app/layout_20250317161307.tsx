'use client';

import { Inter } from 'next/font/google'
import './globals.css'
import { metadata } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

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