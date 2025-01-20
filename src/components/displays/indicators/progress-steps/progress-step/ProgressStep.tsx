import { BaseComponent, useGetChildren } from '@components/containers';

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
