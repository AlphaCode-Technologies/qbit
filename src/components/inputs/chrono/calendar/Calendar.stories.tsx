import { StoryFn } from '@storybook/react';
import Calendar from './Calendar';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import CalendarEvent from './CalendarEvent';
import { CalendarDaySkin, CalendarEventSkin, CalendarHeaderSkin, CalendarSkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Inputs/Chrono/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template: StoryFn = (args: any) => {
  const { events, ...calendarProps } = args;

  return (
    <div className="w-[48rem] mx-auto">
      <Calendar {...calendarProps}>
        <CalendarHeader renderers={{ renderer: CalendarHeaderSkin }} />
        <CalendarBody
          renderers={{ renderer: CalendarDaySkin }}
          className="grid grid-cols-7 border-l border-t border-gray-300"
        >
          <CalendarEvent renderers={{ renderer: CalendarEventSkin }} events={events} />
        </CalendarBody>
      </Calendar>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarHeaderSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
};

export const CustomToday = Template.bind({});
CustomToday.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarHeaderSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  today: new Date(2025, 10, 30),
};

export const CustomSelectedDate = Template.bind({});
CustomSelectedDate.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarHeaderSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  selectedDate: new Date(2025, 10, 30),
};

export const CustomWeeks = Template.bind({});
CustomWeeks.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarHeaderSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

export const CustomMonths = Template.bind({});
CustomMonths.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarHeaderSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  months: [
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
  ],
};

export const WithEvents = Template.bind({});
WithEvents.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarHeaderSkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  events: [
    { date: new Date(), value: 'Today Event' },
    { date: new Date(new Date().setDate(new Date().getDate() - 1)), value: 'Yesterday Event' },
    { date: new Date(new Date().setDate(new Date().getDate() + 1)), value: 'Tomorrow Event 1' },
    { date: new Date(new Date().setDate(new Date().getDate() + 1)), value: 'Tomorrow Event 2' },
    { date: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 10, 14, 0), value: 'Previous Month Meeting' },
    { date: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 26, 9, 30), value: 'Client Call' },
    { date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 5, 16, 0), value: 'Next Month Review' },
    { date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 25, 11, 15), value: 'Company Retreat' },
    { date: new Date(new Date().setDate(new Date().getDate() - 7)), value: 'Last Week Standup' },
    { date: new Date(new Date().setDate(new Date().getDate() - 6)), value: 'Sprint Retrospective' },
    { date: new Date(new Date().setDate(new Date().getDate() + 7)), value: 'Next Week Kickoff' },
    { date: new Date(new Date().setDate(new Date().getDate() + 10)), value: 'Design Review' },
    { date: new Date(2025, 4, 15, 10, 0), value: 'Doctor Appointment' },
    { date: new Date(2025, 5, 30, 18, 30), value: 'Dinner with Family' },
  ],
};
