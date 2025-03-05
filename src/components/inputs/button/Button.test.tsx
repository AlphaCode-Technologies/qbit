import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';
import { ButtonSkin } from '@skins/defaults';
import { ButtonProps } from './properties';

const buttonRender = (props: ButtonProps) => {
  render(<Button {...props} />);
};

const ValueChangeButton = ({
  defaultValue = 'Button',
  changedValue,
  testId,
  disabled,
}: {
  defaultValue?: string;
  changedValue: string;
  testId?: string;
  disabled?: boolean;
}) => {
  const [value, setValue] = useState(defaultValue);
  const buttonProperties = { value, testId, disabled, renderers: { renderer: ButtonSkin } };

  return <Button onClick={() => setValue(changedValue)} {...buttonProperties} />;
};

describe('Button Element Test', () => {
  it('Should render button element', async () => {
    const newButtonProperties = { renderers: { renderer: ButtonSkin }, value: 'Test Button', testId: 'button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('button');
    expect(button).toBeInTheDocument();
  });

  it('Should have "Test Button" text in button element', async () => {
    const newButtonProperties = { renderers: { renderer: ButtonSkin }, value: 'Test Button', testId: 'button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Test Button')).toContainElement(button);
  });

  it('Should render a disabled button element', async () => {
    const newButtonProperties = { renderers: { renderer: ButtonSkin }, disabled: true, testId: 'disabled-button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('disabled-button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('Should trigger onClick when the button is clicked', async () => {
    const newButtonProperties = { renderers: { renderer: ButtonSkin }, testId: 'button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('Should call onClick function when the button is clicked', async () => {
    render(<ValueChangeButton changedValue="Clicked Button" testId="button" />);
    const button = await screen.findByTestId('button');
    fireEvent.click(button);
    expect(screen.getByText('Clicked Button')).toContainElement(button);
  });

  it('Should not trigger onClick when the button is disabled', async () => {
    render(<ValueChangeButton changedValue="Clicked Button" testId="button" disabled={true} />);
    const button = await screen.findByTestId('button');
    fireEvent.click(button);
    expect(screen.getByText('Button')).toContainElement(button);
  });

  it('Should have tabIndex(1) in button element', async () => {
    const newButtonProperties = { renderers: { renderer: ButtonSkin }, tabIndex: 1, testId: 'tabIndex-button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('tabIndex-button');
    expect(button).toBeInTheDocument();
    expect(button.getAttribute('tabIndex')).toBe('1');
  });

  // it('Should have tabIndex(-1) in disabled button element', async () => {
  //   const newButtonProperties = { renderers:{ renderer: ButtonSkin }, disabled: true, tabIndex: 1, testId: 'disabled-button' };
  //   buttonRender(newButtonProperties);
  //   const button = await screen.findByTestId('disabled-button');
  //   expect(button).toBeInTheDocument();
  //   expect(button).toBeDisabled();
  //   expect(button.getAttribute('tabIndex')).toBe('-1');
  // });
  //
  // it('Should have "Loading..." text in loading button element', async () => {
  //   const newButtonProperties = {
  //     renderers:{ renderer: ButtonSkin },
  //     loaderProps: { isLoading: true, value: 'Loading...' },
  //     testId: 'loading-button',
  //   };
  //   buttonRender(newButtonProperties);
  //   const button = await screen.findByTestId('loading-button');
  //   expect(button).toBeInTheDocument();
  //   expect(screen.getByText('Loading...')).toContainElement(button);
  // });
  //
  // it('Should render disabled loading button element', async () => {
  //   const newButtonProperties = {
  //     renderers:{ renderer: ButtonSkin },
  //     loaderProps: { isLoading: true, value: 'Loading...', tabIndex: 2, disabled: true },
  //     testId: 'loading-button',
  //   };
  //   buttonRender(newButtonProperties);
  //   const button = await screen.findByTestId('loading-button');
  //   expect(button).toBeInTheDocument();
  //   expect(screen.getByText('Loading...')).toContainElement(button);
  //   expect(button).toBeDisabled();
  //   expect(button.getAttribute('tabIndex')).toBe('-1');
  // });
});
