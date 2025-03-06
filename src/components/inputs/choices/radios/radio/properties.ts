import { com } from 'src/types/common';

export type RadioGroupProps = com.qbit.BaseProps &
  com.act.UiActions & {
    horizontal?: boolean;
    defaultValue?: string;
  };

export type OptionProps = RadioGroupProps &
  com.utils.Property<{
    label: string;
    value: string | number;
    name: string;
    testId?: string;
  }>;
