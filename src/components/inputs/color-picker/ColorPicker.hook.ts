import { useState } from 'react';
import { ColorPickerProps } from './properties';
import { com } from 'src/types/common';

const useBindSkin = (props: com.qbit.ShellProps<ColorPickerProps>) => {
  const { color, onChange } = props;
  const [selectedColor, setSelectedColor] = useState(color);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    onChange(newColor);
  };

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.substring(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;

    let h = 0,
      s;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    } else {
      s = 0;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const rgbToCmyk = (r: number, g: number, b: number) => {
    const c = 1 - r / 255;
    const m = 1 - g / 255;
    const y = 1 - b / 255;
    const k = Math.min(c, m, y);
    return {
      c: Math.round(((c - k) / (1 - k)) * 100) || 0,
      m: Math.round(((m - k) / (1 - k)) * 100) || 0,
      y: Math.round(((y - k) / (1 - k)) * 100) || 0,
      k: Math.round(k * 100),
    };
  };

  return {
    selectedColor,
    setSelectedColor,
    handleColorChange,
    hexToRgb,
    rgbToHsl,
    rgbToCmyk,
  };
};
export default useBindSkin;
