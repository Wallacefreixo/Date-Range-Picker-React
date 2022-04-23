import '../App.scss';
import DateRangePicker from 'rsuite/DateRangePicker';
import { useState } from 'react';

export const DateRangerPicker = ({label, placeholder, ranges, disabledDate }) => {
    const [dates, setDates ] = useState([])
    return (
      <div className="container-datepicker">
        <label className="label-datepicker">{label}</label>
        <DateRangePicker 
          value={dates}
          onChange={(date) => setDates(date)}
          ranges={ranges} 
          placeholder={placeholder}
          format="dd/MM/yyyy" 
          character=" - " 
          disabledDate={disabledDate}
          block
        />
      </div>
    )
}