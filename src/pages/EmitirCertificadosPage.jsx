import { Button, ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import TimeRangePicker from '../components/TimeRangePicker';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DaySelector } from '../components/DaySelector';
import CustomDateRangePicker from '../components/CustomDateRangePicker';
import Typography from '@mui/material/Typography';
import './EmitirCertificadosPageStyles.css'

export function EmitirCertificadosPage(){
    
    return (
        <div className='emitir-container'>
            <h2 className='header'>Emitir Certificados</h2>
            <div className='student-info-container'>
                <TextField label='Legajo'></TextField>
                <TextField disabled variant='standard' helperText='Nombre del alumno'></TextField>
                <TextField disabled variant='standard' helperText='Observaciones'></TextField>
            </div>
            <div className='taller-info-container'>
                <TextField label='Codigo de taller'></TextField>
                <TextField disabled variant='standard' helperText='Nombre del taller'></TextField>
                <TextField disabled variant='standard' helperText='Docente'></TextField>
            </div>
            <Button className='emitir-button' variant='contained'>Emitir Certificados</Button>
        </div> 
    )
}
