import { com } from 'src/types/common';

export type TableProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions;

export type TableItemProps = TableProps &
  com.utils.Property<{
    testId?: string;
    data: any;
    heading?: boolean;
  }>;
