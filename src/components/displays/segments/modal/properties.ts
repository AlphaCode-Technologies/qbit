import { com } from 'src/types/common';

export type ModalActions = {
  onClose: () => void;
};

export type ModalProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name' | 'value' | 'disabled' | 'tabIndex'> &
  ModalActions & {
    open: boolean;
    testId?: string;
  };

export type ModalItemProps = Omit<ModalProps, 'open' | 'onClose'>;
