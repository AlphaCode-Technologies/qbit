import { BaseComponent } from '@components/containers';
import { TabItemProps } from './properties';
import { com } from 'src/types/common';

const TabItem: com.qbit.Shell<TabItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default TabItem;
