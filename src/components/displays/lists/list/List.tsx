import { BaseComponent, useGetChildren } from '@components/containers';
import { ListItemProps, ListProps } from './properties';
import { com } from 'src/types/common';

/**
 * Simple list component.
 * @param props
 * @returns
 */
const List: com.qbit.Shell<ListProps, ListItemProps> = (props: com.qbit.ShellProps<ListProps, ListItemProps>) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<ListProps, ListItemProps>(rest, oChildren);

  return <BaseComponent {...rest}>{children}</BaseComponent>;
};

export default List;
