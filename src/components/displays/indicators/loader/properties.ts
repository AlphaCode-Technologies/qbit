import { com } from 'src/types/common';

export type LoaderProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name' | 'value' | 'disabled' | 'tabIndex'> & {
    isLoading: boolean;
    width?: number;
    height?: number;
    testId?: string;
  };
