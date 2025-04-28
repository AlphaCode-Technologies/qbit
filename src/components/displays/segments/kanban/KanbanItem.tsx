import { BaseComponent } from '@components/containers';
import { com } from 'src/types/common';
import { KanbanItemProps } from './properties';

const KanbanItem: com.qbit.Shell<KanbanItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default KanbanItem;
