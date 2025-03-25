import { useEffect, useRef, useState } from 'react';
import { SplitterProps } from './properties';
import { com } from 'src/types/common';

export const useBindSkin = (props: com.qbit.ShellProps<SplitterProps>) => {
  const { width, height, horizontal, resizable, testId } = props;
  const [style, setStyle] = useState({ width, height });
  const [isResizing, setIsResizing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (ref?.current) {
        if (!isResizing) return;
        const rect = ref.current.getBoundingClientRect();

        const parent = ref.current?.parentElement;
        if (parent && !horizontal) {
          const offsetY = event.clientY - rect.top;
          const siblings = Array.from(parent.children).filter((child) => child !== ref.current);

          let othersHeight = 0;
          siblings.forEach((element) => {
            othersHeight += element.clientHeight;
          });

          const minHeight = 0;
          const maxHeight = parent?.clientHeight - othersHeight;

          if (offsetY >= minHeight && offsetY <= maxHeight) {
            setStyle({ ...style, height: offsetY + 'px' });
          }
        } else if (parent) {
          const offsetX = event.clientX - rect.left;
          const siblings = Array.from(parent.children).filter((child) => child !== ref.current);

          let othersWidth = 0;
          siblings.forEach((element) => {
            othersWidth += element.clientWidth;
          });

          const minWidth = 0;
          const maxWidth = parent?.clientWidth - othersWidth;

          if (offsetX >= minWidth && offsetX <= maxWidth) {
            setStyle({ ...style, width: offsetX + 'px' });
          }
        }
      }
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, style, horizontal]);

  return {
    resizable,
    horizontal,
    style,
    ref,
    handleMouseDown,
    testId,
  };
};
