import Loader from './Loader';
import { LoaderSkin } from '@skins/defaults';

export default {
  title: 'Alpha Elements/Displays/Indicators/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {
      isLoading: true,
    },
  },
};

export const Default = {
  args: {
    properties: { isLoading: true, renderer: LoaderSkin },
  },
};
