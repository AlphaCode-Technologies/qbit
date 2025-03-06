import { com } from 'src/types/common';

export type ListProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions;

export type ListItemProps = ListProps &
  com.utils.Property<{
    label: string;
  }>;
