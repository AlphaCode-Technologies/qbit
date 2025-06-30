import { BaseComponent } from '@components/containers';
import { ImageProps } from './properties';
import { com } from 'src/types/common';

/**
 * Image component.
 * @param props
 * @returns JSX.Element
 */
const Image: com.qbit.Shell<ImageProps> = (props: com.qbit.ShellProps<ImageProps>) => {
  return <BaseComponent {...props} />;
};

export default Image;
