import { Shell } from '@components/containers';
import useBindSkin from './List.hooks';

import { ListActions, ListProperties, ListProps } from './List.types';

type ValidTypes = com.utils.ValidTypes;

const List = <V extends ValidTypes>({ children, ...rest }: ListProps<V>) => {
  const { properties, actions, renderers, options } = useBindSkin(rest);
  return (
    <Shell<ListProperties<V>, ListActions>
      properties={properties}
      actions={actions}
      options={options}
      renderers={renderers}
    >
      {children}
    </Shell>
  );
};

export default List;
