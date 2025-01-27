import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Tab from './Tab';
import TabItem from './TabItem';
import { TabItemSkin, TabSkin } from '@skins/defaults';

const renderTabComponent = (activeTab: string, onClick = vi.fn()) => {
  return render(
    <Tab
      onClick={onClick}
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      renderers={{ renderer: TabSkin, childRenderer: TabItemSkin }}
    >
      <TabItem active={activeTab === 'tab1'} name="tab1" content={<div>Content for Tab 1</div>} />
      <TabItem active={activeTab === 'tab2'} name="tab2" content={<div>Content for Tab 2</div>} />
    </Tab>,
  );
};

describe('Tab Component', () => {
  it('renders the tabs and their respective content', () => {
    renderTabComponent('tab2');

    // Check if all tabs are rendered
    expect(screen.getByText('tab1')).toBeInTheDocument();
    expect(screen.getByText('tab2')).toBeInTheDocument();

    // Check if only active tab's content is displayed
    expect(screen.queryByText('Content for Tab 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();
  });

  it('displays content only for the active tab', () => {
    renderTabComponent('tab1');

    // Check that the active tab's content is visible
    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();

    // Ensure the inactive tab's content is not rendered
    expect(screen.queryByText('Content for Tab 2')).not.toBeInTheDocument();
  });

  it('calls the onClick handler when a tab is clicked', () => {
    const mockOnClick = vi.fn();

    renderTabComponent('tab1', mockOnClick);

    // Click Tab 2
    fireEvent.click(screen.getByText('tab2'));

    // Check if the onClick handler was called with the correct value
    expect(mockOnClick).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'tab2' } }));
  });

  it('changes the active tab and updates the displayed content', () => {
    render(
      <Tab
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: TabSkin, childRenderer: TabItemSkin }}
      >
        <TabItem active={true} name="tab1" content={<div>Content for Tab 1</div>} />
        <TabItem active={false} name="tab2" content={<div>Content for Tab 2</div>} />
      </Tab>,
    );

    // Initially, Tab 1's content is displayed
    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();
    expect(screen.queryByText('Content for Tab 2')).not.toBeInTheDocument();

    // Click Tab 2
    fireEvent.click(screen.getByText('tab2'));

    // Now, Tab 2's content should be displayed
    expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();
    expect(screen.queryByText('Content for Tab 1')).not.toBeInTheDocument();
  });
});
