import { useState } from 'react';
import { SelectGroupProps, SelectOptionProps } from './properties';
import { com } from 'src/types/common';

const useBindSkin = (props: com.qbit.ShellProps<SelectGroupProps, SelectOptionProps>) => {
  const { defaultValue, onChange } = props;
  const [currentSelectedValue, setCurrentSelectedValue] = useState(defaultValue);
  const handleChange = (value: any) => {
    onChange?.(value);
    setCurrentSelectedValue(value);
  };

  return { ...props, onChange: handleChange, defaultValue: currentSelectedValue };
};

export default useBindSkin;
