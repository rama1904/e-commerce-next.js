"use client"

import { useState } from "react"

const ContactoPage = () => {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !mensaje.trim()) {
      alert('Ey! No te olvides de escribir tu email y tu mensaje 😉');
      return;
    }

    console.log('Nuevo mensaje recibido:', { email, mensaje });
    alert('¡Gracias por escribirnos! En breve te respondemos.');
    
    setEmail('');
    setMensaje('');
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '20px auto',
      padding: '30px',
      backgroundColor: '#fdfdfd',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        color: '#222',
        fontSize: '2.4em',
        marginBottom: '25px',
        textAlign: 'center'
      }}>¡Hablemos!</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <input
          type="email"
          placeholder="Escribí tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #bbb',
            fontSize: '1em'
          }}
        />
        <textarea
          placeholder="Contanos en qué podemos ayudarte"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows="6"
          style={{
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #bbb',
            fontSize: '1em',
            resize: 'vertical'
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: '#0066cc',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1em',
            alignSelf: 'flex-start'
          }}
        >
          Enviar mensaje
        </button>
      </form>

      <div style={{
        borderTop: '1px solid #eee',
        paddingTop: '30px',
        marginTop: '40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '1.7em',
          marginBottom: '12px',
          color: '#333'
        }}>¿Nos seguís en redes?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
          <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}>Instagram</a>
          <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}>LinkedIn</a>
          <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}>X (antes Twitter)</a>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
