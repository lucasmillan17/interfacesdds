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

export default FormField;