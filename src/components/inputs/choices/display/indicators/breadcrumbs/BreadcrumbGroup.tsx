import React, { Children, cloneElement, ReactElement } from 'react';
import { useBreadcrumbSkin } from './Breadcrumb.hook';

const BreadcrumbGroup: React.FC<AlphaElements.BreadcrumbProps> = (params) => {
  const { children } = params;
  const { getPropsAndActions } = useBreadcrumbSkin(params);

  return (
    <nav aria-label="breadcrumb" className="py-4">
      <ul className="flex space-x-2">
        {Children.map(children as ReactElement[], (child: ReactElement, index: number) => {
          const { key, actions, properties } = getPropsAndActions(child, index);
          return (
            <li key={key} className="flex items-center">
              {cloneElement(child, {
                properties: { ...properties, index, total: children.length },
                actions,
              })}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadcrumbGroup;
