import { ListActions, ListProperties } from '@components/displays/lists/list/List.types';

import SkinProps = com.elem.SkinProps;
import ValidTypes = com.utils.ValidTypes;

export type ListSkinProps<V extends ValidTypes> = SkinProps<ListProperties<V>, ListActions>;
