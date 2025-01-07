import { cleanup, render, screen, waitFor } from '@testing-library/react';
import Toaster from './Toaster';
import { ToasterSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES = {
  open: true,
  position: 'top-center',
  renderer: ToasterSkin,
  testId: 'test-toaster',
  duration: 4000,
  autoClose: true,
};

const renderToaster = ({ props }: com.elem.Shell<AlphaElements.ToasterProperties, AlphaElements.ToasterActions>) =>
  render(<Toaster properties={props} />);

describe('Test for toaster elements', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should have toaster elements', async () => {
    renderToaster({ props: DEFAULT_PROPERTIES });
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).toBeInTheDocument();
  });

  it('Should have not toaster elements if open is false', async () => {
    renderToaster({ props: { ...DEFAULT_PROPERTIES, open: false } });
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).not.toBeInTheDocument();
  });

  it('Should have toaster elements hidden after given time', async () => {
    renderToaster({ props: DEFAULT_PROPERTIES });
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).toBeInTheDocument();

    waitFor(
      () => {
        setTimeout(() => {
          const ele = screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
          expect(ele).toBeInTheDocument();
        }, 5000);
      },
      { timeout: 5000 },
    );
  });
});
