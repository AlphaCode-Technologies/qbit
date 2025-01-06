import { Children, cloneElement, ReactElement } from 'react';
import { useBindSkin } from './Card.hook';

const Card = ({ children, ...rest }: com.elem.Shell<AlphaElements.CardProperties, any>) => {
  const { properties, options, getPropsAndActions } = useBindSkin(rest);
  const { testId } = properties;
  const { styles } = options ?? {};
  const { className = 'max-w-sm bg-white border border-gray-200 rounded-lg shadow p-4' } = styles ?? {};

  return (
    <div className={className} data-testid={testId}>
      {Children.map(children as ReactElement[], (child: ReactElement) => {
        const { properties: childProperties, options: childOptions } = getPropsAndActions(child);

        return cloneElement(child, {
          properties: childProperties,
          options: childOptions,
        });
      })}
    </div>
  );
};

export default Card;
