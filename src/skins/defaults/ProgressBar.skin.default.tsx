const Skin: com.elem.Skin<AlphaElements.ProgressBarProperties, any> = ({ properties }) => {
  const { value, tabIndex, testId } = properties;

  return (
    <div tabIndex={tabIndex} data-testid={testId}>
      <div
        style={{
          height: '30px',
          marginLeft: `calc(${value}% - 1.5rem)`,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-14">
          <rect x="0" y="0" width="100%" height="30" rx="5" ry="5" fill="#f0f0f0" stroke="#000" strokeWidth="1" />

          <text x="28" y="15" textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="#333">
            {value}%
          </text>
        </svg>
      </div>

      <div className="w-full h-3 relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 2" className="w-full h-full">
          <line x1="0" y1="1" x2="100" y2="1" stroke="#EAECF0" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 2"
          preserveAspectRatio="none"
          className="h-full absolute top-0 left-0"
          style={{ width: `${value}%` }}
        >
          <line x1="0" y1="1" x2="100" y2="1" stroke="#344054" />
        </svg>
      </div>
    </div>
  );
};

export default Skin;
