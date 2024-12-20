import { Children, cloneElement, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useBindSkin } from './Modal.hook';

const Modal = ({ children, ...rest }: com.elem.Shell<AlphaElements.ModalProperties, AlphaElements.ModalActions>) => {
  const { properties, options, getPropsAndActions } = useBindSkin(rest);
  const { isOpen, testId } = properties;
  const { styles } = options ?? {};
  const { className = 'bg-white p-6 rounded-lg' } = styles ?? {};

  if (isOpen)
    return createPortal(
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" data-testid={testId}>
        <div className={className}>
          {Children.map(children as ReactElement[], (child: ReactElement) => {
            const {
              properties: childProperties,
              actions: childActions,
              options: childOptions,
            } = getPropsAndActions(child);

            return cloneElement(child, {
              properties: childProperties,
              actions: childActions,
              options: childOptions,
            });
          })}
        </div>
      </div>,
      document.body,
    );
};

export default Modal;
