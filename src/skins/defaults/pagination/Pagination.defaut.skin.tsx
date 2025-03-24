import { PaginationProps } from '@components/displays/segments/pagination/properties';
import { com } from 'src/types/common';

const PaginationSkin: com.qbit.Skin<PaginationProps> = (props: com.qbit.SkinProps<PaginationProps>) => {
  const { currentPage, totalPages, onPageChange, size, testId, disabled, ...rest } = props;

  return (
    <div
      className={`inline-flex items-center p-2 border border-gray-300 rounded-lg bg-white ${disabled ? 'cursor-not-allowed bg-gray-200' : ''} ${rest.className}`}
      data-testid={testId}
    >
      <button
        className={`px-3 py-1 text-gray-600 bg-white rounded-l-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition ${disabled ? 'cursor-not-allowed bg-gray-200' : ''}`}
        disabled={currentPage === 1 || disabled}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Previous
      </button>

      <div className={`flex items-center ${disabled ? 'cursor-not-allowed' : ''}`}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            disabled={disabled}
            className={`px-3 py-1 text-gray-600 border border-gray-300 ${
              currentPage === page ? 'bg-blue-800 text-white' : 'hover:bg-gray-100'
            } transition ${disabled ? 'cursor-not-allowed bg-gray-200' : ''}`}
            onClick={() => {
              onPageChange(page);
            }}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`px-3 py-1 text-gray-600 bg-white rounded-r-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition ${disabled ? 'cursor-not-allowed bg-gray-200' : ''}`}
        disabled={currentPage === totalPages || disabled}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next →
      </button>
    </div>
  );
};

export default PaginationSkin;
