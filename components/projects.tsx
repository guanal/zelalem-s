"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, MessageSquare, Brain, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Document-Aware Conversational Assistant System",
    description:
      "An innovative AI-powered system that allows users to upload documents and engage in intelligent conversations about their content. Features advanced natural language processing, document parsing, and contextual understanding.",
    longDescription:
      "This graduation project represents the culmination of my academic journey, combining artificial intelligence, natural language processing, and user experience design. The system can process various document formats, extract meaningful information, and provide intelligent responses based on document content.",
    image: "/pro.png",
    technologies: ["Python", "Natural Language Processing", "AI/ML", "Document Processing", "Flask", "React"],
    features: [
      "Multi-format document support (PDF, DOCX, TXT)",
      "Intelligent content extraction and indexing",
      "Contextual conversation capabilities",
      "Real-time response generation",
      "User-friendly interface design",
    ],
    category: "AI/ML",
    status: "Completed",
    github: "https://github.com/zelalem-ka/",
    demo: "https://doc-chat-w3kn.vercel.app/",
    featured: true,
  },
]

const categoryIcons = {
  "AI/ML": Brain,
  "Web Development": Zap,
  Mobile: MessageSquare,
}

export function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise through carefully crafted projects that demonstrate
            problem-solving skills and modern development practices.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Featured Project</Badge>
                  </div>
                </div>

                {/* Project Details */}
                <CardContent className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      {categoryIcons[featuredProject.category as keyof typeof categoryIcons] && (
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                          {(() => {
                            const Icon = categoryIcons[featuredProject.category as keyof typeof categoryIcons]
                            return <Icon className="w-4 h-4 text-white" />
                          })()}
                        </div>
                      )}
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {featuredProject.category}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                      {featuredProject.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {featuredProject.longDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {featuredProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                    </a>
                    <a
                      href={featuredProject.github !== "#" ? featuredProject.github : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={featuredProject.github === "#" ? "pointer-events-none" : ""}
                    >
                      <Button
                        variant="outline"
                        disabled={featuredProject.github === "#"}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                {/* Project Image */}
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </a>
                    <a
                      href={project.github !== "#" ? project.github : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.github === "#" ? "pointer-events-none" : ""}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        disabled={project.github === "#"}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}