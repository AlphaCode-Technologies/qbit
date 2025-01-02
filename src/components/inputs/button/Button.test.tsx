import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@inputs/button';
import { ButtonSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES: AlphaElements.ButtonProperties = {
  value: 'Button',
  renderer: ButtonSkin,
};

const DEFAULT_ACTIONS: AlphaElements.ButtonActions = {
  onClick: () => {
    console.log('Button Clicked!');
  },
};

const buttonRender = (
  properties: AlphaElements.ButtonProperties = DEFAULT_PROPERTIES,
  actions: AlphaElements.ButtonActions = DEFAULT_ACTIONS,
) => {
  render(<Button properties={properties} actions={actions} />);
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
  const buttonProperties = { value, testId, disabled, renderer: ButtonSkin };
  const buttonActions = { onClick: () => setValue(changedValue) };

  return <Button properties={buttonProperties} actions={buttonActions} />;
};

describe('Button Element Test', () => {
  it('Should render button element', async () => {
    const newButtonProperties = { ...DEFAULT_PROPERTIES, value: 'Test Button', testId: 'button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('button');
    expect(button).toBeInTheDocument();
  });

  it('Should have "Test Button" text in button element', async () => {
    const newButtonProperties = { ...DEFAULT_PROPERTIES, value: 'Test Button', testId: 'button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Test Button')).toContainElement(button);
  });

  it('Should render a disabled button element', async () => {
    const newButtonProperties = { ...DEFAULT_PROPERTIES, disabled: true, testId: 'disabled-button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('disabled-button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('Should trigger onClick when the button is clicked', async () => {
    const newButtonProperties = { ...DEFAULT_PROPERTIES, testId: 'button' };
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
    const newButtonProperties = { ...DEFAULT_PROPERTIES, tabIndex: 1, testId: 'tabIndex-button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('tabIndex-button');
    expect(button).toBeInTheDocument();
    expect(button.getAttribute('tabIndex')).toBe('1');
  });

  it('Should have tabIndex(-1) in disabled button element', async () => {
    const newButtonProperties = { ...DEFAULT_PROPERTIES, disabled: true, tabIndex: 1, testId: 'disabled-button' };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('disabled-button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button.getAttribute('tabIndex')).toBe('-1');
  });

  it('Should have "Loading..." text in loading button element', async () => {
    const newButtonProperties = {
      ...DEFAULT_PROPERTIES,
      loaderProps: { isLoading: true, value: 'Loading...' },
      testId: 'loading-button',
    };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('loading-button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toContainElement(button);
  });

  it('Should render disabled loading button element', async () => {
    const newButtonProperties = {
      ...DEFAULT_PROPERTIES,
      loaderProps: { isLoading: true, value: 'Loading...', tabIndex: 2, disabled: true },
      testId: 'loading-button',
    };
    buttonRender(newButtonProperties);
    const button = await screen.findByTestId('loading-button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toContainElement(button);
    expect(button).toBeDisabled();
    expect(button.getAttribute('tabIndex')).toBe('-1');
  });
});
