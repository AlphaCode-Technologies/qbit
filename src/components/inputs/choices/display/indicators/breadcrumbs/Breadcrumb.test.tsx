import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BreadcrumbGroup from './BreadcrumbGroup';
import Breadcrumb from './Breadcrumb';
import { BreadcrumbsSkin } from '@skins/defaults';

describe('BreadcrumbGroup', () => {
  afterEach(() => {
    cleanup();
  });

  const renderBreadcrumbGroup = (breadcrumbs: AlphaElements.BreadcrumbProps[]) => {
    render(
      <BreadcrumbGroup>
        {breadcrumbs.map(({ key, properties, actions }) => (
          <Breadcrumb key={key} properties={properties} actions={actions} />
        ))}
      </BreadcrumbGroup>,
    );
  };

  it('renders all breadcrumbs correctly', () => {
    const breadcrumbs = [
      {
        key: 'home',
        properties: { name: 'Home', testId: 'breadcrumb-home', Renderer: BreadcrumbsSkin },
        actions: { onClick: vi.fn() },
      },
      {
        key: 'products',
        properties: { name: 'Products', testId: 'breadcrumb-products', Renderer: BreadcrumbsSkin },
        actions: { onClick: vi.fn() },
      },
      {
        key: 'details',
        properties: { name: 'Details', testId: 'breadcrumb-details', Renderer: BreadcrumbsSkin },
        actions: { onClick: vi.fn() },
      },
    ];

    renderBreadcrumbGroup(breadcrumbs);

    // Assert that all breadcrumbs are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  it('displays the separator between breadcrumbs', () => {
    const breadcrumbs = [
      {
        key: 'home',
        properties: { name: 'Home', testId: 'breadcrumb-home', Renderer: BreadcrumbsSkin },
        actions: { onClick: vi.fn() },
      },
      {
        key: 'products',
        properties: { name: 'Products', testId: 'breadcrumb-products', Renderer: BreadcrumbsSkin },
        actions: { onClick: vi.fn() },
      },
    ];

    renderBreadcrumbGroup(breadcrumbs);

    // Assert that the separator is displayed
    const separator = screen.getAllByText('/');
    expect(separator).toHaveLength(1);
  });
});
