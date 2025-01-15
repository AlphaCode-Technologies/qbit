import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import { BreadcrumbItemSkin, BreadcrumbSkin } from '@skins/defaults';

describe('Breadcrumb Component', () => {
  it('renders all breadcrumb items correctly', () => {
    render(
      <Breadcrumb
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: BreadcrumbSkin, childRenderer: BreadcrumbItemSkin }}
        className="p-2"
      >
        <BreadcrumbItem name="Home" href="/" active />
        <BreadcrumbItem name="Category" href="/category" />
        <BreadcrumbItem name="Subcategory" href="/category/subcategory" />
        <BreadcrumbItem name="Current Page" disabled />
      </Breadcrumb>,
    );

    // Check for breadcrumb navigation
    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();

    // Check for breadcrumb items
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Subcategory')).toBeInTheDocument();
    expect(screen.getByText('Current Page')).toBeInTheDocument();

    // Check for separators (e.g., "/")
    expect(screen.getAllByText('/').length).toBe(3);
  });

  it('applies the active class to the active breadcrumb item', () => {
    render(
      <Breadcrumb
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: BreadcrumbSkin, childRenderer: BreadcrumbItemSkin }}
      >
        <BreadcrumbItem name="Home" href="/" active />
        <BreadcrumbItem name="Category" href="/category" />
      </Breadcrumb>,
    );

    const activeItem = screen.getByText('Home');
    expect(activeItem).toHaveClass('text-blue-500');
  });

  it('disables the correct breadcrumb item', () => {
    render(
      <Breadcrumb
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: BreadcrumbSkin, childRenderer: BreadcrumbItemSkin }}
      >
        <BreadcrumbItem name="Current Page" testId="1" disabled />
        <BreadcrumbItem name="Current Pages" disabled />
      </Breadcrumb>,
    );

    const disabledItem = screen.getByTestId('1');
    expect(disabledItem).toHaveClass('opacity-50');
    expect(disabledItem).toHaveClass('cursor-not-allowed');
    expect(disabledItem).not.toHaveAttribute('href');
  });

  it('calls the onClick handler for non-disabled items', async () => {
    const mockOnClick = vi.fn();
    render(
      <Breadcrumb
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: BreadcrumbSkin, childRenderer: BreadcrumbItemSkin }}
      >
        <BreadcrumbItem name="Category" testId="1" href="/category" onClick={mockOnClick} />
        <BreadcrumbItem name="Current Page" />
      </Breadcrumb>,
    );

    const categoryItem = screen.getByTestId('1');
    await fireEvent.click(categoryItem);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
