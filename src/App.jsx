import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vista, setVista] = useState('registro');

  return (
    <div>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button style={{ backgroundColor: 'grey', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => setVista('registro')}>Registro Usuario</button>
        <button style={{ backgroundColor: 'grey', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => setVista('a')}>Inscribirse a Taller</button>
        <button style={{ backgroundColor: 'grey', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => setVista('b')}>Consultar Talleres</button>
      </nav>
      {vista === 'registro' && <RegistroUsuario />}
      {vista === 'a' && <InscripcionTaller />}
      {vista === 'b' && <InterfazB />}
    </div>
  );
}

function InscripcionTaller() {
  const [showModal, setShowModal] = useState(false);
  const [detalle, setDetalle] = useState(null);

  // Siempre muestra el mismo DetalleTaller
  const handleVerDetalles = () => {
    setDetalle("Detalle de Taller de ejemplo");
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '10px',
      borderRadius: '5px',
      fontFamily: 'Arial, sans-serif',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      rowGap: '15px',
      columnGap: '15px',
      maxWidth: '900px',
      alignItems: 'stretch',
      position: 'relative'
    }}>
      <TallerCard {...{ titulo: "Taller de React", descripcion: "Aprende los fundamentos de React", fecha: "2023-10-01", horario: "10:00 - 12:00", lugar: "Aula 101", tematica: "Desarrollo Web", cupo: "10/20" }} onVerDetalles={handleVerDetalles} />
      <TallerCard {...{ titulo: "Taller de Biodecodificación", descripcion: "Aprende sobre Biodecodificación", fecha: "2023-10-01", horario: "10:00 - 12:00", lugar: "Aula 101", tematica: "Desarrollo Personal", cupo: "8/20" }} onVerDetalles={handleVerDetalles} />
      <TallerCard {...{ titulo: "Taller de Vue", descripcion: "Aprende los fundamentos de Vue", fecha: "2023-10-02", horario: "14:00 - 16:00", lugar: "Aula 102", tematica: "Desarrollo Web", cupo: "12/20" }} onVerDetalles={handleVerDetalles} />
      <TallerCard {...{ titulo: "Taller de Angular", descripcion: "Aprende los fundamentos de Angular", fecha: "2023-10-03", horario: "10:00 - 12:00", lugar: "Aula 103", tematica: "Desarrollo Web", cupo: "5/20" }} onVerDetalles={handleVerDetalles} />

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '10px',
            minWidth: '300px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#888',
                cursor: 'pointer',
                lineHeight: '1'
              }}
              aria-label="Cerrar"
            >
              ×
            </button>
            <DetalleTaller taller={detalle} />
          </div>
        </div>
      )}
    </div>
  );
}

// Modifica TallerCard para usar la prop onVerDetalles
function TallerCard({ titulo, descripcion, fecha, horario, lugar, tematica, cupo, onVerDetalles }) {
  return (
    <div style={{
      color: '#333',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      marginBottom: '5px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 0 5px rgba(0,0,0,0.1)',
      fontSize: '14px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ margin: '0 0 10px 0' }}>{titulo}</h2>
      <h3 style={{ margin: '0 0 10px 0' }}>{tematica}</h3>
      <p style={{ margin: '0 0 5px 0' }}>{descripcion}</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '5px' }}>
        <p style={{ margin: '0 0 5px 0' }}><strong>Fecha:</strong> {fecha}</p>
        <p style={{ margin: '0 0 5px 0' }}><strong>Horario:</strong> {horario}</p>
        <p style={{ margin: '0 0 10px 0' }}><strong>Lugar:</strong> {lugar}</p>
        <h4 style={{ margin: '0 0 10px 0' }}><strong>Cupos {cupo} </strong> </h4>
      </div>
      <button style={{ padding: '8px 12px', border: 'none', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }} onClick={onVerDetalles}>Ver detalles</button>
    </div>
  );
}

// Modifica DetalleTaller para mostrar el nombre del taller
function DetalleTaller({ taller }) {
  return <div
    style={{
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
      gap: '10px',
      fontFamily: 'Arial, sans-serif',
    }}>
    <h2 style={{ margin: '0 0 10px 0' }}>Taller de React</h2>
      <h3 style={{ margin: '0 0 10px 0' }}>Desarrollo Web</h3>
      <p style={{ margin: '0 0 5px 0' }}>Aprende los fundamentos de React</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '5px' }}>
        <p style={{ margin: '0 0 5px 0' }}><strong>Docente:</strong> Juan Pérez</p>
        <p style={{ margin: '0 0 5px 0' }}><strong>Fecha:</strong> 01/01/2023</p>
        <p style={{ margin: '0 0 5px 0' }}><strong>Horario:</strong> 10:00 - 12:00</p>
        <p style={{ margin: '0 0 10px 0' }}><strong>Lugar:</strong> Aula 101</p>
      </div>
      <h3 style={{ margin: '0 0 10px 0' }}><strong>Cupos 10/20 </strong> </h3>
      <button style={{ padding: '8px 12px', border: 'none', backgroundColor: '#28a745', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Inscribirse</button>
  </div>;
}

function InterfazB() {
  return <div>Prototipo Interfaz B</div>;
}

function RegistroUsuario() {
 return (
  <div
      style={{
        fontFamily: 'Arial, sans-serif',
        gap: '20px',
        maxWidth: '100vh',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
    <span style={{ color: '#333', fontSize: '18px', fontWeight: 'bold' }}>Registro de usuarios</span>
      <form className="formulario" 
      style={
        {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          maxWidth: '100vh',
          margin: '0 auto',
          backgroundColor: '#fff', padding: '10px',
          borderRadius: '5px',
        }
        }>
        <FormField label="Nombre" type="text" required />
        <FormField label="Apellido" type="text" required />
        <FormField label="DNI" type="dni" required />
        <FormField label="Email" type="email" required />
        <FormField label="Teléfono" type="tel" required />
        <FormField label="Tipo de usuario" required options={["Estudiante", "Graduado", "Docente"]} />
        <FormField label="Contraseña" type="password" required />
        <FormField label="Confirmar Contraseña" type="password" required />

        <button style={{ gridColumn: 'span 2', padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }} type="submit">Registrarse</button>
    </form>
    </div>
 ); 
}

function FormField({ label, type, required, options }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '5px' }}>
      <span style={{ color: '#333', fontSize: '14px' }}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </span>
      {options ? (
        <select style={{ color: '#333', backgroundColor: '#fff', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }} required={required}>
          <option value="">Seleccione una opción</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input style={
          { 
            color: '#333',
            backgroundColor: '#fff',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '90%'
          }} 
          type={type === 'dni' ? 'number' : type} 
          step={type === 'number' ? '1' : undefined}
          required={required} />
      )}
    </label>
  );
}


export default App
