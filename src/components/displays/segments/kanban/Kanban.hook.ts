import { useState } from 'react';

export const useBindSkin = (
  columns: {
    columnId: string;
    title: string;
    items: any;
  }[],
  setColumns: React.Dispatch<React.SetStateAction<any[]>>,
) => {
  const [draggedItem, setDraggedItem] = useState<{
    id: string;
    columnId: string;
  } | null>(null);

  const handleDragStart = (e: React.DragEvent, itemId: string, columnId: string) => {
    e.dataTransfer.setData('text/plain', itemId);
    setDraggedItem({ id: itemId, columnId });
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/plain');

    if (draggedItem && draggedItem.columnId !== targetColumnId) {
      const fromColumnId = draggedItem.columnId;

      setColumns((prevColumns) => {
        const sourceColumn = prevColumns.find((col) => col.columnId === fromColumnId);
        const targetColumn = prevColumns.find((col) => col.columnId === targetColumnId);

        if (!sourceColumn || !targetColumn) return prevColumns;

        const itemIndex = sourceColumn.items.findIndex((item: any) => item.id === itemId);
        if (itemIndex === -1) return prevColumns;

        const newSourceItems = [...sourceColumn.items];
        const [movedItem] = newSourceItems.splice(itemIndex, 1);
        const newTargetItems = [...targetColumn.items, movedItem];

        return prevColumns.map((col) => {
          if (col.columnId === fromColumnId) return { ...col, items: newSourceItems };
          if (col.columnId === targetColumnId) return { ...col, items: newTargetItems };
          return col;
        });
      });
    }
    console.log('coloumns', columns);
    setDraggedItem(null);
  };

  return { handleDragStart, handleDrop };
};
