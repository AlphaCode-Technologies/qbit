import { useEffect, useMemo, useState } from 'react';
import { CalendarProps, Day, ViewType, NavigationDirection, DayType } from './properties';

const defaultMonths: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const defaultWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const useBindSkin = (props: CalendarProps) => {
  const {
    selectedDate: propsSelectedDate,
    selectedYear: propsSelectedYear,
    selectedMonth: propsSelectedMonth,
    selectedView: propsSelectedView,
    today: propsToday,
    months: propsMonths,
    week: propsWeek,
    setSelectedMonth: propsSetSelectedMonth,
    setSelectedYear: propsSetSelectedYear,
    setSelectedView: propsSetSelectedView,
  } = props;

  const today = propsToday ?? new Date();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const months = propsMonths ?? defaultMonths;
  const week = propsWeek ?? defaultWeek;

  const [selectedYear, setSelectedYear] = useState<number>(propsSelectedYear ?? todayYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(propsSelectedMonth ?? todayMonth);
  const [selectedView, setSelectedView] = useState<ViewType>(propsSelectedView ?? 'month');
  const [selectedDate, setSelectedDate] = useState<Date>(propsSelectedDate ?? today);
  const [days, setDays] = useState<Day[]>([]);

  useEffect(() => {
    generateCalendar(selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    setSelectedMonth(selectedDate.getMonth());
    setSelectedYear(selectedDate.getFullYear());
  }, [selectedDate]);

  const generateCalendar = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    const createDays = (count: number, offset: number, type: DayType, monthOffset = 0) =>
      Array.from({ length: count }, (_, i) => {
        const day = offset + i;
        const correctMonth = month + monthOffset;
        const correctYear = year + (correctMonth < 0 ? -1 : correctMonth > 11 ? 1 : 0);
        const dayIndex = new Date(correctYear, correctMonth, day).getDay();

        return {
          date: new Date(correctYear, correctMonth, day),
          isToday:
            type === 'currentMonth' &&
            correctYear === today.getFullYear() &&
            correctMonth === today.getMonth() &&
            day === today.getDate(),
          isWeekend: new Date(correctYear, correctMonth, day).getDay() % 6 === 0,
          type,
          dayType: week[dayIndex],
        };
      });

    setDays([
      ...createDays(firstDay, prevLastDate - firstDay + 1, 'prevMonth', -1),
      ...createDays(lastDate, 1, 'currentMonth', 0),
      ...createDays((firstDay + lastDate) % 7 ? 7 - ((firstDay + lastDate) % 7) : 0, 1, 'nextMonth', 1),
    ]);
  };

  const handleDateChange = (direction: NavigationDirection, view?: ViewType) => {
    const activeView = view ?? selectedView;

    switch (activeView) {
      case 'year': {
        setSelectedYear((prev) => (direction === 'prev' ? prev - 1 : prev + 1));
        break;
      }

      case 'month': {
        setSelectedMonth((prev) => (direction === 'prev' ? (prev ? prev - 1 : 11) : (prev + 1) % 12));
        setSelectedYear(
          (prev) =>
            prev +
            (direction === 'prev' && selectedMonth === 0 ? -1 : direction === 'next' && selectedMonth === 11 ? 1 : 0),
        );
        break;
      }

      case 'week': {
        const daysToMove = direction === 'prev' ? -7 : 7;
        setSelectedDate((prev) => {
          const newDate = new Date(prev);
          newDate.setDate(prev.getDate() + daysToMove);
          return newDate;
        });
        break;
      }

      case 'day': {
        const daysToMove = direction === 'prev' ? -1 : 1;
        setSelectedDate((prev) => {
          const newDate = new Date(prev);
          newDate.setDate(prev.getDate() + daysToMove);
          return newDate;
        });
        break;
      }

      default:
        break;
    }
  };

  const handleTodayClick = () => {
    setSelectedYear(todayYear);
    setSelectedMonth(todayMonth);
    setSelectedDate(today);
  };

  const getWeekMonths = useMemo(() => {
    if (!days.length) return [];

    const selectedWeekStart = new Date(selectedDate);
    selectedWeekStart.setDate(selectedDate.getDate() - selectedDate.getDay());

    const selectedWeekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(selectedWeekStart);
      date.setDate(selectedWeekStart.getDate() + i);
      return date.getMonth();
    });

    const uniqueMonths = new Set(selectedWeekDays);
    return Array.from(uniqueMonths).map((monthIndex) => months[monthIndex]);
  }, [days.length, selectedDate, months]);

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };

  return {
    today,
    selectedMonth,
    selectedYear,
    selectedView,
    selectedDate,
    months,
    week,
    days,
    handleDateChange,
    handleTodayClick,
    getWeekMonths,
    selectDate,
    setSelectedMonth: propsSetSelectedMonth ?? setSelectedMonth,
    setSelectedYear: propsSetSelectedYear ?? setSelectedYear,
    setSelectedView: propsSetSelectedView ?? setSelectedView,
  };
};

export const useBindEventSkin = (props: CalendarProps) => {
  const { day, events } = props;

  return {
    events: events
      ?.sort((a, b) => a.date.getTime() - b.date.getTime())
      .filter((event) => {
        if (
          day?.date.getFullYear() === event.date.getFullYear() &&
          day.date.getMonth() === event.date.getMonth() &&
          day.date.getDate() === event.date.getDate()
        ) {
          return true;
        }
      }),
  };
};
