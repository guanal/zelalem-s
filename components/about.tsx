"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Lightbulb, Code, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: GraduationCap,
    title: "Education Excellence",
    description: "Information Systems Graduate from Bahir Dar University, Class of 2025",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Technical Expertise",
    description: "Specialized in Frontend Development and UI Design with modern technologies",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Developed AI-powered solutions including Document-Aware Conversational Systems",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Leadership & Teamwork",
    description: "Active participant in university committees and collaborative projects",
    color: "from-green-500 to-teal-500",
  },
]

const timeline = [
  {
    year: "2021",
    title: "Started University Journey",
    description: "Began Information Systems program at Bahir Dar University",
  },
  {
    year: "2022-2024",
    title: "Active Campus Involvement",
    description: "Joined Discipline Committee and English Language Improvement Center (ELIC)",
  },
  {
    year: "2024",
    title: "Graduation Project",
    description: "Developed Document-Aware Conversational Assistant System",
  },
  {
    year: "2025",
    title: "Graduation & Career Launch",
    description: "Graduated with strong foundation in technology and leadership",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Information Systems graduate with a strong foundation in technology, leadership, and
            innovation. Dedicated to creating impactful digital solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                As an Information Systems graduate from Bahir Dar University, I've cultivated a unique blend of
                technical expertise and leadership skills. My academic journey has been marked by active participation
                in university life and a commitment to excellence.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My passion for technology extends beyond the classroom. I specialize in frontend development and UI
                design, with a particular interest in creating user-centered digital experiences. My graduation project,
                a Document-Aware Conversational Assistant System, represents my commitment to leveraging AI technology
                for practical solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Through my involvement in the Discipline Committee and English Language Improvement Center (ELIC), I've
                developed strong teamwork and problem-solving skills that complement my technical abilities.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Timeline</h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center`}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{highlight.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
