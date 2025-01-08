import { cleanup, render, screen } from '@testing-library/react';
import Drawer from './Drawer';
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import DrawerFooter from './DrawerFooter';
import { DrawerContentSkin, DrawerFooterSkin, DrawerHeaderSkin } from '@skins/defaults';

const DEFAULT_PROPERTIES: AlphaElements.DrawerProperties = {
  open: true,
  position: 'left',
  testId: 'drawer-test-id',
};

const renderDrawer = ({
  props,
  options,
}: com.elem.Shell<AlphaElements.DrawerProperties, AlphaElements.DrawerActions>) =>
  render(
    <Drawer properties={props} options={options}>
      <DrawerHeader properties={{ renderer: DrawerHeaderSkin }} />
      <DrawerContent properties={{ renderer: DrawerContentSkin }} />
      <DrawerFooter properties={{ renderer: DrawerFooterSkin }} />
    </Drawer>,
  );

describe('Test for drawer elements', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should have drawer elements', async () => {
    renderDrawer({ props: DEFAULT_PROPERTIES });
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).toBeInTheDocument();
  });

  it('Should have not drawer elements if open is false', async () => {
    renderDrawer({ props: { ...DEFAULT_PROPERTIES, open: false } });
    const element = await screen.queryByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element).not.toBeInTheDocument();
  });

  it('Should apply the correct position class based on the position property', async () => {
    const positions = ['top', 'bottom', 'left', 'right'];
    for (const position of positions) {
      renderDrawer({ props: { ...DEFAULT_PROPERTIES, position } });
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

  it('Should have custom class', async () => {
    const customClassName = 'custom-drawer-class';
    renderDrawer({
      props: DEFAULT_PROPERTIES,
      options: { styles: { className: customClassName } },
    });
    const element = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);
    expect(element?.firstChild).toHaveClass(customClassName);
  });

  it('Should render backdrop with correct opacity when open', async () => {
    renderDrawer({ props: DEFAULT_PROPERTIES });
    const backdrop = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);
    expect(backdrop).toHaveClass('bg-opacity-60');
  });
});
