import Table from '@components/tabular/table/basic/Table';
import TableItem from '@components/tabular/table/basic/TableItem';

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@components/index';
import { BadgesSkin } from '@skins/index';
import TableSkin from '@skins/defaults/Table/Table.default.skin';
import TableItemSkin from '@skins/defaults/Table/TableItem.default.skin';

const meta: Meta<typeof Table> = {
  title: 'Qbit design/Tabular/Table/Basic',
  component: Table,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Table> = {
  render: () => (
    <Table
      keyExtractor={(value, i) => `${value}-${i}`}
      renderers={{ renderer: TableSkin, childRenderer: TableItemSkin }}
    >
      <TableItem data={['name', 'age', 'country', 'level']} heading />
      <TableItem data={{ name: 'Jane Smith', age: 32, country: 'Canada', level: 'good' }} />
      <TableItem data={{ name: 'John Doe', age: 29, country: 'USA', level: 'excellent' }} />
      <TableItem
        data={{
          name: 'John Doe',
          age: 29,
          country: 'USA',
          level: (
            <Badge
              renderers={{ renderer: BadgesSkin }}
              keyExtractor={(value: string, i: number) => `${value}-${i}`}
              size="md"
            >
              <text x="45" y="18" fill="#000" fontSize="10" fontWeight="500">
                Good
              </text>
              <>
                <circle cx="28" cy="14" r="8" stroke="#D0D5DD" fill="white" />
                <foreignObject x="20" y="7" width="16" height="16">
                  <img
                    src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
                    alt="Badge Icon"
                    style={{ borderRadius: '50%', width: '100%', height: '100%' }}
                  />
                </foreignObject>
              </>
            </Badge>
          ),
        }}
      />
    </Table>
  ),
};
