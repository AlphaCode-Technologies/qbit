import { com } from 'src/types/common';
import { ListProps } from '@components/displays/lists';

export type CheckboxProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions & { size?: any };

export type CheckboxItemProps = ListProps &
  com.utils.Property<{
    testId?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }>;
