import { Shell } from '@components/containers';

const Option = ({
  properties,
  actions,
}: com.elem.Shell<AlphaElements.SelectOptionProps, AlphaElements.SelectActions>) => {
  return (
    <Shell<AlphaElements.SelectOptionProps, AlphaElements.SelectActions> properties={properties} actions={actions} />
  );
};

export default Option;
