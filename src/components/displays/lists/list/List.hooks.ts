import { useCallback, useState } from 'react';
import { ListProps } from './List.types';

type ValidTypes = com.utils.ValidTypes;

const useBindSkin = <V extends ValidTypes>({ properties, actions, options, renderers, children }: ListProps<V>) => {
  const { selected: defaultSelected } = properties;
  const { onClick: onSuperOnClick } = actions ?? {};
  const [selectedValue, setSelectedValue] = useState<V | undefined>(defaultSelected);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      const ec = { ...e };
      setSelectedValue(() => {
        onSuperOnClick?.(ec);
        return ec.currentTarget as any;
      });
    },

    [onSuperOnClick],
  );

  return {
    properties: {
      ...properties,
      selectedValue,
    },
    actions: { ...actions, onClick },
    options,
    renderers,
    children,
  };
};

export default useBindSkin;
