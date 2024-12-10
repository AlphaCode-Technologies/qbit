import { RadioSkin } from '@skins/defaults';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

export default {
  title: 'Alpha Elements/Inputs/Choice/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {
      name: 'radio-group',
      value: '',
      testId: '',
      disabled: false,
      horizontal: false,
      Renderer: RadioSkin,
      keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
    },
    actions: {
      onchange: (val: any) => console.log(val),
    },
    data: [
      { value: 'good', label: 'Good', testId: 'good_0' },
      { value: 'bad', label: 'Bad', testId: 'bad_1' },
      { value: 'avg', label: 'Avg', testId: 'avg_2' },
    ],
    children: [
      <Radio properties={{ value: 'good', label: 'Good' }} />,
      <Radio properties={{ value: 'bad', label: 'Bad' }} />,
      <Radio properties={{ value: 'avg', label: 'Avg' }} />,
    ],
  },
};

export const Default = {
  args: {
    properties: {
      name: 'radio-group',
      horizontal: false,
      Renderer: RadioSkin,
      keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
    },
    actions: {
      onchange: (val: any) => console.log(val),
    },
    data: [
      { value: 'good', label: 'Good', testId: 'good_0' },
      { value: 'bad', label: 'Bad', testId: 'bad_1' },
      { value: 'avg', label: 'Avg', testId: 'avg_2' },
    ],
    children: [
      <Radio properties={{ value: 'good', label: 'Good' }} />,
      <Radio properties={{ value: 'bad', label: 'Bad' }} />,
      <Radio properties={{ value: 'avg', label: 'Avg' }} />,
    ],
  },
};

export const Selected = {
  args: {
    properties: {
      name: 'radio-group',
      value: 'bad',
      horizontal: false,
      Renderer: RadioSkin,
      keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
    },
    actions: {
      onchange: (val: any) => console.log(val),
    },
    data: [
      { value: 'good', label: 'Good', testId: 'good_0' },
      { value: 'bad', label: 'Bad', testId: 'bad_1' },
      { value: 'avg', label: 'Avg', testId: 'avg_2' },
    ],
    children: [
      <Radio properties={{ value: 'good', label: 'Good' }} />,
      <Radio properties={{ value: 'bad', label: 'Bad' }} />,
      <Radio properties={{ value: 'avg', label: 'Avg' }} />,
    ],
  },
};

export const Disabled = {
  args: {
    properties: {
      name: 'radio-group',
      horizontal: false,
      disabled: true,
      Renderer: RadioSkin,
      keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
    },
    actions: {
      onchange: (val: any) => console.log(val),
    },
    data: [
      { value: 'good', label: 'Good', testId: 'good_0' },
      { value: 'bad', label: 'Bad', testId: 'bad_1' },
      { value: 'avg', label: 'Avg', testId: 'avg_2' },
    ],
    children: [
      <Radio properties={{ value: 'good', label: 'Good' }} />,
      <Radio properties={{ value: 'bad', label: 'Bad' }} />,
      <Radio properties={{ value: 'avg', label: 'Avg' }} />,
    ],
  },
};

export const Horizontal = {
  args: {
    properties: {
      name: 'radio-group',
      horizontal: true,
      Renderer: RadioSkin,
      keyExtractor: ({ value, label }: AlphaElements.RadioProperties) => `${value}-${label}`,
    },
    actions: {
      onchange: (val: any) => console.log(val),
    },
    data: [
      { value: 'good', label: 'Good', testId: 'good_0' },
      { value: 'bad', label: 'Bad', testId: 'bad_1' },
      { value: 'avg', label: 'Avg', testId: 'avg_2' },
    ],
    children: [
      <Radio properties={{ value: 'good', label: 'Good' }} />,
      <Radio properties={{ value: 'bad', label: 'Bad' }} />,
      <Radio properties={{ value: 'avg', label: 'Avg' }} />,
    ],
  },
};
