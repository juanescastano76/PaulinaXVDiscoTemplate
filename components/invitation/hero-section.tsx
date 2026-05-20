"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { invitationConfig } from "@/lib/invitation-config";

export function HeroSection() {
  const { event, messages } = invitationConfig;

  const formattedDate = `${String(event.date.getDate()).padStart(2, "0")}.${String(event.date.getMonth() + 1).padStart(2, "0")}.${event.date.getFullYear()}`;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-silver-dark/5 via-background to-background" />

      {/* Animated disco ball spotlight effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--silver-metallic) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Rotating light rays from disco ball */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-1/2 w-px h-[50vh] origin-top"
              style={{
                rotate: `${i * 22.5}deg`,
                background: `linear-gradient(180deg, var(--silver-chrome)${i % 3 === 0 ? "25" : "12"}, transparent 80%)`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Sweeping spotlight beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-32 h-[120vh] opacity-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--silver-light), transparent)",
          transformOrigin: "top center",
        }}
        animate={{
          rotate: [-30, 30, -30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-32 h-[120vh] opacity-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--silver-light), transparent)",
          transformOrigin: "top center",
        }}
        animate={{
          rotate: [30, -30, 30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Silver floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `var(--silver-${i % 2 === 0 ? "chrome" : "light"})`,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Disco decoration images */}
      <div className="absolute top-0 left-0 w-80 h-80 md:w-[500px] md:h-[500px] opacity-30 -translate-x-1/3 -translate-y-1/3">
        <Image
          src="/images/image-1.png"
          alt=""
          fill
          className="object-cover mix-blend-screen grayscale"
          priority
        />
      </div>
      <div className="absolute top-0 right-0 w-80 h-80 md:w-[500px] md:h-[500px] opacity-30 translate-x-1/3 -translate-y-1/3">
        <Image
          src="/images/image-1.png"
          alt=""
          fill
          className="object-cover mix-blend-screen  grayscale"
          priority
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        {/* Date with silver glow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-silver text-lg tracking-[0.3em] uppercase mb-8 drop-shadow-[0_0_15px_var(--silver-metallic)]"
        >
          {formattedDate}
        </motion.p>

        {/* Main name with chrome shine */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4"
          style={{
            fontFamily: "var(--font-script)",
            background:
              "linear-gradient(135deg, var(--silver-dark), var(--silver-chrome), var(--silver-shine), var(--silver-chrome), var(--silver-dark))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 40px var(--silver-metallic))",
          }}
        >
          {event.name}
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-silver-metallic to-transparent" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-silver-chrome drop-shadow-[0_0_12px_var(--silver-metallic)]" />
          </motion.div>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-silver-metallic to-transparent" />
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl text-silver-light tracking-wide"
        >
          {event.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-silver-dark max-w-md mx-auto text-lg leading-relaxed"
        >
          {messages.hero}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-silver-metallic rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-silver-chrome rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
