import { com } from 'src/types/common';
import { PaginationLabel, PaginationItem, PaginationProps } from './properties';

export const useBindSkin = (props: com.qbit.ShellProps<PaginationProps>) => {
  const { currentPage, onPageChange, totalPages, disabled } = props;

  const paginationItems: PaginationItem[] = [];

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const pushControl = (label: PaginationLabel, page: number, controlDisabled: boolean) => {
    paginationItems.push({
      type: 'control',
      label,
      page,
      disabled: disabled ? true : controlDisabled,
    });
  };

  const pushPage = (page: number) => {
    paginationItems.push({
      type: 'page',
      label: 'page',
      page,
      disabled: disabled ?? false,
    });
  };

  const pushEllipsis = (key: string) => {
    paginationItems.push({
      type: 'ellipsis',
      label: 'page',
      page: 0,
      disabled: true,
      key,
    });
  };

  pushControl('first', 1, isFirst);
  pushControl('previous', Math.max(currentPage - 1, 1), isFirst);

  if (totalPages < 5) {
    for (let i = 1; i <= totalPages; i++) pushPage(i);
  } else {
    pushPage(1);
    if (currentPage > 3) pushEllipsis('start');

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pushPage(i);

    if (currentPage < totalPages - 2) pushEllipsis('end');

    pushPage(totalPages);
  }

  pushControl('next', Math.min(currentPage + 1, totalPages), isLast);
  pushControl('last', totalPages, isLast);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange?.(page);
    }
  };

  return {
    activePage: currentPage,
    paginationItems,
    handlePageChange,
  };
};
