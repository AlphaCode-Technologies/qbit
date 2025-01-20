import { useEffect, useRef, useState } from 'react';

export const useBindSkin = (props: com.qbit.ShellProps<TooltipProps>) => {
  const [open, setOpen] = useState(false);
  const timeoutIds = useRef([] as any[]);
  const { delay = 100, duration = 2000 } = props;

  const onHover = () => {
    timeoutIds.current.push(setTimeout(() => setOpen(true), delay));
    timeoutIds.current.push(setTimeout(() => setOpen(false), delay + duration));
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
  };
};
