type MenuProps = com.qbit.BaseProps & com.act.MouseActions;

type MenuItemProps = MenuProps &
  com.utils.Property<{
    label: string;
  }>;
