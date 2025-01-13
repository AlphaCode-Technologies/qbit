import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TabGroup from './TabGroup';
import Tab from './Tab';
import { TabSkin } from '@skins/defaults';

const tabData = [
  { id: '1', name: 'Tab 1', renderer: TabSkin, content: <div>Content 1</div>, onClick: vi.fn() },
  { id: '2', name: 'Tab 2', renderer: TabSkin, content: <div>Content 2</div>, onClick: vi.fn() },
  { id: '3', name: 'Tab 3', renderer: TabSkin, disabled: true, content: <div>Content 3</div> },
];

describe('Tests for Tabs elements', () => {
  it('renders all tabs correctly', () => {
    render(
      <TabGroup properties={tabData} actions={{ onClick: vi.fn() }}>
        {tabData.map((tab) => (
          <Tab key={tab.id} properties={tab} />
        ))}
      </TabGroup>,
    );

    // Check if all tabs are rendered
    tabData.forEach((tab) => {
      expect(screen.getByText(tab.name)).toBeInTheDocument();
    });
  });

  it('displays the correct content for the active tab', () => {
    render(
      <TabGroup properties={tabData} actions={{ onClick: vi.fn() }}>
        {tabData.map((tab) => (
          <Tab key={tab.id} properties={tab} />
        ))}
      </TabGroup>,
    );

    // Initially, the first tab should be active
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('changes the active tab when clicked', () => {
    render(
      <TabGroup properties={tabData} actions={{ onClick: vi.fn() }}>
        {tabData.map((tab) => (
          <Tab key={tab.id} properties={tab} />
        ))}
      </TabGroup>,
    );

    // Click the second tab
    fireEvent.click(screen.getByText('Tab 2'));

    // Check if the content changes to the second tab's content
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('does not activate a disabled tab when clicked', () => {
    render(
      <TabGroup properties={tabData} actions={{ onClick: vi.fn() }}>
        {tabData.map((tab) => (
          <Tab key={tab.id} properties={tab} />
        ))}
      </TabGroup>,
    );

    // Click the disabled tab
    fireEvent.click(screen.getByText('Tab 3'));

    // Content should remain unchanged
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });

  it('calls the onClick action when a tab is clicked', () => {
    const mockAction = vi.fn();
    const updatedTabData = tabData.map((tab) => ({ ...tab, onClick: mockAction }));

    render(
      <TabGroup properties={updatedTabData} actions={{ onClick: mockAction }}>
        {updatedTabData.map((tab) => (
          <Tab key={tab.id} properties={tab} />
        ))}
      </TabGroup>,
    );

    // Click the first tab
    fireEvent.click(screen.getByText('Tab 1'));

    // Check if the onClick action is called
    expect(mockAction).toHaveBeenCalledWith('1');
  });

  it('renders a custom renderer if provided', () => {
    render(
      <TabGroup properties={tabData} actions={{ onClick: vi.fn() }}>
        {tabData.map((tab) => (
          <Tab key={tab.id} properties={tab} />
        ))}
      </TabGroup>,
    );

    // Check if the custom renderer (TabSkin) is applied
    expect(screen.getByText('Tab 1')).toHaveClass('px-4'); // Class applied in TabSkin
  });
});
