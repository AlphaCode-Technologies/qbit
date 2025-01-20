import { BaseComponent, useGetChildren } from '@components/containers';

/**
 * Simple Card component.
 * @param props
 * @returns
 */
const Card: com.qbit.Shell<CardProps> = (props: com.qbit.ShellProps<CardProps>) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<CardProps, CardItemProps>(rest, oChildren);

  return <BaseComponent {...props}>{children}</BaseComponent>;
};

export default Card;
