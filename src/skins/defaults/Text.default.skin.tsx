import { TextInputProps } from '@components/inputs';
import { com } from 'src/types/common';

const Skin: com.qbit.Skin<TextInputProps> = (props: com.qbit.SkinProps<TextInputProps>) => {
  const {
    name,
    id,
    type,
    value,
    placeholder,
    required,
    disabled,
    readOnly,
    min,
    max,
    step,
    maxLength,
    autoComplete,
    tabIndex,
    testId,
    onChange,
    onFocus,
    onBlur,
    onKeyPress,
    onKeyDown,
    onKeyUp,
  } = props;

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      min={min}
      max={max}
      step={step}
      maxLength={maxLength}
      autoComplete={autoComplete}
      className="block w-full px-3 py-1.5 rounded-md outline outline-1 outline-gray-300 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-gray-600 sm:text-sm/6"
      tabIndex={tabIndex}
      data-testid={testId}
      onChange={(event) => onChange?.(event)}
      onFocus={(event) => onFocus?.(event)}
      onBlur={(event) => onBlur?.(event)}
      onKeyPress={(event) => onKeyPress?.(event)}
      onKeyDown={(event) => onKeyDown?.(event)}
      onKeyUp={(event) => onKeyUp?.(event)}
    />
  );
};

export default Skin;
