import { useState } from 'react';
import Kanban from '@components/displays/segments/kanban/Kanban';
import KanbanItem from '@components/displays/segments/kanban/KanbanItem';
import KanbanSkin from '@skins/defaults/kanban/Kanban.skin.default';
import KanbanColumnSkin from '@skins/defaults/kanban/KanbanItem.skin.default';

const App = () => {
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
    <div data-id="my-id">
      <Kanban
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: KanbanSkin, childRenderer: KanbanColumnSkin }}
        columns={columns}
        setColumns={setColumns}
      >
        {columns.map((item) => (
          <KanbanItem key={item.columnId} columnId={item.columnId} title={item.title} items={item.items} />
        ))}
      </Kanban>
    </div>
  );
};

export default App;
