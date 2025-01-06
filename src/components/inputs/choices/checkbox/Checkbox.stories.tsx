import { useState } from 'react';
import Checkbox from './Checkbox';
import { CheckboxSkin } from '@skins/defaults';
import { SwitchSkin } from '@skins/optional';

// Default properties for the Checkbox
const DEFAULT_PROPERTIES: AlphaElements.CheckboxProperties = {
  name: 'checkbox',
  value: false,
  size: 'md',
  disabled: false,
  renderer: CheckboxSkin,
};

// Default actions for the Checkbox
const DEFAULT_ACTIONS: AlphaElements.CheckBoxAction = {
  onChange: (value: any) => {
    // TODO -> discuss with @dulan
    console.log('Checkbox value changed to:', value);
  },
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    value: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export const Default = (args: any) => {
  const [isChecked, setIsChecked] = useState(args.value || false);

  return (
    <Checkbox
      properties={{ name: 'checkbox-name', value: isChecked, size: args.size, disabled: args.disabled }}
      actions={{
        onChange: (newValue: any) => {
          // TODO -> discuss with @dulan
          setIsChecked(newValue);
          if (args.actions?.onChange) args.actions.onChange(newValue);
        },
      }}
    />
  );
};

export const Checked = () => <Checkbox properties={{ ...DEFAULT_PROPERTIES, value: true }} actions={DEFAULT_ACTIONS} />;

export const Disabled = () => (
  <Checkbox properties={{ ...DEFAULT_PROPERTIES, disabled: true }} actions={DEFAULT_ACTIONS} />
);

export const CustomRenderer = (args: any) => {
  const [isChecked, setIsChecked] = useState(args.value || false);
  return (
    <Checkbox
      properties={{ ...DEFAULT_PROPERTIES, value: isChecked, renderer: SwitchSkin }}
      actions={{
        onChange: (newValue: any) => {
          // TODO -> discuss with @dulan
          setIsChecked(newValue);
          if (args.actions?.onChange) args.actions.onChange(newValue);
        },
      }}
    />
  );
};
