type RadioGroupProps = com.qbit.BaseProps &
  com.act.MouseEvents & {
    horizontal?: boolean;
    defaultValue?: string;
  };

type OptionProps = RadioGroupProps &
  com.utils.Property<{
    label: string;
    value: string | number;
    name: string;
    testId?: string;
  }>;
