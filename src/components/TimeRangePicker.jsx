import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Box, TextField, Typography } from "@mui/material";

export default function TimeRangePicker({preferredClassName='time-range-picker'}) {
  const [startTime, setStartTime] = React.useState(dayjs().hour(8).minute(0));
  const [endTime, setEndTime] = React.useState(dayjs().hour(10).minute(0));

  const handleStartChange = (newValue) => {
    setStartTime(newValue);
    if (newValue.isAfter(endTime)) {
      // Si la hora inicial es posterior a la final, ajustamos
      setEndTime(newValue.add(30, "minute"));
    }
  };

  const handleEndChange = (newValue) => {
    if (newValue.isBefore(startTime)) return; // Evita elegir fin < inicio
    setEndTime(newValue);
  };

  return (
    <div className={preferredClassName} style={{display: 'flex', alignItems: 'center'}}>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
          border: "1px solid #ddd",
          borderRadius: 2,
          width: '100%',
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="caption" sx={{ mb: 0.5 }}>
            Inicio
          </Typography>
          <TimePicker
            value={startTime}
            onChange={handleStartChange}
            slotProps={{
                textField: { size: "small", sx: { width: 150 } },
                popper: { sx: { "& .MuiPickersLayout-root": { transform: "scale(0.9)" } } },
            }}
            />
        </Box>

        <Typography sx={{ fontSize: "1.2rem", color: "#555" }}>—</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="caption" sx={{ mb: 0.5 }}>
            Fin
          </Typography>
          <TimePicker
            value={endTime}
            onChange={handleEndChange}
            slotProps={{
                textField: { size: "small", sx: { width: 150 } },
                popper: { sx: { "& .MuiPickersLayout-root": { transform: "scale(0.9)" } } },
            }}
            />
        </Box>
      </Box>
    </LocalizationProvider>
    </div>
  );
}
