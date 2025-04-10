import { BaseComponent } from '@components/containers';
import { DateTimePickerProps } from './properties';
import { com } from 'src/types/common';
import useBindSkin from './DateTime.hook';

/**
 * DateTimePicker component.
 */
const DateTimePicker: com.qbit.Shell<DateTimePickerProps> = (props) => {
  const hookProps = useBindSkin(props);

  return <BaseComponent {...props} {...hookProps} />;
};

export default DateTimePicker;
