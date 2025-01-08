import { Shell } from '@components/containers';

const DrawerContent = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.DrawerProperties, AlphaElements.DrawerActions>) => {
  return (
    <Shell<AlphaElements.DrawerProperties, AlphaElements.DrawerActions>
      properties={properties}
      actions={actions}
      options={options}
    />
  );
};

export default DrawerContent;
