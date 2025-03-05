export type CheckboxProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions;

export type CheckboxItemProps = ListProps &
  com.utils.Property<{
    testId?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }>;
