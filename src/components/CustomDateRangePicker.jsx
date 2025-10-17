import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function CustomDateRangePicker({label, preferredClassName = 'date-range-picker'}) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div style={{backgroundColor: '#eff2f7',fontFamily: "Roboto, sans-serif", overflow: "hidden", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '5px', display: 'inline-block'}} className={preferredClassName}>
      {label && <span style={{marginBottom: '5px', display: 'block' }}>{label}</span>}
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        rangeColors={["#7dbeffff"]}
      />
    </div>
  );
}
