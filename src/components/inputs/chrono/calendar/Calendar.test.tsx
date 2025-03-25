import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Calendar from './Calendar';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import CalendarEvent from './CalendarEvent';
import { CalendarSkin, CalendarHeaderSkin, CalendarDaySkin, CalendarEventSkin } from '@skins/defaults';
import { CalendarProps } from './properties';
import { com } from 'src/types/common';

const DEFAULT_PROPERTIES: com.qbit.ShellProps<CalendarProps> = {
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: CalendarSkin },
};

const renderCalendar = (props: com.qbit.ShellProps<CalendarProps>) => {
  return render(
    <Calendar {...props}>
      <CalendarHeader renderers={{ renderer: CalendarHeaderSkin }} />
      <CalendarBody renderers={{ renderer: CalendarDaySkin }}>
        <CalendarEvent renderers={{ renderer: CalendarEventSkin }} events={props.events || []} />
      </CalendarBody>
    </Calendar>,
  );
};

describe('Calendar Component Test', () => {
  afterEach(cleanup);

  it('should render the Calendar with default properties', () => {
    const testId = 'calendar';
    renderCalendar({ ...DEFAULT_PROPERTIES, testId });
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  // it('should highlight today’s date', () => {
  //   const todayDate = new Date().getDate();
  //   renderCalendar(DEFAULT_PROPERTIES);
  //   const todayElement = screen.getByText(todayDate.toString());
  //   expect(todayElement).toHaveClass('bg-gray-500', 'text-white', 'rounded-full', 'px-1', 'py-0.5');
  // });

  it('should highlight a custom today’s date', () => {
    const today = new Date(2025, 8, 16);
    renderCalendar({ ...DEFAULT_PROPERTIES, today });
    const todayElement = screen.getByText('16');
    expect(todayElement).toHaveClass('bg-gray-500', 'text-white', 'rounded-full', 'px-1', 'py-0.5');
  });

  it('should render a custom start date', () => {
    renderCalendar({ ...DEFAULT_PROPERTIES, selectedDate: new Date(2012, 10, 30) });
    expect(screen.getByText('2012')).toBeInTheDocument();
    expect(screen.getByText('Nov')).toBeInTheDocument();
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

  // it('should set today’s date when clicking the Today button (default today)', () => {
  //   renderCalendar(DEFAULT_PROPERTIES);
  //   const todayButton = screen.getByText('Today');
  //   fireEvent.click(todayButton);
  //
  //   const todayDate = new Date().getDate();
  //   const todayElement = screen.getByText(todayDate.toString());
  //   expect(todayElement).toHaveClass('bg-gray-500', 'text-white', 'rounded-full');
  // });

  it('should set today’s date when clicking the Today button (custom today)', () => {
    const customToday = new Date(2025, 8, 16);
    renderCalendar({ ...DEFAULT_PROPERTIES, today: customToday });
    const todayButton = screen.getByText('Today');
    fireEvent.click(todayButton);

    const todayElement = screen.getByText('16');
    expect(todayElement).toHaveClass('bg-gray-500', 'text-white', 'rounded-full');
  });

  it('should render events correctly', () => {
    const events = [
      { date: new Date(), value: 'Today Event' },
      { date: new Date(new Date().setDate(new Date().getDate() - 1)), value: 'Yesterday Event' },
      { date: new Date(new Date().setDate(new Date().getDate() + 1)), value: 'Tomorrow Event' },
    ];
    renderCalendar({ ...DEFAULT_PROPERTIES, events });

    events.forEach((event) => {
      expect(screen.getByText(event.value)).toBeInTheDocument();
    });
  });

  it('should not render an event on a non-matching date', () => {
    const events = [{ date: new Date(2025, 5, 15), value: 'Future Event' }];
    renderCalendar({ ...DEFAULT_PROPERTIES, events });

    expect(screen.queryByText('Future Event')).not.toBeInTheDocument();
  });
});
