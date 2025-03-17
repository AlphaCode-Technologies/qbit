import { BaseComponent } from '@components/containers';
import { PaginationProps } from './properties';
import { com } from 'src/types/common';
import { useState } from 'react';

/**
 * Pagination component.
 * @param props
 * @returns JSX.Element
 */

const Pagination: com.qbit.Shell<PaginationProps> = (props: com.qbit.ShellProps<PaginationProps>) => {
  const { renderers, onPageChange, totalPages, testId, size, ...rest } = props;
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <BaseComponent
      {...rest}
      renderers={renderers}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      size={size}
      testId={testId}
      // renderPageNumbers={renderPageNumbers}
    />
  );
};

export default Pagination;
