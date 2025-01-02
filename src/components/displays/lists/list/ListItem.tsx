import { useGetSkin } from '@components/containers';

const ListItem: com.elem.Component<ListItemProps> = (props) => {
  const { renderers, ...rest } = props;

  const renderProps = useGetSkin<ListItemProps>(renderers);

  const { renderer: Skin } = renderProps;

  return Skin && <Skin {...rest} />;
};

export default ListItem;
