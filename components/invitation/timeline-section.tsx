"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { invitationConfig } from "@/lib/invitation-config"

export function TimelineSection() {
  const { timeline, messages } = invitationConfig

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-card to-background overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl text-foreground mb-4">
            Un recorrido de estos 15 años
          </h3>
          <p className="text-muted-foreground">
            {messages.timeline}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-rose/30 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Photo */}
                <div className="flex-1 flex justify-center md:justify-end">
                  <div
                    className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-card shadow-lg ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-light to-gold-light flex items-center justify-center">
                      <Heart className="w-16 h-16 text-rose/30" />
                    </div>
                    {/* Placeholder for actual images - replace with real images */}
                    <div className="absolute inset-0 flex items-center justify-center bg-rose-light/50">
                      <span className="text-6xl font-script text-rose-dark" style={{ fontFamily: 'var(--font-script)' }}>
                        {photo.year.slice(-2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-8 h-8 bg-rose rounded-full border-4 border-card shadow-md z-10">
                  <Heart className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
                </div>

                {/* Info */}
                <div className={`flex-1 text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="inline-block px-3 py-1 bg-gold-light text-gold rounded-full text-sm font-medium mb-2">
                    {photo.year}
                  </span>
                  <p className="text-foreground text-lg">{photo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
