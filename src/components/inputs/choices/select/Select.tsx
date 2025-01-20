import { BaseComponent, useGetChildren } from '@components/containers';
import useBindSkin from './Select.hook';
import { useState } from 'react';

/**
 * Select group component.
 * @param props
 * @returns
 */

const Select: com.qbit.Shell<SelectGroupProps, SelectOption> = (
  props: com.qbit.ShellProps<SelectGroupProps, SelectOption>,
) => {
  const { children: oChildren, disabled, ...rest } = props;
  const finalProps = useBindSkin(rest);
  const children = useGetChildren<SelectGroupProps, SelectOption>(finalProps, oChildren);

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
