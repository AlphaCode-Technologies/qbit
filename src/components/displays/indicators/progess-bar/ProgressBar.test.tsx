import { render, screen, within } from '@testing-library/react';
import { ProgressBar } from '@components/displays/indicators';
import { ProgressBarSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES: AlphaElements.ProgressBarProperties = {
  value: 50,
  renderer: ProgressBarSkin,
  testId: 'progress-bar',
};

const renderProgressBar = ({ props }: com.elem.Shell<AlphaElements.ProgressBarProperties, any>) => {
  render(<ProgressBar properties={props} />);
};

describe('ProgressBar Element Test', () => {
  it('Should render progress-bar element', async () => {
    renderProgressBar({ props: DEFAULT_PROPERTIES });
    const progressBar = await screen.findByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();
  });

  it('Should have "50%" text in progress-bar element', async () => {
    renderProgressBar({ props: DEFAULT_PROPERTIES });
    const progressBar = await screen.findByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();

    const textWithinProgressBar = within(progressBar).getByText('50%');
    expect(textWithinProgressBar).toBeInTheDocument();
  });

  it('Should render "50%" text in correct position into progress-bar', () => {
    renderProgressBar({ props: DEFAULT_PROPERTIES });
    const progressBar = screen.getByTestId('progress-bar');
    const textWithinProgressBar = within(progressBar).getByText('50%');
    const parentOfParent = textWithinProgressBar.parentElement?.parentElement;
    expect(parentOfParent).toHaveStyle('marginLeft: calc(50% - 1.5rem)');
  });

  it('Should render progress-bar with the correct width', () => {
    renderProgressBar({ props: DEFAULT_PROPERTIES });
    const progressBar = screen.getByTestId('progress-bar');
    const progressFill = progressBar.querySelector('div > div:nth-child(2) > svg:nth-child(2)');
    expect(progressFill).toHaveStyle('width: 50%');
  });

  it('Should have "100%" text and render progress-bar with the `100%` width in progress-bar element when `value` is `150`', () => {
    const newProgressBarProperties = { ...DEFAULT_PROPERTIES, value: 150 };
    renderProgressBar({ props: newProgressBarProperties });
    const progressBar = screen.getByTestId('progress-bar');

    const textWithinProgressBar = within(progressBar).getByText('100%');
    const parentOfParent = textWithinProgressBar.parentElement?.parentElement;
    expect(parentOfParent).toHaveStyle('marginLeft: calc(100% - 1.5rem)');

    const progressFill = progressBar.querySelector('div > div:nth-child(2) > svg:nth-child(2)');
    expect(progressFill).toHaveStyle('width: 100%');
  });

  it('Should have "0%" text and render progress-bar with the `0%` width in progress-bar element when `value` is negative', () => {
    const newProgressBarProperties = { ...DEFAULT_PROPERTIES, value: -20 };
    renderProgressBar({ props: newProgressBarProperties });
    const progressBar = screen.getByTestId('progress-bar');

    const textWithinProgressBar = within(progressBar).getByText('0%');
    const parentOfParent = textWithinProgressBar.parentElement?.parentElement;
    expect(parentOfParent).toHaveStyle('marginLeft: calc(0% - 1.5rem)');

    const progressFill = progressBar.querySelector('div > div:nth-child(2) > svg:nth-child(2)');
    expect(progressFill).toHaveStyle('width: 0%');
  });

  it('Should have tabIndex(1) in progress-bar element', () => {
    const newProgressBarProperties = { ...DEFAULT_PROPERTIES, tabIndex: 1 };
    renderProgressBar({ props: newProgressBarProperties });
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveAttribute('tabindex', '1');
  });
});
