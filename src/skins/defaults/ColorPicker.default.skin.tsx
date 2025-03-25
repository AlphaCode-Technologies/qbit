import { ColorPickerProps } from '@components/inputs/color-picker/properties';
import { com } from 'src/types/common';

const ColorPickerSkin: com.qbit.Skin<ColorPickerProps> = (props: com.qbit.SkinProps<ColorPickerProps>) => {
  const { selectedColor, rgb, hsl, cmyk, handleColorChange, testId, disabled } = props;

  return (
    <div
      className={`p-5 border border-gray-300 rounded-lg shadow-md ${disabled ? 'cursor-not-allowed bg-gray-200' : 'cursor-pointer bg-white'}`}
      data-testid={testId}
      aria-disabled={disabled}
    >
      <h3 className="text-lg font-semibold mb-4">Color Picker</h3>
      <input
        disabled={disabled}
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        className={`w-full h-12 border-none rounded-md ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      />
      <div className="mt-4 space-y-1">
        <p>
          {' '}
          <strong>HEX:</strong> <span className="text-gray-700">{selectedColor}</span>{' '}
        </p>
        <p>
          {' '}
          <strong>RGB:</strong>{' '}
          <span className="text-gray-700">
            {rgb?.r}, {rgb?.g}, {rgb?.b}
          </span>{' '}
        </p>
        <p>
          {' '}
          <strong>HSL:</strong>{' '}
          <span className="text-gray-700">
            {hsl?.h}°, {hsl?.s}%, {hsl?.l}%
          </span>{' '}
        </p>
        <p>
          {' '}
          <strong>CMYK:</strong>{' '}
          <span className="text-gray-700">
            {cmyk?.c}%, {cmyk?.m}%, {cmyk?.y}%, {cmyk?.k}%
          </span>{' '}
        </p>
      </div>
    </div>
  );
};

export default ColorPickerSkin;
