import { BaseComponent } from '@components/containers';

/**
 * Simple list component.
 * @param props
 * @returns
 */
const Button: com.qbit.Shell<ButtonProps> = (props: com.qbit.ShellProps<ButtonProps>) => {
  const { children: oChildren, ...rest } = props;

  return <BaseComponent {...rest} />;
};

export default Button;
