"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react"
import { invitationConfig } from "@/lib/invitation-config"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const [hasError, setHasError] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(invitationConfig.backgroundMusic)
    audioRef.current.loop = true
    audioRef.current.volume = 0.5
    
    // Handle errors gracefully
    audioRef.current.onerror = () => {
      setHasError(true)
      setShowPrompt(false)
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay blocked, user needs to interact
      })
    }
    setIsPlaying(!isPlaying)
    setShowPrompt(false)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  // Don't render anything if music file has an error
  if (hasError) {
    return null
  }

  return (
    <>
      {/* Initial prompt to play music */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="flex items-center gap-3 px-6 py-3 rounded-full shadow-lg shadow-silver/30"
              style={{ background: 'linear-gradient(135deg, var(--silver-dark), var(--silver-light))' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Music className="w-5 h-5 text-background" />
              </motion.div>
              <span className="text-background font-medium">Reproducir musica</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music controls */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
        {/* Mute button - only show when playing */}
        <AnimatePresence>
          {isPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </motion.button>
          )}
        </AnimatePresence>

        {/* Main play/pause button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center relative overflow-hidden ${
            isPlaying
              ? "shadow-silver/30"
              : "bg-card border border-border"
          }`}
          style={isPlaying ? { background: 'linear-gradient(135deg, var(--silver-dark), var(--silver-light))' } : undefined}
        >
          {/* Animated rings when playing */}
          {isPlaying && (
            <>
              <motion.div
                className="absolute inset-0 border-2 border-white/30 rounded-full"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-white/30 rounded-full"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </>
          )}

          {/* Icon */}
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-background relative z-10" />
            ) : (
              <Play className="w-6 h-6 text-muted-foreground relative z-10 ml-0.5" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Visualizer bars when playing */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-20 left-4 z-40 flex items-end gap-1"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 rounded-full"
                style={{ background: 'linear-gradient(to top, var(--silver-dark), var(--silver-light))' }}
                animate={{
                  height: [8, 16 + Math.random() * 12, 8],
                }}
                transition={{
                  duration: 0.4 + Math.random() * 0.3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
