import { useEffect, useState } from 'react';
import { CalendarProps, Day } from './properties';

export const useBindSkin = (props: CalendarProps) => {
  const {
    selectedYear: propsSelectedYear,
    selectedMonth: propsSelectedMonth,
    today: propsToday,
    months: propsMonths,
    week: propsWeek,
    handleMonthChange: propsHandleMonthChange,
    setSelectedMonth: propsSetSelectedMonth,
    setSelectedYear: propsSetSelectedYear,
  } = props;

  const today = propsToday ?? new Date();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const [selectedYear, setSelectedYear] = useState<number>(propsSelectedYear ?? todayYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(propsSelectedMonth ?? todayMonth);
  const [days, setDays] = useState<Day[]>([]);

  const months: string[] = propsMonths ?? [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const week: string[] = propsWeek ?? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    generateCalendar(selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth]);

  const generateCalendar = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    const createDays = (count: number, offset: number, type: 'prevMonth' | 'currentMonth' | 'nextMonth') =>
      Array.from({ length: count }, (_, i) => {
        const day = offset + i;
        return {
          day,
          isToday:
            type === 'currentMonth' &&
            selectedYear === today.getFullYear() &&
            selectedMonth === today.getMonth() &&
            day === today.getDate(),
          isWeekend: type === 'currentMonth' && new Date(selectedYear, selectedMonth, day).getDay() % 6 === 0,
          type,
        };
      });

    setDays([
      ...createDays(firstDay, prevLastDate - firstDay + 1, 'prevMonth'),
      ...createDays(lastDate, 1, 'currentMonth'),
      ...createDays((firstDay + lastDate) % 7 ? 7 - ((firstDay + lastDate) % 7) : 0, 1, 'nextMonth'),
    ]);
  };

  const handleMonthChange =
    propsHandleMonthChange ??
    ((direction: 'prev' | 'next') => {
      setSelectedMonth((prev) => (direction === 'prev' ? (prev ? prev - 1 : 11) : (prev + 1) % 12));
      setSelectedYear(
        (prev) =>
          prev +
          (direction === 'prev' && selectedMonth === 0 ? -1 : direction === 'next' && selectedMonth === 11 ? 1 : 0),
      );
    });

  return {
    today,
    selectedMonth,
    selectedYear,
    months,
    week,
    days,
    handleMonthChange,
    setSelectedMonth: propsSetSelectedMonth ?? setSelectedMonth,
    setSelectedYear: propsSetSelectedYear ?? setSelectedYear,
  };
};
