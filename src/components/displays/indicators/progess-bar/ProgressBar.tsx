import { BaseComponent } from '@components/containers';
import { com } from 'src/types/common';
import { useBindSkin } from './ProgressBar.hook';
import { ProgressBarProps } from './properties';

/**
 * Simple ProgressBar component.
 * @param props
 * @returns
 */
const ProgressBar: com.qbit.Shell<ProgressBarProps> = (props: com.qbit.ShellProps<ProgressBarProps>) => {
  const bindHandlers = useBindSkin(props);

  return <BaseComponent {...bindHandlers} />;
};

export default ProgressBar;
