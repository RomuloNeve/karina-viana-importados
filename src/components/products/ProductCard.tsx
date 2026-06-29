"use client";

import Link from "next/link";
import { ShoppingBag, Heart } from "lucide-react";
import { formatCurrency, calculateDiscount } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const discount = product.originalPrice
    ? calculateDiscount(product.price, product.originalPrice)
    : 0;

  return (
    <div className="group">
      <div className="bg-white rounded-2xl border border-gold-light/20 overflow-hidden hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-square bg-gradient-to-br from-cream to-pearl p-8 overflow-hidden">
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {discount > 0 && <Badge variant="sale">-{discount}%</Badge>}
            {product.isNew && <Badge variant="new">Novo</Badge>}
            {!product.inStock && <Badge variant="outOfStock">Esgotado</Badge>}
          </div>

          {/* Wishlist button */}
          <button
            aria-label="Adicionar aos favoritos"
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-red-500"
          >
            <Heart size={16} />
          </button>

          {/* Placeholder visual */}
          <Link href={`/loja/${product.slug}`} className="block w-full h-full">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold-light/30 to-gold/10 flex items-center justify-center">
                <span className="font-[var(--font-heading)] text-gold-dark/60 text-sm text-center px-2">
                  {product.brand}
                </span>
              </div>
            </div>
          </Link>

          {/* Quick add overlay */}
          {product.inStock && (
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button
                onClick={() => addItem(product)}
                className="w-full flex items-center justify-center gap-2 bg-gold-dark hover:bg-gold text-white py-3 rounded-xl font-medium text-sm transition-colors"
              >
                <ShoppingBag size={16} />
                Adicionar ao Carrinho
              </button>
            </div>
          )}
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
    </div>
  );
}
