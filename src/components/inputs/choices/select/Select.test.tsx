import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Select from './Select';
import SelectOption from './SelectOption';
import SelectSkin from '@skins/defaults/select/Select.default.skin';
import SelectOptionSkin from '@skins/defaults/select/SelectOption.default.skin';

const renderSelect = (props = {}) => {
  return render(
    <Select
      renderers={{ renderer: SelectSkin, childRenderer: SelectOptionSkin }}
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      defaultValue="Option 1"
      {...props}
    >
      <SelectOption label="Option 1" value="option1" testId="test1" />
      <SelectOption label="Option 2" value="option2" />
      <SelectOption label="Option 3" value="option3" disabled />
    </Select>,
  );
};

describe('Select Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Select component with default props', () => {
    renderSelect({ testId: 'test1' });

    expect(screen.getByTestId('test1')).toBeInTheDocument();
  });

  it('toggles dropdown visibility on click', () => {
    renderSelect();

    const trigger = screen.getByText('Option 1');
    fireEvent.click(trigger);

    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('hides dropdown when clicked again', () => {
    renderSelect();

    const trigger = screen.getByText('Option 1');
    fireEvent.click(trigger);
    fireEvent.click(trigger);

    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
  });

  it('calls onChange when an option is selected', () => {
    const mockOnChange = vi.fn();

    renderSelect({ onChange: mockOnChange });

    const trigger = screen.getByText('Option 1');
    fireEvent.click(trigger);

    const option = screen.getByText('Option 2');
    fireEvent.click(option);

    expect(mockOnChange).toHaveBeenCalledWith('Option 2');
  });

  it('renders the disabled option', () => {
    renderSelect();

    const trigger = screen.getByText('Option 1');
    fireEvent.click(trigger);

    const disabledOption = screen.getByText('Option 3');
    const parent = disabledOption.parentElement?.parentElement?.parentElement;
    expect(parent).toHaveStyle({ cursor: 'not-allowed' });
  });
});
