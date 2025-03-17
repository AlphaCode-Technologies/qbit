import { com } from 'src/types/common';

type DayType = 'prevMonth' | 'currentMonth' | 'nextMonth';

export type Day = {
  day: number;
  isToday: boolean;
  isWeekend: boolean;
  type: DayType;
};

export type CalendarProps = com.qbit.BaseProps & {
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
  handleMonthChange?: (direction: 'prev' | 'next') => void;
};
