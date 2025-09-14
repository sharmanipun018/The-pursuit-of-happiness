import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-surface border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-noise opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center">
          {/* Main Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Quote className="w-8 h-8 text-accent-red" />
              <h3 className="text-2xl font-display font-bold text-white">
                Pursuit of Happyness
              </h3>
              <Quote className="w-8 h-8 text-accent-orange rotate-180" />
            </motion.div>
            
            <blockquote className="text-xl lg:text-2xl text-text-secondary font-medium leading-relaxed max-w-4xl mx-auto">
              "Don't ever let somebody tell you you can't do something. 
              <span className="text-gradient font-semibold"> You got a dream, you gotta protect it.</span>"
            </blockquote>
            
            <cite className="block text-lg text-text-muted mt-4 font-medium">
              — Chris Gardner
            </cite>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-accent-red via-accent-orange to-accent-red rounded-full mb-12"
          />

          {/* Movie Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Release Year</h4>
              <p className="text-text-secondary">2006</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Director</h4>
              <p className="text-text-secondary">Gabriele Muccino</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Genre</h4>
              <p className="text-text-secondary">Drama, Biography</p>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-text-muted">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-accent-red fill-current" />
              </motion.div>
              <span>for inspiration</span>
            </div>
            
            <div className="text-text-muted text-sm">
              © 2024 Pursuit of Happyness - A Modern Experience
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-red/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
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
    </footer>
  )
}

export default Footer
