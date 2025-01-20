import { BaseComponent } from '@components/containers';

/**
 * Simple Loader component.
 * @param props
 * @returns
 */
const Loader: com.qbit.Shell<LoaderProps> = (props: com.qbit.ShellProps<LoaderProps>) => {
  const { isLoading } = props;

  if (isLoading) {
    return <BaseComponent {...props} />;
  }
};

export default Loader;
