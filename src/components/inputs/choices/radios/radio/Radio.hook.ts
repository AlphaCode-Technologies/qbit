import { useState } from 'react';
import { OptionProps, RadioGroupProps } from './properties';
import { com } from 'src/types/common';

const useBindSkin = (props: com.qbit.ShellProps<RadioGroupProps, OptionProps>) => {
  const { defaultValue, onChange } = props;
  const [currentSelectedVal, setCurrentSelectedVal] = useState(defaultValue);

  const handleChange = (value: any) => {
    onChange?.(value);
    setCurrentSelectedVal(value);
  };

  return {
    ...props,
    onChange: handleChange,
    defaultValue: currentSelectedVal,
  };
};

export default useBindSkin;
