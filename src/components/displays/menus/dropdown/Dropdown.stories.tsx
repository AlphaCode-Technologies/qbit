import { Meta, StoryObj } from '@storybook/react';
import DropdownItem from './DropdownItem';
import Dropdown from './Dropdown';
import { DropdownItemSkin, DropdownSkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Displays/Menus/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      renderers={{ renderer: DropdownSkin, childRenderer: DropdownItemSkin }}
      label="Account ▼"
    >
      <DropdownItem
        name={'Logout'}
        icon={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zuKQcb6i6jYPQapPpKtl5jyI3CazcU3JAw&s'}
        onChange={() => alert('Logging out⌛️🔄.....')}
      />
    </Dropdown>
  ),
};
