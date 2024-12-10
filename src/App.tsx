import { Option, Select } from '@inputs/choices';
import { OptionSkin, SelectSkin } from '@skins/defaults';

const App = () => {
  const SelectProperties: AlphaElements.SelectProperties = {
    name: 'select',
    value: '',
    Renderer: SelectSkin,
    optionRenderer: OptionSkin,
  };

  return (
    <div data-id="my-id">
      <Select properties={SelectProperties}>
        <Option properties={{ value: { value: 'good', label: 'Good' } }} />
        <Option properties={{ value: { value: 'bad', label: 'Bad' } }} />
        <Option properties={{ value: { value: 'average', label: 'Average' } }} />
        <Option properties={{ value: { value: 'waste', label: 'Waste' } }} />
      </Select>
    </div>
  );
};

export default App;
