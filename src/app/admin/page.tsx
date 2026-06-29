"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Package, ShoppingBag, Users, TrendingUp, LogOut } from "lucide-react";
import products from "@/data/products.json";

export default function AdminPage() {
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("kv-admin-auth");
    if (!auth) {
      router.push("/admin/login");
    } else {
      setIsAuthed(true);
    }
  }, [router]);

  if (!isAuthed) return null;

  const handleLogout = () => {
    sessionStorage.removeItem("kv-admin-auth");
    router.push("/admin/login");
  };

  const totalProducts = products.length;
  const inStockProducts = products.filter((p) => p.inStock).length;
  const featuredProducts = products.filter((p) => p.featured).length;
  const totalValue = products.reduce((acc, p) => acc + p.price * p.stockQuantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark">
            Painel Administrativo
          </h1>
          <p className="text-brown text-sm mt-1">
            Gerencie produtos, pedidos e estoque
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-brown hover:text-red-500 transition-colors"
        >
          <LogOut size={16} />
          Sair
        </button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-2xl border border-gold-light/20 p-6">
          <div className="flex items-center justify-between mb-3">
            <ShoppingBag size={20} className="text-gold-dark" />
            <span className="text-xs text-brown bg-cream px-2 py-1 rounded-full">
              Total
            </span>
          </div>
          <p className="text-2xl font-bold text-brown-dark">{totalProducts}</p>
          <p className="text-xs text-brown mt-1">Produtos cadastrados</p>
        </div>

        <div className="bg-white rounded-2xl border border-gold-light/20 p-6">
          <div className="flex items-center justify-between mb-3">
            <Package size={20} className="text-green-600" />
            <span className="text-xs text-brown bg-cream px-2 py-1 rounded-full">
              Ativo
            </span>
          </div>
          <p className="text-2xl font-bold text-brown-dark">{inStockProducts}</p>
          <p className="text-xs text-brown mt-1">Em estoque</p>
        </div>

        <div className="bg-white rounded-2xl border border-gold-light/20 p-6">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp size={20} className="text-blue-600" />
            <span className="text-xs text-brown bg-cream px-2 py-1 rounded-full">
              Destaque
            </span>
          </div>
          <p className="text-2xl font-bold text-brown-dark">{featuredProducts}</p>
          <p className="text-xs text-brown mt-1">Em destaque</p>
        </div>

        <div className="bg-white rounded-2xl border border-gold-light/20 p-6">
          <div className="flex items-center justify-between mb-3">
            <Users size={20} className="text-purple-600" />
            <span className="text-xs text-brown bg-cream px-2 py-1 rounded-full">
              Valor
            </span>
          </div>
          <p className="text-2xl font-bold text-brown-dark">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              notation: "compact",
            }).format(totalValue)}
          </p>
          <p className="text-xs text-brown mt-1">Valor em estoque</p>
        </div>
      </div>

      {/* Quick links */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Link href="/admin/produtos" className="group">
          <div className="bg-white rounded-2xl border border-gold-light/20 p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300">
            <ShoppingBag size={28} className="text-gold-dark mb-4" />
            <h2 className="font-[var(--font-heading)] text-lg font-semibold text-brown-dark group-hover:text-gold-dark transition-colors mb-2">
              Gerenciar Produtos
            </h2>
            <p className="text-sm text-brown">
              Adicione, edite ou remova produtos do catálogo
            </p>
          </div>
        </Link>

        <Link href="/admin/pedidos" className="group">
          <div className="bg-white rounded-2xl border border-gold-light/20 p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300">
            <Package size={28} className="text-gold-dark mb-4" />
            <h2 className="font-[var(--font-heading)] text-lg font-semibold text-brown-dark group-hover:text-gold-dark transition-colors mb-2">
              Gerenciar Pedidos
            </h2>
            <p className="text-sm text-brown">
              Acompanhe e atualize o status dos pedidos
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
