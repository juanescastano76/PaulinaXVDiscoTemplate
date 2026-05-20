"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Gift, Copy, Check, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { invitationConfig } from "@/lib/invitation-config"

export function GiftsSection() {
  const [bankModalOpen, setBankModalOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const { bankDetails, messages } = invitationConfig

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-card to-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-lg shadow-silver/30" style={{ background: 'linear-gradient(135deg, var(--silver-dark), var(--silver-light))' }}>
            <Gift className="w-8 h-8 text-background" />
          </div>
          <h3 className="text-2xl sm:text-3xl text-foreground mb-4">Regalos</h3>
          <p className="text-muted-foreground mb-8">
            {messages.gifts}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={() => setBankModalOpen(true)}
              className="text-background shadow-lg shadow-silver/30"
              style={{ background: 'linear-gradient(135deg, var(--silver), var(--silver-light))' }}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Datos bancarios
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bank Details Modal */}
      <Dialog open={bankModalOpen} onOpenChange={setBankModalOpen}>
        <DialogContent className="sm:max-w-md bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <CreditCard className="w-5 h-5 text-silver" />
              Datos Bancarios
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Información para transferencias
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-3">
              <BankField
                label="Banco"
                value={bankDetails.bank}
                onCopy={() => handleCopy(bankDetails.bank, "bank")}
                copied={copied === "bank"}
              />
              <BankField
                label="Tipo de cuenta"
                value={bankDetails.accountType}
                onCopy={() => handleCopy(bankDetails.accountType, "type")}
                copied={copied === "type"}
              />
              <BankField
                label="Número de cuenta"
                value={bankDetails.accountNumber}
                onCopy={() => handleCopy(bankDetails.accountNumber, "account")}
                copied={copied === "account"}
              />
              <BankField
                label="Titular"
                value={bankDetails.holder}
                onCopy={() => handleCopy(bankDetails.holder, "holder")}
                copied={copied === "holder"}
              />
              <BankField
                label="Cédula"
                value={bankDetails.id}
                onCopy={() => handleCopy(bankDetails.id, "id")}
                copied={copied === "id"}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function BankField({
  label,
  value,
  onCopy,
  copied,
}: {
  label: string
  value: string
  onCopy: () => void
  copied: boolean
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-foreground font-medium">{value}</p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={onCopy}
        className="text-muted-foreground hover:text-foreground"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </Button>
    </div>
  )
}
