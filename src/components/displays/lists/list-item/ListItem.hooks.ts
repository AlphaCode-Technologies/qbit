import { ShellProps } from './ListItem.types';

const useBindSkin = <V extends object>({ properties, actions, options }: ShellProps<V>) => {
  return {
    properties,
    actions,
    options,
  };
};

export default useBindSkin;
