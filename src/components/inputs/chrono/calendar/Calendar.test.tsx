import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Calendar from './Calendar';
import CalendarBody from './CalendarBody';
import { CalendarSkin, CalendarBodySkin } from '@skins/defaults';
import { CalendarProps } from './properties';
import { com } from 'src/types/common';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<CalendarProps> = {
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: CalendarSkin, childRenderer: CalendarBodySkin },
};

const renderCalendar = (props: com.qbit.ShellProps<CalendarProps>) => {
  return render(
    <Calendar {...props}>
      <CalendarBody />
    </Calendar>,
  );
};

describe('Calendar Component Test', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the Calendar with default properties', () => {
    const testId = 'calendar';

    renderCalendar({ ...DEFAULT_PROPERTIES, testId });
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it(`should highlight today's date`, () => {
    const todayDate = new Date().getDate();
    renderCalendar({ ...DEFAULT_PROPERTIES });

    const todayElement = screen.getByText(todayDate);
    expect(todayElement).toHaveClass('bg-gray-500');
    expect(todayElement).toHaveClass('text-white');
    expect(todayElement).toHaveClass('font-bold');
  });

  it(`should highlight custom today's date`, () => {
    const today = new Date(2025, 8, 16);
    renderCalendar({ ...DEFAULT_PROPERTIES, today });

    const todayElement = screen.getByText('16');
    expect(todayElement).toHaveClass('bg-gray-500');
    expect(todayElement).toHaveClass('text-white');
    expect(todayElement).toHaveClass('font-bold');
  });

  it('should render a custom start month', () => {
    renderCalendar({ ...DEFAULT_PROPERTIES, selectedMonth: 10 });
    expect(screen.getByText('Nov')).toBeInTheDocument();
  });

  it('should render a custom start year', () => {
    renderCalendar({ ...DEFAULT_PROPERTIES, selectedYear: 2020 });
    expect(screen.getByText('2020')).toBeInTheDocument();
  });

  it('should display custom week names', () => {
    const customWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    renderCalendar({ ...DEFAULT_PROPERTIES, week: customWeek });
    customWeek.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  it('should display custom month names', () => {
    const customMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    renderCalendar({ ...DEFAULT_PROPERTIES, months: customMonths });
    customMonths.forEach((month) => {
      expect(screen.getByText(month)).toBeInTheDocument();
    });
  });

  it('should navigate to the next month', () => {
    renderCalendar(DEFAULT_PROPERTIES);
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(screen.getByText('Apr')).toBeInTheDocument();
  });

  it('should navigate to the previous month', () => {
    renderCalendar(DEFAULT_PROPERTIES);
    const prevButton = screen.getByText('Prev');
    fireEvent.click(prevButton);
    expect(screen.getByText('Feb')).toBeInTheDocument();
  });
});
