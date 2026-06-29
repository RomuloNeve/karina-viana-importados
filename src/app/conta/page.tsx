"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Package, LogOut, ShoppingBag } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/Button";

export default function ContaPage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/conta/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) return null;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark">
            Minha Conta
          </h1>
          <p className="text-brown text-sm mt-1">Olá, {user.name}!</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-brown hover:text-red-500 transition-colors"
        >
          <LogOut size={16} />
          Sair
        </button>
      </div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile */}
        <div className="bg-white rounded-2xl border border-gold-light/20 p-6">
          <div className="w-12 h-12 rounded-full bg-gold-light/20 flex items-center justify-center mb-4">
            <User size={20} className="text-gold-dark" />
          </div>
          <h2 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark mb-3">
            Dados Pessoais
          </h2>
          <div className="space-y-2 text-sm text-brown">
            <p>{user.name}</p>
            <p>{user.email}</p>
            {user.phone && <p>{user.phone}</p>}
          </div>
        </div>

        {/* Orders */}
        <Link href="/conta/pedidos" className="group">
          <div className="bg-white rounded-2xl border border-gold-light/20 p-6 h-full hover:shadow-lg hover:border-gold/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-gold-light/20 flex items-center justify-center mb-4">
              <Package size={20} className="text-gold-dark" />
            </div>
            <h2 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark mb-2 group-hover:text-gold-dark transition-colors">
              Meus Pedidos
            </h2>
            <p className="text-sm text-brown">
              Acompanhe o status dos seus pedidos
            </p>
          </div>
        </Link>

        {/* Shop CTA */}
        <Link href="/loja" className="group">
          <div className="bg-white rounded-2xl border border-gold-light/20 p-6 h-full hover:shadow-lg hover:border-gold/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-gold-light/20 flex items-center justify-center mb-4">
              <ShoppingBag size={20} className="text-gold-dark" />
            </div>
            <h2 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark mb-2 group-hover:text-gold-dark transition-colors">
              Continuar Comprando
            </h2>
            <p className="text-sm text-brown">
              Explore novos produtos na nossa loja
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
