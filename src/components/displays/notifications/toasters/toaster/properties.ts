import { com } from 'src/types/common';

export type ToasterActions = { onClose?: () => void };

export type Position = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export type ToasterProps = {
  open: boolean;
  position: Position;
  duration?: number;
  autoClose?: boolean;
  testId?: string;
} & com.qbit.BaseProps &
  ToasterActions;
