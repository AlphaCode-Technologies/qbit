import { ReactElement, RefObject, useEffect, useState } from 'react';

export const useBindSkin = (params: AlphaElements.SelectProps, ref: RefObject<HTMLDivElement>) => {
  const { properties, actions } = params;
  const { name, value, disabled, Renderer, optionRenderer, keyExtractor, horizontal } = properties;
  const { onChange } = actions ?? {};
  const [optionVisible, setOptionVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleOutSideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      setOptionVisible(false);
    }
  };

  const optionShow = () => {
    setOptionVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutSideClick);
    return () => document.removeEventListener('click', handleOutSideClick);
  });

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
            optionShow();
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

  return { getPropsAndActions, name, selectedValue, horizontal, actions, properties, optionVisible, setOptionVisible };
};
