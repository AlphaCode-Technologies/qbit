type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

type DrawerActions = {
  onClose: () => void;
};

type DrawerProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name' | 'value' | 'disabled' | 'tabIndex'> &
  DrawerActions & {
    open: boolean;
    position: DrawerPosition;
    testId?: string;
  };

type DrawerItemProps = Omit<DrawerProps, 'open' | 'onClose' | 'position'>;
