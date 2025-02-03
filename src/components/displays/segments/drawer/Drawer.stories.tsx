import { useState } from 'react';
import { StoryFn } from '@storybook/react';
import Drawer from './Drawer';
import DrawerItem from './DrawerItem';
import { DrawerItemSkin, DrawerSkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Displays/Segments/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    open: false,
    renderers: { renderer: DrawerSkin, childRenderer: DrawerItemSkin },
    keyExtractor: (value: string, i: number) => `${value}-${i}`,
  },
};

const Template: StoryFn = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.open);

  return (
    <div>
      <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Drawer {...args} open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerItem>Drawer Content 1</DrawerItem>
        <DrawerItem>Drawer Content 2</DrawerItem>
      </Drawer>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: 'left',
};

export const Position = Template.bind({});
Position.args = {
  position: 'top',
};
