import { useState } from 'react';
import { com } from 'src/types/common';
import { PaginationProps } from './properties';

export const useBindSkin = (props: com.qbit.ShellProps<PaginationProps>) => {
  const { currentPage, onPageChange, totalPages } = props;
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setActivePage(page);
    onPageChange?.(page);
  };

  return { activePage, handlePageChange };
};
