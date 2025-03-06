import { ListItemProps } from '@components/index';
import { com } from 'src/types/common';

const ListItemSkin: com.qbit.Skin<ListItemProps> = (props) => {
  const { label, onChange, ...rest } = props;
  return <li {...rest}>{label}</li>;
};

export default ListItemSkin;
