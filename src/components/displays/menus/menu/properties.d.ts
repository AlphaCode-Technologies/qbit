type MenuProps = com.qbit.BaseProps &
  com.act.MouseActions & {
    context?: boolean;
    reference?: React.RefObject<HTMLElement>;
    testId?: string;
  };

type MenuItemProps = Omit<MenuProps, 'reference' | 'context'> &
  com.utils.Property<{
    label: string;
  }>;
