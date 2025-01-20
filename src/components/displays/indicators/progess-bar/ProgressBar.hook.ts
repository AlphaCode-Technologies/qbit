export const useBindSkin = (params: ProgressBarProps) => {
  const { value } = params;

  const elementValue = Math.max(0, Math.min(100, value));

  return {
    ...params,
    value: elementValue,
  };
};
