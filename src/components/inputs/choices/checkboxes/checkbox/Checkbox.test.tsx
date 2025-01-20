import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useState } from 'react';
import Checkbox from './Checkbox';
import CheckboxItem from './CheckboxItem';
import { CheckboxItemSkin, CheckboxSkin } from '@skins/defaults/checkbox';

// Mock App Component
const MockApp = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <Checkbox
      renderers={{ renderer: CheckboxSkin, childRenderer: CheckboxItemSkin }}
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      className="flex gap-2"
    >
      <CheckboxItem
        value="option1"
        checked={selectedValues.includes('option1')}
        onChange={(isChecked) =>
          setSelectedValues((prev) => (isChecked ? [...prev, 'option1'] : prev.filter((val) => val !== 'option1')))
        }
      />
      <CheckboxItem
        value="option2"
        checked={selectedValues.includes('option2')}
        onChange={(isChecked) =>
          setSelectedValues((prev) => (isChecked ? [...prev, 'option2'] : prev.filter((val) => val !== 'option2')))
        }
      />
      <CheckboxItem
        value="option3"
        checked={selectedValues.includes('option3')}
        onChange={(isChecked) =>
          setSelectedValues((prev) => (isChecked ? [...prev, 'option3'] : prev.filter((val) => val !== 'option3')))
        }
      />
    </Checkbox>
  );
};

describe('Checkbox Component', () => {
  it('renders the checkbox options correctly', () => {
    render(<MockApp />);
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3);
  });

  it('toggles checkbox state on click', () => {
    render(<MockApp />);
    const checkboxes = screen.getAllByRole('checkbox');

    // Initially unchecked
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();

    // Click to check
    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).toBeChecked();

    fireEvent.click(checkboxes[1]);
    expect(checkboxes[1]).toBeChecked();

    // Click to uncheck
    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).not.toBeChecked();
  });

  it('updates selectedValues state correctly', () => {
    render(<MockApp />);
    const checkboxes = screen.getAllByRole('checkbox');

    // Check the first and third checkboxes
    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).toBeChecked();

    fireEvent.click(checkboxes[2]);
    expect(checkboxes[2]).toBeChecked();

    // Uncheck the first checkbox
    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).not.toBeChecked();
  });
});
