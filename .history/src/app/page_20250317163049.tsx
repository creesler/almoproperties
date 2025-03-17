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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Luxury Apartment Building"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="brightness-[0.4]"
            sizes="100vw"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-navy-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center z-20">
          <div className="max-w-3xl text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold mb-6 leading-tight"
            >
              Real Estate Management for your Comfort
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 text-gray-200"
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
                className="bg-yellow-400 text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-500 inline-block transition-colors"
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

      {/* Business Professional Section */}
      <section className="relative py-20 bg-sky-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  Real Estate Team<br />
                  Innovation Marketing<br />
                  Expertise
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Expert real estate solutions for managing and growing your portfolio. Let our seasoned team guide you to success.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="bg-navy-900 text-white px-8 py-3 rounded-md hover:bg-navy-800 transition-colors"
                  >
                    Contact Now
                  </Link>
                  <Link
                    href="/about"
                    className="border-2 border-navy-900 text-navy-900 px-8 py-3 rounded-md hover:bg-navy-900 hover:text-white transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 relative h-[500px]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
                  alt="Business Professional"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real Estate</h3>
              <p className="text-gray-600">Comprehensive real estate services for all your property needs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Services</h3>
              <p className="text-gray-600">Expert guidance and management for your property investments.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real Estate Analysis</h3>
              <p className="text-gray-600">In-depth market analysis and investment opportunities.</p>
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