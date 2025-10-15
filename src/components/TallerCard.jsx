import BarraPorcentaje from "./BarraPorcentaje";

function TallerCard({ imagen, titulo, descripcion, fecha, horario, lugar, tematica, cupo, onVerDetalles }) {
  // cupo debe ser tipo "10/20"
  const [ocupados, total] = cupo.split('/').map(Number);

  return (
    <div className="taller-card">
      <div style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3)), url(${imagen})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '150px', borderRadius: '5px'}}>
      <h2 className="text" style={{color: '#ffff', textShadow: '0 1px 3px rgba(0,0,0,0.5)', margin: '0 0 10px 0' , minHeight: '50px', maxHeight: '50px', overflow: 'hidden'}}>{titulo}</h2>
      <hr />
      <h3 className="text" style={{color: '#ffff', textShadow: '0 1px 3px rgba(0,0,0,0.5)', margin: '0 0 10px 0' , minHeight: '30px', maxHeight: '30px', overflow: 'hidden'}}>{tematica}</h3>
      </div>
      <p className="text" style={{ margin: '0 0 5px 0' , minHeight: '20px', maxHeight: '20px', overflow: 'hidden'}}>{descripcion}</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '5px' }}>
        <p style={{ margin: '0 0 5px 0' }}><strong>Fecha:</strong> {fecha}</p>
        <p style={{ margin: '0 0 5px 0' }}><strong>Horario:</strong> {horario}</p>
        <p style={{ margin: '0 0 10px 0' }}><strong>Lugar:</strong> {lugar}</p>
      </div>
        {/* Barra de cupos */}
        <BarraPorcentaje ocupados={ocupados} total={total}>
          Cupos
        </BarraPorcentaje>
      
      <button style={{ padding: '8px 12px', border: 'none', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }} onClick={onVerDetalles}>Ver detalles</button>
    </div>
  );
}

export default TallerCard;