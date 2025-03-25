import { com } from 'src/types/common';
import { BaseComponent } from '@components/containers';
import { CalendarProps } from './properties';
import { useBindEventSkin } from '@inputs/chrono/calendar/Calendar.hook';

const CalendarEvent: com.qbit.Shell<CalendarProps> = (props: com.qbit.ShellProps<CalendarProps>) => {
  const { children: oChildren, ...rest } = props;

  const bindHandlers = useBindEventSkin(rest);

  return <BaseComponent {...rest} {...bindHandlers} />;
};

export default CalendarEvent;
