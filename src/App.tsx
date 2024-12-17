import { Shell } from '@components/containers';
import { Radio, RadioGroup } from '@inputs/choices';
import { RadioSkin } from '@skins/defaults';

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
  // Define properties for the RadioGroup component, including its name, default selected value,
  // a custom renderer (DefaultSkin), and a key extraction function for identifying radios uniquely.
  const groupProperties: AlphaElements.RadioGroupProperties = {
    name: 'radio-group',
    value: 'bad',
    horizontal: false,
    Renderer: RadioSkin,
    keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
  };
  // Define actions for the RadioGroup component, including a handler for value changes.
  const actions: AlphaElements.RadioGroupActions = {
    onChange: (val: any) => {
      console.log(val);
    },
  };

  return (
    <div data-id="my-id">
      <RadioGroup properties={groupProperties} actions={actions}>
        <Radio properties={{ value: 'good', label: 'Good' }} />
        <Radio properties={{ value: 'bad', label: 'Bad', disabled: true }} />
        <Radio properties={{ value: 'avg', label: 'Avg' }} />
      </RadioGroup>
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
