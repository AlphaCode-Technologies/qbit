// Custom hook `useBindSkin` that binds properties, actions, and rendering logic for Avatar component.
export const useBindSkin = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.AvatarProperties, AlphaElements.AvatarActions>) => {
  const { disabled } = properties ?? {};
  const { onClick } = actions ?? {};

  // Function to generate properties and actions for Avatar element.
  const getPropsAndActions = () => {
    return {
      actions: {
        onClick: (e: any) => !disabled && onClick?.(e),
      },
      properties,
      options,
    };
  };

  // Return the function for binding props and actions.
  return { getPropsAndActions };
};
