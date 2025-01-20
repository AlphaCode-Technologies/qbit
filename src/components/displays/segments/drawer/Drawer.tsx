import { createPortal } from 'react-dom';
import { BaseComponent, useGetChildren } from '@components/containers';

/**
 * Simple Drawer component.
 * @param props
 * @returns
 */
const Drawer: com.qbit.Shell<DrawerProps> = (props: com.qbit.ShellProps<DrawerProps>) => {
  const { children: oChildren, open, position, testId } = props;
  const children = useGetChildren<DrawerProps, DrawerProps>(props, oChildren);

  const positionClass: Record<string, string> = {
    top: 'top-0 w-full h-fit',
    bottom: 'bottom-0 w-full h-fit',
    left: 'top-0 left-0 w-fit h-full',
    right: 'top-0 right-0 w-fit h-full',
  };

  if (open)
    return createPortal(
      <div
        className="fixed inset-0 w-full h-full pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm"
        data-testid={testId}
      >
        <div className={`fixed ${positionClass[position]}`}>
          <BaseComponent {...props}>{children}</BaseComponent>
        </div>
      </div>,
      document.body,
    );
};

export default Drawer;
