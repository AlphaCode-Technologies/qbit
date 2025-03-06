import { com } from 'src/types/common';

export type ButtonProps = com.qbit.BaseProps &
  com.act.MouseActions & {
    testId?: string;
  };
