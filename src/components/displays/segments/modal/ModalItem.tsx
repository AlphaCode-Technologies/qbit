import { BaseComponent } from '@components/containers';
import { ModalItemProps } from './properties';
import { com } from 'src/types/common';

/**
 * Simple Modal-Item component.
 * @param props
 * @returns
 */
const ModalItem: com.qbit.Shell<ModalItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default ModalItem;
