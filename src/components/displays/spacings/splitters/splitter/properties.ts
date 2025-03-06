import { com } from 'src/types/common';

export type SplitterProps = com.utils.Property<{
  width: string;
  height: string;
  resizable?: boolean;
  horizontal?: boolean;
  testId?: string;
}> &
  com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions;
