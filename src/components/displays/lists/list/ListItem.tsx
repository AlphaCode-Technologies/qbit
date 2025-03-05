import { BaseComponent } from '@components/containers';
import { ListItemProps } from './properties';

const ListItem: com.qbit.Shell<ListItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default ListItem;
