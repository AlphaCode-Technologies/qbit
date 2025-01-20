import { BaseComponent } from '@components/containers';

/**
 * Simple Avatar component.
 * @param props
 * @returns
 */
const Avatar: com.qbit.Shell<AvatarProps> = (props: com.qbit.ShellProps<AvatarProps>) => {
  return <BaseComponent {...props} />;
};

export default Avatar;
