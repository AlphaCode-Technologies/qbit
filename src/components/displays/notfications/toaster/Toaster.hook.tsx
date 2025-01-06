import { useEffect, useState } from 'react';

const useBindSkin = ({
  properties,
  actions,
  options,
}: com.elem.Shell<AlphaElements.ToasterProperties, AlphaElements.ToasterActions>) => {
  const { open, duration = 3000, autoClose = true } = properties;
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (duration > 0 && autoClose) {
      setTimeout(() => {
        setIsOpen(false);
      }, duration);
    }
  }, [duration, autoClose]);

  return { properties: { ...properties, open: isOpen }, actions, options };
};

export default useBindSkin;
