import { com } from 'src/types/common';
import { CalendarProps } from '@inputs/chrono';

const CalendarDaySkin: com.qbit.Skin<CalendarProps> = (props: com.qbit.SkinProps<CalendarProps>) => {
  const { children, day, selectDate, selectedDate } = props;

  return (
    <div
      className={`border-r border-b border-gray-300 min-h-28 flex flex-col items-start p-2 ${
        day!.type === 'prevMonth' || day!.type === 'nextMonth' ? 'text-gray-400' : 'text-gray-900'
      }`}
      onClick={() => selectDate && selectDate(day?.date ? day.date : new Date())}
    >
      <span
        className={`text-xs rounded-full px-1 py-0.5 font-medium ${selectedDate === day?.date ? 'bg-violet-200 text-violet-700' : day!.isToday ? 'bg-violet-500 text-white' : ''}`}
      >
        {day!.date.getDate() < 10 ? '0' : ''}
        {day!.date.getDate()}
      </span>

      {children}
    </div>
  );
};

export default CalendarDaySkin;
