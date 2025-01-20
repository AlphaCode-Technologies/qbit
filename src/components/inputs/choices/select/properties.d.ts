type SelectGroupProps = com.qbit.BaseProps &
  com.act.MouseEvents & {
    defaultValue?: string | number;
    testId?: string;
  };

type SelectOption = SelectGroupProps &
  com.utils.Property<{
    label: string;
    value: string | number;
    disabled?: boolean;
    testId?: string;
  }>;
