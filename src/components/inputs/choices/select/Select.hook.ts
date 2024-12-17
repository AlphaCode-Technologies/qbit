import { ReactElement, RefObject, useEffect, useState } from 'react';

export const useBindSkin = (
  params: com.elem.Shell<AlphaElements.OptionProperties, AlphaElements.SelectActions>,
  ref: RefObject<HTMLDivElement>,
) => {
  const { properties, actions } = params;
  const { name, value, disabled, renderer, optionRenderer, keyExtractor, horizontal } = properties;
  const { onSelect } = actions ?? {};
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleClickOutSide = (event: MouseEvent) => {
    if (!ref.current?.contains(event.target as HTMLElement)) {
      setIsOpen(false);
    }
  };

  const showOption = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide);
    return () => document.removeEventListener('click', handleClickOutSide);
  });

  const getPropsAndActions = (child: ReactElement, i: number) => {
    const { properties: childProperties = {}, actions: childActions = {} } = child.props ?? {};
    const { value: childValue, disabled: childDisabled, renderer: childRenderer, testId } = childProperties;
    const elementDisabled = disabled || childDisabled;
    const elementRenderer = childRenderer ?? optionRenderer ?? renderer;
    const key = keyExtractor?.(childProperties) ?? `${name}-${i}`;
    const selected = childValue === selectedValue;
    const tabIndex = i + 1;
    return {
      key,
      actions: {
        ...childActions,
        onSelect: (value: any) => {
          if (!elementDisabled) {
            setSelectedValue(value);
            onSelect?.(value);
            showOption();
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
    };
  };

  return { getPropsAndActions, name, selectedValue, horizontal, actions, properties, isOpen, setIsOpen };
};
