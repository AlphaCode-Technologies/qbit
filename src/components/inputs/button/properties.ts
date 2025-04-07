import { com } from 'src/types/common';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonProps = com.qbit.BaseProps &
  com.act.MouseActions & {
    testId?: string;
    type?: ButtonType;
  };
