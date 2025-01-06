import { useGetSkin } from '@components/containers';

const ListItem: com.qbit.Shell<ListItemProps> = (props) => {
  const { renderers, ...rest } = props;

  const renderProps = useGetSkin<ListItemProps>(renderers);

  const { renderer: Skin } = renderProps;

  return Skin && <Skin {...rest} />;
};

export default ListItem;
