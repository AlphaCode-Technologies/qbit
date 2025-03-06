import { Meta, StoryFn } from '@storybook/react';
import Select from './Select';
import SelectOption from './SelectOption';
import SelectSkin from '@skins/defaults/select/Select.default.skin';
import SelectOptionSkin from '@skins/defaults/select/SelectOption.default.skin';
import { SelectOptionProps } from './properties';
import { com } from 'src/types/common';

export default {
  title: 'Qbit design/Inputs/Choices/Select',
  tags: ['autodocs'],
  component: Select,
} as Meta;

// Template for Select stories
const Template: StoryFn = (args) => (
  <Select {...args}>
    <SelectOption label="Option 1" value="option1" />
    <SelectOption label="Option 2" value="option2" />
    <SelectOption label="Option 3" value="option3" />
  </Select>
);

const SelectOptionCustomSkin: com.qbit.Shell<SelectOptionProps> = (props) => {
  const { label, value, onChange, testId } = props;

  return (
    <div className="mb-2 ml-2" onClick={() => onChange?.(value)} data-testid={testId}>
      <div className="flex items-center justify-start px-4 py-3 bg-pink-200 border-2 border-gray-300 rounded-lg hover:bg-blue-100 hover:border-blue-500 active:scale-95 cursor-pointer">
        <span className="text-gray-800 hover:text-blue-600 font-medium">{label}</span>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  renderers: { renderer: SelectSkin, childRenderer: SelectOptionSkin },
  defaultValue: 'Option 1',
  keyExtractor: (value: string, index: number) => `default-${value}-${index}`, // Add keyExtractor
};

export const WithCustomSkin = Template.bind({});
WithCustomSkin.args = {
  renderers: {
    renderer: SelectSkin,
    childRenderer: SelectOptionCustomSkin,
  },
  defaultValue: 'Option 1',
  keyExtractor: (value: string, index: number) => `custom-${value}-${index}`,
};

export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  label: 'Disabled',
  value: 'disabled',
  disabled: true,
  renderers: { renderer: SelectSkin, childRenderer: SelectOptionSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
};
