import { com } from 'src/types/common';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type CheckboxProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions & { size?: Size };

export type CheckboxItemProps = CheckboxProps &
  com.utils.Property<{
    id?: string;
    testId?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }>;
