import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata = {
    title:"Carrito | Pasion por la camiseta"
    description: "Carrito. En el sitio oficial de Paasion por la camiseta vas a poder encontrar todas la camisetas de futbol que vos quieras"
    keywords:["Pasion por la camiseta,Pasion por la camiseta argentina ,Pasion por la camiseta camisetas,Pasion por la camiseta cam,Pasion por la camiseta,Pasion por la camiseta  pickups"]
}
export default function NosotrosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}