type CardProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name' | 'value' | 'disabled' | 'tabIndex'> & {
    testId?: string;
  };

type CardItemProps = Omit<CardProps, 'open' | 'onClose'>;
