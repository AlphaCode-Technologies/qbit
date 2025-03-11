import { com } from 'src/types/common';

export type ColorPickerProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    color: string;
    onChange: (color: string) => void;
    testId?: string;
    disabled?: boolean;
    selectedColor?: string;
    rgb?: { r: number; g: number; b: number };
    hsl?: { h: number; s: number; l: number };
    cmyk?: { c: number; m: number; y: number; k: number };
    handleColorChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
