export const useBindSkin = ({
  properties,
  actions,
  options,
}: com.elem.ShellProps<AlphaElements.TextProperties, AlphaElements.TextAction>) => {
  const { disabled, readOnly, maxLength } = properties;
  const { onChange } = actions ?? {};

  return {
    actions: {
      onChange: (event: any) => {
        // Prevent handling if the input is disabled or read-only
        if (disabled || readOnly) return;

        const { value } = event.target;

        if (maxLength && value.length > maxLength) return;

        // Call the original `onChange` handler
        onChange?.(event);
      },
    },
    properties,
    options,
  };
};
