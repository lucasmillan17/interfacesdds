import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import * as React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Button, ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import TimeRangePicker from '../components/TimeRangePicker';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DaySelector } from '../components/DaySelector';
import CustomDateRangePicker from '../components/CustomDateRangePicker';
import Typography from '@mui/material/Typography';
import './PublicarTallerPageStyles.css'

function PublicarTallerPage() {

  const [days, setDays] = React.useState([]);

  const handleDaysChange = (event, newDays) => {
    setDays(newDays);
  };
  
 return (
  <div className='container'>
    <div className='text-fields'> 
      <h2 className='header'>Publicar Taller</h2>
      <TextField label="Título del Taller" variant="outlined" fullWidth margin="normal" className='text-field' />
      <TextField label="Descripción del Taller" variant="outlined" fullWidth margin="normal" multiline rows={4} className='text-field' />
      <TextField label="Docente" variant="outlined" fullWidth margin="normal" className='text-field' />
      <TextField label="Cupos" variant="outlined" fullWidth margin="normal" type='number' className='text-field' />
    </div>
    <div className='date-selectors'>
      
      {/*<DaySelector label="Selecciona los días de cursado" selectorWidth="30px" className='day-selector' />*/}
      <CustomDateRangePicker label="Selecciona un rango de fechas" className='date-range-picker' />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Selecciona los días de cursado
      </Typography>

      <ToggleButtonGroup
        value={days}
        onChange={handleDaysChange}
        aria-label="días de cursado"
        orientation="horizontal"
        sx={{
          border: "1px solid #C4C4C4",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        {["L", "M", "X", "J", "V", "S", "D"].map((day) => (
          <ToggleButton
            key={day}
            value={day}
            aria-label={day}
            sx={{
              fontWeight: 600,
              border: "none",
              color: "#333",
              "&.Mui-selected": {
                backgroundColor: "#7dbeffff",
                color: "white",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#5badffff",
              },
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            {day}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
      <TimeRangePicker preferredClassName='time-range-picker'/>
    </div>
    
    <Button variant='contained' className='button'>Publicar Taller</Button>
    

  </div>

)
}

export default PublicarTallerPage;