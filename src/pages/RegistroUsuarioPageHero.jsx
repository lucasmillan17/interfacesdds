import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Select from "@mui/material/Select";
import { useState } from 'react';
import { Input, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {input} from "@heroui/input";

function RegistroUsuarioPage() {

 const userTypes = ["Estudiante", "Graduado", "Docente"];
 const [selectedUserType, setSelectedUserType] = useState('');
 const handleSelectedUserChange = (event) =>{
    setSelectedUserType(event.target.value);
 };

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
        {/* 
        <TextField
            required
            label="Nombre"
             variant="standard"/>
        <TextField
            required
            label="Apellido"
            variant="standard"/>
        <TextField
            required
            label="DNI"
            variant="standard"/>
        <TextField
            required
            label="Email"
            variant="standard"/>
        <TextField
            required
            label="Teléfono"
            variant="standard"/>
        */}

        <Input label="Nombre" variant="standard" required />
        <Input label="Apellido" variant="standard" required />
        <Input label="DNI" variant="standard" required />
        <Input label="Email" variant="standard" required />
        <Input label="Teléfono" variant="standard" required />

        <FormControl variant="standard" style={{ minWidth: 120 }}>
            <InputLabel id="user-type-label">Tipo de usuario</InputLabel>
            <Select
                required
                label="Tipo de usuario"
                variant="standard"
                value={selectedUserType}
                onChange={handleSelectedUserChange}
                >
            {userTypes.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
            </Select>
        </FormControl>
        <TextField
            required
            label="Contraseña"
            type="password"
            variant="standard"/>
        <TextField
            required
            label="Confirmar Contraseña"
            type="password"
            variant="standard"/>

        <button style={{ gridColumn: 'span 2', padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }} type="submit">Registrarse</button>
    </form>
    </div>
 ); 
}

export default RegistroUsuarioPage;