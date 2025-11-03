"use client";

import products from "@/data/Products"; 
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CatalogoPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // 🏷️ Filtrar por categoría si está seleccionada
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h1>

      {/* Navegación de categorías */}
      <div className="flex justify-center gap-6 mb-10 text-lg">
        <Link
          href="/catalogo"
          className={`font-semibold hover:text-blue-500 transition ${
            !category ? "text-blue-600 underline" : "text-gray-700"
          }`}
        >
          Todos
        </Link>
        <Link
          href="/catalogo?category=camisetas"
          className={`hover:text-blue-500 transition ${
            category === "camisetas" ? "text-blue-600 underline" : "text-gray-700"
          }`}
        >
          Camisetas
        </Link>
        <Link
          href="/catalogo?category=pelotas"
          className={`hover:text-blue-500 transition ${
            category === "pelotas" ? "text-blue-600 underline" : "text-gray-700"
          }`}
        >
          Pelotas
        </Link>
        <Link
          href="/catalogo?category=botines"
          className={`hover:text-blue-500 transition ${
            category === "botines" ? "text-blue-600 underline" : "text-gray-700"
          }`}
        >
          Botines
        </Link>
      </div>

      {/* Productos */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-600">No hay productos en esta categoría.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default CatalogoPage;
