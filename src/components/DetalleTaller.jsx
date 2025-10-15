import BarraPorcentaje from "./BarraPorcentaje";

function DetalleTaller({ taller }) {
  return <div className="detalle-taller">
    <h2 style={{ margin: '0 0 10px 0' }}>Taller de React</h2>
      <h3 style={{ margin: '0 0 10px 0' }}>Desarrollo Web</h3>
      <p style={{ margin: '0 0 5px 0' }}>Aprende los fundamentos de React</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '5px' }}>
        <p style={{ margin: '0 0 5px 0' }}><strong>Docente:</strong> Juan Pérez</p>
        <p style={{ margin: '0 0 5px 0' }}><strong>Fecha:</strong> 01/01/2023</p>
        <p style={{ margin: '0 0 5px 0' }}><strong>Horario:</strong> 10:00 - 12:00</p>
        <p style={{ margin: '0 0 10px 0' }}><strong>Lugar:</strong> Aula 101</p>
      </div>
      <BarraPorcentaje ocupados={10} total={20}>Cupos</BarraPorcentaje>
      <button style={{ padding: '8px 12px', border: 'none', backgroundColor: '#28a745', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Inscribirse</button>
  </div>;
}

export default DetalleTaller;