import { BaseComponent } from '@components/containers';
import { DrawerItemProps } from './properties';
import { com } from 'src/types/common';

/**
 * Simple Drawer-Item component.
 * @param props
 * @returns
 */
const DrawerItem: com.qbit.Shell<DrawerItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default DrawerItem;
