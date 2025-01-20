import { render, screen, fireEvent, cleanup } from '@testing-library/react';
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

describe('Menu Component Test', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the Menu with menu-items', () => {
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

  it('should open the context menu when right-clicked on the reference element', () => {
    const referenceElement = document.createElement('div');
    document.body.appendChild(referenceElement);

    const testId = 'context-menu';

    renderMenu({
      ...DEFAULT_PROPERTIES,
      context: true,
      reference: { current: referenceElement },
      testId,
      children: [<MenuItem label="Context Item 1" key="1" />],
    });

    fireEvent.contextMenu(referenceElement);

    const menu = screen.getByTestId(testId);
    expect(menu).toBeInTheDocument();

    expect(screen.getByText('Context Item 1')).toBeInTheDocument();
  });

  it('should not open the context menu when right-click is outside menuRef', () => {
    const referenceElement = document.createElement('div');
    const outsideElement = document.createElement('div');
    document.body.appendChild(referenceElement);
    document.body.appendChild(outsideElement);

    const testId = 'context-menu';

    renderMenu({
      ...DEFAULT_PROPERTIES,
      context: true,
      reference: { current: referenceElement },
      testId,
      children: [<MenuItem label="Context Item 1" key="1" />],
    });

    fireEvent.contextMenu(outsideElement); // Simulate a right-click outside the menuRef

    expect(screen.queryByTestId(testId)).not.toBeInTheDocument(); // Menu should not open
  });

  it('should close the menu when clicking outside', () => {
    const referenceElement = document.createElement('div');
    document.body.appendChild(referenceElement);

    const testId = 'context-menu';

    renderMenu({
      ...DEFAULT_PROPERTIES,
      context: true,
      reference: { current: referenceElement },
      testId,
      children: [<MenuItem label="Context Item 1" key="1" />],
    });

    fireEvent.contextMenu(referenceElement);

    const menu = screen.getByTestId(testId);
    expect(menu).toBeInTheDocument();

    fireEvent.click(document.body);

    expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
  });

  it('should throw an error if context is true but reference is not provided', () => {
    let errorThrown = false;

    try {
      renderMenu({
        ...DEFAULT_PROPERTIES,
        context: true,
        children: [<MenuItem label="Context Item 1" key="1" />],
      });
    } catch (error: any) {
      errorThrown = true;
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('No reference specified');
    }

    expect(errorThrown).toBe(true);
  });

  it('should not open the menu when menuRef.current is null', () => {
    const referenceElement = document.createElement('div');
    document.body.appendChild(referenceElement);

    const testId = 'context-menu';

    renderMenu({
      ...DEFAULT_PROPERTIES,
      context: true,
      reference: { current: null },
      testId,
      children: [<MenuItem label="Context Item 1" key="1" />],
    });

    fireEvent.contextMenu(referenceElement);

    expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
  });
});
