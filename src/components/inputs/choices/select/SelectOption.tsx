import { BaseComponent } from '@components/containers';
import { SelectOptionProps } from './properties';
import { com } from 'src/types/common';

const SelectOption: com.qbit.Shell<SelectOptionProps> = (props) => {
  const { onChange, label, disabled } = props;

  const handleClick = () => {
    if (!disabled) {
      onChange?.(label as any);
    }
  };

  return (
    <div className="p-1" onClick={handleClick} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <BaseComponent {...props}>{label}</BaseComponent>
    </div>
  );
};

export default SelectOption;
