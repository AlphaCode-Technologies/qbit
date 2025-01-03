import ProgressBar from './ProgressBar';
import { ProgressBarSkin } from '@skins/defaults';

export default {
  title: 'Alpha Elements/Displays/Indicators/Progress-Bar',
  component: ProgressBar,
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
  },
};

export const Default = {
  args: {
    properties: {
      value: 20,
      renderer: ProgressBarSkin,
    },
  },
};
