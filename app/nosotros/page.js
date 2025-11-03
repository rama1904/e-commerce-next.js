import Link from 'next/link';

const NosotrosPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
      <h1 style={{ color: '#333', fontSize: '2.5em', marginBottom: '20px' }}>Nosotros</h1>
      <div style={{ padding: '20px', border: '1px dashed #ccc', borderRadius: '5px', backgroundColor: '#f0f0f0', display: 'inline-block' }}>
        <h2 style={{ color: '#555', fontSize: '1.8em', marginBottom: '15px' }}>SITIO EN CONSTRUCCIÓN</h2>
        <p style={{ color: '#777', fontSize: '1.1em', marginBottom: '25px' }}>
          Estamos trabajando para brindarte la mejor información sobre nuestra empresa.
          ¡Pronto tendremos novedades!
        </p>
        <Link href="/" style={{
          display: 'inline-block',
          backgroundColor: '#0070f3',
          color: 'white',
          padding: '10px 25px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '1em',
          fontWeight: 'bold'
        }}>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NosotrosPage;