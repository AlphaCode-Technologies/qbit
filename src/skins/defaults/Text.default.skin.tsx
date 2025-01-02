const Skin: com.elem.Skin<AlphaElements.TextProperties, AlphaElements.TextAction> = ({ properties, actions }) => {
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
  } = properties;

  const { onChange } = actions ?? {};

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
    />
  );
};

export default Skin;
