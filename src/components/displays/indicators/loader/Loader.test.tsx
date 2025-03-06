import { render, screen } from '@testing-library/react';
import Loader from './Loader';
import { LoaderSkin } from '@skins/defaults';
import { LoaderProps } from './properties';
import { com } from 'src/types/common';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<LoaderProps> = {
  isLoading: true,
  renderers: { renderer: LoaderSkin },
};

const renderLoader = (props: com.qbit.ShellProps<LoaderProps> = DEFAULT_PROPERTIES) => {
  render(<Loader {...props} />);
};

describe('Loader Element Test', () => {
  it('Should render loader element', async () => {
    const newLoaderProperties = { ...DEFAULT_PROPERTIES, testId: 'loader' };
    renderLoader(newLoaderProperties);
    const loader = await screen.findByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('Should not render loader element when `isLoading= false`', () => {
    const newLoaderProperties = { ...DEFAULT_PROPERTIES, isLoading: false, testId: 'loader' };
    renderLoader(newLoaderProperties);
    const loader = screen.queryByTestId('loader');
    expect(loader).not.toBeInTheDocument();
  });
});
