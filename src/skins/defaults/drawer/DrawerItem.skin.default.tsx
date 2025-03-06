import { DrawerItemProps } from '@components/index';
import { com } from 'src/types/common';

const DrawerItem: com.qbit.Skin<DrawerItemProps> = (props) => {
  const { children } = props;

  return children;
};

export default DrawerItem;
