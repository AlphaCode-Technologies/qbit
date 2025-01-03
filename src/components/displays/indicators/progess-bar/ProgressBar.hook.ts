// Custom hook `useBindSkin` that binds properties, actions, and rendering logic for Button component.
export const useBindSkin = ({ properties, options }: com.elem.ShellProps<AlphaElements.ProgressBarProperties, any>) => {
  const { value } = properties;

  const elementValue = Math.max(0, Math.min(100, value));

  return {
    properties: {
      ...properties,
      value: elementValue,
    },
    options,
  };
};
