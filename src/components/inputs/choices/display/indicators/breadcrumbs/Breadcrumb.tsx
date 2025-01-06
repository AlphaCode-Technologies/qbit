import React from 'react';

const Breadcrumb: React.FC<AlphaElements.BreadcrumbProps> = ({ properties, actions }) => {
  const { renderer: Renderer, ...rest } = properties;
  return <Renderer properties={rest} actions={actions} />;
};

export default Breadcrumb;
