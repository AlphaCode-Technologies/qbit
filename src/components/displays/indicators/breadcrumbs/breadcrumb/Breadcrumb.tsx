import { BaseComponent, useGetChildren } from '@components/containers';
import React from 'react';

/**
 * Breadcrumb component.
 * @param props
 * @returns
 */

const Breadcrumb: com.qbit.Shell<BreadcrumbProps, BreadcrumbItemProps> = (
  props: com.qbit.ShellProps<BreadcrumbProps, BreadcrumbItemProps>,
) => {
  const { children: oChildren, className, ...rest } = props;
  const childrenArray = useGetChildren<BreadcrumbProps, BreadcrumbItemProps>(rest, oChildren);
  const totalChildren = React.Children.count(childrenArray);

  const childrenWithProps = React.Children.map(childrenArray, (child, index) => {
    if (!React.isValidElement<BreadcrumbItemProps>(child)) return child;

    return React.cloneElement(child, { total: totalChildren, index: index } as BreadcrumbItemProps);
  });

  return (
    <div className={`${className}`}>
      {' '}
      <BaseComponent {...rest}>{childrenWithProps}</BaseComponent>{' '}
    </div>
  );
};

export default Breadcrumb;
