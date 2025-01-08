import { ReactElement } from 'react';

export const useBindSkin = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.DrawerProperties, AlphaElements.DrawerActions>) => {
  const getPropsAndActions = (child: ReactElement) => {
    const { properties: childProperties, actions: childActions, options: childOptions } = child.props;

    return {
      actions: {
        ...actions,
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

  return { getPropsAndActions, properties, actions, options };
};
