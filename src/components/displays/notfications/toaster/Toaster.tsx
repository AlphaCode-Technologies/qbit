import { Shell } from '@components/containers';
import { createPortal } from 'react-dom';
import useBindSkin from './Toaster.hook';

const POSITIONS = {
  'top-left': 'top-0 left-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-0 right-0',
};

const Toaster = (props: com.elem.Shell<AlphaElements.ToasterProperties, AlphaElements.ToasterActions>) => {
  const { properties, actions, options } = useBindSkin(props);
  const { open, testId, position = 'top-right' } = properties;

  if (open) {
    return createPortal(
      <div className="fixed inset-0 flex z-50" data-testid={testId}>
        <div className={`absolute ${POSITIONS[position as AlphaElements.Position]}`}>
          <Shell<AlphaElements.ToasterProperties, AlphaElements.ToasterActions>
            properties={properties}
            actions={actions}
            options={options}
          />
        </div>
      </div>,
      document.body,
    );
  }
};

export default Toaster;
