import Loader from './Loader';
import { LoaderSkin } from '@skins/defaults';
import { DottedCircleLoaderSkin, FadedCircleLoaderSkin, SegmentBarLoaderSkin } from '@skins/optional';

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
    width: 47,
    height: 47,
    renderers: { renderer: LoaderSkin },
  },
};

export const Default = {
  args: {
    isLoading: true,
    renderers: { renderer: LoaderSkin },
  },
};

export const CustomWidthAndHeight = {
  args: {
    isLoading: true,
    renderers: { renderer: LoaderSkin },
    width: 19,
    height: 19,
  },
};

export const CustomSkinFadedCircleLoader = {
  args: {
    isLoading: true,
    renderers: { renderer: FadedCircleLoaderSkin },
  },
};

export const CustomSkinDottedCircleLoader = {
  args: {
    isLoading: true,
    renderers: { renderer: DottedCircleLoaderSkin },
  },
};

export const CustomSkinSegmentBarLoader = {
  args: {
    isLoading: true,
    renderers: { renderer: SegmentBarLoaderSkin },
  },
};

export const UsingClass = {
  args: {
    isLoading: true,
    renderers: { renderer: LoaderSkin },
    className: 'text-yellow-100 fill-yellow-600',
  },
};

export const UsingStyle = {
  args: {
    isLoading: true,
    renderers: { renderer: DottedCircleLoaderSkin },
    style: { color: '#ca8a04', animation: 'spin 3s linear infinite' },
  },
};
