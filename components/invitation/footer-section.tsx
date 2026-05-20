"use client"

import { motion } from "framer-motion"
import { Heart, Camera, Calendar, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { invitationConfig, generateCalendarLink } from "@/lib/invitation-config"

export function FooterSection() {
  const { event, messages } = invitationConfig

  const handleAddToCalendar = () => {
    window.open(generateCalendarLink(), "_blank")
  }

  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      {/* Silver gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-silver/10 via-background to-background" />
      
      {/* Silver floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-silver-light"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-silver" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-silver drop-shadow-[0_0_8px_var(--silver)]" />
            </motion.div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-silver" />
          </div>

          {/* Photo sharing message */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl text-foreground mb-4">
              Una gran fiesta junto a vos
            </h3>
            <p className="text-muted-foreground mb-6">
              {messages.footer}
            </p>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'linear-gradient(135deg, var(--silver-dark), var(--silver-light))' }}>
              <Camera className="w-6 h-6 text-background" />
            </div>
          </div>

          {/* Final name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2
              className="text-5xl sm:text-6xl mb-2"
              style={{ 
                fontFamily: "var(--font-script)",
                background: 'linear-gradient(135deg, var(--silver-dark), var(--silver-light), var(--silver-shine), var(--silver-light), var(--silver-dark))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px var(--silver))',
              }}
            >
              {event.name}
            </h2>
            <p className="text-xl text-foreground tracking-wide">{event.title}</p>
          </motion.div>

          {/* Add to calendar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="outline"
              onClick={handleAddToCalendar}
              className="border-silver text-silver hover:bg-silver hover:text-background transition-colors"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Fiesta
            </Button>
          </motion.div>

          {/* Copyright */}
          <p className="mt-12 text-sm text-muted-foreground">
            Con amor, {event.name}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
