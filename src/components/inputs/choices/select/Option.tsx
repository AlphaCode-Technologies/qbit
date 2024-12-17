import { Shell } from '@components/containers';

const Option = ({
  properties,
  actions,
}: com.elem.Shell<AlphaElements.OptionProperties, AlphaElements.SelectActions>) => {
  return (
    <Shell<AlphaElements.OptionProperties, AlphaElements.SelectActions> properties={properties} actions={actions} />
  );
};

export default Option;
