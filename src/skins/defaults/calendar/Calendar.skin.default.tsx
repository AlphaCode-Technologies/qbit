import { com } from 'src/types/common';
import { CalendarProps } from '@inputs/chrono';

const CalendarSkin: com.qbit.Skin<CalendarProps> = (props: com.qbit.SkinProps<CalendarProps>) => {
  const {
    children,
    testId,
    selectedMonth,
    selectedYear,
    selectedView,
    selectedDate,
    months,
    getWeekMonths,
    handleDateChange,
    setSelectedMonth,
    setSelectedYear,
    handleTodayClick,
  } = props;

  return (
    <div data-testid={testId} className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <button
            onClick={() => handleDateChange && handleDateChange('prev')}
            className="bg-gray-200 hover:bg-gray-300 py-1 px-3 rounded-md cursor-pointer"
          >
            Prev
          </button>
          <button
            onClick={() => handleDateChange && handleDateChange('next')}
            className="bg-gray-200 hover:bg-gray-300 py-1 px-3 rounded-md cursor-pointer"
          >
            Next
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {selectedView === 'month' && (
            <select
              value={selectedMonth}
              name="month"
              onChange={(e) => setSelectedMonth && setSelectedMonth(parseInt(e.target.value))}
              className="bg-transparent outline-0 appearance-none cursor-pointer"
            >
              {months?.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          )}

          {selectedView === 'week' && <span className="text-gray-700 text-lg">{getWeekMonths?.join(' - ')}</span>}

          {selectedView === 'day' && (
            <span className="text-gray-700 text-lg">
              {months?.[selectedMonth!]} {selectedDate && selectedDate.getDate()},
            </span>
          )}

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear && setSelectedYear(parseInt(e.target.value))}
            className="bg-transparent outline-0 appearance-none cursor-pointer"
          >
            {Array.from({ length: 10 }, (_, i) => selectedYear! - 5 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleTodayClick}
            className="bg-gray-200 hover:bg-gray-300  py-1 px-3 rounded-md cursor-pointer"
          >
            Today
          </button>
        </div>
      </div>

      {children}
    </div>
  );
};

export default CalendarSkin;
