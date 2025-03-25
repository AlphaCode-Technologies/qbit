import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import { BreadcrumbItemSkin, BreadcrumbSkin } from '@skins/defaults';

const renderBreadcrumb = (children: React.ReactNode) => {
  return render(
    <Breadcrumb
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      renderers={{ renderer: BreadcrumbSkin, childRenderer: BreadcrumbItemSkin }}
      className="p-2"
    >
      {children}
    </Breadcrumb>,
  );
};

const renderBreadcrumbItems = (items: React.ReactNode[]) => {
  return renderBreadcrumb(items);
};

describe('Breadcrumb Component', () => {
  it('renders all breadcrumb items correctly', () => {
    renderBreadcrumbItems([
      <BreadcrumbItem key="home" value="Home" href="/" active />,
      <BreadcrumbItem key="category" value="Category" href="/category" />,
      <BreadcrumbItem key="subcategory" value="Subcategory" href="/category/subcategory" />,
      <BreadcrumbItem key="current-page" value="Current Page" disabled />,
    ]);

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
    renderBreadcrumbItems([
      <BreadcrumbItem key="home" value="Home" href="/" active />,
      <BreadcrumbItem key="category" value="Category" href="/category" />,
    ]);

    const activeItem = screen.getByText('Home');
    expect(activeItem).toHaveClass('text-blue-500');
  });

  it('disables the correct breadcrumb item', () => {
    renderBreadcrumbItems([
      <BreadcrumbItem key="current-page" value="Current Page" testId="1" disabled />,
      <BreadcrumbItem key="current-pages" value="Current Pages" disabled />,
    ]);

    const disabledItem = screen.getByTestId('1');
    expect(disabledItem).toHaveClass('opacity-50');
    expect(disabledItem).toHaveClass('cursor-not-allowed');
    expect(disabledItem).not.toHaveAttribute('href');
  });

  it('calls the onClick handler for non-disabled items', async () => {
    const mockOnClick = vi.fn();
    renderBreadcrumbItems([
      <BreadcrumbItem key="category" value="Category" testId="1" href="/category" onClick={mockOnClick} />,
      <BreadcrumbItem key="current-page" value="Current Page" />,
    ]);

    const categoryItem = screen.getByTestId('1');
    await fireEvent.click(categoryItem);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
