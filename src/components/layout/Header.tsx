"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Loja", href: "/loja" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getItemCount, openCart } = useCartStore();
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 bg-pearl/95 backdrop-blur-md border-b border-gold-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="Karina Viana Importados"
              width={50}
              height={50}
              className="rounded-full border-2 border-gold/30"
            />
            <div className="hidden sm:block">
              <h1 className="font-[var(--font-heading)] text-lg font-semibold text-brown-dark leading-tight">
                Karina Viana
              </h1>
              <p className="text-xs text-brown tracking-widest uppercase">
                Importados
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brown-dark hover:text-gold-dark transition-colors text-sm font-medium tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              aria-label="Buscar"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-brown hover:text-gold-dark transition-colors"
            >
              <Search size={20} />
            </button>

            <Link
              href="/conta"
              aria-label="Minha conta"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-brown hover:text-gold-dark transition-colors"
            >
              <User size={20} />
            </Link>

            <button
              onClick={openCart}
              aria-label="Carrinho"
              className="relative p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-brown hover:text-gold-dark transition-colors"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-gold-dark text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-brown hover:text-gold-dark transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1 pt-4 border-t border-gold-light/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-brown-dark hover:text-gold-dark transition-colors text-sm font-medium py-3 min-h-[44px] flex items-center"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
