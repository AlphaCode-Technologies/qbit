const ProgressStepItemSkin: com.qbit.Skin<ProgressStepItemProps> = (props) => {
  const { label, active, completed, disabled } = props;

  let textColor = 'text-gray-500';
  let circleBorder = 'stroke-gray-300';
  let circleFill = 'fill-white';
  let textFill = 'gray';

  if (disabled) {
    textColor = 'text-gray-400';
    circleBorder = 'stroke-gray-400';
    circleFill = 'fill-gray-100';
    textFill = 'lightgray';
  } else if (completed) {
    textColor = 'text-green-600';
    circleBorder = 'stroke-green-600';
    circleFill = 'fill-green-600';
    textFill = 'white';
  } else if (active) {
    textColor = 'text-blue-600';
    circleBorder = 'stroke-blue-600';
    circleFill = 'fill-blue-100';
    textFill = 'black';
  }

  return (
    <div className={`flex flex-col items-center text-center ${textColor}`}>
      <svg width="40" height="38" className="">
        <circle cx="12" cy="12" r="11" className={`${circleFill} ${circleBorder}`} strokeWidth="2" />
        {completed && (
          <text x="30%" y="36%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fill={textFill}>
            ✔
          </text>
        )}
      </svg>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default ProgressStepItemSkin;
