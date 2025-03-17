'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ModalContent {
  title: string;
  description: string;
  image?: string;
  details?: {
    bedrooms?: number;
    bathrooms?: number;
    size?: string;
    price?: string;
    location?: string;
  };
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <main className="min-h-screen scroll-smooth">
      {/* Modal */}
      {isModalOpen && modalContent && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{modalContent.title}</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {modalContent.image && (
                <div className="relative h-64 mb-4">
                  <Image
                    src={modalContent.image}
                    alt={modalContent.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              )}
              <p className="text-gray-600 mb-4">{modalContent.description}</p>
              {modalContent.details && (
                <div className="grid grid-cols-2 gap-4">
                  {modalContent.details.bedrooms && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{modalContent.details.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {modalContent.details.bathrooms && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{modalContent.details.bathrooms} Bathrooms</span>
                    </div>
                  )}
                  {modalContent.details.size && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span>{modalContent.details.size}</span>
                    </div>
                  )}
                  {modalContent.details.price && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{modalContent.details.price}</span>
                    </div>
                  )}
                  {modalContent.details.location && (
                    <div className="flex items-center col-span-2">
                      <svg className="w-5 h-5 mr-2 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{modalContent.details.location}</span>
                    </div>
                  )}
                </div>
              )}
              <button
                onClick={closeModal}
                className="mt-6 bg-navy-900 text-white px-6 py-2 rounded-md hover:bg-navy-800 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

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
            <a href="#home" className="text-white hover:text-yellow-400">Home</a>
            <a href="#properties" className="text-white hover:text-yellow-400">Properties</a>
            <a href="#services" className="text-white hover:text-yellow-400">Services</a>
            <a href="#testimonials" className="text-white hover:text-yellow-400">Testimonials</a>
            <a href="#contact" className="text-white hover:text-yellow-400">Contact</a>
            <Link href="/login" className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
              Login
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
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
                  <button
                    onClick={() => openModal({
                      title: 'Contact Us',
                      description: 'Get in touch with our expert team for personalized real estate solutions. We\'re here to help you with all your property needs.',
                      details: {
                        location: '123 Business Street, City, Country',
                      }
                    })}
                    className="bg-navy-900 text-white px-8 py-3 rounded-md hover:bg-navy-800 transition-colors"
                  >
                    Contact Now
                  </button>
                  <button
                    onClick={() => openModal({
                      title: 'About Almo Properties',
                      description: 'With years of experience in the real estate market, we provide comprehensive property management and investment services. Our team of experts is dedicated to helping you achieve your real estate goals.',
                    })}
                    className="border-2 border-navy-900 text-navy-900 px-8 py-3 rounded-md hover:bg-navy-900 hover:text-white transition-colors"
                  >
                    Learn More
                  </button>
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
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070"
                  alt="Luxury Apartment Interior"
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
      <section id="services" className="py-20 bg-white">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Hear from our satisfied customers about their experience with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-500">Property Investor</p>
                </div>
              </div>
              <p className="text-gray-600">"Outstanding service! The team at Almo Properties made my investment journey smooth and profitable. Highly recommended!"</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-gray-500">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-600">"Their property management services are exceptional. They take care of everything, giving me peace of mind."</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RB</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Brown</h4>
                  <p className="text-gray-500">Real Estate Developer</p>
                </div>
              </div>
              <p className="text-gray-600">"The market insights and professional guidance provided by Almo Properties have been invaluable to our projects."</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600">Explore our selection of premium properties</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075"
                  alt="Luxury Home"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Villa</h3>
                <p className="text-gray-600 mb-4">Modern 5-bedroom villa with pool</p>
                <button
                  onClick={() => openModal({
                    title: 'Luxury Villa',
                    description: 'Experience luxury living in this stunning modern villa. Features include a private pool, spacious living areas, and premium finishes throughout.',
                    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
                    details: {
                      bedrooms: 5,
                      bathrooms: 4,
                      size: '5,000 sq ft',
                      price: '$2,500,000',
                      location: 'Beverly Hills, CA'
                    }
                  })}
                  className="text-navy-900 font-semibold hover:text-navy-700"
                >
                  View Details →
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070"
                  alt="Modern Apartment"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Apartment</h3>
                <p className="text-gray-600 mb-4">Spacious 3-bedroom apartment</p>
                <button
                  onClick={() => openModal({
                    title: 'Modern Apartment',
                    description: 'Contemporary living space with stunning city views. Features high-end appliances, open floor plan, and modern amenities.',
                    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
                    details: {
                      bedrooms: 3,
                      bathrooms: 2,
                      size: '1,800 sq ft',
                      price: '$850,000',
                      location: 'Downtown Manhattan, NY'
                    }
                  })}
                  className="text-navy-900 font-semibold hover:text-navy-700"
                >
                  View Details →
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
                  alt="Luxury Condo"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Condo</h3>
                <p className="text-gray-600 mb-4">Premium 2-bedroom condo</p>
                <button
                  onClick={() => openModal({
                    title: 'Luxury Condo',
                    description: 'Elegant waterfront condo with premium finishes and breathtaking views. Includes access to exclusive amenities.',
                    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
                    details: {
                      bedrooms: 2,
                      bathrooms: 2,
                      size: '1,500 sq ft',
                      price: '$1,200,000',
                      location: 'Miami Beach, FL'
                    }
                  })}
                  className="text-navy-900 font-semibold hover:text-navy-700"
                >
                  View Details →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300">Contact us for personalized real estate solutions</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    123 Business Street, City, Country
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@almoproperties.com
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 234 567 890
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                  <p className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Sunday: Closed
                  </p>
                </div>
              </motion.div>
            </div>
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