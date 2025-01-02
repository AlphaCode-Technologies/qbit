export const useBindSkin = ({
  properties,
  actions,
  options,
}: com.elem.ShellProps<AlphaElements.ButtonProperties, AlphaElements.ButtonActions>) => {
  const { value, disabled, renderer, tabIndex, loaderProps, testId } = properties;
  const { onClick } = actions ?? {};

  const elementRenderer = loaderProps?.isLoading ? (loaderProps.renderer ?? renderer) : renderer;

  const elementValue = loaderProps?.isLoading ? (loaderProps.value ?? value) : value;

  const elementTabIndex = disabled || (loaderProps?.isLoading && loaderProps.disabled) ? -1 : tabIndex;

  const elementDisabled = disabled || loaderProps?.isLoading;

  return {
    actions: {
      onClick: (e: any) => !elementDisabled && onClick?.(e), // TODO -> discuss with @dulan
    },
    properties: {
      value: elementValue,
      disabled: elementDisabled,
      renderer: elementRenderer,
      tabIndex: elementTabIndex,
      testId: testId,
    },
    options: options,
  };
};
