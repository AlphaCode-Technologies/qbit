type BreadcrumbProps = com.qbit.BaseProps & com.act.UiActions & com.act.MouseActions;

type BreadcrumbItemProps = BreadcrumbProps &
  com.utils.Property<{
    id?: string;
    href?: string;
    testId?: string;
    active?: boolean;
    childrenCount?: number;
    index?: number;
  }>;
