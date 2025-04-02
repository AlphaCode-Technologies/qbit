import { com } from 'src/types/common';

export type CheckboxProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions & { size?: any };

export type CheckboxItemProps = CheckboxProps &
  com.utils.Property<{
    id?: string;
    testId?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }>;
