type ListProps = com.qbit.BaseProps;

type ListItemProps = com.qbit.BaseProps &
  com.utils.Property<{
    label: string;
  }>;
