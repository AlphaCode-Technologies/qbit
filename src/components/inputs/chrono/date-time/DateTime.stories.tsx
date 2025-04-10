import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DateTimePickerProps } from './properties';
import DateTimePicker from './DateTime';
import { DateTimePickerSkin } from '@skins/defaults';

export default {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<DateTimePickerProps> = (args) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleCancel = () => {
    alert('Cancelled');
  };

  return (
    <DateTimePicker
      {...args}
      renderers={{ renderer: DateTimePickerSkin }}
      selectedDate={selectedDate}
      onChange={(date) => handleDateChange(date)}
      onCancel={handleCancel}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
  time: false,
  selectedDate: new Date(),
  onChange: (date: any) => console.log(date),
};

export const WithTimePicker = Template.bind({});
WithTimePicker.args = {
  date: new Date(),
  time: true,
  selectedDate: new Date(),
  onChange: (date: any) => console.log(date),
};

export const Disabled = Template.bind({});
Disabled.args = {
  date: new Date(),
  time: true,
  selectedDate: new Date(),
  onChange: (date: any) => console.log(date),
  disabled: true,
};

export const WithCancel = Template.bind({});
WithCancel.args = {
  date: new Date(),
  time: true,
  selectedDate: new Date(),
  onChange: (date: any) => console.log(date),
  onCancel: () => console.log('Cancelled'),
};

export const CustomMonth = Template.bind({});
CustomMonth.args = {
  date: new Date(),
  time: false,
  selectedDate: new Date(),
  currentMonth: 5, // June (0-based index)
  currentYear: 2025,
  onChange: (date: any) => console.log(date),
};

export const CustomDaysInMonth = Template.bind({});
CustomDaysInMonth.args = {
  date: new Date(),
  time: false,
  selectedDate: new Date(),
  daysInMonth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  onChange: (date: any) => console.log(date),
};
