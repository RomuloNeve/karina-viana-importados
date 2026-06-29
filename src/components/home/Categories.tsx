"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import categories from "@/data/categories.json";

export function Categories() {
  return (
    <section className="py-20 bg-pearl">
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
            Explore por Categoria
          </h2>
          <p className="text-brown max-w-2xl mx-auto">
            Navegue por nossa seleção cuidadosamente curada de produtos importados
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/loja?categoria=${category.slug}`}
                className="group block p-6 bg-white rounded-2xl border border-gold-light/20 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 text-center"
              >
                {/* Icon placeholder */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-light/20 to-cream flex items-center justify-center group-hover:from-gold-light/40 group-hover:to-gold/10 transition-all duration-300">
                  <span className="text-2xl text-gold-dark">✦</span>
                </div>
                <h3 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark group-hover:text-gold-dark transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-brown mt-1">
                  {category.productCount} produtos
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/loja"
            className="inline-flex items-center gap-2 text-gold-dark hover:text-gold font-medium text-sm transition-colors group"
          >
            Ver todos os produtos
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
