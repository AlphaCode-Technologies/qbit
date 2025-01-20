import { BaseComponent, useGetChildren } from '@components/containers';

/**
 * Checkbox group component.
 * @param props
 * @returns
 */
const Checkbox: com.qbit.Shell<CheckboxProps, CheckboxItemProps> = (
  props: com.qbit.ShellProps<CheckboxProps, CheckboxItemProps>,
) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<CheckboxProps, CheckboxItemProps>(rest, oChildren);

  return <BaseComponent {...rest}>{children}</BaseComponent>;
};

export default Checkbox;
