import { com } from 'src/types/common';
import { CalendarProps } from '@inputs/chrono';

const CalendarSkin: com.qbit.Skin<CalendarProps> = (props: com.qbit.SkinProps<CalendarProps>) => {
  const {
    children,
    testId,
    selectedMonth,
    selectedYear,
    months,
    handleMonthChange,
    setSelectedMonth,
    setSelectedYear,
  } = props;

  return (
    <div data-testid={testId}>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => handleMonthChange && handleMonthChange('prev')}
          className="bg-gray-200 py-1 px-3 rounded-md cursor-pointer"
        >
          Prev
        </button>

        <div className="flex items-center">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth && setSelectedMonth(parseInt(e.target.value))}
            className="mr-2 bg-transparent focus:outline-0 appearance-none"
          >
            {months?.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear && setSelectedYear(parseInt(e.target.value))}
            className="bg-transparent focus:outline-0 appearance-none"
          >
            {Array.from({ length: 10 }, (_, i) => selectedYear! - 5 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => handleMonthChange && handleMonthChange('next')}
          className="bg-gray-200 py-1 px-3 rounded-md cursor-pointer"
        >
          Next
        </button>
      </div>

      {children}
    </div>
  );
};

export default CalendarSkin;
