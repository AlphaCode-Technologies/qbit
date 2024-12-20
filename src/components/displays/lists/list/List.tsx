import { Shell } from '@components/containers';
import { Actions, Properties, ShellProps } from './List.types';
import useBindSkin from './List.hooks';

const List = <V extends object>({ children, ...rest }: ShellProps<V>) => {
  const { properties, actions, options } = useBindSkin(rest);
  return (
    <Shell<Properties<V>, Actions> properties={properties} actions={actions} options={options}>
      {children}
    </Shell>
  );
};

export default List;
