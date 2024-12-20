import { Shell } from '@components/containers';

const ModalHeader = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.ModalProperties, AlphaElements.ModalActions>) => {
  return (
    <Shell<AlphaElements.ModalProperties, AlphaElements.ModalActions>
      properties={properties}
      actions={actions}
      options={options}
    />
  );
};

export default ModalHeader;
