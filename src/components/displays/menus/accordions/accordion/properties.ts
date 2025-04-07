import { ReactNode } from 'react';
import { com } from 'src/types/common';

export type AccordionProps = com.qbit.BaseProps &
  com.act.MouseActions &
  com.utils.Property<{
    alwaysShow?: boolean;
    testId?: string;
  }>;

export type AccordionItemProps = AccordionProps &
  com.utils.Property<{
    isOpen?: boolean;
    label: ReactNode;
  }>;
