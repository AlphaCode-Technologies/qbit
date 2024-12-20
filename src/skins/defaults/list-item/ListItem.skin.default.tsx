import { SkinProps } from './ListItem.skin.types';

const ListItemSkin = <V extends object>({ properties }: SkinProps<V>) => {
  const { label } = properties;

  return <div>{label}</div>;
};

export default ListItemSkin;
