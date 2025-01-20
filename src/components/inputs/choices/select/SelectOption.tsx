import { BaseComponent } from '@components/containers';

const SelectOption: com.qbit.Shell<SelectOption> = (props) => {
  const { onChange, label, disabled } = props;

  const handleClick = () => {
    if (!disabled) {
      onChange?.(label);
    }
  };

  return (
    <div className="p-1" onClick={handleClick} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <BaseComponent {...props}>{label}</BaseComponent>
    </div>
  );
};

export default SelectOption;
