import { ReactNode } from 'react';
import { com } from 'src/types/common';

export type EmptyStateProps = com.qbit.BaseProps & {
  icon?: ReactNode;
  title?: string;
  message?: string;
  actions?: ReactNode;
  testId?: string;
};
