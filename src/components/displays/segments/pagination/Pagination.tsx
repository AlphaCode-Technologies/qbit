import { BaseComponent } from '@components/containers';
import { PaginationProps } from './properties';
import { com } from 'src/types/common';
import { useBindSkin } from './Pagination.hook';

/**
 * Pagination component.
 * @param props
 * @returns JSX.Element
 */
const Pagination: com.qbit.Shell<PaginationProps> = (props: com.qbit.ShellProps<PaginationProps>) => {
  const { renderers, onPageChange, totalPages, currentPage, ...rest } = props;
  const { activePage, handlePageChange, paginationItems } = useBindSkin(props);

  return (
    <BaseComponent
      {...rest}
      renderers={renderers}
      currentPage={activePage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      paginationItems={paginationItems}
    />
  );
};

export default Pagination;
