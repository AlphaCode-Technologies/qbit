import { BaseComponent } from '@components/containers';
import { TableItemProps } from './properties';
import { com } from 'src/types/common';

const TableItem: com.qbit.Shell<TableItemProps> = (props) => {
  return <BaseComponent {...props} />;
};
export default TableItem;
