import { BaseComponent, useGetChildren } from '@components/containers';
import { SplitterProps } from './properties';
import { com } from 'src/types/common';

const Splitter: com.qbit.Shell<SplitterProps> = (props: com.qbit.ShellProps<SplitterProps>) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<SplitterProps>(rest, oChildren);
  const { width, height, testId } = rest;
  return (
    <div style={{ width, height }} data-testid={testId}>
      <BaseComponent {...rest}>{children}</BaseComponent>
    </div>
  );
};

export default Splitter;
