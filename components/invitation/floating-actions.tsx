"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Music, Check, X, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { invitationConfig, generateWhatsAppLink } from "@/lib/invitation-config"

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { event } = invitationConfig

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleConfirmAttendance = () => {
    const message = `¡Hola! Confirmo mi asistencia a los XV años de ${event.name} el 15 de Junio. 🎉`
    window.open(generateWhatsAppLink(message), "_blank")
    setIsOpen(false)
  }

  const handleSuggestSong = () => {
    const message = `¡Hola! Me gustaría sugerir una canción para la playlist de los XV de ${event.name} 🎵:\n\n`
    window.open(generateWhatsAppLink(message), "_blank")
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 left-4 z-40 w-10 h-10 bg-card border border-border rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating action button */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3 mb-3"
            >
              {/* Confirm attendance */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="bg-card px-3 py-1.5 rounded-lg shadow-md text-sm text-foreground whitespace-nowrap border border-border">
                  Confirmar asistencia
                </span>
                <Button
                  size="icon"
                  onClick={handleConfirmAttendance}
                  className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
                >
                  <Check className="w-5 h-5" />
                </Button>
              </motion.div>

              {/* Suggest song */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <span className="bg-card px-3 py-1.5 rounded-lg shadow-md text-sm text-foreground whitespace-nowrap border border-border">
                  Sugerir canción
                </span>
                <Button
                  size="icon"
                  onClick={handleSuggestSong}
                  className="w-12 h-12 rounded-full bg-rose hover:bg-rose-dark text-white shadow-lg"
                >
                  <Music className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
            isOpen
              ? "bg-card text-foreground border border-border"
              : "bg-green-500 text-white"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>
      </div>
    </>
  )
}
