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

  it('renders pagination buttons with correct page numbers', () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    // Check if all page numbers are rendered
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(i)).toBeInTheDocument();
    }
  });

  it('calls onPageChange with the correct page when a page button is clicked', async () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);

    // Check if the onPageChange mock is called with the correct page number
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('disables the "Previous" button on the first page', () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    const previousButton = screen.getByText('← Previous');
    expect(previousButton).toBeDisabled();
  });

  it('disables the "Next" button on the last page', () => {
    renderPagination({
      currentPage: 5,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    const nextButton = screen.getByText('Next →');
    expect(nextButton).toBeDisabled();
  });

  it('renders the correct classes for the active page', () => {
    renderPagination({
      currentPage: 3,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    const activePageButton = screen.getByText('3');
    expect(activePageButton).toHaveClass('bg-blue-800 text-white');
  });

  it('does not add the "active" class to other page buttons', () => {
    renderPagination({
      currentPage: 3,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    // Ensure that no other page buttons have the active class
    for (let i = 1; i <= 5; i++) {
      if (i !== 3) {
        const button = screen.getByText(i.toString());
        expect(button).not.toHaveClass('active');
      }
    }
  });

  it('handles the page change correctly when using next and previous buttons', async () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    // Click the "Next" button
    const nextButton = screen.getByText('Next →');
    fireEvent.click(nextButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);

    // Click the "Previous" button
    const prevButton = screen.getByText('← Previous');
    fireEvent.click(prevButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });

  // Test for checking disabled state on pagination
  it('disables all buttons when the "disabled" prop is true', () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: onPageChangeMock,
      disabled: true,
    });

    // Check if Previous, Next, and page buttons are all disabled
    const previousButton = screen.getByText('← Previous');
    const nextButton = screen.getByText('Next →');
    const pageButtons = screen.getAllByRole('button');

    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
    pageButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  // Test for checking currentPage state handling
  it('should call onPageChange with the correct currentPage when page buttons are clicked', () => {
    const currentPage = 3;
    renderPagination({
      currentPage,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    // Simulate clicking a different page
    const page4Button = screen.getByText('4');
    fireEvent.click(page4Button);

    // Ensure that onPageChange is called with the correct page
    expect(onPageChangeMock).toHaveBeenCalledWith(4);

    // Ensure the current page is reflected in the UI (active button)
    const activePageButton = screen.getByText('4');
    expect(activePageButton).toHaveClass('bg-blue-800 text-white');
  });

  it('calls onPageChange when a page button is clicked', () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    // Simulate clicking on page 3
    const page3Button = screen.getByText('3');
    fireEvent.click(page3Button);

    // Ensure the onPageChangeMock was called with page 3
    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

  it('updates the current page when current page not passed', () => {
    renderPagination({
      currentPage: 1,
      totalPages: 5,
      onPageChange: onPageChangeMock,
    });

    // Simulate clicking on page 4
    const page4Button = screen.getByText('4');
    fireEvent.click(page4Button);

    // Ensure the onPageChangeMock was called with page 4
    expect(onPageChangeMock).toHaveBeenCalledWith(4);

    // Check if the page 4 button is now active
    const activeButton = screen.getByText('4');
    expect(activeButton).toHaveClass('bg-blue-800 text-white');
  });

  it('changes the page if the page number is valid', () => {
    renderPagination({
      currentPage: 0,
      totalPages: 0,
      onPageChange: onPageChangeMock,
    });

    const nextButton = screen.getByText('Next →');
    fireEvent.click(nextButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });
});
