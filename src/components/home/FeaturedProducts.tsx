"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Heart } from "lucide-react";
import products from "@/data/products.json";
import { formatCurrency, calculateDiscount } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCartStore();
  const discount = product.originalPrice
    ? calculateDiscount(product.price, product.originalPrice)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="bg-white rounded-2xl border border-gold-light/20 overflow-hidden hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-square bg-gradient-to-br from-cream to-pearl p-8 overflow-hidden">
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {discount > 0 && <Badge variant="sale">-{discount}%</Badge>}
            {product.isNew && <Badge variant="new">Novo</Badge>}
          </div>

          {/* Wishlist button */}
          <button
            aria-label="Adicionar aos favoritos"
            className="absolute top-3 right-3 z-10 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-white hover:text-red-500"
          >
            <Heart size={18} />
          </button>

          {/* Placeholder visual */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold-light/30 to-gold/10 flex items-center justify-center">
              <span className="font-[var(--font-heading)] text-gold-dark/60 text-sm text-center px-2">
                {product.brand}
              </span>
            </div>
          </div>

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={() => addItem(product as Product)}
              className="w-full flex items-center justify-center gap-2 bg-gold-dark hover:bg-gold text-white py-3 rounded-xl font-medium text-sm transition-colors min-h-[44px]"
            >
              <ShoppingBag size={16} />
              Adicionar ao Carrinho
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <p className="text-xs text-brown uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <Link href={`/loja/${product.slug}`}>
            <h3 className="font-medium text-brown-dark text-sm leading-snug hover:text-gold-dark transition-colors line-clamp-2 min-h-[2.5rem]">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-brown mt-1.5 line-clamp-1">
            {product.shortDescription}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 mt-3">
            <span className="font-semibold text-gold-dark">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-brown line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="py-20 bg-cream">
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
            Produtos em Destaque
          </h2>
          <p className="text-brown max-w-2xl mx-auto">
            Selecionados especialmente para você — os mais amados por nossas clientes
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 8).map((product, index) => (
            <ProductCard
              key={product.id}
              product={product as Product}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/loja">
            <button className="px-8 py-4 border-2 border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white rounded-xl font-medium transition-all duration-300">
              Ver Toda a Coleção
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
