type ProgressBarProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name'> & {
    testId?: string;
  };
