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
    value: '',
    testId: '',
    renderers: { renderer: ProgressBarSkin },
  },
};

export const Default = {
  args: {
    value: 20,
  },
};
