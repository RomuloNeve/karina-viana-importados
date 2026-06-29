import { Metadata } from "next";
import { ProductGrid } from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "Loja",
  description:
    "Explore nossa coleção de cosméticos importados. Perfumes, maquiagem, skincare e muito mais das melhores marcas do mundo.",
};

export default function LojaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-brown-dark mb-3">
          Nossa Coleção
        </h1>
        <p className="text-brown max-w-xl mx-auto">
          Produtos de beleza importados selecionados com carinho para você
        </p>
      </div>

      {/* Product grid with filters */}
      <ProductGrid />
    </div>
  );
}
