import { BaseComponent } from '@components/containers';
import { BreadcrumbItemProps } from './properties';
import { com } from 'src/types/common';

/**
 * BreadcrumbItem component.
 * @param props
 * @returns
 */

const BreadcrumbItem: com.qbit.Shell<BreadcrumbItemProps> = (props) => {
  const { className } = props;
  return (
    <div className={`${className}`}>
      <BaseComponent {...props} />
    </div>
  );
};

export default BreadcrumbItem;
