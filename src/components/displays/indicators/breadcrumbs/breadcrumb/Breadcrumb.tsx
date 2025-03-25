import { BaseComponent, useGetChildren } from '@components/containers';
import { BreadcrumbItemProps, BreadcrumbProps } from './properties';
import { com } from 'src/types/common';

/**
 * Breadcrumb component.
 * @param props
 * @returns
 */

const Breadcrumb: com.qbit.Shell<BreadcrumbProps, BreadcrumbItemProps> = (
  props: com.qbit.ShellProps<BreadcrumbProps, BreadcrumbItemProps>,
) => {
  const { children: oChildren, className, ...rest } = props;
  const children = useGetChildren<BreadcrumbProps, BreadcrumbItemProps>(rest, oChildren);

  return (
    <div className={`${className}`}>
      <BaseComponent {...rest}>{children}</BaseComponent>
    </div>
  );
};

export default Breadcrumb;
