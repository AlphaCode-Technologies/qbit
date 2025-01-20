import { BaseComponent, useGetChildren } from '@components/containers';

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
