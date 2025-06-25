"use client"

import { motion } from "framer-motion"
import { Code, Palette, Users, Lightbulb, Database, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 83 },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "User Experience", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Backend & Database",
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 },
      { name: "API Development", level: 70 },
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "HTML5", level: 85 },
      { name: "CSS3", level: 70 },
      { name: "Git/GitHub", level: 75 },
      { name: "Vercel/Deployment", level: 80 },
    ],
  },
]

const softSkills = [
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborative approach to problem-solving and project development",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical thinking and creative solutions to complex challenges",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Experience in committee roles and project management",
  },
  {
    icon: Globe,
    title: "Communication",
    description: "Strong verbal and written communication skills in multiple contexts",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive skill set spanning technical development, design, and leadership, built through academic
            excellence and practical experience.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Technical Skills
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h4>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Core Competencies
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
