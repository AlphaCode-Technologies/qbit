import { BaseComponent, useGetChildren } from '@components/containers';
import { TableProps, TableItemProps } from './properties';
import { com } from 'src/types/common';

const Table: com.qbit.Shell<TableProps, TableItemProps> = (props: com.qbit.ShellProps<TableProps, TableItemProps>) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<TableProps, TableItemProps>(rest, oChildren);
  return <BaseComponent {...rest}>{children}</BaseComponent>;
};

export default Table;
