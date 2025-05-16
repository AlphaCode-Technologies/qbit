import { ReactNode } from 'react';
import { com } from 'src/types/common';

export type KanbanProps = com.qbit.BaseProps &
  com.utils.Property<{
    testId?: string;
    onMoveItem?: (itemId: string, fromColumnId: string, toColumnId: string) => void;
    columns?: any;
    setColumns?: any;
  }>;

export type KanbanItemProps = com.qbit.BaseProps &
  com.utils.Property<{
    columnId: string;
    title: string;
    items: { id: string; content: ReactNode }[];
    onDrop?: (e: React.DragEvent, columnId: string) => void;
    onDragStart?: (e: React.DragEvent, itemId: string, columnId: string) => void;
    testId?: string;
    onMoveItem?: any;
  }>;
