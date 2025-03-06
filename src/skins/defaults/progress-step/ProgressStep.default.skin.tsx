import { ProgressStepProps } from '@components/displays/indicators/progress-steps/progress-step/properties';
import { com } from 'src/types/common';

const ProgressStepSkin: com.qbit.Skin<ProgressStepProps> = (props: com.qbit.SkinProps<ProgressStepProps>) => {
  const { children } = props;

  return <div className="flex gap-4 items-center">{children}</div>;
};

export default ProgressStepSkin;
