import { com } from 'src/types/common';

export type DayType = 'prevMonth' | 'currentMonth' | 'nextMonth';
export type ViewType = 'year' | 'month' | 'week' | 'day';
export type NavigationDirection = 'prev' | 'next' | 'today';

// export type DayDate = {
//   year: number;
//   month: number;
//   day: number;
// };

export type Day = {
  date: Date;
  isToday: boolean;
  isWeekend: boolean;
  type: DayType;
};

export type CalendarProps = com.qbit.BaseProps &
  CalendarEventProps & {
    testId?: string;
    today?: Date;
    months?: string[];
    week?: string[];
    days?: Day[];
    prevDays?: number[];
    nextDays?: number[];
    selectedMonth?: number;
    setSelectedMonth?: (month: number) => void;
    selectedYear?: number;
    setSelectedYear?: (year: number) => void;
    selectedView?: ViewType;
    setSelectedView?: (view: ViewType) => void;
    selectedDate?: Date;
    handleDateChange?: (direction: NavigationDirection) => void;
    handleTodayClick?: () => void;
    selectDate?: (date: Date) => void;
    getWeekMonths?: string[];
  };

export type EventType = {
  date: Date;
  value: any;
};

export type CalendarEventProps = {
  day?: Day;
  events?: EventType[];
  selectEvent?: (event: EventType) => void;
};
