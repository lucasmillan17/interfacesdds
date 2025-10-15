function BarraPorcentaje({ocupados, total, children}) {
  const porcentaje = Math.round((ocupados / total) * 100);
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '28px',
      background: '#e3f2fd', // azul claro
      borderRadius: '6px',
      margin: '10px 0',
      overflow: 'hidden',
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.07)'
    }}>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: `${porcentaje}%`,
        background: '#1976d2', // azul oscuro
        transition: 'width 0.3s',
      }} />
      <span style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#222',
        zIndex: 1,
        fontSize: '15px',
        letterSpacing: '1px'
      }}>
        {children} {ocupados}/{total}
      </span>
    </div>
  );
}

export default BarraPorcentaje;
