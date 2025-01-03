import { ReactElement, RefObject, useEffect, useState } from 'react';

export const useBindSkin = (
  params: com.elem.Shell<AlphaElements.SelectOptionProps, AlphaElements.SelectActions>,
  ref: RefObject<HTMLDivElement>,
  optionRef: RefObject<HTMLDivElement>,
) => {
  const { properties, actions, options } = params;
  const { name, value, disabled, renderer, optionRenderer, keyExtractor, horizontal } = properties;
  const { onChange, triggerScrollEnd } = actions ?? {};
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleScroll = () => {
    const div = optionRef.current;
    const scrollTop = div?.scrollTop ?? 0;
    const scrollHeight = div?.scrollHeight ?? 0;
    const clientHeight = div?.clientHeight ?? 0;

    // Check if the user has scrolled to the bottom of the div
    if (scrollTop + clientHeight >= scrollHeight) {
      triggerScrollEnd?.();
    }
  };

  const onClickSelectOption = () => {
    if (!disabled) setIsOpen(true);
  };

  const showOption = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as HTMLElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutSide);
    return () => document.removeEventListener('click', handleClickOutSide);
  }, [ref]);

  const getPropsAndActions = (child: ReactElement, i: number) => {
    const {
      properties: childProperties = {},
      actions: childActions = {},
      options: childOptions = {},
    } = child.props ?? {};
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
        onChange: (value: any) => {
          if (!elementDisabled) {
            setSelectedValue(value);
            onChange?.(value);
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
      options: childOptions,
    };
  };

  return {
    getPropsAndActions,
    name,
    selectedValue,
    horizontal,
    actions,
    properties,
    options,
    isOpen,
    onClickSelectOption,
    handleScroll,
  };
};
