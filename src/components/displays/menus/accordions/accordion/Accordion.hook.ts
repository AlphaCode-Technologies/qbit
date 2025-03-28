import React, { useState, useEffect, ReactNode, ReactElement } from 'react';
import { AccordionProps } from './properties';

export const useBindSkin = ({ alwaysShow }: AccordionProps, children: ReactNode) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // TODO need to add disabled function @rajinthan

  useEffect(() => {
    const childrenArray = React.Children.toArray(children) as ReactElement[];
    const initiallyOpenIndexes = childrenArray
      .map((child, index) => (child.props?.isOpen ? index : -1))
      .filter((i) => i !== -1);
    setOpenIndexes(!alwaysShow && initiallyOpenIndexes.length ? [initiallyOpenIndexes.at(-1)!] : initiallyOpenIndexes);
  }, [alwaysShow, children]);

  const handleClick = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : alwaysShow ? [...prev, index] : [index],
    );
  };

  return { openIndexes, onClick: handleClick };
};
