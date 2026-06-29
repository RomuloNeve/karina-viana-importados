"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag, Heart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Product } from "@/types";
import { formatCurrency, calculateDiscount } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cartStore";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCartStore();
  const discount = product.originalPrice
    ? calculateDiscount(product.price, product.originalPrice)
    : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
    openCart();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <Link
        href="/loja"
        className="inline-flex items-center gap-2 text-brown hover:text-gold-dark text-sm mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Voltar para a loja
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-gradient-to-br from-cream to-pearl rounded-2xl border border-gold-light/20 flex items-center justify-center relative overflow-hidden">
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              {discount > 0 && <Badge variant="sale">-{discount}%</Badge>}
              {product.isNew && <Badge variant="new">Novo</Badge>}
              {!product.inStock && <Badge variant="outOfStock">Esgotado</Badge>}
            </div>

            {/* Placeholder */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold-light/30 to-gold/10 flex items-center justify-center">
              <span className="font-[var(--font-heading)] text-gold-dark/60 text-xl text-center px-4">
                {product.brand}
              </span>
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="flex flex-col">
          {/* Brand */}
          <p className="text-sm text-brown uppercase tracking-widest mb-2">
            {product.brand}
          </p>

          {/* Name */}
          <h1 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-brown-dark mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating!)
                        ? "fill-gold text-gold"
                        : "text-gold-light/50"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-brown">{product.rating}</span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-gold-dark">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-brown line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
            {discount > 0 && (
              <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded">
                -{discount}% OFF
              </span>
            )}
          </div>

          {/* Short description */}
          <p className="text-brown leading-relaxed mb-6">
            {product.shortDescription}
          </p>

          {/* Quantity + Add to cart */}
          {product.inStock ? (
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Quantity */}
              <div className="flex items-center border border-gold-light/40 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-brown hover:bg-cream transition-colors"
                  aria-label="Diminuir quantidade"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium text-brown-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                  className="w-12 h-12 flex items-center justify-center text-brown hover:bg-cream transition-colors"
                  aria-label="Aumentar quantidade"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to cart */}
              <Button size="lg" onClick={handleAddToCart} className="flex-1">
                <ShoppingBag size={18} />
                Adicionar ao Carrinho
              </Button>

              {/* Wishlist */}
              <button
                aria-label="Adicionar aos favoritos"
                className="w-12 h-12 shrink-0 rounded-xl border border-gold-light/40 flex items-center justify-center text-brown hover:text-red-500 hover:border-red-200 transition-colors"
              >
                <Heart size={20} />
              </button>
            </div>
          ) : (
            <div className="mb-8 p-4 bg-gray-50 rounded-xl text-center">
              <p className="text-gray-600 font-medium">Produto esgotado</p>
              <p className="text-sm text-gray-500 mt-1">
                Entre em contato pelo WhatsApp para ser avisado quando voltar
              </p>
            </div>
          )}

          {/* Stock info */}
          {product.inStock && product.stockQuantity <= 5 && (
            <p className="text-sm text-orange-600 mb-6">
              ⚡ Apenas {product.stockQuantity} unidades em estoque
            </p>
          )}

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-gold-light/20">
            <div className="text-center">
              <Truck size={20} className="mx-auto text-gold-dark mb-1.5" />
              <p className="text-xs text-brown">Envio para todo Brasil</p>
            </div>
            <div className="text-center">
              <Shield size={20} className="mx-auto text-gold-dark mb-1.5" />
              <p className="text-xs text-brown">100% Original</p>
            </div>
            <div className="text-center">
              <RotateCcw size={20} className="mx-auto text-gold-dark mb-1.5" />
              <p className="text-xs text-brown">Troca garantida</p>
            </div>
          </div>

          {/* Full description */}
          <div className="pt-6 border-t border-gold-light/20">
            <h3 className="font-[var(--font-heading)] text-lg font-semibold text-brown-dark mb-3">
              Descrição
            </h3>
            <p className="text-brown text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="pt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-cream rounded-full text-brown"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
