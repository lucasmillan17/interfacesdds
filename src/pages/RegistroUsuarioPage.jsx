import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Select from "@mui/material/Select";
import { useState } from 'react';
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import './RegistroUsuarioPageStyles.css'

function RegistroUsuarioPage() {

 const userTypes = ["Estudiante", "Graduado", "Docente"];
 const [selectedUserType, setSelectedUserType] = useState('');
 const handleSelectedUserChange = (event) =>{
    setSelectedUserType(event.target.value);
 };

 return (
  <div className="registro-usuario-container">
    <span>Registro de usuarios</span>
      <form className="formulario-container">
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