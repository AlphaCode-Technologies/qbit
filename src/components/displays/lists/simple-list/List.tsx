import { useGetChildren, useGetSkin } from '@components/containers';

/**
 * Simple list component.
 * @param props
 * @returns
 */
const List: com.elem.Component<ListProps, ListItemProps> = <V extends com.utils.ValidTypes>(
  props: com.elem.ComponentProps<ListProps<V>, ListItemProps<V>>,
) => {
  const { renderers, ...rest } = props;
  const renderProps = useGetSkin<ListProps<V>>(renderers);
  const children = useGetChildren<ListProps<V>>(rest, renderProps);

  const { renderer: Skin } = renderProps;

  return Skin && <Skin {...rest}>{children}</Skin>;
};

export default List;
