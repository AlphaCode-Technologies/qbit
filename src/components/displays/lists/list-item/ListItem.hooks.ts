import { ListItemProps } from './ListItem.types';

import ValidTypes = com.utils.ValidTypes;

const useBindSkin = <V extends ValidTypes>({ properties, actions, renderers, options }: ListItemProps<V>) => {
  return {
    properties,
    actions,
    options,
    renderers,
  };
};

export default useBindSkin;
