import { DrawerItemProps } from '@components/index';
import { com } from 'src/types/common';

const CardItem: com.qbit.Skin<DrawerItemProps> = (props) => {
  const { children } = props;

  return <div className="text-gray-600">{children}</div>;
};

export default CardItem;
