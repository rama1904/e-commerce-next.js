import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0, 
  }).format(product.price);

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      width: '280px', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <Link href={`/productos/${product.id}`}>
      
        <Image
          src={product.image || '/images/placeholder.jpg'} 
          alt={product.name}
          width={200} 
          height={200} 
          style={{ objectFit: 'contain', marginBottom: '10px' }} 
        />
      </Link>
      <h3 style={{ margin: '10px 0', fontSize: '1.2em' }}>
        <Link href={`/productos/${product.id}`} style={{ textDecoration: 'none', color: '#333' }}>
          {product.name}
        </Link>
      </h3>
      <p style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#0070f3' }}>
        {formattedPrice}
      </p>
      {/* El botón "Agregar al carrito" lo voy a poner en la página de detalle */}
    </div>
  );
};

export default ProductCard;