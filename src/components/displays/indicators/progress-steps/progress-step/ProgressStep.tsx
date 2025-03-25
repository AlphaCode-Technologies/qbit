import { BaseComponent, useGetChildren } from '@components/containers';
import { ProgressStepItemProps, ProgressStepProps } from './properties';
import { com } from 'src/types/common';

/**
 * @param props
 * @returns
 */

const ProgressStep: com.qbit.Shell<ProgressStepProps, ProgressStepItemProps> = (
  props: com.qbit.ShellProps<ProgressStepProps, ProgressStepItemProps>,
) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<ProgressStepProps, ProgressStepItemProps>(rest, oChildren);

  return <BaseComponent {...rest}>{children}</BaseComponent>;
};

export default ProgressStep;
