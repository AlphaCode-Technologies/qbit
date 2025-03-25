import { com } from 'src/types/common';

export type SelectGroupProps = com.qbit.BaseProps &
  com.act.UiActions & {
    defaultValue?: string | number;
    testId?: string;
  };

export type SelectOptionProps = SelectGroupProps &
  com.utils.Property<{
    label: string;
    value: string | number;
    disabled?: boolean;
    testId?: string;
  }>;
