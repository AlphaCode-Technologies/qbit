import { ReactNode } from 'react';
import { com } from 'src/types/common';

export type BreadcrumbProps = com.qbit.BaseProps &
  com.act.MouseActions &
  com.utils.Property<{
    splitter?: ReactNode;
  }>;

export type BreadcrumbItemProps = BreadcrumbProps &
  com.utils.Property<{
    id?: string;
    href?: string;
    testId?: string;
    active?: boolean;
    childrenCount?: number;
    index?: number;
  }>;
