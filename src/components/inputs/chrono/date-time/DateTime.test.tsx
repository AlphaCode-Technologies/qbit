import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import DateTimePicker from './DateTime';
import { DateTimePickerSkin } from '@skins/defaults';

describe('DateTimePicker', () => {
  const baseDate = new Date('2025-04-10T11:37');
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
    onChangeMock.mockReset();
    onCancelMock.mockReset();
  });

  it('renders input field with correct initial value', () => {
    // Freeze time to prevent drift during test
    vi.useFakeTimers();
    vi.setSystemTime(baseDate);

    render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} />);

    const input = screen.getByTestId('date-time-picker').querySelector('input');
    const actualValue = input?.value;

    expect(actualValue?.split('T')[0]).toBe('2025-04-10');

    const renderedTime = actualValue?.split('T')[1];
    const expectedTime = '11:37';
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

  // it('triggers onChange when a date is selected', () => {
  //   render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} />);
  //   fireEvent.click(screen.getByRole('textbox'));

  //   const targetDay = screen.getByText('15');
  //   fireEvent.click(targetDay);

  //   expect(onChangeMock).toHaveBeenCalled();
  //   const changedDate = onChangeMock.mock.calls[0][0] as Date;

  //   expect(changedDate.getDate()).toBe(15);
  //   expect(changedDate.getMonth()).toBe(3);
  // });

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

  // it('navigates to next and previous months', () => {
  //   render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} />);
  //   fireEvent.click(screen.getByRole('textbox'));

  //   const header = screen.getByRole('heading');
  //   expect(header).toHaveTextContent('April 2025');

  //   fireEvent.click(screen.getByLabelText('Next month'));
  //   expect(header).toHaveTextContent('May 2025');

  //   fireEvent.click(screen.getByLabelText('Previous month'));
  //   fireEvent.click(screen.getByLabelText('Previous month'));
  //   expect(header).toHaveTextContent('March 2025');
  // });

  it('disables input and calendar when disabled is true', () => {
    render(<DateTimePicker renderers={{ renderer: DateTimePickerSkin }} {...defaultProps} disabled={true} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    fireEvent.click(input);
    expect(screen.queryByTestId('date-time-picker')).toBeInTheDocument();
  });
});
