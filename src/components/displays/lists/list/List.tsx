import { useGetChildren, useGetSkin } from '@components/containers';

/**
 * Simple list component.
 * @param props
 * @returns
 */
const List: com.qbit.Shell<ListProps, ListItemProps> = (props: com.qbit.ShellProps<ListProps, ListItemProps>) => {
  const { renderers, ...rest } = props;
  const renderProps = useGetSkin<ListProps, ListItemProps>(renderers);
  const children = useGetChildren<ListProps, ListItemProps>(rest, renderProps);

  const { renderer: Skin } = renderProps;

  return Skin && <Skin {...rest}>{children}</Skin>;
};

export default List;
