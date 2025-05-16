import React from 'react';
import { BaseComponent, useGetChildren } from '@components/containers';
import { com } from 'src/types/common';
import { KanbanProps, KanbanItemProps } from './properties';
import { useBindSkin } from './Kanban.hook';

const Kanban: com.qbit.Shell<KanbanProps, KanbanItemProps> = (props) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<KanbanProps, KanbanItemProps>(rest, oChildren);

  const { columns, setColumns } = props as any;
  const { handleDrop, handleDragStart } = useBindSkin(columns, setColumns);

  return (
    <BaseComponent {...rest}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onDrop: handleDrop,
          onDragStart: handleDragStart,
        }),
      )}
    </BaseComponent>
  );
};

export default Kanban;
