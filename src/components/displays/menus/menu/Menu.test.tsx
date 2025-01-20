import { render, screen, cleanup } from '@testing-library/react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { MenuItemSkin, MenuSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<MenuProps> = {
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: MenuSkin, childRenderer: MenuItemSkin },
};

const renderMenu = (props: com.qbit.ShellProps<MenuProps>) => {
  return render(<Menu {...props}>{props.children}</Menu>);
};

describe('Menu Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the Menu with top-level items', () => {
    renderMenu({
      ...DEFAULT_PROPERTIES,
      children: [<MenuItem label="level-1 item 1" key="1" />, <MenuItem label="level-1 item 2" key="2" />],
    });
    expect(screen.getByText('level-1 item 1')).toBeInTheDocument();
    expect(screen.getByText('level-1 item 2')).toBeInTheDocument();
  });

  it('should render nested Menu items', () => {
    renderMenu({
      ...DEFAULT_PROPERTIES,
      children: [
        <MenuItem label="level-1 item 1" key="1">
          <Menu {...DEFAULT_PROPERTIES}>
            <MenuItem label="level-2 item 1" key="1-1" />
            <MenuItem label="level-2 item 2" key="1-2" />
          </Menu>
        </MenuItem>,
      ],
    });

    expect(screen.getByText('level-1 item 1')).toBeInTheDocument();
    expect(screen.getByText('level-2 item 1')).toBeInTheDocument();
    expect(screen.getByText('level-2 item 2')).toBeInTheDocument();
  });
});
