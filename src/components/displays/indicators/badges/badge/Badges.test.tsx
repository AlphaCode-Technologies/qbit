import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Badge from './Badges';
import BadgeSkin from '@skins/defaults/badges/Badges.skin.default';

// Helper function to render Badge with common props
const renderBadge = (children: any, size = 'xl' as any, testId = '1', disabled = false) => {
  return render(
    <Badge renderers={{ renderer: BadgeSkin }} size={size} testId={testId} disabled={disabled}>
      {children}
    </Badge>,
  );
};

describe('Badge Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Badge component', () => {
    renderBadge(
      <text x="45" y="18" fill="#000" fontSize="10" fontWeight="500">
        Sample Badge
      </text>,
      'xl',
      '1',
    );

    // Check if the badge container is rendered
    const badge = screen.getByTestId('1');
    expect(badge).toBeInTheDocument();
  });

  it('applies size correctly', () => {
    renderBadge(
      <text x="45" y="18" fill="#000" fontSize="10" fontWeight="500">
        Medium Badge
      </text>,
      'md',
      'badge-md',
    );

    const badgeSvg = screen.getByTestId('badge-md');
    expect(badgeSvg).toHaveAttribute('width', '100');
    expect(badgeSvg).toHaveAttribute('height', '28');
  });

  it('renders children elements correctly', () => {
    renderBadge(
      <>
        <circle cx="28" cy="14" r="8" stroke="#D0D5DD" fill="white" data-testid="badge-circle" />
        <foreignObject x="20" y="7" width="16" height="16">
          <img
            src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
            alt="Badge Icon"
            style={{ borderRadius: '50%', width: '100%', height: '100%' }}
          />
        </foreignObject>
      </>,
      'lg',
      'badge-lg',
    );

    // Check for the circle
    const circle = screen.getByTestId('badge-circle');
    expect(circle).toBeInTheDocument();

    // Check for the image
    const image = screen.getByAltText(/badge icon/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg');
  });

  it('applies disabled state', () => {
    renderBadge(
      <text x="45" y="18" fill="#000" fontSize="10" fontWeight="500">
        Disabled Badge
      </text>,
      'sm',
      'badge-disabled',
      true,
    );

    const disabledContainer = screen.getByTestId('badge-disabled-container');
    expect(disabledContainer).toHaveClass('opacity-50');
    expect(disabledContainer).toHaveClass('cursor-not-allowed');
    expect(disabledContainer).toHaveClass('pointer-events-none');
  });
});
