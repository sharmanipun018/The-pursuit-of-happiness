import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Character {
  id: string
  name: string
  actor: string
  role: string
  description: string
  quote: string
  age: string
  occupation: string
  gradient: string
}

const Characters: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const characters: Character[] = [
    {
      id: 'chris',
      name: 'Chris Gardner',
      actor: 'Will Smith',
      role: 'Protagonist',
      description: 'A struggling salesman and single father who becomes homeless while trying to build a better life for his son. His determination and intelligence eventually lead him to success in the financial world.',
      quote: "Don't ever let somebody tell you you can't do something.",
      age: '30s',
      occupation: 'Salesman → Stockbroker',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'christopher',
      name: 'Christopher Gardner Jr.',
      actor: 'Jaden Smith',
      role: 'Supporting Character',
      description: "Chris's five-year-old son who remains optimistic and supportive throughout their difficult journey. His innocence and faith in his father provide emotional strength during their darkest times.",
      quote: "You're a good papa.",
      age: '5 years old',
      occupation: "Chris's motivation",
      gradient: 'from-pink-500 to-red-500'
    },
    {
      id: 'linda',
      name: 'Linda Gardner',
      actor: 'Thandie Newton',
      role: 'Supporting Character',
      description: "Chris's wife who struggles with the financial pressures and eventually leaves the family. She represents the breaking point that many face when dealing with extreme poverty and stress.",
      quote: "I'm not happy anymore.",
      age: '30s',
      occupation: 'Hotel Worker',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'jay',
      name: 'Jay Twistle',
      actor: 'Brian Howe',
      role: 'Supporting Character',
      description: 'A senior manager at Dean Witter who gives Chris his first opportunity in the financial industry. He recognizes Chris\'s potential and determination despite his unconventional background.',
      quote: "What would you say if a guy walked in for an interview without a shirt on and I hired him?",
      age: '40s',
      occupation: 'Senior Manager',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 'martin',
      name: 'Martin Frohm',
      actor: 'Dan Castellaneta',
      role: 'Supporting Character',
      description: 'A successful stockbroker who becomes Chris\'s mentor and friend. He represents the success that Chris aspires to achieve.',
      quote: "This part of my life is called 'Being Stupid'.",
      age: '50s',
      occupation: 'Stockbroker',
      gradient: 'from-orange-500 to-pink-500'
    }
  ]

  const scrollToNext = () => {
    if (scrollRef.current) {
      const cardWidth = 320
      const scrollAmount = cardWidth + 32 // card width + gap
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollToPrev = () => {
    if (scrollRef.current) {
      const cardWidth = 320
      const scrollAmount = cardWidth + 32
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="characters" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Main <span className="text-gradient">Characters</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Meet the people who brought this inspiring story to life
          </p>
        </motion.div>

        {/* Characters Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <motion.button
            onClick={scrollToPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-dark-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent-red transition-colors duration-200 -ml-6"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-dark-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent-red transition-colors duration-200 -mr-6"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Characters Scroll */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="flex-shrink-0 w-80"
              >
                <div className="glass-effect rounded-2xl overflow-hidden h-full group">
                  {/* Character Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${character.gradient} flex items-center justify-center`}>
                      <div className="text-6xl font-bold text-white/20">
                        {character.name.charAt(0)}
                      </div>
                    </div>
                    
                    {/* Quote Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center p-4"
                    >
                      <div className="text-center">
                        <Quote className="w-8 h-8 text-accent-red mx-auto mb-2" />
                        <p className="text-white text-sm font-medium italic">
                          "{character.quote}"
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Character Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-display font-bold text-white mb-1">
                        {character.name}
                      </h3>
                      <p className="text-accent-red font-semibold mb-2">
                        {character.actor}
                      </p>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent-red to-accent-orange text-white text-xs font-semibold rounded-full">
                        {character.role}
                      </span>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {character.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-dark-card/50 rounded-lg">
                        <p className="text-xs text-text-muted mb-1">AGE</p>
                        <p className="text-sm font-semibold text-white">{character.age}</p>
                      </div>
                      <div className="text-center p-3 bg-dark-card/50 rounded-lg">
                        <p className="text-xs text-text-muted mb-1">OCCUPATION</p>
                        <p className="text-sm font-semibold text-white">{character.occupation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Characters
