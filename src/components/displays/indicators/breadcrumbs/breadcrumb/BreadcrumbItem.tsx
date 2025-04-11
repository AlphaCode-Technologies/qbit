import { BaseComponent } from '@components/containers';
import { com } from 'src/types/common';
import { useBindSkin } from './Breadcrumb.hook';
import { BreadcrumbItemProps } from './properties';

/**
 * BreadcrumbItem component.
 * @param props
 * @returns
 */

const BreadcrumbItem: com.qbit.Shell<BreadcrumbItemProps> = (props) => {
  const bindHandlers = useBindSkin(props);

  return <BaseComponent {...bindHandlers} {...props} />;
};

export default BreadcrumbItem;
