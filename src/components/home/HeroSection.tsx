"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-cream via-pearl to-cream">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-light/20 rounded-full mb-6"
            >
              <Sparkles size={14} className="text-gold-dark" />
              <span className="text-xs font-medium text-gold-dark uppercase tracking-wider">
                Beleza Premium Importada
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brown-dark leading-[1.1] mb-6"
            >
              Descubra a{" "}
              <span className="text-gold-dark italic">beleza</span> que
              você merece
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-brown text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Cosméticos importados das melhores marcas do mundo, selecionados
              com carinho para realçar sua beleza natural.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/loja">
                <Button size="lg" className="group">
                  Explorar Coleção
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
              <Link href="/sobre">
                <Button variant="outline" size="lg">
                  Nossa História
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-4 sm:gap-6 mt-10 justify-center lg:justify-start flex-wrap"
            >
              <div className="text-center">
                <p className="font-[var(--font-heading)] text-2xl font-bold text-gold-dark">
                  500+
                </p>
                <p className="text-xs text-brown">Produtos</p>
              </div>
              <div className="w-px h-10 bg-gold-light/40" />
              <div className="text-center">
                <p className="font-[var(--font-heading)] text-2xl font-bold text-gold-dark">
                  100%
                </p>
                <p className="text-xs text-brown">Originais</p>
              </div>
              <div className="w-px h-10 bg-gold-light/40" />
              <div className="text-center">
                <p className="font-[var(--font-heading)] text-2xl font-bold text-gold-dark">
                  2k+
                </p>
                <p className="text-xs text-brown">Clientes</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual side - decorative gold circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-[500px] h-[500px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold-light/30 animate-[spin_20s_linear_infinite]" />
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-gold/20 animate-[spin_15s_linear_infinite_reverse]" />
              {/* Inner circle with gradient */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-gold-light/20 via-cream to-gold/10 flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <p className="font-[var(--font-heading)] text-6xl font-bold text-gold-dark/80">
                    KV
                  </p>
                  <p className="text-sm text-brown tracking-[0.3em] uppercase mt-2">
                    Importados
                  </p>
                </div>
              </div>
              {/* Floating dots */}
              <div className="absolute top-10 right-20 w-3 h-3 bg-gold rounded-full animate-bounce" />
              <div className="absolute bottom-20 left-10 w-2 h-2 bg-gold-light rounded-full animate-bounce delay-300" />
              <div className="absolute top-1/2 right-5 w-4 h-4 bg-gold-dark/30 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
