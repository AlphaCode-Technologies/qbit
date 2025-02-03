import Loader from './Loader';
import { LoaderSkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Displays/Indicators/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    isLoading: true,
    renderers: { renderer: LoaderSkin },
  },
};

export const Default = {
  args: {
    isLoading: true,
    renderers: { renderer: LoaderSkin },
  },
};
