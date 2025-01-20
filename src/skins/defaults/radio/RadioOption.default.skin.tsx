const RadioOptionSkin: com.qbit.Shell<OptionProps> = (props) => {
  const { label, testId, disabled, tabIndex, name, defaultValue, value, onChange } = props;

  return (
    <div className={`flex items-center ${disabled ? 'text-gray-500' : 'text-black'}`}>
      <svg
        className={`w-5 h-7`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex={tabIndex}
        onClick={() => onChange?.(value)}
        data-testid={testId}
        name={name}
      >
        <g clipPath="url(#clip0_105_90997)">
          <path
            d="M9.99999 5.66667C5.39999 5.66667 1.66666 9.4 1.66666 14C1.66666 18.6 5.39999 22.3333 9.99999 22.3333C14.6 22.3333 18.3333 18.6 18.3333 14C18.3333 9.4 14.6 5.66667 9.99999 5.66667ZM9.99999 20.6667C6.31666 20.6667 3.33332 17.6833 3.33332 14C3.33332 10.3167 6.31666 7.33333 9.99999 7.33333C13.6833 7.33333 16.6667 10.3167 16.6667 14C16.6667 17.6833 13.6833 20.6667 9.99999 20.6667Z"
            fill="currentColor"
          />
          {defaultValue === value && (
            <path
              d="M10 18.1667C12.3012 18.1667 14.1667 16.3012 14.1667 14C14.1667 11.6988 12.3012 9.83333 10 9.83333C7.69882 9.83333 5.83334 11.6988 5.83334 14C5.83334 16.3012 7.69882 18.1667 10 18.1667Z"
              fill="currentColor"
            />
          )}
        </g>
      </svg>
      <span className={`text-base font-medium m-0`}>{label}</span>
    </div>
  );
};

export default RadioOptionSkin;
