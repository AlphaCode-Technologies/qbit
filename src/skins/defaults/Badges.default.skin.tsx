import { BadgeProps } from '@components/index';
import { com } from 'src/types/common';

const sizeMap = {
  sm: { width: 80, height: 28 },
  md: { width: 100, height: 28 },
  lg: { width: 120, height: 28 },
  xl: { width: 130, height: 28 },
};

const DefaultSkin = (properties: com.qbit.ShellProps<BadgeProps>) => {
  const { disabled, size, testId, onClose, onClick, value, imageSrc, label, id, count } = properties;
  const dimension = sizeMap[size as AlphaElements.Size] || sizeMap['md'];

  return (
    <div className={`${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}>
      <svg
        width={dimension.width}
        height={dimension.height}
        viewBox="0 0 120 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-testid={testId}
      >
        <path
          d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H114C117.038 0.5 119.5 2.96243 119.5 6V22C119.5 25.0376 117.038 27.5 114 27.5H6C2.96244 27.5 0.5 25.0376 0.5 22V6Z"
          fill="white"
          stroke="#D0D5DD"
        />
        <foreignObject
          x="4"
          y="4"
          width="18"
          height="18"
          fill="#d9d9d9"
          onClick={() => {
            if (onClick) {
              onClick(!value as any);
            }
          }}
        >
          <input
            type="checkbox"
            checked={value}
            style={{
              transform: 'scale(1.3)',
              marginTop: '-2px',
              pointerEvents: 'none',
              borderRadius: 10,
              backgroundColor: '#d9d9d9',
            }}
          />
        </foreignObject>

        {imageSrc && (
          <>
            <circle cx="28" cy="14" r="8" stroke="#D0D5DD" fill="white" />
            <foreignObject x="20" y="7" width="16" height="16">
              <img src={imageSrc} alt="Badge Icon" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
            </foreignObject>
          </>
        )}

        <text x="45" y="18" fill="#000" fontSize="10" fontWeight="500">
          {label}
        </text>

        <rect x="82" y="6" width="20" height="16" rx="4" fill="#E0E0E0" />
        <text x="92" y="17" fill="#000" fontSize="10" fontWeight="500" textAnchor="middle">
          {count}
        </text>
        {onClose && (
          <g transform="translate(100, 4)">
            <path
              data-testid={`${testId}-close`}
              onClick={() => {
                onClose(id!);
              }}
              d="M13.5 6.5L6.5 13.5M6.5 6.5L13.5 13.5"
              stroke="#98A2B3"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default DefaultSkin;
