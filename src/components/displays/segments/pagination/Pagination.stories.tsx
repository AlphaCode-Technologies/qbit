// Pagination.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Pagination from './Pagination';
import { PaginationProps } from './properties';
import { PaginationSkin } from '@skins/defaults/pagination';

export default {
  title: 'Qbit design/Displays/Segments/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    onPageChange: { action: 'page changed' },
  },
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => <Pagination renderers={{ renderer: PaginationSkin }} {...args} />;

const PaginationSkinAlt = (props: PaginationProps) => {
  const { currentPage, totalPages, onPageChange, disabled, testId, ...rest } = props;

  return (
    <div
      className={`inline-flex items-center p-2 border border-gray-500 rounded-lg bg-gray-800 ${disabled ? 'cursor-not-allowed bg-gray-700' : ''} ${rest.className}`}
      data-testid={testId}
    >
      <button
        className={`px-4 py-2 text-gray-100 bg-gray-600 rounded-l-lg border border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 transition ${disabled ? 'cursor-not-allowed bg-gray-700' : ''}`}
        disabled={currentPage === 1 || disabled}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Prev
      </button>

      <div className={`flex items-center ${disabled ? 'cursor-not-allowed' : ''}`}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            disabled={disabled}
            className={`px-4 py-2 text-gray-100 bg-gray-600 border border-gray-500 ${
              currentPage === page ? 'bg-teal-500 text-white' : 'hover:bg-gray-500'
            } transition ${disabled ? 'cursor-not-allowed bg-gray-700' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`px-4 py-2 text-gray-100 bg-gray-600 rounded-r-lg border border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 transition ${disabled ? 'cursor-not-allowed bg-gray-700' : ''}`}
        disabled={currentPage === totalPages || disabled}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next →
      </button>
    </div>
  );
};

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

export const PaginationWithDisabledState = () => (
  <div>
    <h3>First Page (Previous Disabled)</h3>
    <Pagination
      renderers={{ renderer: PaginationSkin }}
      currentPage={1}
      totalPages={5}
      disabled={false}
      onPageChange={(page: any) => console.log(`Page changed to: ${page}`)}
    />

    <h3>Last Page (Next Disabled)</h3>
    <Pagination
      renderers={{ renderer: PaginationSkin }}
      currentPage={5}
      totalPages={5}
      disabled={false}
      onPageChange={(page: any) => console.log(`Page changed to: ${page}`)}
    />
  </div>
);

export const PaginationWithCustomRenderer = () => (
  <Pagination
    currentPage={1}
    totalPages={5}
    renderers={{ renderer: PaginationSkinAlt }}
    onPageChange={(page: any) => console.log(`Page changed to: ${page}`)}
  />
);

export const PaginationWithOnePage = () => (
  <Pagination
    renderers={{ renderer: PaginationSkin }}
    currentPage={1}
    totalPages={1}
    onPageChange={(page: any) => console.log(`Page changed to: ${page}`)}
  />
);
