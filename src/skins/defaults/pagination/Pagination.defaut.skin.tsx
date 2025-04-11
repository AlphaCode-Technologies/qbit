import { PaginationProps } from '@components/displays/segments/pagination/properties';
import { com } from 'src/types/common';

const PaginationSkin: com.qbit.Skin<PaginationProps> = (props) => {
  const { currentPage, onPageChange, testId, paginationItems, onChange, totalPages, ...rest } = props;

  return (
    <div className="flex items-center justify-center gap-2" data-testid={testId} {...rest}>
      {paginationItems?.map((item, index) => {
        if (item.type === 'page') {
          return (
            <button
              key={`page-${item.page}-${index}`}
              type="button"
              disabled={item.disabled}
              onClick={() => onPageChange(item.page)}
              className={`px-3 py-1 border border-gray-300 text-gray-600 ${item.page === currentPage ? 'bg-gray-600 text-white' : ''} ${item.disabled ? 'cursor-not-allowed opacity-70' : ''}`}
            >
              {item.page}
            </button>
          );
        }

        if (item.type === 'ellipsis') {
          return (
            <span key={`ellipsis-${item.key}-${index}`} className="px-3 py-1 text-gray-500">
              ...
            </span>
          );
        }

        if (item.type === 'control') {
          return (
            <button
              key={`control-${item.label}-${index}`}
              type="button"
              disabled={item.disabled}
              onClick={() => onPageChange(item.page)}
              className={`px-3 py-1 border border-gray-300 text-gray-600 capitalize ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              {item.label}
            </button>
          );
        }

        return null;
      })}
    </div>
  );
};

export default PaginationSkin;
