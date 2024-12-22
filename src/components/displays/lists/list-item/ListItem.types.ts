import DefaultProperties = AlphaElements.DefaultProperties;
import SubShellProps = com.elem.SubShellProps;
import Properties = com.elem.Properties;
import Actions = com.elem.Actions;

import MouseEvents = com.evt.MouseEvents;
import UiEvents = com.evt.UiEvents;

import ValidTypes = com.utils.ValidTypes;

type ListItemProperties<V extends ValidTypes> = Properties<DefaultProperties<V>>;
type ListItemActions = Actions<MouseEvents & UiEvents>;

type ListItemProps<V extends ValidTypes> = SubShellProps<Properties<ListItemProperties<V>>, ListItemActions>;

export type { ListItemActions, ListItemProperties, ListItemProps };
