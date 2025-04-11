import { PaginationProps } from '@components/displays';
import { com } from 'src/types/common';

const Skin: com.qbit.Skin<PaginationProps> = (props: com.qbit.SkinProps<PaginationProps>) => {
  const { paginationItems, currentPage, onPageChange, testId, onChange, className, ...rest } = props;

  return (
    <div className={`flex items-center justify-center ${className ?? ''}`} data-testid={testId} {...rest}>
      {paginationItems?.map((item, index) => {
        if (item.type === 'page') {
          return (
            <button
              key={`page-${item.page}-${index}`}
              type="button"
              disabled={item.disabled}
              onClick={() => onPageChange(item.page)}
              className={`px-4 py-2 border border-r-0 border-gray-300 text-gray-800 ${item.page === currentPage ? 'bg-violet-700 text-white' : ''} ${item.disabled ? 'cursor-not-allowed opacity-70' : `${item.page !== currentPage ? 'hover:bg-violet-200' : ''}`}`}
            >
              {item.page}
            </button>
          );
        }

        if (item.type === 'ellipsis') {
          return (
            <span
              key={`ellipsis-${item.key}-${index}`}
              className="px-4 py-2 border border-r-0 border-gray-300 text-gray-800"
            >
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
              className={`px-4 py-2 border border-r-0 last:border first:rounded-l-lg last:rounded-r-lg border-gray-300 text-gray-700 font-bold capitalize ${item.disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-violet-200'}`}
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

export default Skin;
