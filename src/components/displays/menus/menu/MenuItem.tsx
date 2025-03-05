import { BaseComponent } from '@components/containers';
import { MenuItemProps } from './properties';

const MenuItem: com.qbit.Shell<MenuItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default MenuItem;
