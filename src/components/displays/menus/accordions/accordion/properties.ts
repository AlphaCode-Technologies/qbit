import { ReactNode } from 'react';

export type AccordionProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions;

export type AccordionItemProps = AccordionProps &
  com.utils.Property<{
    isOpen?: boolean;
    label: string;
    onChange?: (isOpen: boolean) => void;
    content?: ReactNode;
  }>;
