import { useEffect, useState } from 'react';

const useBindSkin = (props: com.qbit.ShellProps<ToasterProps>) => {
  const { open, duration = 3000, autoClose = true } = props;
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (duration > 0 && autoClose) {
      setTimeout(() => {
        setIsOpen(false);
      }, duration);
    }
  }, [duration, autoClose]);

  return { ...props, open: isOpen };
};

export default useBindSkin;
