import { com } from 'src/types/common';
import { TextInputProps } from '@components/inputs';

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
    style,
    className,
    error,
    prefixIcon,
    postfixIcon,
    onChange,
    onFocus,
    onBlur,
    onKeyPress,
    onKeyDown,
    onKeyUp,
  } = props;

  return (
    <div
      className={`flex items-center gap-0.5 border-b-2 py-2 px-2 transition-all duration-300 ${disabled ? 'bg-gray-100' : ''} ${error ? 'border-red-600' : 'border-gray-400 focus-within:border-violet-600'} ${className ?? ''}`}
      style={style}
    >
      {prefixIcon}
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
        className={`w-full px-2 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 outline-0 ${error ? 'text-red-600' : ''}`}
        tabIndex={tabIndex}
        data-testid={testId}
        onChange={(event) => onChange?.(event)}
        onFocus={(event) => onFocus?.(event)}
        onBlur={(event) => onBlur?.(event)}
        onKeyPress={(event) => onKeyPress?.(event)}
        onKeyDown={(event) => onKeyDown?.(event)}
        onKeyUp={(event) => onKeyUp?.(event)}
      />
      {postfixIcon}
    </div>
  );
};

export default Skin;
