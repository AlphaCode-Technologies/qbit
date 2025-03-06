import { BaseComponent } from '@components/containers';
import { LoaderProps } from './properties';
import { com } from 'src/types/common';

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
