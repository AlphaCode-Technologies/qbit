const Skin = ({ properties, actions }: AlphaElements.ButtonProps) => {
  const { value, disabled, tabIndex, testId } = properties;
  const { onClick } = actions ?? {};

  return (
    <button
      className={`py-2 px-4 rounded-md bg-gray-200 font-medium text-gray-800 ${disabled ? 'opacity-60' : 'hover:bg-gray-300'}`}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
    >
      {value}
    </button>
  );
};

export default Skin;
