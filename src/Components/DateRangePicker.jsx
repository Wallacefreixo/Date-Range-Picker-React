import '../App.scss';
import { DateRangePicker as RsuiteDateRangePicker} from 'rsuite';
import { useState } from 'react';

const DateRangePicker = ({ label, placeholder, ranges, disabledDate }) => {
    const [dates, setDates] = useState([])
    return (
      <div className="container-datepicker">
        <label className="label-datepicker">{label}</label>
        <RsuiteDateRangePicker 
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

export default DateRangePicker