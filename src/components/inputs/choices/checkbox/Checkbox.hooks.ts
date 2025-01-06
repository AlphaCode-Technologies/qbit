import { useState } from 'react';

export const useBindSkin = ({
  properties,
  actions,
  options,
}: com.elem.ShellProps<AlphaElements.CheckboxProperties, AlphaElements.CheckBoxAction>) => {
  const { value, disabled } = properties;
  const { onChange } = actions ?? {};
  const [selectedValue, setSelectedValue] = useState(value);

  const handleClick = () => {
    if (!disabled) {
      onChange?.(!selectedValue as any);
      setSelectedValue(!selectedValue);
    }
  };
  return {
    properties: {
      ...properties,
      value: selectedValue,
    },
    actions: {
      ...actions,
      onChange: handleClick,
    },
    options,
  };
};
