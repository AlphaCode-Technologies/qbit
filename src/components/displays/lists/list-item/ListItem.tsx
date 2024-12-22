import { SubShell } from '@components/containers';
import useBindSkin from './ListItem.hooks';

import { ListItemActions, ListItemProperties, ListItemProps } from './ListItem.types';

import ValidTypes = com.utils.ValidTypes;

const ListItem = <V extends ValidTypes>({ children, ...rest }: ListItemProps<V>) => {
  const { properties, actions, renderers, options } = useBindSkin(rest);
  return (
    <SubShell<ListItemProperties<V>, ListItemActions>
      properties={properties}
      actions={actions}
      renderers={renderers}
      options={options}
    >
      {children}
    </SubShell>
  );
};

export default ListItem;
