"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import products from "@/data/products.json";
import categories from "@/data/categories.json";
import { ProductCard } from "@/components/products/ProductCard";
import { Product } from "@/types";

interface ProductGridProps {
  initialCategory?: string;
}

export function ProductGrid({ initialCategory }: ProductGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const brands = useMemo(() => {
    const allBrands = products.map((p) => p.brand);
    return [...new Set(allBrands)].sort();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products] as Product[];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedBrand, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedBrand("");
    setSortBy("featured");
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedBrand;

  return (
    <div>
      {/* Search and controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brown/50"
          />
          <input
            type="text"
            placeholder="Buscar produtos, marcas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gold-light/30 bg-white text-brown-dark placeholder:text-brown/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
          />
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gold-light/30 bg-white text-brown-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 cursor-pointer"
        >
          <option value="featured">Destaques</option>
          <option value="newest">Mais recentes</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
          <option value="name">A-Z</option>
        </select>

        {/* Filter toggle (mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gold-light/30 bg-white text-brown-dark text-sm"
        >
          <SlidersHorizontal size={16} />
          Filtros
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar filters */}
        <aside
          className={`${
            showFilters ? "block" : "hidden"
          } sm:block w-full sm:w-56 shrink-0`}
        >
          <div className="sticky top-28 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark mb-3">
                Categorias
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`block w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors ${
                    !selectedCategory
                      ? "bg-gold-light/30 text-gold-dark font-medium"
                      : "text-brown hover:text-gold-dark"
                  }`}
                >
                  Todas
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`block w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors ${
                      selectedCategory === cat.slug
                        ? "bg-gold-light/30 text-gold-dark font-medium"
                        : "text-brown hover:text-gold-dark"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark mb-3">
                Marcas
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedBrand("")}
                  className={`block w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors ${
                    !selectedBrand
                      ? "bg-gold-light/30 text-gold-dark font-medium"
                      : "text-brown hover:text-gold-dark"
                  }`}
                >
                  Todas
                </button>
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`block w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors ${
                      selectedBrand === brand
                        ? "bg-gold-light/30 text-gold-dark font-medium"
                        : "text-brown hover:text-gold-dark"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors"
              >
                <X size={14} />
                Limpar filtros
              </button>
            )}
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          {/* Results count */}
          <p className="text-sm text-brown mb-6">
            {filteredProducts.length} produto{filteredProducts.length !== 1 && "s"}{" "}
            encontrado{filteredProducts.length !== 1 && "s"}
          </p>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product as Product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brown text-lg mb-2">
                Nenhum produto encontrado
              </p>
              <p className="text-brown/60 text-sm">
                Tente ajustar os filtros ou buscar por outro termo
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-gold-dark hover:text-gold font-medium text-sm"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
