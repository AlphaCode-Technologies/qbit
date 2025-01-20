type ToasterActions = { onClose?: () => void };

type Position = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

type ToasterProps = {
  open: boolean;
  position: Position;
  duration?: number;
  autoClose?: boolean;
  testId?: string;
} & com.qbit.BaseProps &
  ToasterActions;
