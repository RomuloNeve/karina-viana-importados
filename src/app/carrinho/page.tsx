"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, getTotal, getItemCount } =
    useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ShoppingBag size={64} className="mx-auto text-gold-light/40 mb-6" />
        <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-3">
          Seu carrinho está vazio
        </h1>
        <p className="text-brown mb-8">
          Explore nossa coleção e encontre produtos incríveis
        </p>
        <Link href="/loja">
          <Button size="lg">
            <ArrowLeft size={16} />
            Continuar Comprando
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-[var(--font-heading)] text-3xl font-bold text-brown-dark mb-8">
        Meu Carrinho
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-2xl border border-gold-light/20"
            >
              {/* Image placeholder */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl bg-gradient-to-br from-cream to-gold-light/20 flex items-center justify-center">
                <span className="text-xs sm:text-sm text-gold-dark/60 text-center font-medium px-2">
                  {item.product.brand}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <Link
                  href={`/loja/${item.product.slug}`}
                  className="font-medium text-brown-dark hover:text-gold-dark transition-colors line-clamp-2"
                >
                  {item.product.name}
                </Link>
                <p className="text-sm text-brown mt-1">{item.product.brand}</p>

                <div className="flex items-center justify-between mt-4">
                  {/* Quantity */}
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
                    <span className="w-10 text-center text-sm font-medium text-brown-dark">
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

                  {/* Price + remove */}
                  <div className="text-right">
                    <p className="font-semibold text-gold-dark">
                      {formatCurrency(item.product.price * item.quantity)}
                    </p>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-600 mt-1 transition-colors"
                    >
                      <Trash2 size={12} />
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Continue shopping */}
          <Link
            href="/loja"
            className="inline-flex items-center gap-2 text-sm text-brown hover:text-gold-dark transition-colors mt-4"
          >
            <ArrowLeft size={16} />
            Continuar comprando
          </Link>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white rounded-2xl border border-gold-light/20 p-6">
            <h2 className="font-[var(--font-heading)] text-lg font-semibold text-brown-dark mb-6">
              Resumo do Pedido
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-brown">
                  Subtotal ({getItemCount()} itens)
                </span>
                <span className="text-brown-dark font-medium">
                  {formatCurrency(getTotal())}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brown">Frete</span>
                <span className="text-brown-dark font-medium">
                  A calcular
                </span>
              </div>
              <div className="border-t border-gold-light/20 pt-3 flex justify-between">
                <span className="font-semibold text-brown-dark">Total</span>
                <span className="text-xl font-bold text-gold-dark">
                  {formatCurrency(getTotal())}
                </span>
              </div>
            </div>

            <Link href="/checkout">
              <Button size="lg" className="w-full group">
                Finalizar Compra
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>

            <p className="text-xs text-brown text-center mt-4">
              Pagamento seguro via Pix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
