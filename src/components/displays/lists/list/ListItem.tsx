import { BaseComponent } from '@components/containers';
import { ListItemProps } from './properties';
import { com } from 'src/types/common';

const ListItem: com.qbit.Shell<ListItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default ListItem;
