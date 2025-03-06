import { com } from 'src/types/common';

export type BreadcrumbProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions;

export type BreadcrumbItemProps = BreadcrumbProps &
  com.utils.Property<{
    id?: string;
    href?: string;
    testId?: string;
    active?: boolean;
    childrenCount?: number;
    index?: number;
  }>;
