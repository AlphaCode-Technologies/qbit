import { cleanup, render, screen } from '@testing-library/react';
import Drawer from './Drawer';
import DrawerItem from './DrawerItem';
import { DrawerItemSkin, DrawerSkin } from '@skins/defaults';
import { DrawerProps } from './properties';
import { com } from 'src/types/common';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<DrawerProps> = {
  open: true,
  position: 'left',
  testId: 'drawer-test-id',
  onClose(): void {},
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: DrawerSkin, childRenderer: DrawerItemSkin },
};

const renderDrawer = (props: com.qbit.ShellProps<DrawerProps>) =>
  render(
    <Drawer {...props}>
      <DrawerItem>Drawer Content</DrawerItem>
      <DrawerItem>Drawer Content</DrawerItem>
    </Drawer>,
  );

describe('Drawer Component Test', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should have drawer elements', async () => {
    renderDrawer(DEFAULT_PROPERTIES);
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).toBeInTheDocument();
  });

  it('Should have not drawer elements if open is false', async () => {
    renderDrawer({ ...DEFAULT_PROPERTIES, open: false });
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).not.toBeInTheDocument();
  });

  it('Should apply the correct position class based on the position property', async () => {
    const positions = ['top', 'bottom', 'left', 'right'] as const;
    for (const position of positions) {
      renderDrawer({ ...DEFAULT_PROPERTIES, position });
      const element = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);

      const expectedPositionClass: Record<string, string> = {
        top: 'top-0 w-full h-fit',
        bottom: 'bottom-0 w-full h-fit',
        left: 'top-0 left-0 w-fit h-full',
        right: 'top-0 right-0 w-fit h-full',
      };

      expect(element?.firstChild).toHaveClass(`${expectedPositionClass[position]}`);
      cleanup();
    }
  });

  it('Should render backdrop with correct opacity when open', async () => {
    renderDrawer({ ...DEFAULT_PROPERTIES });
    const backdrop = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);
    expect(backdrop).toHaveClass('bg-opacity-60');
  });
});
