import { DateTimePickerProps } from '@components/inputs/chrono/date-time/properties';
import { com } from 'src/types/common';
import { useState } from 'react';

const DateTimePickerSkin: com.qbit.Skin<DateTimePickerProps> = (props) => {
  const {
    selectedDate,
    selectedTime,
    handleDateChange,
    handleTimeChange,
    handleApply,
    handleCancel,
    currentMonth = 0,
    currentYear = new Date().getFullYear(),
    daysInMonth = [],
    firstDayOfMonth = 0,
    timeOptions = [],
    time = false,
    testId,
    disabled,
    goToPreviousMonth,
    goToNextMonth,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  // Format date for input value
  const formatDateForInput = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    if (time && selectedTime) {
      return `${year}-${month}-${day}T${selectedTime}`;
    }
    return `${year}-${month}-${day}`;
  };

  // Get days from previous month to fill the first week
  const prevMonthDays: number[] = [];
  if (firstDayOfMonth > 0) {
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      prevMonthDays.push(daysInPrevMonth - i);
    }
  }

  // Get days from next month to fill the last week
  const totalCells = prevMonthDays.length + daysInMonth.length;
  const remainingCells = 42 - totalCells;
  const nextMonthDays = Array.from({ length: remainingCells }, (_, i) => i + 1);

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleApplyClick = () => {
    handleApply?.();
    setIsOpen(false);
  };

  const handleCancelClick = () => {
    handleCancel?.();
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" data-testid={testId}>
      <input
        type={time ? 'datetime-local' : 'date'}
        value={formatDateForInput(selectedDate)}
        onClick={handleInputClick}
        readOnly
        disabled={disabled}
        role="textbox"
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white cursor-pointer'
        }`}
      />

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full min-w-[280px]">
          <div
            className={`p-4 border border-gray-300 rounded-lg shadow-md ${
              disabled ? 'cursor-not-allowed bg-gray-200' : 'cursor-pointer bg-white'
            }`}
            // data-testid={testId}
            aria-disabled={disabled}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={goToPreviousMonth}
                disabled={disabled}
                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                aria-label="Previous month"
              >
                &lt;
              </button>
              <h3 className="text-lg font-semibold">
                {monthNames[currentMonth]} {currentYear}
              </h3>
              <button
                onClick={goToNextMonth}
                disabled={disabled}
                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                aria-label="Next month"
              >
                &gt;
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center font-medium text-sm py-1">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {prevMonthDays.map((day) => (
                <div key={`prev-${day}`} className="text-center py-1 text-gray-400">
                  {day}
                </div>
              ))}

              {daysInMonth.map((day) => {
                const isSelected =
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear;
                return (
                  <button
                    key={`current-${day}`}
                    onClick={() => handleDateChange?.(day)}
                    disabled={disabled}
                    className={`text-center py-1 rounded-full ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                  >
                    {day}
                  </button>
                );
              })}

              {nextMonthDays.map((day) => (
                <div key={`next-${day}`} className="text-center py-1 text-gray-400">
                  {day}
                </div>
              ))}
            </div>

            {time && (
              <div className="mt-4">
                <label htmlFor="time-select" className="block text-sm font-medium mb-1">
                  Time
                </label>
                <select
                  id="time-select"
                  value={selectedTime}
                  onChange={(e) => handleTimeChange?.(e.target.value)}
                  disabled={disabled}
                  className="w-full p-2 border rounded"
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleCancelClick}
                disabled={disabled}
                className="px-4 py-2 text-sm rounded hover:bg-gray-100 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleApplyClick}
                disabled={disabled}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTimePickerSkin;
