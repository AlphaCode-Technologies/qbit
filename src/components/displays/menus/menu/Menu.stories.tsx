import { StoryFn } from '@storybook/react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { MenuItemSkin, MenuSkin } from '@skins/defaults';

export default {
  title: 'Alpha Elements/Displays/Menus/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const menuItems = ['level 1 item 1', 'level 1 item 2'];

const Template: StoryFn = (args: any) => (
  <Menu {...args}>
    {menuItems.map((item) => (
      <MenuItem label={item} />
    ))}
  </Menu>
);

const TemplateSubMenu: StoryFn = (args: any) => (
  <Menu {...args}>
    {menuItems.map((item) => (
      <MenuItem label={item}>
        <Menu {...args}>
          {menuItems.map((item) => (
            <MenuItem label={item} />
          ))}
        </Menu>
      </MenuItem>
    ))}
  </Menu>
);

export const Default = Template.bind({});
Default.args = {
  renderers: { renderer: MenuSkin, childRenderer: MenuItemSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
};

export const SubMenu = TemplateSubMenu.bind({});
SubMenu.args = {
  renderers: { renderer: MenuSkin, childRenderer: MenuItemSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
};
