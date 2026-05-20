"use client";

import { motion } from "framer-motion";
import { Heart, Camera, Calendar, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  invitationConfig,
  generateCalendarLink,
} from "@/lib/invitation-config";

export function FooterSection() {
  const { event, messages } = invitationConfig;

  const handleAddToCalendar = () => {
    window.open(generateCalendarLink(), "_blank");
  };

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
            <p className="text-muted-foreground mb-6">{messages.footer}</p>
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--silver-dark), var(--silver-light))",
              }}
            >
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
                background:
                  "linear-gradient(135deg, var(--silver-dark), var(--silver-light), var(--silver-shine), var(--silver-light), var(--silver-dark))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 20px var(--silver))",
              }}
            >
              {event.name}
            </h2>
            <p className="text-xl text-foreground tracking-wide">
              {event.title}
            </p>
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
      {/* Creditos al creador */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          isolation: "isolate",
        }}
        className="relative z-20 bg-background/95 backdrop-blur-md border border-primary/20 rounded-2xl p-6 shadow-2xl max-w-xl mx-auto mt-16 overflow-hidden"
      >
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-disco-pink/5 via-transparent to-disco-cyan/5 pointer-events-none" />

        {/* Contenido */}
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />

            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Invitaciones Digitales
            </span>

            <Sparkles className="w-5 h-5 text-primary" />
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 text-center">
            Juan Esteban Castaño
          </h3>

          <p className="text-muted-foreground text-sm mb-4 max-w-xs mx-auto text-center">
            Crea invitaciones digitales únicas y personalizadas para tus eventos
            especiales
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3 text-primary" />
              Quinceañeras
            </span>

            <span className="text-primary/30">|</span>

            <span>Bodas</span>

            <span className="text-primary/30">|</span>

            <span>Bautizos</span>

            <span className="text-primary/30">|</span>

            <span>Cumpleaños</span>
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white shadow-md w-full sm:w-auto justify-center "
            >
              <a
                href="https://wa.me/573002877917?text=Hola%20Juan%20Esteban,%20vi%20tu%20trabajo%20de%20invitaciones%20digitales%20y%20me%20gustaría%20cotizar%20una%20invitación"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />

                <span>Cotiza tu invitación</span>
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            Respuesta en menos de 24 horas
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
