import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Text } from '@inputs/text';
import { TextSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES: AlphaElements.TextProperties = {
  id: 'input',
  name: 'input',
  type: 'text',
  testId: 'text-input',
  renderer: TextSkin,
};

const TextRender = (properties: AlphaElements.TextProperties) => {
  const { value } = properties;
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    setInputValue(updatedValue);
  };

  return <Text properties={{ value: inputValue, ...properties }} actions={{ onChange: handleChange }} />;
};

describe('Text Element Test', () => {
  it('Should render text element', () => {
    render(<TextRender {...DEFAULT_PROPERTIES} />);
    const inputElement = screen.getByTestId('text-input');
    expect(inputElement).toBeInTheDocument();
  });

  it('Should have id(input) and name(input) attributes', () => {
    render(<TextRender {...DEFAULT_PROPERTIES} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('id', 'input');
    expect(inputElement).toHaveAttribute('name', 'input');
  });

  it('Should have type(number) attribute', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, type: 'number' as const };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('type', 'number');
  });

  it('Should call onChange and update the value', () => {
    render(<TextRender {...DEFAULT_PROPERTIES} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(inputElement).toHaveValue('Hello');
  });

  it('Should have required attribute when required(true)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, required: true };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toBeRequired();
  });

  it('Should not have required attribute when required(false)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, required: false };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).not.toBeRequired();
  });

  it('Should have disabled attribute when disabled(true)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, disabled: true };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toBeDisabled();
  });

  it('Should not have disabled attribute when disabled(false)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, disabled: false };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).not.toBeDisabled();
  });

  it('Should prevent onChange if input is disabled(true)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, disabled: true };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(inputElement).not.toHaveValue('Hello');
  });

  it('Should have readonly attribute when readonly(true)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, readOnly: true };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('readOnly');
  });

  it('Should not have readonly attribute when readonly(false)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, readonly: false };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).not.toHaveAttribute('readOnly');
  });

  it('Should prevent onChange if input is read-only(true)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, readOnly: true };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(inputElement).not.toHaveValue('Hello');
  });

  it('Should have min(1), max(10) and step(2) attributes', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, type: 'number' as const, min: 1, max: 10, step: 2 };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('type', 'number');
    expect(inputElement).toHaveAttribute('min', '1');
    expect(inputElement).toHaveAttribute('max', '10');
    expect(inputElement).toHaveAttribute('step', '2');
  });

  it('Should have placeholder text "Enter your name"', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, placeholder: 'Enter your name' };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('placeholder', 'Enter your name');
  });

  it('Should have maxLength(10) attribute', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, maxLength: 10 };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('maxLength', '10');
  });

  it('Should prevent onChange if value exceeds maxLength(5)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, maxLength: 5 };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Hello World' } });

    expect(inputElement).not.toHaveValue('Hello World');
  });

  it('Should allow onChange if value is within maxLength(10)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, maxLength: 10 };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(inputElement).toHaveValue('Hello');
  });

  it('Should have autoComplete(on) attribute', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, autoComplete: 'on' };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('autoComplete', 'on');
  });

  it('Should have tabIndex(5) attribute', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, tabIndex: 5 };
    render(<TextRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('tabIndex', '5');
  });
});
