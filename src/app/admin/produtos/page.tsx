"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import products from "@/data/products.json";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export default function AdminProdutosPage() {
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

      <div className="flex items-center justify-between mb-8">
        <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark">
          Produtos ({products.length})
        </h1>
      </div>

      {/* Products table */}
      <div className="bg-white rounded-2xl border border-gold-light/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-cream/50">
              <tr>
                <th className="text-left px-6 py-4 font-medium text-brown-dark">
                  Produto
                </th>
                <th className="text-left px-6 py-4 font-medium text-brown-dark">
                  Categoria
                </th>
                <th className="text-left px-6 py-4 font-medium text-brown-dark">
                  Preço
                </th>
                <th className="text-left px-6 py-4 font-medium text-brown-dark">
                  Estoque
                </th>
                <th className="text-left px-6 py-4 font-medium text-brown-dark">
                  Status
                </th>
                <th className="text-right px-6 py-4 font-medium text-brown-dark">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-light/10">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-cream/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-brown-dark">
                        {product.name}
                      </p>
                      <p className="text-xs text-brown">{product.brand}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-brown capitalize">
                    {product.category}
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gold-dark">
                      {formatCurrency(product.price)}
                    </p>
                    {product.originalPrice && (
                      <p className="text-xs text-brown line-through">
                        {formatCurrency(product.originalPrice)}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-brown">
                    {product.stockQuantity} un.
                  </td>
                  <td className="px-6 py-4">
                    {product.inStock ? (
                      <Badge variant="new">Ativo</Badge>
                    ) : (
                      <Badge variant="outOfStock">Esgotado</Badge>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="p-2 text-brown hover:text-gold-dark rounded-lg hover:bg-cream transition-colors"
                        aria-label="Editar"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className="p-2 text-brown hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                        aria-label="Excluir"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
