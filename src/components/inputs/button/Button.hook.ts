// Custom hook `useBindSkin` that binds properties, actions, and rendering logic for Button component.
export const useBindSkin = (params: AlphaElements.ButtonProps) => {
  // Destructure properties and actions from the input parameters.
  const { properties, actions } = params;
  const { value, disabled, Renderer, tabIndex, loaderProps, testId } = properties;
  const { onClick } = actions ?? {};

  // Function to generate properties and actions for Button element.
  const getPropsAndActions = () => {
    // Choose the renderer: Use `loading.Renderer` if loading, else `Renderer`.
    const elementRenderer = loaderProps?.isLoading ? (loaderProps.Renderer ?? Renderer) : Renderer;

    const elementValue = loaderProps?.isLoading ? (loaderProps.value ?? value) : value;

    const elementTabIndex = disabled || (loaderProps?.isLoading && loaderProps.disabled) ? -1 : tabIndex;

    const elementDisabled = disabled || loaderProps?.isLoading;

    return {
      actions: {
        onClick: () => !elementDisabled && onClick?.(),
      },
      properties: {
        value: elementValue,
        disabled: elementDisabled,
        Renderer: elementRenderer,
        tabIndex: elementTabIndex,
        testId: testId,
      },
    };
  };

  // Return the function for binding props and actions.
  return { getPropsAndActions };
};
