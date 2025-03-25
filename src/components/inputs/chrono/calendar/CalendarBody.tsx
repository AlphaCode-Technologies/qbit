import { com } from 'src/types/common';
import { BaseComponent, useGetChildren } from '@components/containers';
import { CalendarProps, Day } from './properties';
import React from 'react';

const CalendarBody: com.qbit.Shell<CalendarProps> = (props: com.qbit.ShellProps<CalendarProps>) => {
  const { children: oChildren, days = [], className, ...rest } = props;

  const children = useGetChildren<CalendarProps, CalendarProps>(rest, oChildren ?? [<></>]);

  return (
    <div className={className}>
      {days.map((day: Day, index) => (
        <BaseComponent key={index} day={day} {...rest}>
          {React.Children.map(children, (child) =>
            React.isValidElement<{ day: Day }>(child) ? React.cloneElement(child, { day }) : child,
          )}
        </BaseComponent>
      ))}
    </div>
  );
};

export default CalendarBody;
