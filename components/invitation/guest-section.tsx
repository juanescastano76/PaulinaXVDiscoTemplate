"use client"

import { motion } from "framer-motion"
import { Users, Heart } from "lucide-react"
import { invitationConfig } from "@/lib/invitation-config"

export function GuestSection() {
  const { guests, allowedCompanions, messages } = invitationConfig

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-card to-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, var(--silver-dark), var(--silver))' }}>
            <Users className="w-6 h-6 text-background" />
          </div>
          <h3 className="text-2xl sm:text-3xl text-foreground mb-2">Invitados</h3>
          <p className="text-muted-foreground">({allowedCompanions} acompañante{allowedCompanions > 1 ? 's' : ''})</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border"
        >
          <ul className="space-y-4">
            {guests.map((guest, index) => (
              <motion.li
                key={guest.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-silver/10 transition-colors"
              >
                <Heart className="w-4 h-4 text-silver fill-silver" />
                <span className="text-foreground">{guest.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-muted-foreground italic"
        >
          {messages.guestNote}
        </motion.p>
      </div>
    </section>
  )
}
