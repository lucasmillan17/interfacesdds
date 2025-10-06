import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vista, setVista] = useState('registro');

  return (
    <div>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setVista('registro')}>Registro Usuario</button>
        <button onClick={() => setVista('a')}>Interfaz A</button>
        <button onClick={() => setVista('b')}>Interfaz B</button>
      </nav>
      {vista === 'registro' && <RegistroUsuario />}
      {vista === 'a' && <InterfazA />}
      {vista === 'b' && <InterfazB />}
    </div>
  );
}

function InterfazA() {
  return <div>Prototipo Interfaz A</div>;
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
