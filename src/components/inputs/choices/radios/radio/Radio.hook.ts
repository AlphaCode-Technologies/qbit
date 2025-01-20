import { useState } from 'react';

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
