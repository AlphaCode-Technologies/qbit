import { com } from 'src/types/common';

export type TooltipPosition = 'top' | 'right' | 'left' | 'bottom';

export type TooltipProps = com.utils.Property<{
  position: TooltipPosition;
  label: string;
  delay?: number;
  duration?: number;
  testId?: string;
}> &
  com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions;
