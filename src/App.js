import './App.scss';
import 'rsuite/dist/rsuite.min.css';
import DateRangePicker from './Components/DateRangePicker';
import { DateRangePicker as RsuiteDateRangePicker} from 'rsuite';
import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';

function App(){
  const ranges = [
    {
        label: 'Últimos 7 dias',
        value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())]
    },
    {
        label: 'Últimos 15 dias',
        value: [startOfDay(subDays(new Date(), 14)), endOfDay(new Date())]
    }
  ]; 
  const {
    allowedMaxDays,
    beforeToday,
    allowedRange
  } = RsuiteDateRangePicker;

  return (
    <div className="app">
      <h4 className="title">Date Range Picker</h4>
      <DateRangePicker 
        label="Example 1 (Com rodapé de opções)"
        ranges={ranges} 
      />
      <DateRangePicker 
        label="Example 2 (Placeholder + Máx 45 dias)"
        placeholder='Selecione duas datas'
        ranges={[]} 
        disabledDate={allowedMaxDays(45)}
      />
      <DateRangePicker 
        label="Example 3 (Disabled dias anteriores)"
        ranges={[]} 
        disabledDate={beforeToday()} 
      />
      <DateRangePicker 
        label="Example 4 (Mín e Máx date)"
        ranges={[]} 
        disabledDate={allowedRange(startOfDay(subDays(new Date(), 5)), startOfDay(addDays(new Date(), 5)))} 
      /> 
    </div>
  );
}

export default App;
