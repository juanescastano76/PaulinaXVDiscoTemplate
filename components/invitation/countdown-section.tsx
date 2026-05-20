"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { invitationConfig } from "@/lib/invitation-config"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = invitationConfig.event.date

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: "días" },
    { value: timeLeft.hours, label: "hs" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "seg" },
  ]

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mb-8"
        >
          Falta
        </motion.p>

        <div className="flex justify-center gap-4 sm:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center border border-silver-metallic/30 shadow-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, var(--silver-dark), var(--card), var(--silver-dark))',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-silver-metallic/15 to-transparent" />
                <span className="relative text-2xl sm:text-3xl md:text-4xl font-light text-silver-chrome drop-shadow-[0_0_12px_var(--silver-metallic)]">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 text-sm text-muted-foreground uppercase tracking-wide">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
