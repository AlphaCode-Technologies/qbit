import Button from './Button';
import { ButtonSkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    value: '',
    disabled: false,
  },
};

export const Default = {
  args: {
    value: 'Button',
    renderers: { renderer: ButtonSkin },
  },
};

export const Skin = {
  args: {
    value: 'Button',
    renderers: { renderer: ButtonSkin },
  },
};

export const Disabled = {
  args: {
    value: 'Button',
    disabled: true,
    renderers: { renderer: ButtonSkin },
  },
};

export const TabIndex = {
  args: {
    value: 'Button',
    tabIndex: 1,
    renderers: { renderer: ButtonSkin },
  },
};

// export const Loading = {
//   args: {
//     value: 'Button',
//     tabIndex: 1,
//     renderers: { renderer: ButtonSkin },
//     loaderProps: {
//       isLoading: true,
//       value: 'Loading...',
//       renderers: { renderer: ButtonSkin },
//     },
//   },
// };
