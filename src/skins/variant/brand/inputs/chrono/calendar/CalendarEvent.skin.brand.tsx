import { com } from 'src/types/common';
import { CalendarProps } from '@inputs/chrono';

const CalendarSkin: com.qbit.Skin<CalendarProps> = (props: com.qbit.SkinProps<CalendarProps>) => {
  const { day, events = [], selectEvent } = props;

  return (
    <div className="w-full">
      {events.map((event, index) => (
        <div
          key={index}
          className={`my-1 rounded-md border border-gray-600 bg-gray-200 py-0.5 px-1 text-sm cursor-pointer text-nowrap overflow-hidden text-ellipsis ${day?.type !== 'currentMonth' ? 'opacity-50' : ''}`}
          onClick={() => selectEvent && selectEvent(event)}
        >
          {event.value}
        </div>
      ))}
    </div>
  );
};

export default CalendarSkin;
