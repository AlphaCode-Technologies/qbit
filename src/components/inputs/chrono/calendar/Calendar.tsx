import { com } from 'src/types/common';
import { BaseComponent, useGetChildren } from '@components/containers';
import { useBindSkin } from './Calendar.hook';
import { CalendarProps } from './properties';

const Calendar: com.qbit.Shell<CalendarProps> = (props: com.qbit.ShellProps<CalendarProps>) => {
  const { children: oChildren, ...rest } = props;

  const bindHandlers = useBindSkin(rest);
  const children = useGetChildren<CalendarProps, CalendarProps>({ ...rest, ...bindHandlers }, oChildren);

  return (
    <BaseComponent {...rest} {...bindHandlers}>
      {children}
    </BaseComponent>
  );
};

export default Calendar;
