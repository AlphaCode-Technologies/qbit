import { com } from 'src/types/common';

export type PaginationItemType = 'page' | 'ellipsis' | 'control';

export type PaginationLabel = 'first' | 'previous' | 'next' | 'last' | 'page';

export type PaginationItem = {
  type: PaginationItemType;
  label: PaginationLabel;
  page: number;
  disabled: boolean;
  key?: string;
};

export type PaginationProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    testId?: string;
    paginationItems?: PaginationItem[];
  };
