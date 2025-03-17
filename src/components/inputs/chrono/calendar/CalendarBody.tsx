import { com } from 'src/types/common';
import { BaseComponent } from '@components/containers';
import { CalendarProps } from './properties';

const CalendarBody: com.qbit.Shell<CalendarProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default CalendarBody;
