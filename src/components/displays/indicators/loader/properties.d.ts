type LoaderProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name' | 'value' | 'disabled' | 'tabIndex'> & {
    isLoading: boolean;
    testId?: string;
  };
