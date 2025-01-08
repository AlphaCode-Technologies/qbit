import { Children, cloneElement, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useBindSkin } from './Drawer.hook';

const Drawer = ({ children, ...rest }: com.elem.Shell<AlphaElements.DrawerProperties, AlphaElements.DrawerActions>) => {
  const { properties, options, getPropsAndActions } = useBindSkin(rest);
  const { open, testId, position } = properties;
  const { styles } = options ?? {};
  const {
    className = 'fixed z-[9999] pointer-events-auto bg-white box-border shadow-2xl shadow-blue-gray-900/10 p-4',
  } = styles ?? {};

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
        <div className={`${className} ${positionClass[position]}`}>
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

export default Drawer;
