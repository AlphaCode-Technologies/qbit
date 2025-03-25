import { BaseComponent } from '@components/containers';
import { BadgeProps } from './properties';
import { com } from 'src/types/common';

/**
 * Badge component.
 * @param props
 * @returns JSX.Element
 */

const Badge: com.qbit.Shell<BadgeProps> = (props: com.qbit.ShellProps<BadgeProps>) => {
  return <BaseComponent {...props} />;
};

export default Badge;
