import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#343a40', 
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
          PasionPorLaCamiseta
        </Link>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ marginLeft: '20px' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
            Inicio
          </Link>
        </li>
        <li style={{ marginLeft: '20px' }}>
          <Link href="/productos" style={{ textDecoration: 'none', color: 'white' }}>
            Tienda
          </Link>
        </li>
        <li style={{ marginLeft: '20px' }}>
          <Link href="/nosotros" style={{ textDecoration: 'none', color: 'white' }}>
            Nosotros
          </Link>
        </li>
        <li style={{ marginLeft: '20px' }}>
          <Link href="/contacto" style={{ textDecoration: 'none', color: 'white' }}>
            Contacto
          </Link>
        </li>
        <li style={{ marginLeft: '20px' }}>
          <Link href="/posts" style={{ textDecoration: 'none', color: 'white' }}>
            Posts
          </Link>
        </li>
        <li style={{ marginLeft: '20px' }}>
          <Link href="/carrito" style={{ textDecoration: 'none', color: 'white' }}>
            🛒 (0) {/* Aquí irá el contador del carrito */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;