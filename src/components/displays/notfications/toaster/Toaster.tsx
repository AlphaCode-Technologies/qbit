import { Shell } from '@components/containers';
import { createPortal } from 'react-dom';

const Toaster = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.ModalProperties, AlphaElements.ModalActions>) => {
  return createPortal(
    <div className="fixed inset-0 flex z-50">
      <Shell<AlphaElements.ModalProperties, AlphaElements.ModalActions>
        properties={properties}
        actions={actions}
        options={options}
      />
    </div>,
    document.body,
  );
};

export default Toaster;
