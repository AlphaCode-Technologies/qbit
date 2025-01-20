import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Radio from './Radio';
import RadioOption from './RadioOption';
import RadioSkin from '@skins/defaults/radio/Radio.default.skin';
import RadioOptionSkin from '@skins/defaults/radio/RadioOption.default.skin';

const renderRadio = (props = {}) => {
  return render(
    <Radio
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      renderers={{ renderer: RadioSkin, childRenderer: RadioOptionSkin }}
      defaultValue="option2"
      {...props}
    >
      <RadioOption label="Option 1" name="example" value="option1" />
      <RadioOption label="Option 2" name="example" value="option2" testId="test2" />
      <RadioOption label="Option 3" name="example" value="option3" />
    </Radio>,
  );
};

describe('Radio Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Radio component with options', () => {
    renderRadio();

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('selects the correct default value', () => {
    renderRadio();

    const selectedOption = screen.getByTestId('test2');
    expect(selectedOption).toBeInTheDocument();
  });

  it('calls onChange when a new option is selected', () => {
    const mockOnChange = vi.fn();
    renderRadio({ onChange: mockOnChange });

    const option = screen.getByText('Option 2').previousSibling;
    fireEvent.click(option!);
    expect(mockOnChange).toHaveBeenCalledWith('option2');
  });

  it('renders custom skins correctly', () => {
    renderRadio();

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 1').parentElement).toHaveClass('text-black');
  });
});
