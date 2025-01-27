type TabProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    onClick?: (e: React.MouseEvent<HTMLDivElement> & { target: { value?: string } }) => void;
  };

type TabItemProps = TabProps &
  com.utils.Property<{
    active: boolean;
    content?: ReactNode;
  }>;
