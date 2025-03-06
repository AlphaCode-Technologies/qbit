import { com } from 'src/types/common';

export type CardProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name' | 'value' | 'disabled' | 'tabIndex'> & {
    testId?: string;
  };

export type CardItemProps = Omit<CardProps, 'open' | 'onClose'>;
