import { LoaderProps } from '@components/index';
import { com } from 'src/types/common';

const Skin: com.qbit.Skin<LoaderProps> = (props: com.qbit.SkinProps<LoaderProps>) => {
  const { width = 30, height = 30, testId, className = 'text-gray-600', style } = props;

  return (
    <div role="status" data-testid={testId}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={`animate-spin ${className}`}
        viewBox="0 0 80 80"
        fill="none"
        style={style}
      >
        <rect x="36.66" width="6.66" height="20" rx="3.33" fill="currentColor" opacity="1.0" />
        <rect
          x="65.92"
          y="9.35"
          width="6.66"
          height="20"
          rx="3.33"
          transform="rotate(45 65.92 9.35)"
          fill="currentColor"
          opacity="0.12"
        />
        <rect
          x="80"
          y="36.66"
          width="6.66"
          height="20"
          rx="3.33"
          transform="rotate(90 80 36.66)"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="70.64"
          y="65.92"
          width="6.66"
          height="20"
          rx="3.33"
          transform="rotate(135 70.64 65.92)"
          fill="currentColor"
          opacity="0.375"
        />
        <rect
          x="43.33"
          y="80"
          width="6.66"
          height="20"
          rx="3.33"
          transform="rotate(180 43.33 80)"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="14.07"
          y="70.64"
          width="6.66"
          height="20"
          rx="3.33"
          transform="rotate(-135 14.07 70.64)"
          fill="currentColor"
          opacity="0.62"
        />
        <rect
          y="43.33"
          width="6.66"
          height="20"
          rx="3.33"
          transform="rotate(-90 0 43.33)"
          fill="currentColor"
          opacity="0.75"
        />
        <rect
          x="9.35"
          y="14.07"
          width="6.66"
          height="20"
          rx="3.33"
          transform="rotate(-45 9.35 14.07)"
          fill="currentColor"
          opacity="0.87"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skin;
