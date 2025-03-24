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
        viewBox={`0 0 80 80`}
        fill="currentColor"
        style={style}
      >
        <circle cx="70.00" cy="40.00" r="5" fill="currentColor" opacity="0.1" />
        <circle cx="64.27" cy="57.63" r="5" fill="currentColor" opacity="0.2" />
        <circle cx="49.27" cy="68.53" r="5" fill="currentColor" opacity="0.3" />
        <circle cx="30.72" cy="68.53" r="5" fill="currentColor" opacity="0.4" />
        <circle cx="15.72" cy="57.63" r="5" fill="currentColor" opacity="0.5" />
        <circle cx="10.00" cy="40.00" r="5" fill="currentColor" opacity="0.6" />
        <circle cx="15.72" cy="22.36" r="5" fill="currentColor" opacity="0.7" />
        <circle cx="30.72" cy="11.46" r="5" fill="currentColor" opacity="0.8" />
        <circle cx="49.27" cy="11.46" r="5" fill="currentColor" opacity="0.9" />
        <circle cx="64.27" cy="22.36" r="5" fill="currentColor" opacity="1.0" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skin;
