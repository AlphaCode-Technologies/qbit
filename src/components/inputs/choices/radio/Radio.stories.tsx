import Radio from './Radio';
import { ButtonSkin, DefaultSkin } from './skins';

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
    properties: { value: 'good', label: 'Good', Renderer: DefaultSkin },
  },
};

export const Disabled = {
  args: {
    properties: { value: 'good', label: 'Good', disabled: true, Renderer: DefaultSkin },
  },
};

export const Skin = {
  args: {
    properties: { value: 'good', label: 'Good', Renderer: ButtonSkin },
  },
};
