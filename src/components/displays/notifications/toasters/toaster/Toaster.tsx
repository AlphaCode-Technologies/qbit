import { BaseComponent, useGetChildren } from '@components/containers';
import { createPortal } from 'react-dom';
import useBindSkin from './Toaster.hook';
import { Position, ToasterProps } from './properties';
import { com } from 'src/types/common';

const POSITIONS = {
  'top-left': 'top-0 left-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-0 right-0',
};

const Toaster: com.qbit.Shell<ToasterProps> = (props: com.qbit.ShellProps<ToasterProps>) => {
  const { children: oChildren, ...rest } = props;
  const children = useGetChildren<ToasterProps>(rest, oChildren);
  const { open, position, testId } = useBindSkin(rest);

  if (open) {
    return createPortal(
      <div className="fixed inset-0 flex z-50" data-testid={testId}>
        <div className={`absolute ${POSITIONS[position as Position]}`}>
          <BaseComponent {...rest}>{children}</BaseComponent>
        </div>
      </div>,
      document.body,
    );
  }
};

export default Toaster;
