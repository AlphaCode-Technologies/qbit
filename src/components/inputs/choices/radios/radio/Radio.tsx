import { BaseComponent, useGetChildren } from '@components/containers';
import useBindSkin from './Radio.hook';
import { OptionProps, RadioGroupProps } from './properties';
import { com } from 'src/types/common';

/**
 * Radio group component.
 * @param props
 * @returns
 */

const Radio: com.qbit.Shell<RadioGroupProps, OptionProps> = (
  props: com.qbit.ShellProps<RadioGroupProps, OptionProps>,
) => {
  const { children: oChildren, ...rest } = props;
  const finalProps = useBindSkin(rest);
  const children = useGetChildren<RadioGroupProps, OptionProps>(finalProps, oChildren);

  return <BaseComponent {...finalProps}>{children}</BaseComponent>;
};

export default Radio;
