import { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import { Product } from "@/types";
import { ProductDetail } from "@/components/products/ProductDetail";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Karina Viana Importados`,
      description: product.shortDescription,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product as Product} />;
}
