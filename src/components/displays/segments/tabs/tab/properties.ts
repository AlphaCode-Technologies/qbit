import { ReactNode } from 'react';

export type TabProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    onClick?: (e: React.MouseEvent<HTMLDivElement> & { target: { value?: string } }) => void;
  };

export type TabItemProps = TabProps &
  com.utils.Property<{
    active: boolean;
    content?: ReactNode;
  }>;
