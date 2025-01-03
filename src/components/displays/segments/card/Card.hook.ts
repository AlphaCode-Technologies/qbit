import { ReactElement } from 'react';

export const useBindSkin = ({ properties, options }: com.elem.Shell<AlphaElements.CardProperties, any>) => {
  const getPropsAndActions = (child: ReactElement) => {
    const { properties: childProperties, actions: childActions, options: childOptions } = child.props;

    return {
      actions: {
        ...childActions,
      },
      properties: {
        ...properties,
        ...childProperties,
      },
      options: {
        ...options,
        ...childOptions,
      },
    };
  };

  return { getPropsAndActions, properties, options };
};
