import { com } from 'src/types/common';

export type NumericRangeProps = { minValue?: number; maxValue?: number; testId?: string } & com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions;
