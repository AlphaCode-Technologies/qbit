type ListProps = com.elem.BaseProps;

type ListItemProps = com.elem.BaseProps &
  com.utils.Property<{
    label: string;
  }>;
