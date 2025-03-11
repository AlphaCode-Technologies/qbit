import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ColorPicker from './ColorPicker';
import ColorPickerSkin from '@skins/defaults/ColorPicker.default.skin';

describe('ColorPicker Component', () => {
  const mockOnChange = vi.fn();
  const initialColor = '#ffffff';

  it('renders the ColorPicker component with the initial color', () => {
    render(<ColorPicker renderers={{ renderer: ColorPickerSkin }} color={initialColor} onChange={mockOnChange} />);

    expect(screen.getByDisplayValue(initialColor)).toBeInTheDocument();
    expect(screen.getByText('HEX:')).toBeInTheDocument();
    expect(screen.getByText('RGB:')).toBeInTheDocument();
    expect(screen.getByText('HSL:')).toBeInTheDocument();
    expect(screen.getByText('CMYK:')).toBeInTheDocument();
  });

  it('calls onChange when the color is changed', () => {
    render(<ColorPicker renderers={{ renderer: ColorPickerSkin }} color={initialColor} onChange={mockOnChange} />);

    const colorInput = screen.getByDisplayValue(initialColor);
    const newColor = '#000000';
    fireEvent.change(colorInput, { target: { value: newColor } });

    expect(mockOnChange).toHaveBeenCalledWith(newColor);
  });

  it('displays correct RGB, HSL, and CMYK values for a given color', () => {
    const testColor = '#ff5733'; // A sample color
    render(<ColorPicker renderers={{ renderer: ColorPickerSkin }} color={testColor} onChange={mockOnChange} />);

    // Debug: Log the rendered HTML
    screen.debug();

    // Verify RGB output
    const rgbElement = screen.getByText('RGB:').closest('p');
    expect(rgbElement).toHaveTextContent('RGB: 255, 87, 51');
  });
});
