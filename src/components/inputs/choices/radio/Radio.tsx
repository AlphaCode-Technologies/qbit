import { Shell } from '@components/containers';

const Radio = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.RadioProperties, AlphaElements.RadioGroupActions>) => {
  return (
    <Shell<AlphaElements.SelectOptionProps, AlphaElements.SelectActions>
      properties={properties}
      actions={actions}
      options={options}
    />
  );
};

export default Radio;
