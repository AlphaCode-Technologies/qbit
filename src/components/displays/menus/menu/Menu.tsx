import { BaseComponent, useGetChildren } from '@components/containers';

/**
 * Simple Menu component.
 * @param props
 * @returns
 */
const Menu: com.qbit.Shell<MenuProps, MenuItemProps> = (props: com.qbit.ShellProps<MenuProps, MenuItemProps>) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<MenuProps, MenuItemProps>(rest, oChildren);

  return <BaseComponent {...rest}>{children}</BaseComponent>;
};

export default Menu;
