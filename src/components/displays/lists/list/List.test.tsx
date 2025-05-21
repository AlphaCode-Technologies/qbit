import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import List from './List';
import ListItem from './ListItem';
import { ListItemSkin, ListSkin } from '@skins/defaults';

describe('List Component', () => {
  it('renders list items correctly', () => {
    render(
      <List
        renderers={{ renderer: ListSkin, childRenderer: ListItemSkin }}
        keyExtractor={(value: string, index: number) => `${value}-${index}`}
      >
        <ListItem label="Item 1" />
        <ListItem label="Item 2" />
        <ListItem label="Item 3" />
      </List>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders the list using custom renderer and childRenderer', () => {
    render(
      <List
        renderers={{ renderer: ListSkin, childRenderer: ListItemSkin }}
        keyExtractor={(value: string, index: number) => `${value}-${index}`}
      >
        <ListItem label="Styled Item 1" />
      </List>,
    );

    const item = screen.getByText('Styled Item 1');
    expect(item.tagName).toBe('LI');
    expect(item).toBeInTheDocument();
  });
});
