const Skin: com.elem.Skin<AlphaElements.SelectProperties, AlphaElements.SelectActions> = ({ properties }) => {
  const { value, testId } = properties;
  return (
    <svg
      width="345"
      height="56"
      viewBox="0 0 345 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
    >
      <g filter="url(#filter0_dd_57_12827)">
        <path
          d="M4 12C4 7.58172 7.58172 4 12 4H333C337.418 4 341 7.58172 341 12V44C341 48.4183 337.418 52 333 52H12C7.58172 52 4 48.4183 4 44V12Z"
          fill="white"
        />
        <path
          d="M4.5 12C4.5 7.85787 7.85786 4.5 12 4.5H333C337.142 4.5 340.5 7.85786 340.5 12V44C340.5 48.1421 337.142 51.5 333 51.5H12C7.85786 51.5 4.5 48.1421 4.5 44V12Z"
          stroke="#667085"
        />
        <g clipPath="url(#clip0_57_12827)">
          <path
            d="M28 36.3333C32.6024 36.3333 36.3333 32.6024 36.3333 28C36.3333 23.3976 32.6024 19.6667 28 19.6667C23.3976 19.6667 19.6667 23.3976 19.6667 28C19.6667 32.6024 23.3976 36.3333 28 36.3333Z"
            stroke="#667085"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text x="42.5" y="34" width="90" height="18" rx="9" fill="currentColor">
          {value?.label}
        </text>
      </g>
    </svg>
  );
};

export default Skin;
