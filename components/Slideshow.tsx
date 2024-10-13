"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  { src: '/pic1.webp', alt: 'Slide 1' },
  { src: '/pic2.webp', alt: 'Slide 2' },
  // { src: '/pic3.webp', alt: 'Slide 3' },
  { src: '/pic5.webp', alt: 'Slide 4' },
  { src: '/pic4.webp', alt: 'Slide 5' },
]

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Preload all images to cache them
  useEffect(() => {
    images.forEach((image) => {
      const img = new window.Image()
      img.src = image.src
    })
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        nextSlide()
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [currentIndex, isMobile])

  return (
    <div className={`relative w-screen ${isMobile ? 'max-w-screen max-h-[90vh]' : 'h-screen max-w-full'} mx-auto overflow-hidden`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="relative w-full h-full"
          style={{ aspectRatio: '16/9' }}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover rounded-lg"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Preload images in the background */}
      <div className="hidden">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={1}
            height={1}
            style={{ display: 'none' }}
          />
        ))}
      </div>

      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ${isMobile ? 'space-x-1' : 'space-x-2'}`}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-${isMobile ? '3' : '2'} h-${isMobile ? '3' : '2'} rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
