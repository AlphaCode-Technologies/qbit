import React from 'react';

const BreadcrumbsSkin: React.FC<{
  properties: AlphaElements.BreadcrumbProperties;
  actions?: AlphaElements.BreadcrumbAction;
}> = ({ properties, actions }) => {
  const { name, path, active, disabled, index, total, testId } = properties;

  return (
    <div
      className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
      data-testid={testId}
    >
      {active ? (
        <span className="text-gray-500 font-medium" onClick={() => actions?.onClick?.(properties.id ?? '')}>
          {name}
        </span>
      ) : (
        <a
          href={path}
          className="text-blue-500 hover:text-green-600"
          onClick={() => actions?.onClick?.(properties.id ?? '')}
        >
          {name}
        </a>
      )}
      {index !== undefined && total !== undefined && index < total - 1 && <span className="mx-2 text-gray-400">/</span>}{' '}
    </div>
  );
};

export default BreadcrumbsSkin;
