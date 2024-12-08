import { ReactElement, useState } from 'react';

// Custom hook `useBindSkin` that binds properties, actions, and rendering logic for a radio group component.
export const useBindSkin = (params: AlphaElements.RadioGroupProps) => {
  // Destructure properties and actions from the input parameters.
  const { properties, actions } = params;
  const { name, value, disabled, Renderer, keyExtractor, horizontal } = properties;
  const { onChange } = actions ?? {};

  // State to track the currently selected radio button value.
  const [selectedValue, setSelectedValue] = useState(value);

  // Function to generate properties and actions for each child radio element.
  const getPropsAndActions = (child: ReactElement, i: number) => {
    const childProperties = child.props?.properties ?? {};
    const childActions = child.props?.actions ?? {};
    const { value: childValue, disabled: childDisabled, Renderer: childRenderer, testId } = childProperties;
    // Determine if the child element should be disabled, considering both parent and child settings.
    const elementDisabled = childDisabled || disabled;
    // Choose the renderer: child-specific, parent, or the default skin.
    const elementRenderer = childRenderer ?? Renderer;
    // Generate a unique key for each child element, using a custom key extractor if provided.
    const key = keyExtractor?.(childProperties) ?? `${name}-${i}`;
    const selected = childValue === selectedValue;
    const tabIndex = i + 1;
    return {
      key,
      actions: {
        ...childActions,
        onChange: (value: any) => {
          if (!elementDisabled) {
            setSelectedValue(value);
            onChange?.(value);
          }
        },
      },
      properties: {
        ...childProperties,
        disabled: elementDisabled,
        Renderer: elementRenderer,
        selected,
        tabIndex,
        testId,
      },
    };
  };

  // Return the function for binding props and actions, along with the group name and current selected value.
  return { getPropsAndActions, name, selectedValue, horizontal };
};
