import { useEffect, useRef, useState } from 'react';
import { com } from 'src/types/common';
import { TooltipPosition, TooltipProps } from './properties';

export const useBindSkin = (props: com.qbit.ShellProps<TooltipProps>) => {
  const { delay = 100, duration = 2000, position } = props;

  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutIds = useRef<number[]>([]);

  const [open, setOpen] = useState(false);
  const [adjustedPosition, setAdjustedPosition] = useState<TooltipPosition>(position);

  const checkPosition = () => {
    if (!tooltipRef.current) return;

    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;

    const hasSpace: Record<TooltipPosition, boolean> = {
      top: tooltipRect.top > 50,
      bottom: innerHeight - tooltipRect.bottom > 50,
      left: tooltipRect.left > 50,
      right: innerWidth - tooltipRect.right > 50,
    };

    if (!hasSpace[position]) {
      const opposite = getOpposite(position);
      if (hasSpace[opposite]) {
        setAdjustedPosition(opposite);
      } else {
        setAdjustedPosition('bottom');
      }
    }
  };

  const onHover = () => {
    timeoutIds.current.push(
      Number(
        setTimeout(() => {
          checkPosition();
          setOpen(true);
        }, delay),
      ),
    );

    timeoutIds.current.push(Number(setTimeout(() => setOpen(false), delay + duration)));
  };

  useEffect(() => {
    return () => {
      timeoutIds.current.forEach((id) => clearTimeout(id));
      timeoutIds.current = [];
    };
  }, []);

  return {
    ...props,
    open,
    onHover,
    position: adjustedPosition,
    tooltipRef,
  };
};

const getOpposite = (position: TooltipPosition): TooltipPosition => {
  const opposites: Record<TooltipPosition, TooltipPosition> = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  };
  return opposites[position] || 'bottom';
};
