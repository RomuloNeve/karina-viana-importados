"use client";

import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal, getItemCount } =
    useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold-light/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-gold-dark" />
            <h2 className="font-[var(--font-heading)] text-lg font-semibold text-brown-dark">
              Carrinho
            </h2>
            <span className="text-sm text-brown">({getItemCount()})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-brown hover:text-brown-dark transition-colors"
            aria-label="Fechar carrinho"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-gold-light/50 mb-4" />
              <p className="text-brown-dark font-medium mb-1">
                Seu carrinho está vazio
              </p>
              <p className="text-sm text-brown mb-6">
                Explore nossa coleção e encontre produtos incríveis
              </p>
              <Button variant="outline" size="sm" onClick={closeCart}>
                Continuar comprando
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-pearl/50 rounded-xl"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 shrink-0 rounded-lg bg-gradient-to-br from-cream to-gold-light/20 flex items-center justify-center">
                    <span className="text-xs text-gold-dark/60 text-center font-medium">
                      {item.product.brand}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-brown-dark line-clamp-2">
                      {item.product.name}
                    </h3>
                    <p className="text-sm font-semibold text-gold-dark mt-1">
                      {formatCurrency(item.product.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gold-light/30 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-10 h-10 flex items-center justify-center text-brown hover:bg-cream transition-colors"
                          aria-label="Diminuir"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-brown-dark">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-10 h-10 flex items-center justify-center text-brown hover:bg-cream transition-colors"
                          aria-label="Aumentar"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-xs text-red-500 hover:text-red-600 transition-colors py-2 px-2 min-h-[44px] flex items-center"
                      >
                        Remover
                      </button>
                    </div>
                  </div>

                  {/* Line total */}
                  <div className="text-right">
                    <p className="text-sm font-semibold text-brown-dark">
                      {formatCurrency(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold-light/20 px-6 py-5 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-brown font-medium">Subtotal</span>
              <span className="text-xl font-bold text-gold-dark">
                {formatCurrency(getTotal())}
              </span>
            </div>
            <p className="text-xs text-brown">
              Frete calculado no checkout
            </p>

            {/* Actions */}
            <div className="space-y-2">
              <Link href="/checkout" onClick={closeCart}>
                <Button size="lg" className="w-full group">
                  Finalizar Compra
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
              <Link href="/carrinho" onClick={closeCart}>
                <button className="w-full text-sm text-brown hover:text-gold-dark font-medium py-2 transition-colors">
                  Ver carrinho completo
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
