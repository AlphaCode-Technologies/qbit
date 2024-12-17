import { Option, Select } from '@inputs/choices';
import { OptionSkin, SelectSkin } from '@skins/defaults';
import { Shell } from '@components/containers';

type CheckboxProperties = {
  value?: boolean;
  disabled?: boolean;
};

type CheckboxActions = com.evt.MouseEvents & com.evt.UiEvents;

const CheckboxSkin: com.elem.Skin<CheckboxProperties, CheckboxActions> = ({ properties, actions, options }) => {
  const { value } = properties;
  const { onChange } = actions ?? {};
  const { a11y = {} } = options ?? {};
  return <input type="checkbox" defaultChecked={value} onChange={onChange} {...a11y} />;
};

const Checkbox: com.elem.Shell<CheckboxProperties, CheckboxActions> = ({ properties, actions, options }) => {
  return <Shell<CheckboxProperties, CheckboxActions> properties={properties} actions={actions} options={options} />;
};

const App = () => {
  const SelectProperties: AlphaElements.SelectProperties = {
    name: 'select',
    value: { value: 'good', label: 'Good' },
    Renderer: SelectSkin,
    optionRenderer: OptionSkin,
  };

  const SelectAction: AlphaElements.SelectActions = {
    triggerScrollEnd: () => console.log('Scrolled end'),
  };

  return (
    <div data-id="my-id">
      <Select properties={SelectProperties} actions={SelectAction}>
        <Option properties={{ value: { value: 'good', label: 'Good' } }} />
        <Option properties={{ value: { value: 'bad', label: 'Bad' } }} />
        <Option properties={{ value: { value: 'average', label: 'Average' } }} />
        <Option properties={{ value: { value: 'waste', label: 'Waste' } }} />
      </Select>
      <Checkbox
        properties={{ renderer: CheckboxSkin }}
        actions={{
          onChange: () => {
            console.log('check box skin with new ');
          },
        }}
      />
    </div>
  );
};

export default App;
