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
  const [selectedWeekStartDate, setSelectedWeekStartDate] = useState<Date>(() => {
    const date = new Date(propsSelectedDate ?? today);
    date.setDate(date.getDate() - date.getDay());
    return date;
  });

  const [days, setDays] = useState<Day[]>([]);

  useEffect(() => {
    generateCalendarView();
  }, [selectedYear, selectedMonth, selectedView, selectedWeekStartDate]);

  useEffect(() => {
    if (selectedView === 'week') {
      const targetDate = selectedDate ?? new Date(selectedYear, selectedMonth, 1);
      const startOfWeek = new Date(targetDate);
      startOfWeek.setDate(targetDate.getDate() - targetDate.getDay());
      setSelectedWeekStartDate(startOfWeek);
    }
  }, [selectedView]);

  const createDay = (date: Date, type: DayType): Day => {
    const dayIndex = date.getDay();
    return {
      date,
      isToday:
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate(),
      isWeekend: dayIndex === 0 || dayIndex === 6,
      type,
    };
  };

  const generateCalendarView = () => {
    if (selectedView === 'month') {
      const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
      const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
      const firstDayIndex = firstDayOfMonth.getDay();
      const daysInMonth = lastDayOfMonth.getDate();

      const prevMonthLastDate = new Date(selectedYear, selectedMonth, 0).getDate();
      const prevMonthDays = Array.from({ length: firstDayIndex }, (_, i) =>
        createDay(new Date(selectedYear, selectedMonth - 1, prevMonthLastDate - firstDayIndex + i + 1), 'prevMonth'),
      );

      const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) =>
        createDay(new Date(selectedYear, selectedMonth, i + 1), 'currentMonth'),
      );

      const remaining = (prevMonthDays.length + currentMonthDays.length) % 7;
      const nextMonthDays = Array.from({ length: remaining ? 7 - remaining : 0 }, (_, i) =>
        createDay(new Date(selectedYear, selectedMonth + 1, i + 1), 'nextMonth'),
      );

      setDays([...prevMonthDays, ...currentMonthDays, ...nextMonthDays]);
    } else if (selectedView === 'week') {
      const weekDays = Array.from({ length: 7 }, (_, i) =>
        createDay(
          new Date(
            selectedWeekStartDate.getFullYear(),
            selectedWeekStartDate.getMonth(),
            selectedWeekStartDate.getDate() + i,
          ),
          'currentMonth',
        ),
      );
      setDays(weekDays);
    } else if (selectedView === 'year') {
      const yearDays: Day[] = [];
      for (let m = 0; m < 12; m++) {
        const daysInMonth = new Date(selectedYear, m + 1, 0).getDate();
        for (let d = 1; d <= daysInMonth; d++) {
          const date = new Date(selectedYear, m, d);
          yearDays.push(createDay(date, 'currentMonth'));
        }
      }
      setDays(yearDays);
    }
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
        setSelectedWeekStartDate((prev) => {
          const newDate = new Date(prev);
          newDate.setDate(prev.getDate() + daysToMove);

          const newMonth = newDate.getMonth();
          const newYear = newDate.getFullYear();

          setSelectedMonth(newMonth);
          setSelectedYear(newYear);

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

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    setSelectedWeekStartDate(startOfWeek);
  };

  const getWeekMonths = useMemo(() => {
    if (!days.length) return [];

    const weekStart = new Date(selectedWeekStartDate);
    const weekMonths = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      return date.getMonth();
    });

    const uniqueMonths = new Set(weekMonths);
    return Array.from(uniqueMonths).map((index) => months[index]);
  }, [days.length, selectedWeekStartDate, months]);

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
