import { StoryFn } from '@storybook/react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { MenuItemSkin, MenuSkin } from '@skins/defaults';
import { useRef } from 'react';

export default {
  title: 'Qbit design/Displays/Menus/Menu',
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

const TemplateContextMenu: StoryFn = (args: any) => {
  const reference = useRef<HTMLDivElement>(null);

  return (
    <div ref={reference} className="border py-20 px-20">
      <p>Right-click anywhere inside this box to open the context menu.</p>

      <Menu {...args} reference={reference}>
        {menuItems.map((item) => (
          <MenuItem label={item} key={item} />
        ))}
      </Menu>
    </div>
  );
};

const TemplateContextMenuWithSubMenu: StoryFn = (args: any) => {
  const reference = useRef<HTMLDivElement>(null);

  return (
    <div ref={reference} className="border py-20 px-20">
      <p>Right-click anywhere inside this box to open the context menu.</p>

      <Menu {...args} reference={reference}>
        {menuItems.map((item) => (
          <MenuItem label={item}>
            <Menu
              renderers={{ renderer: MenuSkin, childRenderer: MenuItemSkin }}
              keyExtractor={(value: string, i: number) => `${value}-${i}`}
            >
              {menuItems.map((item) => (
                <MenuItem label={item} />
              ))}
            </Menu>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

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

export const ContextMenu = TemplateContextMenu.bind({});
ContextMenu.args = {
  renderers: { renderer: MenuSkin, childRenderer: MenuItemSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  context: true,
};

export const ContextMenuWithSubMenu = TemplateContextMenuWithSubMenu.bind({});
ContextMenuWithSubMenu.args = {
  renderers: { renderer: MenuSkin, childRenderer: MenuItemSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  context: true,
};
