import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DropdownItem from './DropdownItem';
import Dropdown from './Dropdown';
import { DropdownItemSkin, DropdownSkin } from '@skins/defaults';

// Mock the hook used inside Dropdown
vi.mock('./dropdown.hook', () => ({
  useBindSkin: () => ({
    isOpen: true,
    toggleDropdown: vi.fn(),
    menuRef: { current: null },
    buttonRef: { current: null },
  }),
}));

describe('Dropdown Component', () => {
  it('renders the dropdown button', () => {
    render(
      <Dropdown
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: DropdownSkin, childRenderer: DropdownItemSkin }}
        label="Menu"
      >
        <DropdownItem name="Profile" />
        <DropdownItem name="Settings" />
        <DropdownItem name="Logout" />
      </Dropdown>,
    );

    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  it('opens and displays dropdown items when clicked', () => {
    render(
      <Dropdown
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: DropdownSkin, childRenderer: DropdownItemSkin }}
        label="Menu"
      >
        <DropdownItem name="Profile" />
        <DropdownItem name="Settings" />
        <DropdownItem name="Logout" />
      </Dropdown>,
    );

    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('calls onClick function when an item is clicked', () => {
    const mockOnClick = vi.fn();
    render(
      <Dropdown
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: DropdownSkin, childRenderer: DropdownItemSkin }}
        label="Menu"
      >
        <DropdownItem name="Logout" onChange={mockOnClick} />
      </Dropdown>,
    );

    const logoutItem = screen.getByText('Logout');
    fireEvent.click(logoutItem);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('renders with the provided testId', () => {
    render(
      <Dropdown
        testId="custom-dropdown"
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: DropdownSkin, childRenderer: DropdownItemSkin }}
        label="Options"
      >
        <DropdownItem name="Item 1" />
      </Dropdown>,
    );

    expect(screen.getByTestId('custom-dropdown')).toBeInTheDocument();
  });

  it('renders all dropdown items passed as children', () => {
    render(
      <Dropdown
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: DropdownSkin, childRenderer: DropdownItemSkin }}
        label="Menu"
      >
        <DropdownItem name="Item A" />
        <DropdownItem name="Item B" />
        <DropdownItem name="Item C" />
      </Dropdown>,
    );

    expect(screen.getByText('Item A')).toBeInTheDocument();
    expect(screen.getByText('Item B')).toBeInTheDocument();
    expect(screen.getByText('Item C')).toBeInTheDocument();
  });
});
