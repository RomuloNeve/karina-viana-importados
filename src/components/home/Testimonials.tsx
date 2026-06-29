"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Mariana S.",
    rating: 5,
    text: "Produtos originais e entrega super rápida! O perfume veio lacrado e com todas as certificações. Já sou cliente fiel!",
    product: "Chanel Nº5",
    date: "2025-06-10",
  },
  {
    id: "2",
    name: "Camila R.",
    rating: 5,
    text: "Atendimento impecável pelo WhatsApp. A Karina me ajudou a escolher o skincare perfeito para minha pele. Resultado incrível!",
    product: "La Mer Crème",
    date: "2025-05-28",
  },
  {
    id: "3",
    name: "Fernanda L.",
    rating: 5,
    text: "Melhor loja de importados que já comprei. Preços justos, tudo original e embalagem linda. Super recomendo!",
    product: "Charlotte Tilbury",
    date: "2025-06-05",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-brown-dark mb-4">
            O que Nossas Clientes Dizem
          </h2>
          <p className="text-brown max-w-2xl mx-auto">
            A satisfação de quem confia na Karina Viana Importados
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gold-light/20 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="absolute top-6 right-6 text-gold-light/30"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-brown-dark text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light/40 to-gold/20 flex items-center justify-center">
                  <span className="font-semibold text-gold-dark text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-brown-dark text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-brown">
                    Comprou: {testimonial.product}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
