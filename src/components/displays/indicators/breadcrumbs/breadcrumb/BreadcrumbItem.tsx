import { BaseComponent } from '@components/containers';

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
