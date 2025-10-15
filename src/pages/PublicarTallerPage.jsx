import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';

function PublicarTallerPage() {

 return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker defaultValue={dayjs('2025-01-01T00:00:00')} />
    </LocalizationProvider>
)
}

export default PublicarTallerPage;