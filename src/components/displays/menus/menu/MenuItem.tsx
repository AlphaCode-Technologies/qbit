import { BaseComponent } from '@components/containers';
import { MenuItemProps } from './properties';
import { com } from 'src/types/common';

const MenuItem: com.qbit.Shell<MenuItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default MenuItem;
