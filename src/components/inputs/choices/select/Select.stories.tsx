import { OptionSkin, SelectSkin } from '@skins/defaults';
import Select from './Select';
import Option from './Option';

export default {
  title: 'Alpha Elements/Inputs/Choice/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {
      value: {},
      disabled: false,
      testId: '',
    },
    children: [
      <Option properties={{ value: { value: 'good', label: 'Good' } }} />,
      <Option properties={{ value: { value: 'bad', label: 'Bad' } }} />,
      <Option properties={{ value: { value: 'average', label: 'Average' } }} />,
      <Option properties={{ value: { value: 'waste', label: 'Waste' } }} />,
    ],
  },
};

export const Default = {
  args: {
    properties: {
      name: 'select',
      value: { value: 'good', label: 'Good' },
      Renderer: SelectSkin,
      optionRenderer: OptionSkin,
    },
  },
};

export const Disabled = {
  args: {
    properties: {
      name: 'select',
      value: { value: 'good', label: 'Good' },
      Renderer: SelectSkin,
      optionRenderer: OptionSkin,
      disabled: true,
    },
  },
};
