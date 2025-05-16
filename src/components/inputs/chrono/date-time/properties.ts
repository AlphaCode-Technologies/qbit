import { com } from 'src/types/common';

export type DateTimePickerProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    date?: Date;
    time?: boolean;
    onChange: (date: Date) => void;
    onCancel?: () => void;
    testId?: string;
    disabled?: boolean;
    selectedDate: Date;
    selectedTime?: string;
    currentMonth?: number;
    currentYear?: number;
    daysInMonth?: number[];
    firstDayOfMonth?: number;
    timeOptions?: string[];
    handleDateChange?: (day: number) => void;
    handleTimeChange?: (time: string) => void;
    handleApply?: () => void;
    handleCancel?: () => void;
    goToPreviousMonth?: () => void;
    goToNextMonth?: () => void;
  };
