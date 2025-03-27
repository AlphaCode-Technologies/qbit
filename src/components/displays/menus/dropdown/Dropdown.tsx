import { BaseComponent, useGetChildren } from '@components/containers';
import { DropdownItemProps, DropdownProps } from './properties';
import { com } from 'src/types/common';
import { useBindSkin } from './Dropdown.hook';

const Dropdown: com.qbit.Shell<DropdownProps, DropdownItemProps> = (props) => {
  const { children: oChildren, testId, ...rest } = props;
  const children = useGetChildren<DropdownProps, DropdownItemProps>(rest, oChildren);

  const { isOpen, toggleDropdown, menuRef, buttonRef } = useBindSkin(rest);

  return (
    <div className="relative inline-block" ref={buttonRef} data-testid={testId}>
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-200 rounded">
        {rest.buttonLabel}
      </button>

      {isOpen && (
        <div ref={menuRef} className="absolute bg-white shadow-md rounded mt-2 w-56">
          <BaseComponent {...rest}>{children}</BaseComponent>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
