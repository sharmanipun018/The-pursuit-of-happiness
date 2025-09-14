import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Target, Home, Star, Shield, Lightbulb } from 'lucide-react'

interface Theme {
  id: string
  icon: React.ComponentType<any>
  title: string
  description: string
  color: string
  gradient: string
}

const Themes: React.FC = () => {
  const themes: Theme[] = [
    {
      id: 'perseverance',
      icon: Target,
      title: 'Perseverance',
      description: 'The power of never giving up, even when faced with seemingly insurmountable obstacles.',
      color: 'text-accent-red',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 'family',
      icon: Heart,
      title: 'Father-Son Bond',
      description: 'The unconditional love and responsibility a parent feels for their child.',
      color: 'text-pink-400',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'dream',
      icon: Star,
      title: 'The American Dream',
      description: 'The belief that hard work and determination can lead to success and prosperity.',
      color: 'text-yellow-400',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'homelessness',
      icon: Home,
      title: 'Homelessness',
      description: 'The harsh reality of poverty and the struggle to maintain dignity while homeless.',
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'resilience',
      icon: Shield,
      title: 'Resilience',
      description: 'The ability to bounce back from setbacks and maintain hope in the darkest times.',
      color: 'text-green-400',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'hope',
      icon: Lightbulb,
      title: 'Hope',
      description: 'The light that guides us through darkness and keeps dreams alive.',
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-violet-500'
    }
  ]

  return (
    <section id="themes" className="py-20 bg-dark-bg relative overflow-hidden">
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
            Key <span className="text-gradient">Themes</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The powerful messages that make this story timeless
          </p>
        </motion.div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full hover:glow-effect transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${theme.gradient} rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <theme.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                    {theme.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {theme.description}
                  </p>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`h-1 bg-gradient-to-r ${theme.gradient} rounded-full mt-6`}
                  />
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-5 rounded-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-noise opacity-10" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-16 h-16 bg-gradient-to-br from-accent-red to-accent-orange rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>

                <blockquote className="text-2xl lg:text-3xl font-display font-bold text-white mb-8 leading-relaxed">
                  "Don't ever let somebody tell you you can't do something. 
                  <span className="text-gradient"> You got a dream, you gotta protect it.</span>"
                </blockquote>

                <cite className="text-lg text-text-secondary font-medium">
                  — Chris Gardner, The Pursuit of Happyness
                </cite>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '200px' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-accent-red to-accent-orange rounded-full mx-auto mt-8"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Themes
