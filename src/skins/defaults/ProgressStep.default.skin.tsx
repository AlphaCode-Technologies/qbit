const ProgressStepSkin: com.elem.Skin<AlphaElements.ProgressStepProperties, AlphaElements.ProgressStepAction> = ({
  properties,
  actions = {},
}) => {
  const { name, index, completed, active, total, disabled } = properties;
  const { onClick } = actions;

  let fillColor: string;
  if (completed) {
    fillColor = '#34D399';
  } else if (disabled) {
    // Ensure this is checked after completed
    fillColor = '#000000';
  } else if (active) {
    fillColor = '#5547f5';
  } else {
    fillColor = '#d3d1e6';
  }

  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="80"
        onClick={(e) => {
          onClick?.(e);
        }}
      >
        <g transform="translate(0, 10)">
          <circle cx="40" cy="30" r="20" fill={fillColor} />
          {completed ? (
            <text x="40" y="36" textAnchor="middle" fontSize="16" fill="#FFFFFF" fontWeight="bold">
              ✓
            </text>
          ) : (
            <text x="40" y="36" textAnchor="middle" fontSize="16" fill="#FFFFFF" fontWeight="bold">
              {index && index + 1}
            </text>
          )}
          <text x="45" y="65" textAnchor="middle" fontSize="12" fill="#374151">
            {name}
          </text>
        </g>
      </svg>
      {index !== undefined && total !== undefined && index < total - 1 && (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" aria-label="line" role="img">
          <line x1="0" y1="35" x2="60" y2="35" stroke="#D1D5DB" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
};

export default ProgressStepSkin;
