import { Meta, StoryObj } from '@storybook/react';
import Kanban from '@components/displays/segments/kanban/Kanban';
import KanbanItem from '@components/displays/segments/kanban/KanbanItem';
import KanbanSkin from '@skins/defaults/kanban/Kanban.skin.default';
import KanbanItemSkin from '@skins/defaults/kanban/KanbanItem.skin.default';
import { useState } from 'react';

const meta: Meta<typeof Kanban> = {
  title: 'Qbit design/Displays/Segments/Kanban',
  component: Kanban,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Kanban>;

const DefaultKanbanStory = (args: any) => {
  const initialData = [
    {
      columnId: 'todo',
      title: 'To Do',
      items: [
        { id: 'task-1', content: 'Task 1' },
        { id: 'task-2', content: 'Task 2' },
      ],
    },
    {
      columnId: 'in-progress',
      title: 'In Progress',
      items: [{ id: 'task-3', content: 'Task 3' }],
    },
    {
      columnId: 'done',
      title: 'Done',
      items: [{ id: 'task-4', content: 'Task 4' }],
    },
  ];

  const [columns, setColumns] = useState(initialData);

  return (
    <Kanban
      {...args}
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
      renderers={{ renderer: KanbanSkin, childRenderer: KanbanItemSkin }}
      columns={columns}
      setColumns={setColumns}
    >
      {columns.map((col) => (
        <KanbanItem key={col.columnId} columnId={col.columnId} title={col.title} items={col.items} />
      ))}
    </Kanban>
  );
};

export const Default: Story = {
  render: DefaultKanbanStory,
};
