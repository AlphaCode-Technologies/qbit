import { FC, ReactElement, useState } from 'react';

export const useBindSkin = (params: AlphaElements.RadioGroupProps, defaultSkin: FC<AlphaElements.RadioProps>) => {
  const { properties, actions } = params;
  const { name, value, disabled, Renderer, keyExtractor } = properties;
  const { onChange } = actions ?? {};
  const [selectedValue, setSelectedValue] = useState(value);

  const getPropsAndActions = (child: ReactElement, i: number) => {
    const childProperties = child.props?.properties ?? {};
    const childActions = child.props?.actions ?? {};
    const { value: childValue, disabled: childDisabled, Renderer: childRenderer } = childProperties;
    const elementDisabled = childDisabled || disabled;
    const elementRenderer = childRenderer ?? Renderer ?? defaultSkin;
    const key = keyExtractor?.(childProperties) ?? `${name}-${i}`;
    const selected = childValue === selectedValue;
    const tabIndex = i + 1;
    return {
      key,
      actions: {
        ...childActions,
        onChange: (value: any) => {
          setSelectedValue(value);
          onChange?.(value);
        },
      },
      properties: {
        ...childProperties,
        disabled: elementDisabled,
        Renderer: elementRenderer,
        selected,
        tabIndex,
      },
    };
  };

  return { getPropsAndActions, name, selectedValue };
};
