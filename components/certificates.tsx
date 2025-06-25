"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Calendar, ExternalLink, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const certificates = [
  {
    id: 1,
    title: "Discipline Committee Participation",
    issuer: "Bahir Dar University",
    date: "2022-2024",
    description:
      "Active participation in university discipline committee, contributing to student welfare and campus governance.",
    image: "/zel.jpg",
    skills: ["Leadership", "Decision Making", "Conflict Resolution", "Team Collaboration"],
    type: "Leadership",
    verified: true,
  },
  {
    id: 2,
    title: "English Language Improvement Center (ELIC)",
    issuer: "Bahir Dar University",
    date: "2022-2024",
    description:
      "Completed advanced English language improvement program, enhancing communication skills and academic writing.",
    image: "/zel.jpg",
    skills: ["Communication", "Academic Writing", "Presentation Skills", "Language Proficiency"],
    type: "Academic",
    verified: true,
  },
]

const typeColors = {
  Leadership: "from-blue-500 to-cyan-500",
  Academic: "from-purple-500 to-pink-500",
  Technical: "from-green-500 to-teal-500",
}

export function Certificates() {
  const [expandedIds, setExpandedIds] = useState<number[]>([])

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((expandedId) => expandedId !== id) : [...prev, id]
    )
  }

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition of academic excellence, leadership contributions, and professional development throughout my
            university journey.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => {
            const isExpanded = expandedIds.includes(certificate.id)
            return (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                  {/* Certificate Image */}
                  <div className="relative w-full">
                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key="full-image"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-full h-[400px]"
                        >
                          <Image
                            src={certificate.image || "/placeholder.svg"}
                            alt={certificate.title}
                            fill
                            className="object-contain"
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="thumbnail"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="relative h-48"
                        >
                          <Image
                            src={certificate.image || "/placeholder.svg"}
                            alt={certificate.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                          {/* Type Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge
                              className={`bg-gradient-to-r ${typeColors[certificate.type as keyof typeof typeColors]} text-white border-0`}
                            >
                              {certificate.type}
                            </Badge>
                          </div>

                          {/* Verified Badge */}
                          {certificate.verified && (
                            <div className="absolute top-4 right-4">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <Award className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}

                          {/* Award Icon Overlay */}
                          <div className="absolute bottom-4 left-4">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <Award className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    {/* Certificate Title and Issuer */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {certificate.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{certificate.issuer}</p>
                    </div>

                    {/* Date */}
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{certificate.date}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{certificate.description}</p>

                    {/* Skills */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {certificate.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20"
                        onClick={() => toggleExpand(certificate.id)}
                      >
                        {isExpanded ? (
                          <>
                            <X className="w-3 h-3 mr-2" />
                            Close
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-3 h-3 mr-2" />
                            View Certificate
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Certificates Earned</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Years of participation</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">100%</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Commitment to Excellence</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}