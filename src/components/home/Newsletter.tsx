"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-brown-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-cream mb-4">
            Receba Novidades & Ofertas
          </h2>
          <p className="text-cream/70 mb-8 max-w-lg mx-auto">
            Cadastre-se e seja a primeira a saber sobre lançamentos, promoções
            exclusivas e dicas de beleza.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gold/10 border border-gold/30 rounded-2xl p-6"
            >
              <p className="text-gold-light font-medium">
                ✨ Obrigada! Você receberá nossas novidades em breve.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
              />
              <Button
                type="submit"
                size="md"
                className="shrink-0 bg-gold hover:bg-gold-dark"
              >
                <Send size={16} />
                Cadastrar
              </Button>
            </form>
          )}

          <p className="text-cream/40 text-xs mt-4">
            Sem spam. Você pode cancelar a qualquer momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
