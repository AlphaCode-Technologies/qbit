import { com } from 'src/types/common';
import { CalendarProps } from '@inputs/chrono';

const CalendarHeaderSkin: com.qbit.Skin<CalendarProps> = (props: com.qbit.SkinProps<CalendarProps>) => {
  const { children, week = [] } = props;

  return (
    <>
      <div className="grid grid-cols-7 text-gray-700 font-semibold border border-gray-300">
        {week.map((day, index) => (
          <div key={index} className="text-center border-r border-gray-300 last:border-r-0 py-2">
            {day}
          </div>
        ))}
      </div>

      {children}
    </>
  );
};

export default CalendarHeaderSkin;
