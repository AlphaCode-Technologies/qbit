import { BaseComponent } from '@components/containers';
import { ColorPickerProps } from './properties';
import { com } from 'src/types/common';
import useBindSkin from './ColorPicker.hook';

/**
 * ColorPicker component.
 * @param props
 * @returns JSX.Element
 */
const ColorPicker: com.qbit.Shell<ColorPickerProps> = (props: com.qbit.ShellProps<ColorPickerProps>) => {
  const { ...rest } = props;

  const { selectedColor, handleColorChange, hexToRgb, rgbToHsl, rgbToCmyk } = useBindSkin(rest);

  const rgb = hexToRgb(selectedColor);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

  return (
    <BaseComponent
      {...props}
      selectedColor={selectedColor}
      hsl={hsl}
      cmyk={cmyk}
      rgb={rgb}
      handleColorChange={handleColorChange}
    />
  );
};

export default ColorPicker;
