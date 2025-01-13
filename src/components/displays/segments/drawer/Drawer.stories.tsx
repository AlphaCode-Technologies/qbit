import Drawer from './Drawer';
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import DrawerFooter from './DrawerFooter';
import { DrawerContentSkin, DrawerFooterSkin, DrawerHeaderSkin } from '@skins/defaults';

export default {
  title: 'Alpha Elements/Displays/Segments/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {
      open: true,
    },
  },
};

export const Default = {
  args: {
    open: true,
  },
  children: [
    <DrawerHeader renderer={{ renderer: DrawerHeaderSkin }} />,
    <DrawerContent renderer={{ renderer: DrawerContentSkin }} />,
    <DrawerFooter renderer={{ renderer: DrawerFooterSkin }} />,
  ],
};
