import { useState } from 'react';
import './DaySelectorStyles.css';

export function DaySelector({label, selectorWidth='20px', preferredClassName='day-selector-container', direction='column'}) {
    const days = ['L', 'M', 'X', 'J', 'V', 'S'];
    const [selectedDate, setSelectedDate] = useState([]);

    const HandleToggleDay = (day) => {
        if (selectedDate.includes(day)) {
        setSelectedDate(selectedDate.filter(d => d !== day));
        } else {
        setSelectedDate([...selectedDate, day]);
        }
    }

    return (
        <div style={{fontFamily: 'Roboto', fontSize:'15px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '120px', maxWidth: selectorWidth, marginBottom: '10px'}} className={preferredClassName}>
            {label && <span>{label}</span>}
            <div style={{display: 'flex', flexDirection: direction, fontSize:'12px', fontWeight: '700', marginTop: '5px', border: '1px solid grey', borderRadius: '3px',minWidth: '20px', width: selectorWidth}}>
            {days.map((day) => (
                <button 
                key={day}
                className={`day-button ${selectedDate.includes(day) ? 'highlighted' : ''}`}
                onClick={() => HandleToggleDay(day)}
                >
                {day}
                </button>
            ))}
            </div>
        </div>
    );
}