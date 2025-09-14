import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Film } from 'lucide-react'

const About: React.FC = () => {
  const movieDetails = [
    {
      icon: Calendar,
      label: 'Release Year',
      value: '2006',
      color: 'text-accent-red'
    },
    {
      icon: User,
      label: 'Director',
      value: 'Gabriele Muccino',
      color: 'text-accent-orange'
    },
    {
      icon: Film,
      label: 'Genre',
      value: 'Drama, Biography',
      color: 'text-accent-red'
    },
    {
      icon: Clock,
      label: 'Runtime',
      value: '117 minutes',
      color: 'text-accent-orange'
    }
  ]

  return (
    <section id="about" className="py-20 bg-dark-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-noise opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Movie <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Based on a true story, "The Pursuit of Happyness" follows Chris Gardner's 
            journey from homelessness to success as a stockbroker, all while caring 
            for his young son.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {movieDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-8 text-center h-full hover:glow-effect transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-red to-accent-orange rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <detail.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {detail.label}
                </h3>
                
                <p className={`text-2xl font-bold ${detail.color}`}>
                  {detail.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                The True Story Behind the Film
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Chris Gardner's real-life journey from homelessness to becoming a successful 
                stockbroker and entrepreneur is a testament to the power of determination, 
                resilience, and never giving up on your dreams.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-accent-red/20 text-accent-red rounded-full text-sm font-medium">
                  Based on True Events
                </span>
                <span className="px-4 py-2 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-medium">
                  Inspirational Story
                </span>
                <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">
                  Academy Award Nominated
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
