import { useEffect, useState } from 'react';
import { ToasterProps } from './properties';
import { com } from 'src/types/common';

const useBindSkin = (props: com.qbit.ShellProps<ToasterProps>) => {
  const { open, duration = 3000, autoClose = true } = props;
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (duration > 0 && autoClose) {
      const timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, duration);

      return () => clearTimeout(timeoutId);
    }
  }, [duration, autoClose]);

  return { ...props, open: isOpen };
};

export default useBindSkin;
