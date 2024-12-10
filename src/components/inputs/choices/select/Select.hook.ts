import { ReactElement, useState } from 'react';

export const useBindSkin = (params: AlphaElements.SelectProps) => {
  const { properties, actions } = params;
  const { name, value, disabled, Renderer, optionRenderer, keyExtractor, horizontal } = properties;
  const { onChange } = actions ?? {};

  const [selectedValue, setSelectedValue] = useState(value);

  const getPropsAndActions = (child: ReactElement, i: number) => {
    const childProperties = child.props?.properties ?? {};
    const childActions = child.props?.actions ?? {};
    const { value: childValue, disabled: childDisabled, Renderer: childRenderer, testId } = childProperties;
    const elementDisabled = childDisabled || disabled;
    const elementRenderer = childRenderer ?? optionRenderer ?? Renderer;
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

  return { getPropsAndActions, name, selectedValue, horizontal, actions, properties };
};
