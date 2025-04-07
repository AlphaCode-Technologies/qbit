import { BaseComponent } from '@components/containers';
import { EmptyStateProps } from './properties';
import { com } from 'src/types/common';

const EmptyState: com.qbit.Shell<EmptyStateProps> = (props: com.qbit.ShellProps<EmptyStateProps>) => {
  return <BaseComponent {...props} />;
};

export default EmptyState;
