import DateAndTime from '@components/inputs/choices/date-and-time/DateAndTime';
import { Option, Select } from '@inputs/choices';
import { OptionSkin, SelectSkin } from '@skins/defaults';

const App = () => {
  const dateTimeProperties: AlphaElements.DateTimeProperties = {
    type: 'date',
    value: '',
    format: 'DD-MM-YYYY',
  };

  const SelectProperties: AlphaElements.SelectProperties = {
    name: 'select',
    value: '',
    Renderer: SelectSkin,
    optionRenderer: OptionSkin,
  };

  return (
    <div data-id="my-id">
      <DateAndTime properties={dateTimeProperties} />
      <hr />
      <Select properties={SelectProperties}>
        <Option properties={{ value: 'good', label: 'Good' }} />
        <Option properties={{ value: 'bad', label: 'Bad' }} />
        <Option properties={{ value: 'average', label: 'Average' }} />
        <Option properties={{ value: 'waste', label: 'Waste' }} />
      </Select>
    </div>
  );
};

export default App;
