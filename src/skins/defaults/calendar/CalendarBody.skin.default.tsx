import { com } from 'src/types/common';
import { CalendarProps } from '@inputs/chrono';

const CalendarBodySkin: com.qbit.Skin<CalendarProps> = (props: com.qbit.SkinProps<CalendarProps>) => {
  const { days = [], week = [] } = props;

  return (
    <>
      <div className="grid grid-cols-7 text-gray-700 font-semibold border border-gray-300">
        {week.map((day, index) => (
          <div key={index} className="text-center border-r border-gray-300 last:border-r-0 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 border-l border-t border-gray-300">
        {days.map(({ day, isToday, isWeekend, type }, index) => (
          <div
            key={index}
            className={`p-4 text-center border-r border-b border-gray-300 ${
              type === 'prevMonth' || type === 'nextMonth' ? 'bg-gray-100 text-gray-400' : ''
            } ${isToday ? 'bg-gray-500 text-white font-bold' : isWeekend ? 'bg-gray-200 text-gray-600' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarBodySkin;
