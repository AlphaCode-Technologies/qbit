import { BaseComponent } from '@components/containers';

const NumericRangePicker: com.qbit.Shell<NumericRangeProps> = (props) => {
  const { value, minValue = 0, maxValue = 100, testId } = props;
  return (
    <div
      className={`absolute -top-2.5`}
      style={{ left: `${((value - minValue) / (maxValue - minValue)) * 100}%` }}
      data-testid={testId}
    >
      <BaseComponent {...props} />
    </div>
  );
};

export default NumericRangePicker;
