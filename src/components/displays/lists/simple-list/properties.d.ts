type ListProps<V extends ValidTypes = any> = BaseProps<V>;

type ListItemProps<V extends ValidTypes = any> = BaseProps<V> &
  Property<{
    label?: string;
  }>;
