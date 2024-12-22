import DefaultProperties = AlphaElements.DefaultProperties;
import ShellProps = com.elem.ShellProps;
import Properties = com.elem.Properties;
import Actions = com.elem.Actions;

import MouseEvents = com.evt.MouseEvents;
import UiEvents = com.evt.UiEvents;

import ValidTypes = com.utils.ValidTypes;

/**
 * Properties associated with the component.
 */
type ListProperties<V extends ValidTypes> = Properties<
  DefaultProperties<V> & {
    selected?: V;
  }
>;

/**
 * Actions associated with the component.
 */
type ListActions = Actions<MouseEvents & UiEvents>;

/**
 * List component props.
 */
type ListProps<V extends ValidTypes> = ShellProps<Properties<ListProperties<V>>, ListActions>;

/** Exporting for use */
export type { ListActions, ListProperties, ListProps };
