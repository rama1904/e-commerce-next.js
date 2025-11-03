"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login"); 
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (!user)
    return <p className="text-center mt-20 text-gray-600">Verificando sesión...</p>;

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
      <p className="text-lg mb-6">Bienvenido, <strong>{user.email}</strong></p>

      <button
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
        onClick={() => signOut(auth).then(() => router.push("/login"))}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
