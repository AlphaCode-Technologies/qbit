import { BaseComponent } from '@components/containers';
import { OptionProps } from './properties';
import { com } from 'src/types/common';

const RadioOption: com.qbit.Shell<OptionProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default RadioOption;
