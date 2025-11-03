'use client';
import { useCart } from "../context/Cartcontext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CarritoPage = () => {
 
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();


  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');

  
  const handleFinishPurchase = (e) => {
    e.preventDefault(); 

    if (cart.length === 0) {
      alert('Tu carrito está vacío. Agrega productos antes de terminar la compra.');
      return;
    }

    if (!nombre || !direccion || !email) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

 
    const orderDetails = {
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: totalPrice,
      customerInfo: {
        nombre,
        direccion,
        email,
      },
      date: new Date().toLocaleString()
    };

    console.log('Detalle de la compra:', orderDetails);
    alert('¡Compra finalizada con éxito! Revisa la consola para ver los detalles del pedido.');

   
    setNombre('');
    setDireccion('');
    setEmail('');
    
  };

  
  const formattedTotalPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(totalPrice);

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Tu compra</h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ fontSize: '1.2em', color: '#555' }}>El carrito está vacío.</p>
          <Link href="/catalogo" style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
            Ir a la Tienda
          </Link>
        </div>
      ) : (
        <>
          
          <div style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
            {cart.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                backgroundColor: '#f9f9f9',
                flexWrap: 'wrap', 
                gap: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, minWidth: '200px' }}>
                  <Image
                    src={item.image || '/images/placeholder.jpg'}
                    alt={item.name}
                    width={60}
                    height={60}
                    style={{ objectFit: 'contain', borderRadius: '4px', marginRight: '15px' }}
                  />
                  <div>
                    <h3 style={{ margin: '0', fontSize: '1.1em', color: '#333' }}>{item.name}</h3>
                    <p style={{ margin: '5px 0 0', fontSize: '0.9em', color: '#666' }}>
                      Precio unitario: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(item.price)}
                    </p>
                    <p style={{ margin: '0', fontSize: '1em', fontWeight: 'bold', color: '#0070f3' }}>
                       Total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1em', color: '#555' }}>Cant:</span>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    min="1"
                    style={{ width: '50px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', textAlign: 'center' }}
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      backgroundColor: '#dc3545', 
                      color: 'white',
                      padding: '8px 12px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9em',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          
          <div style={{ textAlign: 'right', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.8em', color: '#333' }}>Total: <span style={{ color: '#0070f3' }}>{formattedTotalPrice}</span></h2>
          </div>

          
          <form onSubmit={handleFinishPurchase} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1em' }}
            />
            <input
              type="text"
              placeholder="Tu dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1em' }}
            />
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1em' }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#28a745', 
                color: 'white',
                padding: '12px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.1em',
                fontWeight: 'bold'
              }}
            >
              Terminar mi compra
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CarritoPage;