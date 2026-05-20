"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Navigation, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  invitationConfig,
  generateWhatsAppLink,
  generateCalendarLink,
  generateMapsLink,
} from "@/lib/invitation-config";

export function EventSection() {
  const { event } = invitationConfig;

  const handleAddToCalendar = () => {
    window.open(generateCalendarLink(), "_blank");
  };

  const handleConfirmAttendance = () => {
    const message = `¡Hola! Confirmo mi asistencia a los XV años de ${event.name} el 15 de Junio. 🎉`;
    window.open(generateWhatsAppLink(message), "_blank");
  };

  const handleGetDirections = () => {
    window.open(generateMapsLink(), "_blank");
  };

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
            style={{
              background:
                "linear-gradient(135deg, var(--silver-dark), var(--silver-light))",
            }}
          >
            <PartyPopper className="w-6 h-6 text-background" />
          </div>
          <h3 className="text-2xl sm:text-3xl text-foreground">Fiesta</h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-background rounded-2xl border border-border"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Día
            </p>
            <Calendar className="w-8 h-8 text-silver mx-auto mb-4" />
            <p className="text-foreground font-medium">Sabado 15 de Junio</p>
            <p className="text-muted-foreground">17:00 hs</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 border-silver text-silver hover:bg-silver hover:text-background transition-colors"
              onClick={handleAddToCalendar}
            >
              Agendar
            </Button>
          </motion.div>

          {/* Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-background rounded-2xl border border-border"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Lugar
            </p>
            <MapPin className="w-8 h-8 text-silver-light mx-auto mb-4" />
            <p className="text-foreground font-medium">Finca Los Pinos</p>
            <Button
              variant="default"
              size="sm"
              className="mt-4 text-background shadow-lg shadow-silver/30"
              style={{
                background:
                  "linear-gradient(135deg, var(--silver), var(--silver-light))",
              }}
              onClick={handleConfirmAttendance}
            >
              Confirmar asistencia
            </Button>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 bg-background rounded-2xl border border-border"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Dirección
            </p>
            <Navigation className="w-8 h-8 text-silver mx-auto mb-4" />
            <p className="text-foreground font-medium">Finca Los Pinos</p>
            <p className="text-muted-foreground">Medellin</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 border-silver text-silver hover:bg-silver hover:text-background transition-colors"
              onClick={handleGetDirections}
            >
              Como llegar?
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
