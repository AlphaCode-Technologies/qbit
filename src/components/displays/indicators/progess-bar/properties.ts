import { com } from 'src/types/common';

export type ProgressBarProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name'> & {
    testId?: string;
  };
