// Custom hook `useBindSkin` that binds properties, actions, and rendering logic for Avatar component.
export const useBindSkin = (params: AlphaElements.AvatarProps) => {
  // Destructure properties and actions from the input parameters.
  const { properties, actions } = params;
  const { disabled } = properties;
  const { onClick } = actions ?? {};

  // Function to generate properties and actions for Avatar element.
  const getPropsAndActions = () => {
    return {
      actions: {
        onClick: () => !disabled && onClick?.(),
      },
      properties,
    };
  };

  // Return the function for binding props and actions.
  return { getPropsAndActions };
};
