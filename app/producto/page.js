import products from '../../../data/products'; 
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; 
import { useCart } from '../../context/CartContext';


const ProductDetailPage = ({ params }) => {
  const { id } = params;
  const { addToCart } = useCart(); 
  const [quantity, setQuantity] = useState(1); 
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, el producto que buscas no existe.</p>
        <Link href="/catalogo" style={{ textDecoration: 'none', color: '#0070f3' }}>
          Volver a la Tienda
        </Link>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(product.price);

  const handleAddToCart = () => { 
    addToCart(product, quantity);
    alert(`${quantity} de ${product.name} agregados al carrito!`); 
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <Link href="/catalogo" style={{ alignSelf: 'flex-start', textDecoration: 'none', color: '#0070f3', marginBottom: '20px' }}>
        &larr; Volver a Productos
      </Link>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ flexShrink: 0 }}>
          <Image
            src={product.image || '/images/placeholder.jpg'}
            alt={product.name}
            width={350}
            height={350}
            style={{ objectFit: 'contain', borderRadius: '8px' }}
          />
        </div>

        <div style={{ flexGrow: 1, maxWidth: '450px' }}>
          <h1 style={{ fontSize: '2.5em', marginBottom: '10px', color: '#333' }}>{product.name}</h1>
          <p style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#0070f3', marginBottom: '20px' }}>
            {formattedPrice}
          </p>

          <h2 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#555' }}>Descripción</h2>
          <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#666', marginBottom: '30px' }}>
            {product.description}
          </p>

          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>Cantidad:</span>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))} 
              min="1"
              style={{
                width: '60px',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                textAlign: 'center'
              }}
            />
            <button
              onClick={handleAddToCart} 
              style={{
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1em',
                fontWeight: 'bold'
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;