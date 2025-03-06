import { BaseComponent, useGetChildren } from '@components/containers';
import useBindSkin from './Select.hook';
import { useState } from 'react';
import { SelectGroupProps, SelectOptionProps } from './properties';
import { com } from 'src/types/common';

/**
 * Select group component.
 * @param props
 * @returns
 */

const Select: com.qbit.Shell<SelectGroupProps, SelectOptionProps> = (
  props: com.qbit.ShellProps<SelectGroupProps, SelectOptionProps>,
) => {
  const { children: oChildren, disabled, ...rest } = props;
  const finalProps = useBindSkin(rest);
  const children = useGetChildren<SelectGroupProps, SelectOptionProps>(finalProps, oChildren);

  // State for dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  return (
    <div className={`relative ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <div className="inline-block" onClick={toggleDropdown}>
        <BaseComponent {...finalProps} />
      </div>
      {isDropdownVisible && !disabled && <div>{children}</div>}
    </div>
  );
};

export default Select;
