type BadgeProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    testId?: string;
  };
