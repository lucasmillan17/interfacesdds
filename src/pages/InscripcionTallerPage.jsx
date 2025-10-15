import { useState } from 'react';
import TallerCard from '../components/TallerCard';
import DetalleTaller from '../components/DetalleTaller';

function InscripcionTallerPage() {
  const [showModal, setShowModal] = useState(false);
  const [detalle, setDetalle] = useState(null);

  // Siempre muestra el mismo DetalleTaller
  const handleVerDetalles = () => {
    setDetalle("Detalle de Taller de ejemplo");
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div style={{ padding: '20px', color: '#333', backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      
      <h2>Inscripción a Taller</h2>
      <p>Selecciona un taller para inscribirte.</p>
    <hr/>
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
      <TallerCard {...{ imagen: "images/react_card.png", titulo: "Taller de React", descripcion: "Aprende los fundamentos de React", fecha: "2023-10-01", horario: "10:00 - 12:00", lugar: "Aula 101", tematica: "Desarrollo Web", cupo: "10/20" }} onVerDetalles={handleVerDetalles} />
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
    </div>
  );
}

export default InscripcionTallerPage;