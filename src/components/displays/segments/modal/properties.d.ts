type ModalActions = {
  onClose: () => void;
};

type ModalProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name' | 'value' | 'disabled' | 'tabIndex'> &
  ModalActions & {
    open: boolean;
    testId?: string;
  };

type ModalItemProps = Omit<ModalProps, 'open' | 'onClose'>;
