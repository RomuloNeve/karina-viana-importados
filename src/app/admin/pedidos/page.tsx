"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";

export default function AdminPedidosPage() {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-brown hover:text-gold-dark text-sm mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Voltar ao painel
      </Link>

      <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-8">
        Pedidos
      </h1>

      {/* Empty state */}
      <div className="bg-white rounded-2xl border border-gold-light/20 p-12 text-center">
        <Package size={48} className="mx-auto text-gold-light/40 mb-4" />
        <h2 className="font-medium text-brown-dark mb-2">
          Nenhum pedido registrado
        </h2>
        <p className="text-sm text-brown max-w-md mx-auto">
          Os pedidos feitos pelos clientes aparecerão aqui. Quando um cliente
          finalizar uma compra, você poderá gerenciar o status do pedido.
        </p>
      </div>
    </div>
  );
}
