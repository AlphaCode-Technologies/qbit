import { NumericRangeProps } from '@components/index';
import { com } from 'src/types/common';

const NumericRangePointer: com.qbit.Skin<NumericRangeProps> = (props: com.qbit.SkinProps<NumericRangeProps>) => {
  const { onChange, onBlur, onFocus, testId, ...otherProps } = props;
  return (
    <svg
      width="36"
      height="52"
      viewBox="18 0 36 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'inherit' }}
      {...otherProps}
    >
      <path
        d="M6.75 14C6.75 7.7868 11.7868 2.75 18 2.75C24.2132 2.75 29.25 7.7868 29.25 14C29.25 20.2132 24.2132 25.25 18 25.25C11.7868 25.25 6.75 20.2132 6.75 14Z"
        stroke="#C8C8C8"
        strokeWidth="1.5"
      />
      <path
        d="M6 14C6 7.37258 11.3726 2 18 2C24.6274 2 30 7.37258 30 14C30 20.6274 24.6274 26 18 26C11.3726 26 6 20.6274 6 14Z"
        fill="white"
      />
      <path
        d="M7 14C7 7.92487 11.9249 3 18 3C24.0751 3 29 7.92487 29 14C29 20.0751 24.0751 25 18 25C11.9249 25 7 20.0751 7 14Z"
        stroke="#C8C8C8"
        strokeWidth="2"
      />
    </svg>
  );
};

export default NumericRangePointer;
