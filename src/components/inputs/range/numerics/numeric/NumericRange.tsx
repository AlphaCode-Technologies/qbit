import { BaseComponent, useGetChildren } from '@components/containers';
import { NumericRangeProps } from './properties';
import { com } from 'src/types/common';

const NumericRange: com.qbit.Shell<NumericRangeProps> = (props: com.qbit.ShellProps<NumericRangeProps>) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<NumericRangeProps>(rest, oChildren);

  return (
    <div className="w-fit relative">
      <BaseComponent {...rest}>{children}</BaseComponent>
    </div>
  );
};

export default NumericRange;
