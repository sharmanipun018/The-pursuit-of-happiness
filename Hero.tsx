import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Play, BookOpen } from 'lucide-react'

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const fullText = "YOU MET ME AT A VERY STRANGE TIME OF MY LIFE"
  const secondText = "PEOPLE ALWAYS ASK ME IF I KNOW"

  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    if (isTyping && currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1))
      }, 100)
    } else if (isTyping && currentText.length === fullText.length) {
      timeout = setTimeout(() => {
        setIsTyping(false)
        setCurrentText('')
      }, 2000)
    } else if (!isTyping && currentText.length < secondText.length) {
      timeout = setTimeout(() => {
        setCurrentText(secondText.slice(0, currentText.length + 1))
      }, 100)
    } else if (!isTyping && currentText.length === secondText.length) {
      timeout = setTimeout(() => {
        setIsTyping(true)
        setCurrentText('')
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [currentText, isTyping, fullText, secondText])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
          {/* Left Side - First Quote */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="text-center lg:text-right max-w-lg">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.7)' }}
              >
                <span className="block">
                  {isTyping ? currentText : fullText}
                </span>
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-1 h-12 bg-red-600 ml-2"
                  />
                )}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200"
                  style={{ boxShadow: '0 0 20px rgba(220,38,38,0.3)' }}
                >
                  <Play size={20} />
                  Watch Trailer
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Second Quote */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center justify-center lg:justify-start"
          >
            <div className="text-center lg:text-left max-w-lg">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.7)' }}
              >
                <span className="block">
                  {!isTyping ? currentText : secondText}
                </span>
                {!isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-1 h-12 bg-red-600 ml-2"
                  />
                )}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-200"
                >
                  <BookOpen size={20} />
                  Explore Story
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={scrollToAbout}
          whileHover={{ y: -5 }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-200"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </motion.div>
          <span className="text-sm mt-2 font-medium">Scroll to explore</span>
        </motion.button>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero