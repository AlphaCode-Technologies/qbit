export type Properties<V> = AlphaElements.DefaultProperties<V> & {
  selected?: V;
};

export type Actions = com.evt.MouseEvents & com.evt.UiEvents;

export type ShellProps<V> = com.elem.ShellProps<Properties<V>, Actions>;
