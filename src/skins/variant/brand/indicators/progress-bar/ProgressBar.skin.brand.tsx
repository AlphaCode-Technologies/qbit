import { ProgressBarProps } from '@components/displays';
import { com } from 'src/types/common';

const Skin: com.qbit.Skin<ProgressBarProps> = (props: com.qbit.SkinProps<ProgressBarProps>) => {
  const { value, className, metaData, keyExtractor, ...rest } = props;

  return (
    <div className={`relative w-40 h-40 text-violet-500 ${className ?? ''}`} {...rest}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" strokeWidth="8" stroke="currentColor" className="text-gray-200" />

        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          stroke="currentColor"
          className="rotate-[-90deg] origin-center transition-all duration-1000 ease-in-out"
          style={{
            strokeDasharray: 283,
            strokeDashoffset: 283 - (283 * value) / 100,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-sm text-gray-500">{metaData}</span>
        <span className="text-2xl font-bold text-gray-900">{value}%</span>
      </div>
    </div>
  );
};

export default Skin;
