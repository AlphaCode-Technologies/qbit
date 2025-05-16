import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Kanban from '@components/displays/segments/kanban/Kanban';
import KanbanItem from '@components/displays/segments/kanban/KanbanItem';
import KanbanSkin from '@skins/defaults/kanban/Kanban.skin.default';
import KanbanColumnSkin from '@skins/defaults/kanban/KanbanItem.skin.default';

describe('Kanban Components', () => {
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

  it('renders Kanban with columns', () => {
    render(
      <Kanban
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: KanbanSkin, childRenderer: KanbanColumnSkin }}
        columns={initialData}
        setColumns={vi.fn()}
      >
        {initialData.map((item) => (
          <KanbanItem key={item.columnId} columnId={item.columnId} title={item.title} items={item.items} />
        ))}
      </Kanban>,
    );

    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  it('allows dragging and dropping items between columns', () => {
    const setColumnsMock = vi.fn();
    render(
      <Kanban
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: KanbanSkin, childRenderer: KanbanColumnSkin }}
        columns={initialData}
        setColumns={setColumnsMock}
      >
        {initialData.map((item) => (
          <KanbanItem key={item.columnId} columnId={item.columnId} title={item.title} items={item.items} />
        ))}
      </Kanban>,
    );

    const task1 = screen.getByText('Task 1');
    const inProgressColumn = screen.getByText('In Progress').closest('div');

    // Start drag
    fireEvent.dragStart(task1, {
      dataTransfer: { setData: vi.fn() },
    });

    // Drop on target column
    fireEvent.dragOver(inProgressColumn!);
    fireEvent.drop(inProgressColumn!, {
      dataTransfer: { getData: () => 'task-1' },
    });

    expect(setColumnsMock).toHaveBeenCalled();
  });

  it('KanbanItemSkin renders correctly', () => {
    const onDropMock = vi.fn();
    const onDragStartMock = vi.fn();

    render(
      <KanbanColumnSkin
        columnId="test-column"
        title="Test Column"
        items={[{ id: 'test-item', content: 'Test Item' }]}
        onDrop={onDropMock}
        onDragStart={onDragStartMock}
      />,
    );

    expect(screen.getByText('Test Column')).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();

    // Test drag start
    const item = screen.getByText('Test Item');
    fireEvent.dragStart(item);
    expect(onDragStartMock).toHaveBeenCalled();

    // Test drop
    const column = screen.getByText('Test Column').closest('div');
    fireEvent.dragOver(column!);
    fireEvent.drop(column!);
    expect(onDropMock).toHaveBeenCalled();
  });

  it('handles drag and drop correctly through component', () => {
    const setColumnsMock = vi.fn();
    render(
      <Kanban
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: KanbanSkin, childRenderer: KanbanColumnSkin }}
        columns={initialData}
        setColumns={setColumnsMock}
      >
        {initialData.map((item) => (
          <KanbanItem key={item.columnId} columnId={item.columnId} title={item.title} items={item.items} />
        ))}
      </Kanban>,
    );

    const task1 = screen.getByText('Task 1');
    const inProgressColumn = screen.getByText('In Progress').closest('div');

    fireEvent.dragStart(task1, {
      dataTransfer: { setData: vi.fn() },
    });

    fireEvent.dragOver(inProgressColumn!);
    fireEvent.drop(inProgressColumn!, {
      dataTransfer: { getData: () => 'task-1' },
    });

    expect(setColumnsMock).toHaveBeenCalled();
  });

  it('does not move item when dropped in the same column', () => {
    const setColumnsMock = vi.fn();
    render(
      <Kanban
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: KanbanSkin, childRenderer: KanbanColumnSkin }}
        columns={initialData}
        setColumns={setColumnsMock}
      >
        {initialData.map((item) => (
          <KanbanItem key={item.columnId} columnId={item.columnId} title={item.title} items={item.items} />
        ))}
      </Kanban>,
    );

    const task1 = screen.getByText('Task 1');
    const todoColumn = screen.getByText('To Do').closest('div');

    // Start drag
    fireEvent.dragStart(task1, {
      dataTransfer: { setData: vi.fn() },
    });

    // Drop on same column
    fireEvent.dragOver(todoColumn!);
    fireEvent.drop(todoColumn!, {
      dataTransfer: { getData: () => 'task-1' },
    });

    expect(setColumnsMock).not.toHaveBeenCalled();
  });
});
