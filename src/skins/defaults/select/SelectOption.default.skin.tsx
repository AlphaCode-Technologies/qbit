const SelectOptionSkin: com.qbit.Shell<SelectOption> = (props) => {
  const { label, value, onChange, testId } = props;

  return (
    <div className="mb-2 ml-2">
      <svg
        width="305"
        height="48"
        viewBox="0 0 305 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => onChange?.(value)}
        data-testid={testId}
      >
        <rect x="1" y="0.5" width="303" height="47" rx="7.5" stroke="currentColor" />
        <path
          d="M24.5 32.3333C29.1024 32.3333 32.8333 28.6024 32.8333 24C32.8333 19.3976 29.1024 15.6667 24.5 15.6667C19.8976 15.6667 16.1667 19.3976 16.1667 24C16.1667 28.6024 19.8976 32.3333 24.5 32.3333Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="42.5" y="30" width="90" height="18" rx="9" fill="currentColor">
          {label}
        </text>
      </svg>
    </div>
  );
};

export default SelectOptionSkin;
