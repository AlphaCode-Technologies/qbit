import { useCallback, useState } from 'react';
import { ShellProps } from './List.types';

const useBindSkin = <V extends object>({ properties, actions, options, children }: ShellProps<V>) => {
  const { selectedValue: defaultSelectedValue } = properties;
  const { onClick: onSuperOnClick } = actions ?? {};
  const [selectedValue, setSelectedValue] = useState<V | undefined>(defaultSelectedValue);

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
    children,
  };
};

export default useBindSkin;
