import { RadioSkin } from '@skins/defaults';
import Radio from './Radio';

export default {
  title: 'Alpha Elements/Inputs/Choice/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {
      name: '',
      value: '',
      disabled: false,
      horizontal: false,
      testId: '',
    },
  },
};

export const Default = {
  args: {
    properties: { value: 'good', label: 'Good', Renderer: RadioSkin },
  },
};

export const Disabled = {
  args: {
    properties: { value: 'good', label: 'Good', disabled: true, Renderer: RadioSkin },
  },
};

export const Skin = {
  args: {
    properties: { value: 'good', label: 'Good', Renderer: RadioSkin },
  },
};
