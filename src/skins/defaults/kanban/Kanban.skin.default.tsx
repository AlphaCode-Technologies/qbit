import { KanbanProps } from '@components/displays/segments/kanban/properties';
import { com } from 'src/types/common';

const KanbanSkin: com.qbit.Skin<KanbanProps> = (props: com.qbit.SkinProps<KanbanProps>) => {
  const { children, className, style, testId } = props;

  return (
    <div className={`flex gap-4 overflow-auto p-4 ${className ?? ''}`} style={style} data-testid={testId}>
      {children}
    </div>
  );
};

export default KanbanSkin;
