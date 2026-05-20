"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-hide prompt after 5 seconds
    const timer = setTimeout(() => {
      setShowPrompt(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay was prevented
          console.log("Autoplay prevented");
        });
      }
      setIsPlaying(!isPlaying);
      setShowPrompt(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/music/thousandYears.mp3"
      />

      {/* Music prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 z-50 bg-card border border-border rounded-xl p-4 shadow-lg max-w-[200px]"
          >
            <p className="text-sm text-foreground mb-2">
              ¿Deseas activar la música?
            </p>
            <button
              onClick={togglePlay}
              className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Activar música
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music button */}
      <motion.button
        onClick={togglePlay}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-4 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Volume2 className="w-5 h-5" />
          </motion.div>
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </motion.button>

      {/* Music playing indicator */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-20 right-4 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5"
          >
            <Music className="w-3 h-3 text-primary" />
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: ["4px", "12px", "4px"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    delay: i * 0.1,
                  }}
                  className="w-0.5 bg-primary rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
