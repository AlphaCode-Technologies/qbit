import { com } from 'src/types/common';
import { BaseComponent, useGetChildren } from '@components/containers';
import { CalendarProps } from './properties';

const CalendarHeader: com.qbit.Shell<CalendarProps> = (props: com.qbit.ShellProps<CalendarProps>) => {
  const { children: oChildren, ...rest } = props;

  const children = useGetChildren<CalendarProps, CalendarProps>(rest, oChildren ?? [<></>]);

  return <BaseComponent {...rest}>{children}</BaseComponent>;
};

export default CalendarHeader;
