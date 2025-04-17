import { com } from 'src/types/common';
import { CalendarProps } from '@inputs/chrono';

const CalendarSkin: com.qbit.Skin<CalendarProps> = (props: com.qbit.SkinProps<CalendarProps>) => {
  const {
    children,
    testId,
    days,
    selectedMonth,
    selectedYear,
    selectedView,
    selectedDate,
    months,
    handleDateChange,
    setSelectedMonth,
    setSelectedYear,
    handleTodayClick,
  } = props;

  console.log('days', days);

  return (
    <div data-testid={testId} className="flex flex-col">
      <div className="flex items-center justify-between p-4 rounded-t-md border">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center justify-center border rounded-md px-4 py-2">
            <span className="text-gray-500 font-semibold">{months && months[selectedMonth!]}</span>
            <span className="text-xl font-semibold text-purple-600">{selectedDate?.getDate()}</span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 font-semibold text-gray-800">
                {selectedView === 'month' && (
                  <select
                    value={selectedMonth}
                    name="month"
                    onChange={(e) => setSelectedMonth && setSelectedMonth(parseInt(e.target.value))}
                    className="bg-transparent outline-0 appearance-none cursor-pointer text-lg"
                  >
                    {months?.map((month, index) => (
                      <option key={index} value={index}>
                        {month}
                      </option>
                    ))}
                  </select>
                )}

                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear && setSelectedYear(parseInt(e.target.value))}
                  className="bg-transparent outline-0 appearance-none cursor-pointer text-lg"
                >
                  {Array.from({ length: 10 }, (_, i) => selectedYear! - 5 + i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <span className="rounded-md text-sm font-medium text-gray-500 border border-gray-300 py-0.5 px-2">
                Week 2
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <button
              className="text-gray-700 bg-white hover:bg-gray-100 py-2 px-3 rounded-l-md border border-gray-300"
              onClick={() => handleDateChange && handleDateChange('prev')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleTodayClick}
              className="border-y border-gray-300 bg-white hover:bg-gray-100 py-[6px] px-5 text-gray-700 font-medium"
            >
              Today
            </button>

            <button
              className="text-gray-700 bg-white hover:bg-gray-100 py-2 px-3 rounded-r-md border border-gray-300"
              onClick={() => handleDateChange && handleDateChange('next')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1">
            <select
              value={selectedView}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white text-gray-700 font-medium py-1.5 pr-8 pl-3 text-base outline outline-1 outline-gray-300 sm:text-sm/6"
            >
              <option value="month">Month view</option>
              <option value="week">Week view</option>
            </select>
            <svg
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default CalendarSkin;
