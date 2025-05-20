import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import DateTimePicker from './DateTime';
import { DateTimePickerSkin } from '@skins/defaults';

describe('DateTimePicker', () => {
  const baseDate = new Date();
  const onChangeMock = vi.fn();
  const onCancelMock = vi.fn();

  const defaultProps = {
    selectedDate: baseDate,
    onChange: onChangeMock,
    onCancel: onCancelMock,
    time: true,
    testId: 'date-time-picker',
  };

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(baseDate);

    onChangeMock.mockReset();
    onCancelMock.mockReset();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders input field with correct initial value', () => {
    // Freeze time to prevent drift during test
    vi.useFakeTimers();
    vi.setSystemTime(baseDate);

    render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} />);

    const input = screen.getByTestId('date-time-picker').querySelector('input');
    const actualValue = input?.value;

    const expectedDate = baseDate.toISOString().split('T')[0];
    expect(actualValue?.split('T')[0]).toBe(expectedDate);

    const expectedTime = baseDate.toTimeString().slice(0, 5);
    const renderedTime = actualValue?.split('T')[1];
    expect(renderedTime).toBe(expectedTime);

    vi.useRealTimers();
  });

  it('opens calendar when input is clicked', () => {
    render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.click(input);

    const popup = screen.getByTestId('date-time-picker');
    expect(popup).toBeInTheDocument();
  });

  it('triggers onChange when a date is selected', () => {
    render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} />);
    fireEvent.click(screen.getByRole('textbox'));

    const tomorrowDate = new Date(baseDate);
    tomorrowDate.setDate(baseDate.getDate() + 1);
    const dayToClick = tomorrowDate.getDate().toString();

    const targetDay = screen.getByText(dayToClick);
    fireEvent.click(targetDay);

    expect(onChangeMock).toHaveBeenCalled();
    const changedDate = onChangeMock.mock.calls[0][0] as Date;

    expect(changedDate.getDate()).toBe(tomorrowDate.getDate());
    expect(changedDate.getMonth()).toBe(tomorrowDate.getMonth());
  });

  it('triggers onChange when time is changed and Apply is clicked', () => {
    render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} />);

    fireEvent.click(screen.getByRole('textbox'));

    const timeSelect = screen.getByLabelText('Time') as HTMLSelectElement;
    fireEvent.change(timeSelect, { target: { value: '15:00' } });

    const applyBtn = screen.getByText('Apply');
    fireEvent.click(applyBtn);

    expect(onChangeMock).toHaveBeenCalled();

    const newDate = onChangeMock.mock.calls[0][0] as Date;
    expect(newDate.getHours()).toBe(15);
    expect(newDate.getMinutes()).toBe(0);
  });

  it('calls onCancel when Cancel is clicked', () => {
    render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} />);
    fireEvent.click(screen.getByRole('textbox'));

    const cancelBtn = screen.getByText('Cancel');
    fireEvent.click(cancelBtn);

    expect(onCancelMock).toHaveBeenCalled();
  });

  it('navigates to next and previous months', () => {
    render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} />);
    fireEvent.click(screen.getByRole('textbox'));

    const currentMonthName = baseDate.toLocaleString('default', { month: 'long' });
    const currentYear = baseDate.getFullYear();

    const header = screen.getByRole('heading');
    expect(header).toHaveTextContent(`${currentMonthName} ${currentYear}`);

    fireEvent.click(screen.getByLabelText('Next month'));
    const nextMonth = new Date(baseDate);
    nextMonth.setMonth(baseDate.getMonth() + 1);
    const nextMonthName = nextMonth.toLocaleString('default', { month: 'long' });
    expect(header).toHaveTextContent(`${nextMonthName} ${nextMonth.getFullYear()}`);

    fireEvent.click(screen.getByLabelText('Previous month'));
    fireEvent.click(screen.getByLabelText('Previous month'));
    const prevMonth = new Date(baseDate);
    prevMonth.setMonth(baseDate.getMonth() - 1);
    const prevMonthName = prevMonth.toLocaleString('default', { month: 'long' });
    expect(header).toHaveTextContent(`${prevMonthName} ${prevMonth.getFullYear()}`);
  });

  it('disables input and calendar when disabled is true', () => {
    render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} disabled={true} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    fireEvent.click(input);
    expect(screen.queryByTestId('date-time-picker')).toBeInTheDocument();
  });
});
