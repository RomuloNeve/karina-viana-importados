"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function PedidosPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/conta/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link
        href="/conta"
        className="inline-flex items-center gap-2 text-brown hover:text-gold-dark text-sm mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Voltar para minha conta
      </Link>

      <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-8">
        Meus Pedidos
      </h1>

      {/* Empty state */}
      <div className="bg-white rounded-2xl border border-gold-light/20 p-12 text-center">
        <Package size={48} className="mx-auto text-gold-light/40 mb-4" />
        <h2 className="font-medium text-brown-dark mb-2">
          Nenhum pedido ainda
        </h2>
        <p className="text-sm text-brown mb-6">
          Quando você fizer seu primeiro pedido, ele aparecerá aqui
        </p>
        <Link
          href="/loja"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold-dark hover:bg-gold text-white rounded-xl font-medium text-sm transition-colors"
        >
          Explorar Loja
        </Link>
      </div>
    </div>
  );
}
