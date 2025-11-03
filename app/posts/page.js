import React from 'react';

const PostsPage = () => {
  const articles = [
    {
      id: 'post1',
      title: 'Así son las camisetas que vas a ver en la temporada 2025',
      excerpt: 'Te contamos cuáles son los diseños más llamativos y qué tecnología traen las nuevas casacas de tus equipos.',
      date: '15 de mayo de 2025',
    },
    {
      id: 'post2',
      title: '¿Botines nuevos? Todo lo que tenés que saber antes de elegir',
      excerpt: 'Desde el tipo de suela hasta el material: una guía clara para que elijas bien tu próximo par de botines.',
      date: '10 de abril de 2025',
    },
    {
      id: 'post3',
      title: 'Pelota al piso: entrená mejor con estos ejercicios',
      excerpt: 'Tips prácticos para sacarle jugo a tus entrenamientos usando distintos tipos de pelotas. ¡A mejorar esa técnica!',
      date: '28 de marzo de 2025',
    },
  ];

  return (
    <div style={{
      maxWidth: '900px',
      margin: '30px auto',
      padding: '30px',
      backgroundColor: '#fdfdfd',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '40px',
        color: '#222',
        fontSize: '2.4em'
      }}>
        Novedades del mundo fútbol
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '28px'
      }}>
        {articles.map((post) => (
          <div key={post.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{
              fontSize: '1.5em',
              color: '#0066cc',
              marginBottom: '8px'
            }}>{post.title}</h2>
            <p style={{
              fontSize: '0.9em',
              color: '#777',
              marginBottom: '12px'
            }}>{post.date}</p>
            <p style={{
              fontSize: '1em',
              color: '#444',
              lineHeight: '1.6'
            }}>{post.excerpt}</p>
            <a href={`/posts/${post.id}`} style={{
              marginTop: '15px',
              display: 'inline-block',
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#0066cc'
            }}>
              Seguir leyendo →
            </a>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '45px' }}>
        <p style={{ fontSize: '1.1em', color: '#555' }}>
          ¿Fan del fútbol? No te pierdas los próximos artículos, ¡hay mucho más por venir!
        </p>
      </div>
    </div>
  );
};

export default PostsPage;
