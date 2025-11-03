"use client";

export default function ProductCard({ product }) {
  // Verifica si el producto viene de Firebase o del archivo local
  const nombre = product.nombre || product.name;
  const precio = product.precio || product.price;
  const descripcion = product.descripcion || product.description;
  const imagen = product.image || "/images/default.jpg"; // por si no tiene imagen

  return (
    <div className="border rounded-lg p-4 w-64 text-center shadow-md hover:shadow-lg transition bg-white">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold">{nombre}</h3>
      <p className="text-gray-600 text-sm mb-2">{descripcion}</p>
      <p className="font-bold text-blue-600 mb-3">${precio}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
        Agregar al carrito
      </button>
    </div>
  );
}


