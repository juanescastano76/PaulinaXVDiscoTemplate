"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Shirt, Info, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  invitationConfig,
  generateWhatsAppLink,
} from "@/lib/invitation-config";

export function PartySection() {
  const [dressCodeOpen, setDressCodeOpen] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(false);
  const { event, dressCode, tips, messages } = invitationConfig;

  const handleSuggestSong = () => {
    const message = `Hola! Me gustaria sugerir una cancion para la playlist de los XV de ${event.name}:\n\n`;
    window.open(generateWhatsAppLink(message), "_blank");
  };

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-silver mx-auto mb-4 drop-shadow-[0_0_8px_var(--silver)]" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl text-foreground mb-4">Fiesta</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {messages.party}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {/* Music */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background rounded-2xl p-6 border border-border text-center hover:shadow-md transition-shadow"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                background:
                  "linear-gradient(135deg, var(--silver-dark), var(--silver-light))",
              }}
            >
              <Music className="w-8 h-8 text-background" />
            </div>
            <h4 className="text-lg font-medium text-foreground mb-2">Musica</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Cual es la cancion que no debe faltar en la playlist de la fiesta?
            </p>
            <Button
              onClick={handleSuggestSong}
              className="text-background shadow-lg shadow-silver/30"
              style={{
                background:
                  "linear-gradient(135deg, var(--silver), var(--silver-light))",
              }}
            >
              Sugerir cancion
            </Button>
          </motion.div>

          {/* Dress Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background rounded-2xl p-6 border border-border text-center hover:shadow-md transition-shadow"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                background:
                  "linear-gradient(135deg, var(--silver), var(--silver-shine))",
              }}
            >
              <Shirt className="w-8 h-8 text-background" />
            </div>
            <h4 className="text-lg font-medium text-foreground mb-2">
              Dress Code
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Una orientacion para tu vestuario
            </p>
            <Button
              variant="outline"
              onClick={() => setDressCodeOpen(true)}
              className="border-silver text-silver hover:bg-silver hover:text-background transition-colors"
            >
              Ver mas
            </Button>
          </motion.div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-background rounded-2xl p-6 border border-border text-center hover:shadow-md transition-shadow"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                background:
                  "linear-gradient(135deg, var(--silver-dark), var(--silver))",
              }}
            >
              <Info className="w-8 h-8 text-background" />
            </div>
            <h4 className="text-lg font-medium text-foreground mb-2">
              Tips y Notas
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Informacion adicional para tener en cuenta
            </p>
            <Button
              variant="outline"
              onClick={() => setTipsOpen(true)}
              className="border-silver text-silver hover:bg-silver hover:text-background transition-colors"
            >
              + Info
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Dress Code Modal */}
      <Dialog open={dressCodeOpen} onOpenChange={setDressCodeOpen}>
        <DialogContent className="sm:max-w-md bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <Shirt className="w-5 h-5 text-silver" />
              Dress Code
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Orientacion para tu vestuario
            </DialogDescription>
            <DialogDescription>Dress code NEGRO</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {/* <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full"
                style={{ background: "var(--silver)" }}
              />
              <div
                className="w-12 h-12 rounded-full"
                style={{ background: "var(--silver-light)" }}
              />
              <div
                className="w-12 h-12 rounded-full"
                style={{ background: "var(--silver-dark)" }}
              />
              <div
                className="w-12 h-12 rounded-full"
                style={{ background: "var(--silver-shine)" }}
              />
            </div>
            <p className="text-foreground">
              <strong>{dressCode.style}</strong>
            </p> */}
            <ul className="space-y-2 text-muted-foreground">
              {dressCode.suggestions.map((suggestion, index) => (
                <li key={index}>* {suggestion}</li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>

      {/* Tips Modal */}
      <Dialog open={tipsOpen} onOpenChange={setTipsOpen}>
        <DialogContent className="sm:max-w-md bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <Info className="w-5 h-5 text-silver" />
              Tips y Notas
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Informacion adicional importante
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-3 text-foreground">
              {tips.map((tip, index) => (
                <div key={index} className="p-3 rounded-lg bg-silver/10">
                  <p className="font-medium">
                    {tip.icon} {tip.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
