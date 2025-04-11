import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Pagination from './Pagination';
import { PaginationProps } from './properties';
import { PaginationSkin } from '@skins/defaults/pagination';

describe('Pagination component', () => {
  const onPageChangeMock = vi.fn();

  const renderPagination = (props: PaginationProps) => {
    render(<Pagination renderers={{ renderer: PaginationSkin }} {...props} />);
  };

  it('calls onPageChange with the correct page when a page button is clicked', () => {
    renderPagination({ currentPage: 1, totalPages: 5, onPageChange: onPageChangeMock });

    fireEvent.click(screen.getByText('2'));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('disables the "previous" button on the first page', () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: onPageChangeMock,
      paginationItems: [{ type: 'control', label: 'previous', page: 0, disabled: true }],
    });

    const prevBtn = screen.getByText('previous');
    expect(prevBtn).toBeDisabled();
  });

  it('disables the "next" button on the last page', () => {
    renderPagination({
      currentPage: 5,
      totalPages: 5,
      onPageChange: onPageChangeMock,
      paginationItems: [{ type: 'control', label: 'next', page: 6, disabled: true }],
    });

    const nextBtn = screen.getByText('next');
    expect(nextBtn).toBeDisabled();
  });

  it('renders correct styles for active page', () => {
    renderPagination({
      currentPage: 3,
      totalPages: 5,
      onPageChange: onPageChangeMock,
      paginationItems: Array.from({ length: 5 }, (_, i) => ({
        type: 'page',
        label: 'page',
        page: i + 1,
        disabled: false,
      })),
    });

    const activeBtn = screen.getByText('3');
    expect(activeBtn).toHaveClass('bg-gray-600 text-white');
  });

  it('does not apply active class to non-active buttons', () => {
    renderPagination({
      currentPage: 3,
      totalPages: 5,
      onPageChange: onPageChangeMock,
      paginationItems: Array.from({ length: 5 }, (_, i) => ({
        type: 'page',
        label: 'page',
        page: i + 1,
        disabled: false,
      })),
    });

    for (let i = 1; i <= 5; i++) {
      const btn = screen.getByText(i.toString());
      if (i !== 3) {
        expect(btn).not.toHaveClass('bg-gray-600 text-white');
      }
    }
  });

  it('calls onPageChange when a page number is clicked', () => {
    renderPagination({
      currentPage: 2,
      totalPages: 5,
      onPageChange: onPageChangeMock,
      paginationItems: [{ type: 'page', label: 'page', page: 3, disabled: false }],
    });

    fireEvent.click(screen.getByText('3'));
    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

  it('disables all buttons when disabled prop is true', () => {
    renderPagination({
      currentPage: 2,
      totalPages: 5,
      onPageChange: onPageChangeMock,
      disabled: true,
      paginationItems: [
        { type: 'page', label: 'page', page: 1, disabled: true },
        { type: 'control', label: 'previous', page: 1, disabled: true },
        { type: 'control', label: 'next', page: 3, disabled: true },
      ],
    });

    screen.getAllByRole('button').forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });
});
