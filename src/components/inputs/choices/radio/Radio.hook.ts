import { ReactElement, useState } from 'react';

// Custom hook `useBindSkin` that binds properties, actions, and rendering logic for a radio group component.
export const useBindSkin = ({
  properties,
  actions,
  options,
}: com.elem.ShellProps<AlphaElements.RadioGroupProperties, AlphaElements.RadioGroupActions>) => {
  const { name, value, disabled, renderer, keyExtractor, horizontal } = properties;
  const { onChange } = actions ?? {};

  // State to track the currently selected radio button value.
  const [selectedValue, setSelectedValue] = useState(value);

  // Function to generate properties and actions for each child radio element.
  const getPropsAndActions = (child: ReactElement, i: number) => {
    const {
      properties: childProperties = {},
      actions: childActions = {},
      options: childOptions = {},
    } = child.props ?? {};
    const { value: childValue, disabled: childDisabled, renderer: childRenderer, testId } = childProperties;
    // Determine if the child element should be disabled, considering both parent and child settings.
    const elementDisabled = childDisabled || disabled;
    // Choose the renderer: child-specific, parent, or the default skin.
    const elementRenderer = childRenderer ?? renderer;
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
        renderer: elementRenderer,
        selected,
        tabIndex,
        testId,
      },
      options: childOptions,
    };
  };

  // Return the function for binding props and actions, along with the group name and current selected value.
  return { getPropsAndActions, options, name, selectedValue, horizontal };
};
