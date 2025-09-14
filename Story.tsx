import React from 'react'
import { motion } from 'framer-motion'
import { Circle, ArrowRight } from 'lucide-react'

interface StoryPoint {
  id: number
  title: string
  description: string
  phase: string
}

const Story: React.FC = () => {
  const storyPoints: StoryPoint[] = [
    {
      id: 1,
      title: 'The Struggle Begins',
      description: 'Chris Gardner works as a medical device salesman, struggling to make ends meet. His wife Linda works double shifts at a hotel, and they\'re barely keeping their heads above water financially.',
      phase: 'Struggle'
    },
    {
      id: 2,
      title: 'A Glimmer of Hope',
      description: 'Chris spots a well-dressed man in a red Ferrari and asks him what he does for a living. The man reveals he\'s a stockbroker, planting the seed of possibility in Chris\'s mind.',
      phase: 'Discovery'
    },
    {
      id: 3,
      title: 'The Interview',
      description: 'Chris impresses Jay Twistle during a chance encounter and secures an interview for an unpaid internship at Dean Witter. Despite being arrested for unpaid parking tickets, he makes it to the interview in time.',
      phase: 'Opportunity'
    },
    {
      id: 4,
      title: 'Homelessness',
      description: 'Linda leaves Chris and Christopher Jr., leaving Chris to care for his son alone. They lose their apartment and are forced to live in homeless shelters, subway stations, and public bathrooms.',
      phase: 'Crisis'
    },
    {
      id: 5,
      title: 'The Internship',
      description: 'Chris begins his unpaid internship while continuing to sell medical devices. He must outperform 19 other candidates while dealing with homelessness and caring for his son.',
      phase: 'Persistence'
    },
    {
      id: 6,
      title: 'The Pursuit Continues',
      description: 'Despite numerous setbacks, Chris maintains his determination. He uses his intelligence and people skills to excel in the internship, all while keeping his son safe and hopeful.',
      phase: 'Determination'
    },
    {
      id: 7,
      title: 'Success',
      description: 'Chris is offered the job at Dean Witter, achieving his dream. The film ends with him walking through the streets of New York, finally successful and able to provide for his son.',
      phase: 'Triumph'
    }
  ]

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case 'Struggle': return 'text-red-400'
      case 'Discovery': return 'text-yellow-400'
      case 'Opportunity': return 'text-blue-400'
      case 'Crisis': return 'text-red-500'
      case 'Persistence': return 'text-orange-400'
      case 'Determination': return 'text-green-400'
      case 'Triumph': return 'text-accent-orange'
      default: return 'text-text-secondary'
    }
  }

  return (
    <section id="story" className="py-20 bg-dark-surface relative overflow-hidden">
      {/* Background Elements */}
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
            The <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Follow Chris Gardner's path from struggle to success
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-red via-accent-orange to-accent-red rounded-full hidden md:block" />
          
          {/* Story Points */}
          <div className="space-y-12">
            {storyPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Marker */}
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-accent-red to-accent-orange rounded-full flex items-center justify-center shadow-lg glow-effect"
                  >
                    <Circle className="w-8 h-8 text-white fill-current" />
                  </motion.div>
                  
                  {/* Phase Label */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-2 -right-2 px-2 py-1 bg-dark-card rounded-full text-xs font-semibold text-white"
                  >
                    {point.id}
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-1 glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-display font-bold text-white">
                      {point.title}
                    </h3>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-dark-card/50 ${getPhaseColor(point.phase)}`}>
                      {point.phase}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {point.description}
                  </p>

                  {/* Progress Arrow */}
                  {index < storyPoints.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center justify-end mt-4"
                    >
                      <ArrowRight className="w-5 h-5 text-accent-red" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 lg:p-12">
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                A Story of <span className="text-gradient">Resilience</span>
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Chris Gardner's journey from homelessness to success is more than just a movie plot—it's 
                a testament to the human spirit's ability to overcome seemingly insurmountable obstacles 
                through determination, intelligence, and unwavering love for family.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-red mb-2">1</div>
                  <div className="text-sm text-text-muted">Year of Struggle</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-orange mb-2">20</div>
                  <div className="text-sm text-text-muted">Competitors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-red mb-2">0</div>
                  <div className="text-sm text-text-muted">Paid Internship</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-orange mb-2">1</div>
                  <div className="text-sm text-text-muted">Dream Achieved</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Story
