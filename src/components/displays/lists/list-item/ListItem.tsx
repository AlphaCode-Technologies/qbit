import { Shell } from '@components/containers';

import { Actions, Properties, ShellProps } from './ListItem.types';
import useBindSkin from './ListItem.hooks';

const ListItem = <V extends object>({ children, ...rest }: ShellProps<V>) => {
  const { properties, actions, options } = useBindSkin(rest);
  return (
    <Shell<Properties<V>, Actions> properties={properties} actions={actions} options={options}>
      {children}
    </Shell>
  );
};

export default ListItem;
