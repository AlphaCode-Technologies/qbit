import { AvatarSkin } from '@skins/defaults';
import Avatar from './Avatar';

export default {
  title: 'Alpha Elements/Displays/Indicators/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {
      value: '',
      testId: '',
    },
    actions: {
      onClick: () => {},
    },
  },
};

export const Default = {
  args: {
    properties: {
      value: 'AE',
      renderer: AvatarSkin,
    },
  },
};
