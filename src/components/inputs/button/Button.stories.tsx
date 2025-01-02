import Button from './Button';
import { ButtonSkin } from '@skins/defaults';

export default {
  title: 'Alpha Elements/Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {
      value: '',
      disabled: false,
      testId: '',
    },
  },
};

export const Default = {
  args: {
    properties: { value: 'Button', renderer: ButtonSkin },
  },
};

export const Skin = {
  args: {
    properties: { value: 'Button', renderer: ButtonSkin },
  },
};

export const Disabled = {
  args: {
    properties: { value: 'Disabled Button', disabled: true, renderer: ButtonSkin },
  },
};

export const TabIndex = {
  args: {
    properties: { value: 'Button', renderer: ButtonSkin, tabIndex: 1 },
  },
};

export const Loading = {
  args: {
    properties: {
      value: 'Button',
      renderer: ButtonSkin,
      tabIndex: 1,
      loaderProps: {
        isLoading: true,
        value: 'Loading...',
        renderer: ButtonSkin,
      },
    },
  },
};
