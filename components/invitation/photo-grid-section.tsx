"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { invitationConfig } from "@/lib/invitation-config";

export function PhotoGridSection() {
  const { photoGrid, messages } = invitationConfig;
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-card to-background overflow-hidden relative">
      {/* Silver ambient lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-silver/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-silver/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-8 h-8 text-silver drop-shadow-[0_0_8px_var(--silver)]" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl text-foreground mb-4">
            Mis Momentos Favoritos
          </h3>
          <p className="text-muted-foreground">{messages.timeline}</p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photoGrid.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelectedPhoto(index)}
              className={`relative cursor-pointer group overflow-hidden rounded-xl border-2 border-silver/20 ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{
                aspectRatio: "1",
              }}
            >
              {/* Imagen */}
              <img
                src={photo.image}
                alt={photo.description}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

              {/* Year badge */}
              <div className="absolute top-2 left-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full z-10">
                <span className="text-xs font-medium text-silver-light">
                  {photo.year}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 z-10">
                <p className="text-foreground text-sm font-medium">
                  {photo.description}
                </p>
              </div>

              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10"
                transition={{ duration: 0.3 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-silver-light rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + i * 10}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-silver/20 transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full aspect-square rounded-2xl overflow-hidden border-4 border-silver/30"
              style={{
                background: `linear-gradient(135deg, var(--silver-dark), var(--card))`,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <span className="text-silver-light text-2xl mb-4 drop-shadow-[0_0_10px_var(--silver)]">
                  {photoGrid[selectedPhoto].year}
                </span>
                <p className="text-foreground text-xl">
                  {photoGrid[selectedPhoto].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
