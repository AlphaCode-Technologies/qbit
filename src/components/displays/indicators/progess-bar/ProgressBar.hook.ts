import { ProgressBarProps } from './properties';

export const useBindSkin = (params: ProgressBarProps) => {
  const { value = 0 } = params;

  const elementValue = Math.max(0, Math.min(100, value));

  return {
    ...params,
    value: elementValue,
  };
};
