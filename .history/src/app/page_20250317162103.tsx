'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-navy-900 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="relative w-[120px] h-[40px]">
            <Image
              src="/logo/logowhite.png"
              alt="Almo Properties"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-white hover:text-yellow-400">Home</Link>
            <Link href="/properties" className="text-white hover:text-yellow-400">Properties</Link>
            <Link href="/listings" className="text-white hover:text-yellow-400">Listings</Link>
            <Link href="/services" className="text-white hover:text-yellow-400">Services</Link>
            <Link href="/contact" className="text-white hover:text-yellow-400">Contact</Link>
            <Link href="/login" className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
              Login
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/apartment-hero.jpg"
            alt="Luxury Apartment"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="brightness-50"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6"
            >
              Real Estate Management for your Comfort
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              If your estate becomes the best of existing management, our simplified real estate solutions to your portfolio and wealth awaits.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/get-started"
                className="bg-yellow-400 text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-500 inline-block"
              >
                Get Started Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Real Estate</h3>
              <p className="text-gray-600">Professional real estate services for managing and growing your portfolio.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Property Management</h3>
              <p className="text-gray-600">Comprehensive property management solutions for your investments.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Investment Services</h3>
              <p className="text-gray-600">Strategic investment opportunities in prime real estate markets.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="relative w-[120px] h-[40px]">
              <Image
                src="/logo/logowhite.png"
                alt="Almo Properties"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p>&copy; {new Date().getFullYear()} Almo Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 