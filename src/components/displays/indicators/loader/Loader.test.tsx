import { render, screen } from '@testing-library/react';
import { Loader } from '@displays/indicators';
import { LoaderSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES: AlphaElements.LoaderProperties = {
  isLoading: true,
  Renderer: LoaderSkin,
};

const renderLoader = (properties: AlphaElements.LoaderProperties = DEFAULT_PROPERTIES) => {
  render(<Loader properties={properties} />);
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
