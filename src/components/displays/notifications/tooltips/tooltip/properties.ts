import { com } from 'src/types/common';
import { ReactNode } from 'react';

export type TooltipPosition = 'top' | 'right' | 'left' | 'bottom';

export type TooltipProps = com.utils.Property<{
  position: TooltipPosition;
  label: ReactNode;
  delay?: number;
  duration?: number;
  testId?: string;
}> &
  com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions;
