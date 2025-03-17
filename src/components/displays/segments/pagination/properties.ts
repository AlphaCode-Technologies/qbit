import { com } from 'src/types/common';

export type PaginationProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    testId?: string;
  };
