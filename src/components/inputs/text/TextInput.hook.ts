import { TextInputProps } from './properties';

export const useBindSkin = (params: TextInputProps) => {
  const { maxLength, onChange } = params;

  return {
    ...params,
    onChange: (event: any) => {
      const { value } = event.target;

      if (maxLength && value.length > maxLength) return;

      onChange?.(event);
    },
  };
};
