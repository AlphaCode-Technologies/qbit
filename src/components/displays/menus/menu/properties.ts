import { com } from 'src/types/common';

export type MenuProps = com.qbit.BaseProps &
  com.act.MouseActions & {
    context?: boolean;
    reference?: React.RefObject<HTMLElement>;
    testId?: string;
  };

export type MenuItemProps = Omit<MenuProps, 'reference' | 'context'> &
  com.utils.Property<{
    label: string;
  }>;
