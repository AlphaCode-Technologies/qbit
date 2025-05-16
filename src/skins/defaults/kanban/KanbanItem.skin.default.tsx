import { KanbanItemProps } from '@components/displays/segments/kanban/properties';
import { com } from 'src/types/common';

const KanbanItemSkin: com.qbit.Skin<KanbanItemProps> = (props: com.qbit.SkinProps<KanbanItemProps>) => {
  const { title, items, columnId, onDrop, onDragStart, className, style, testId } = props;

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onDrop?.(e, columnId);
  };

  return (
    <div
      className={`bg-gray-100 rounded-md shadow p-3 w-64 flex-shrink-0 ${className ?? ''}`}
      style={style}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      data-testid={testId}
    >
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-2 rounded shadow cursor-move"
            draggable
            onDragStart={(e) => onDragStart?.(e, item.id, columnId)}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanItemSkin;
