type ListProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions;

type ListItemProps = ListProps &
  com.utils.Property<{
    label: string;
  }>;
