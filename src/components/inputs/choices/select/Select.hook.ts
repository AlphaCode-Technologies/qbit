import { useState } from 'react';

const useBindSkin = (props: com.qbit.ShellProps<SelectGroupProps, SelectOption>) => {
  const { defaultValue, onChange } = props;
  const [currentSelectedValue, setCurrentSelectedValue] = useState(defaultValue);
  const handleChange = (value: any) => {
    onChange?.(value);
    setCurrentSelectedValue(value);
  };

  return { ...props, onChange: handleChange, defaultValue: currentSelectedValue };
};

export default useBindSkin;
