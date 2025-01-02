import { Shell } from '@components/containers';

const Option = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.SelectOptionProps, AlphaElements.SelectActions>) => {
  return (
    <Shell<AlphaElements.SelectOptionProps, AlphaElements.SelectActions>
      properties={properties}
      actions={actions}
      options={options}
    />
  );
};

export default Option;
