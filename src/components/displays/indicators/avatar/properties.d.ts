type AvatarProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name'> &
  com.act.MouseActions & {
    testId?: string;
  };
