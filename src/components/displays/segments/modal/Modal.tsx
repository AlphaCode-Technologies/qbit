import { createPortal } from 'react-dom';
import { BaseComponent, useGetChildren } from '@components/containers';

/**
 * Simple Modal component.
 * @param props
 * @returns
 */
const Modal: com.qbit.Shell<ModalProps> = (props: com.qbit.ShellProps<ModalProps>) => {
  const { children: oChildren, open, testId } = props;
  const children = useGetChildren<ModalProps, ModalProps>(props, oChildren);

  if (open)
    return createPortal(
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" data-testid={testId}>
        <BaseComponent {...props}>{children}</BaseComponent>
      </div>,
      document.body,
    );
};

export default Modal;
