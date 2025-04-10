import { useState, useEffect, useCallback } from 'react';
import { DateTimePickerProps } from './properties';
import { com } from 'src/types/common';

const useBindSkin = (props: com.qbit.ShellProps<DateTimePickerProps>) => {
  const { date = new Date(), time = false, onChange, onCancel } = props;
  const [selectedDate, setSelectedDate] = useState<Date>(date);
  const [selectedTime, setSelectedTime] = useState<string>(formatTime(date));
  const [currentMonth, setCurrentMonth] = useState<number>(date.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(date.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState<number>(0);

  // Generate time options (every 30 minutes)
  const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const hours = Math.floor(i / 2);
    const minutes = i % 2 === 0 ? '00' : '30';
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  });

  // Format time to HH:MM
  function formatTime(date: Date): string {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  // Calculate days in month and first day of month
  useEffect(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const days = new Date(currentYear, currentMonth + 1, 0).getDate();

    const daysArray = Array.from({ length: days }, (_, i) => i + 1);
    setDaysInMonth(daysArray);
    setFirstDayOfMonth(firstDay);
  }, [currentMonth, currentYear]);

  const handleDateChange = useCallback(
    (day: number) => {
      const newDate = new Date(currentYear, currentMonth, day);
      if (time && selectedTime) {
        const [hours, minutes] = selectedTime.split(':').map(Number);
        newDate.setHours(hours);
        newDate.setMinutes(minutes);
      }
      setSelectedDate(newDate);
      onChange(newDate);
    },
    [currentMonth, currentYear, onChange, selectedTime, time],
  );

  const handleTimeChange = useCallback(
    (time: string) => {
      setSelectedTime(time);
      const [hours, minutes] = time.split(':').map(Number);
      const newDate = new Date(selectedDate);
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      setSelectedDate(newDate);
    },
    [selectedDate],
  );

  const handleApply = useCallback(() => {
    onChange(selectedDate);
  }, [onChange, selectedDate]);

  const handleCancel = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  const goToPreviousMonth = useCallback(() => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((year) => year - 1);
        return 11;
      }
      return prev - 1;
    });
  }, []);

  const goToNextMonth = useCallback(() => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((year) => year + 1);
        return 0;
      }
      return prev + 1;
    });
  }, []);

  return {
    selectedDate,
    selectedTime,
    handleDateChange,
    handleTimeChange,
    handleApply,
    handleCancel,
    currentMonth,
    currentYear,
    daysInMonth,
    firstDayOfMonth,
    timeOptions,
    goToPreviousMonth,
    goToNextMonth,
  };
};

export default useBindSkin;
