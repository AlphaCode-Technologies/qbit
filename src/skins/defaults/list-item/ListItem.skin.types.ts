import { ListItemProperties, ListItemActions } from '@components/displays/lists/list-item/ListItem.types';

import SkinProps = com.elem.SkinProps;
import ValidTypes = com.utils.ValidTypes;

export type LitItemSkinProps<V extends ValidTypes> = SkinProps<ListItemProperties<V>, ListItemActions>;
