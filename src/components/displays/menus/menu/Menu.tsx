import { BaseComponent, useGetChildren } from '@components/containers';
import { useBindSkin } from './Menu.hook.ts';
import { MenuItemProps, MenuProps } from './properties';
import { com } from 'src/types/common';

/**
 * Simple Menu component.
 * @param props
 * @returns
 */
const Menu: com.qbit.Shell<MenuProps, MenuItemProps> = (props: com.qbit.ShellProps<MenuProps, MenuItemProps>) => {
  const { children: oChildren, testId, ...rest } = props;
  const children = useGetChildren<MenuProps, MenuItemProps>(rest, oChildren);

  const { isOpen, context, position, menuRef } = useBindSkin(rest);

  if (isOpen) {
    return (
      <div
        ref={menuRef}
        className={`${context ? 'absolute' : ''}`}
        style={context ? { top: position.y, left: position.x } : undefined}
        data-testid={testId}
      >
        <BaseComponent {...rest}>{children}</BaseComponent>
      </div>
    );
  }
};

export default Menu;
