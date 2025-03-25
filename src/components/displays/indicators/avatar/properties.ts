import { com } from 'src/types/common';

export type AvatarProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name'> &
  com.act.MouseActions & {
    testId?: string;
    width?: number;
    height?: number;
  };
