import { BaseComponent, useGetChildren } from '@components/containers';
import { useBindSkin } from './Tooltip.hooks';
import { TooltipProps } from './properties';
import { com } from 'src/types/common';

const CLASSES: Record<string, string> = {
  top: 'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1',
  bottom: 'absolute top-full left-1/2 transform -translate-x-1/2 mt-1',
  left: 'absolute top-1/2 right-full transform -translate-y-1/2 mr-1',
  right: 'absolute top-1/2 left-full transform -translate-y-1/2 ml-1',
};

/**
 * Simple tool tip component.
 * @param props
 * @returns
 */
const Tooltip: com.qbit.Shell<TooltipProps> = (props: com.qbit.ShellProps<TooltipProps>) => {
  const { children: oChildren, ...rest } = props;

  const { label, position, open, onHover, testId, tooltipRef } = useBindSkin(rest);

  const children = useGetChildren<TooltipProps>(rest, oChildren);

  return (
    <div className="relative w-fit h-fit" ref={tooltipRef}>
      <div onMouseOver={onHover} data-testid={testId}>
        {children}
      </div>
      {open && (
        <div className={`${CLASSES[position]}`}>
          <BaseComponent {...rest} position={position}>
            {label}
          </BaseComponent>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
