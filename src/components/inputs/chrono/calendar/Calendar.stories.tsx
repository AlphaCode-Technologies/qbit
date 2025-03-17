import { StoryFn } from '@storybook/react';
import Calendar from './Calendar';
import CalendarBody from './CalendarBody';
import { CalendarSkin, CalendarBodySkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Inputs/Chrono/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template: StoryFn = (args: any) => {
  return (
    <Calendar {...args}>
      <CalendarBody />
    </Calendar>
  );
};

export const Default = Template.bind({});
Default.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarBodySkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
};

export const CustomToday = Template.bind({});
CustomToday.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarBodySkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  today: new Date(2025, 10, 30),
};

export const CustomStartMonth = Template.bind({});
CustomStartMonth.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarBodySkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  selectedMonth: 10,
};

export const CustomStartYear = Template.bind({});
CustomStartYear.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarBodySkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  selectedYear: 2020,
};

export const CustomWeeks = Template.bind({});
CustomWeeks.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarBodySkin },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

export const CustomMonths = Template.bind({});
CustomMonths.args = {
  renderers: { renderer: CalendarSkin, childRenderer: CalendarBodySkin },
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
