"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { app } from "@/firebase/firebaseConfig";
import Boton from "../components/button";

const Admin = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ nombre: "", precio: "" });
  const [loading, setLoading] = useState(true);

  // 🔒 Verifica si hay sesión activa
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        cargarProductos();
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  // 📦 Cargar productos desde Firestore
  const cargarProductos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const lista = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(lista);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  // ➕ Agregar producto
  const agregarProducto = async () => {
    if (!newProduct.nombre || !newProduct.precio) {
      alert("Completa todos los campos");
      return;
    }

    try {
      await addDoc(collection(db, "productos"), {
        nombre: newProduct.nombre.trim(),
        precio: Number(newProduct.precio),
      });
      setNewProduct({ nombre: "", precio: "" });
      cargarProductos();
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  // ❌ Eliminar producto
  const eliminarProducto = async (id) => {
    try {
      await deleteDoc(doc(db, "productos", id));
      cargarProductos();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  // 🚪 Cerrar sesión
  const logout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  // ⏳ Mientras carga la sesión o productos
  if (loading) return <p className="text-center mt-20">Cargando...</p>;
  if (!user) return <p className="text-center mt-20">Verificando sesión...</p>;

  return (
    <div className="container mx-auto my-20 max-w-3xl">
      <h1 className="text-3xl font-black mb-4 text-center">Panel de Administración</h1>
      <p className="mb-4 text-center">Bienvenido, <strong>{user.email}</strong></p>

      <div className="flex justify-center mb-6">
        <Boton title="Cerrar sesión" onClick={logout}>
          Cerrar sesión
        </Boton>
      </div>

      {/* Agregar producto */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
        <div className="flex gap-2 mb-4">
          <input
            className="border p-2 rounded w-1/2"
            placeholder="Nombre"
            value={newProduct.nombre}
            onChange={(e) => setNewProduct({ ...newProduct, nombre: e.target.value })}
          />
          <input
            className="border p-2 rounded w-1/2"
            placeholder="Precio"
            type="number"
            value={newProduct.precio}
            onChange={(e) => setNewProduct({ ...newProduct, precio: e.target.value })}
          />
          <Boton title="Agregar" onClick={agregarProducto}>
            Agregar
          </Boton>
        </div>
      </div>

      {/* Lista de productos */}
      <h2 className="text-2xl font-bold mb-4">Productos</h2>
      {products.length === 0 ? (
        <p>No hay productos cargados.</p>
      ) : (
        <ul className="space-y-2">
          {products.map((p) => (
            <li
              key={p.id}
              className="flex justify-between items-center border p-2 rounded bg-white shadow-sm"
            >
              <span>{p.nombre} - ${p.precio}</span>
              <button
                onClick={() => eliminarProducto(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10 text-center">
        <Boton title="Volver atrás" onClick={() => router.back()}>
          Volver atrás
        </Boton>
      </div>
    </div>
  );
};

export default Admin;
