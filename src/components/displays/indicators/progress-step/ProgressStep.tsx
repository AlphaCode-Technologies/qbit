import { Shell } from '@components/containers';

const ProgressStep = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.ProgressStepProperties, AlphaElements.ProgressStepAction>) => {
  return (
    <Shell<AlphaElements.ProgressStepProperties, AlphaElements.ProgressStepAction>
      properties={properties}
      actions={actions}
      options={options}
    />
  );
};

export default ProgressStep;
