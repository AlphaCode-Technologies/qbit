import { BaseComponent } from '@components/containers';
import { ProgressStepItemProps } from './properties';
import { com } from 'src/types/common';

/**
 * @param props
 * @returns
 */

const ProgressStepItem: com.qbit.Shell<ProgressStepItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default ProgressStepItem;
