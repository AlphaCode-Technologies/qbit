import { BaseComponent } from '@components/containers';
import { DropdownItemProps } from './properties';
import { com } from 'src/types/common';

const DropdownItem: com.qbit.Shell<DropdownItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default DropdownItem;
