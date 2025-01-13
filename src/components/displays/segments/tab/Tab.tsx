import { Shell } from '@components/containers';

const Tab = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.TabProperties, AlphaElements.TabAction>) => {
  return (
    <Shell<AlphaElements.TabProperties, AlphaElements.TabAction>
      properties={properties}
      actions={actions}
      options={options}
    />
  );
};

export default Tab;
