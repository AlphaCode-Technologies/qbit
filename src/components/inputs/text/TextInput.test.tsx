import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TextInput from './TextInput.tsx';
import { TextSkin } from '@skins/defaults';
import { TextInputProps } from './properties';
import { com } from 'src/types/common';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<TextInputProps> = {
  id: 'input',
  name: 'input',
  type: 'text',
  testId: 'text-input',
  renderers: { renderer: TextSkin },
};

const TextInputRender = (properties: com.qbit.ShellProps<TextInputProps>) => {
  const { value } = properties;
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    setInputValue(updatedValue);
  };

  return <TextInput value={inputValue} {...properties} onChange={handleChange} />;
};

describe('TextInput Element Test', () => {
  it('Should render TextInput element', () => {
    render(<TextInputRender {...DEFAULT_PROPERTIES} />);
    const inputElement = screen.getByTestId('text-input');
    expect(inputElement).toBeInTheDocument();
  });

  it('Should have id(input) and name(input) attributes', () => {
    render(<TextInputRender {...DEFAULT_PROPERTIES} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('id', 'input');
    expect(inputElement).toHaveAttribute('name', 'input');
  });

  it('Should have type(number) attribute', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, type: 'number' as const };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('type', 'number');
  });

  it('Should call onChange and update the value', () => {
    render(<TextInputRender {...DEFAULT_PROPERTIES} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(inputElement).toHaveValue('Hello');
  });

  it('Should have required attribute when required(true)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, required: true };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toBeRequired();
  });

  it('Should not have required attribute when required(false)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, required: false };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).not.toBeRequired();
  });

  it('Should have disabled attribute when disabled(true)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, disabled: true };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toBeDisabled();
  });

  it('Should not have disabled attribute when disabled(false)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, disabled: false };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).not.toBeDisabled();
  });

  // TODO: Need to check this after adding disabled functionality in UIEvents
  // it('Should prevent onChange if input is disabled(true)', () => {
  //   const newTextProperties = { ...DEFAULT_PROPERTIES, disabled: true };
  //   render(<TextRender {...newTextProperties} />);
  //
  //   const inputElement = screen.getByTestId('text-input');
  //   fireEvent.change(inputElement, { target: { value: 'Hello' } });
  //
  //   expect(inputElement).not.toHaveValue('Hello');
  // });

  it('Should have readonly attribute when readonly(true)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, readOnly: true };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('readOnly');
  });

  it('Should not have readonly attribute when readonly(false)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, readonly: false };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).not.toHaveAttribute('readOnly');
  });

  // TODO: Need to check this after adding read-only functionality in UIEvents
  // it('Should prevent onChange if input is read-only(true)', () => {
  //   const newTextProperties = { ...DEFAULT_PROPERTIES, readOnly: true };
  //   render(<TextRender {...newTextProperties} />);
  //
  //   const inputElement = screen.getByTestId('text-input');
  //   fireEvent.change(inputElement, { target: { value: 'Hello' } });
  //
  //   expect(inputElement).not.toHaveValue('Hello');
  // });

  // TODO: Need to check read-only, disabled after adding read-only, disabled functionality in UIEvents

  it('Should call onFocus when the input is focused', () => {
    let isFocused = false;

    const newTextProperties = { ...DEFAULT_PROPERTIES, onFocus: () => (isFocused = true) };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    inputElement.focus();

    expect(isFocused).toBe(true);
  });

  it('Should call onBlur when the input loses focus', () => {
    let isFocused = false;
    let isBlurred = false;

    const newTextProperties = {
      ...DEFAULT_PROPERTIES,
      onFocus: () => (isFocused = true),
      onBlur: () => (isBlurred = true),
    };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    inputElement.focus();

    expect(isFocused).toBe(true);

    inputElement.blur();
    expect(isBlurred).toBe(true);
  });

  it('Should call onKeyPress when a key is pressed', () => {
    let isKeyPressed = false;

    const newTextProperties = { ...DEFAULT_PROPERTIES, onKeyPress: () => (isKeyPressed = true) };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.keyPress(inputElement, { key: 'A', code: 'KeyA', charCode: 65 });

    expect(isKeyPressed).toBe(true);
  });

  it('Should call onKeyDown when a key is pressed down', () => {
    let isKeyDown = false;

    const newTextProperties = { ...DEFAULT_PROPERTIES, onKeyDown: () => (isKeyDown = true) };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.keyDown(inputElement, { key: 'A', code: 'KeyA', charCode: 65 });

    expect(isKeyDown).toBe(true);
  });

  it('Should call onKeyUp when a key is released', () => {
    let isKeyUp = false;

    const newTextProperties = { ...DEFAULT_PROPERTIES, onKeyUp: () => (isKeyUp = true) };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.keyUp(inputElement, { key: 'A', code: 'KeyA', charCode: 65 });

    expect(isKeyUp).toBe(true);
  });

  it('Should have min(1), max(10) and step(2) attributes', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, type: 'number' as const, min: 1, max: 10, step: 2 };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('type', 'number');
    expect(inputElement).toHaveAttribute('min', '1');
    expect(inputElement).toHaveAttribute('max', '10');
    expect(inputElement).toHaveAttribute('step', '2');
  });

  it('Should have placeholder text "Enter your name"', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, placeholder: 'Enter your name' };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('placeholder', 'Enter your name');
  });

  it('Should have maxLength(10) attribute', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, maxLength: 10 };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('maxLength', '10');
  });

  it('Should prevent onChange if value exceeds maxLength(5)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, maxLength: 5 };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Hello World' } });

    expect(inputElement).not.toHaveValue('Hello World');
  });

  it('Should allow onChange if value is within maxLength(10)', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, maxLength: 10 };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(inputElement).toHaveValue('Hello');
  });

  it('Should have autoComplete(on) attribute', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, autoComplete: 'on' };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('autoComplete', 'on');
  });

  it('Should apply custom className', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, className: 'custom-class' };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    expect(inputElement).toHaveClass('custom-class');
  });

  it('Should apply custom inline styles', () => {
    const newTextProperties = {
      ...DEFAULT_PROPERTIES,
      style: { borderColor: 'red', borderWidth: '2px' },
    };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    expect(inputElement).toHaveStyle({ borderColor: 'red', borderWidth: '2px' });
  });

  it('Should have error class when error prop is true', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, error: true };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');
    expect(inputElement).toHaveClass('outline-red-600');
    expect(inputElement).toHaveClass('text-red-600');
  });

  it('Should have tabIndex(5) attribute', () => {
    const newTextProperties = { ...DEFAULT_PROPERTIES, tabIndex: 5 };
    render(<TextInputRender {...newTextProperties} />);

    const inputElement = screen.getByTestId('text-input');

    expect(inputElement).toHaveAttribute('tabIndex', '5');
  });
});
