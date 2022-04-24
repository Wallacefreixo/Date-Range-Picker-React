import '../App.scss';
import { DateRangePicker as RsuiteDateRangePicker, CustomProvider} from 'rsuite';
import { useState } from 'react';
import ptBr from 'rsuite/locales/pt_BR';

const DateRangePicker = ({ label, placeholder, ranges, disabledDate }) => {
    const [dates, setDates] = useState([])
    return (
      <div className="container-datepicker">
        <label className="label-datepicker">{label}</label>
        <CustomProvider locale={ptBr}>
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
        </CustomProvider>
      </div>
    )
}

export default DateRangePicker