import Avatar from './Avatar';
import { AvatarSkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Displays/Indicators/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    value: '',
    testId: '',
    renderers: { renderer: AvatarSkin },
  },
};

export const Default = {
  args: {
    value: 'AE',
    renderers: { renderer: AvatarSkin },
  },
};
