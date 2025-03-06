import { com } from 'src/types/common';

export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

export type DrawerActions = {
  onClose: () => void;
};

export type DrawerProps = com.qbit.BaseProps &
  Omit<com.qbit.BaseProps, 'name' | 'value' | 'disabled' | 'tabIndex'> &
  DrawerActions & {
    open: boolean;
    position: DrawerPosition;
    testId?: string;
  };

export type DrawerItemProps = Omit<DrawerProps, 'open' | 'onClose' | 'position'>;
