import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Badges from './Badges';
import DefaultSkin from '@skins/defaults/Badges.default.skin';
import OptionalSkin from '@skins/optional/Badges.optional.skin';
import { BatchSkin } from '@skins/defaults';

describe('Badges Component', () => {
  it('renders with default skin and correct properties', () => {
    const properties: AlphaElements.BadgesProperties = {
      id: '2',
      label: 'badge',
      count: 8,
      size: 'xl',
      renderer: DefaultSkin,
      testId: 'default-skin',
    };

    const actions = { onClose: vi.fn() };

    render(<Badges properties={properties} actions={actions} />);

    expect(screen.getByText('badge')).toBeInTheDocument();

    expect(screen.getByText('8')).toBeInTheDocument();

    expect(screen.getByTestId('default-skin')).toBeInTheDocument();
  });

  it('does not render the close button when showCloseButton is false', () => {
    const properties = {
      id: '2',
      label: 'badge',
      count: 8,
      showCloseButton: false,
      renderer: DefaultSkin,
    };

    const actions = { onClose: vi.fn() };

    render(<Badges properties={properties} actions={actions} />);

    expect(screen.queryByRole('button', { name: '×' })).toBeNull();
  });

  it('renders image correctly if imageSrc is provided', () => {
    const properties = {
      id: '2',
      label: 'badge',
      count: 8,
      imageSrc: 'https://img.freepik.com/premium-vector/flag-united-kingdom-vector-illustration_514344-299.jpg',
      renderer: DefaultSkin,
    };

    const actions = { onClose: vi.fn() };

    render(<Badges properties={properties} actions={actions} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      'https://img.freepik.com/premium-vector/flag-united-kingdom-vector-illustration_514344-299.jpg',
    );
  });

  it('does not render an image if imageSrc is not provided', () => {
    const properties = {
      id: '2',
      label: 'badge',
      count: 8,
      renderer: DefaultSkin,
    };

    const actions = { onClose: vi.fn() };

    render(<Badges properties={properties} actions={actions} />);

    expect(screen.queryByRole('img')).toBeNull();
  });

  it('should call the onClose function when the close button is clicked', () => {
    const onCloseMock = vi.fn();

    const { getByTestId } = render(
      <DefaultSkin
        properties={{
          id: 'test-id',
          disabled: false,
          size: 'md',
          count: 10,
          label: 'Test Badge',
          checked: false,
          imageSrc: '',
          testId: 'default-skin',
          renderer: BatchSkin,
        }}
        actions={{
          onClose: onCloseMock,
        }}
      />,
    );

    const closeButton = getByTestId('default-skin-close');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(onCloseMock).toHaveBeenCalledWith('test-id');
  });

  it('renders correctly with all properties', () => {
    const properties: AlphaElements.BadgesProperties = {
      id: 'badge-1',
      disabled: false,
      size: 'lg',
      count: 5,
      label: 'Test Badge',
      checked: true,
      imageSrc: 'https://example.com/image.jpg',
      testId: 'gradient-skin',
    };

    const actions = {
      onClose: vi.fn(),
    };

    render(<OptionalSkin properties={properties} actions={actions} />);

    const container = screen.getByTestId('gradient-skin');
    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle({
      width: '130px',
      height: '30px',
    });

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();

    const image = screen.getByRole('img', { name: 'Badge Icon' });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');

    const label = screen.getByText('Test Badge');
    expect(label).toBeInTheDocument();

    const count = screen.getByText('5');
    expect(count).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: '×' });
    expect(closeButton).toBeInTheDocument();
  });
});
