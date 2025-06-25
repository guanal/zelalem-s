"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "zelalemk111@gmail.com",
    href: "mailto:zelalemk111@gmail.com",
    color: "from-blue-400 to-indigo-600",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+251-922-498-446",
    href: "tel:+251922498446",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bahir Dar, Ethiopia",
    href: "https://maps.google.com/?q=Bahir+Dar+Ethiopia",
    color: "from-rose-400 to-pink-600",
  },
]

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/zelalem-ka",
    color: "hover:bg-gray-900 hover:text-white",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/zelalem",
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com/zelalem",
    color: "hover:bg-blue-400 hover:text-white",
  },
  {
    icon: MessageSquare,
    name: "Telegram",
    href: "https://t.me/I_myself_zelalem_k",
    color: "hover:bg-blue-500 hover:text-white",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm excited to collaborate on innovative projects or explore new opportunities. Reach out, and let's create something extraordinary together!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center space-x-4"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{contact.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                </div>
              </a>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-white/10 dark:to-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h4>
          <div className="flex justify-center space-x-6">
            <AnimatePresence>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  <social.icon className="w-7 h-7" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}