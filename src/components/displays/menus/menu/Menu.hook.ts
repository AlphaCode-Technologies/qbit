import { useEffect, useRef, useState } from 'react';
import { MenuProps } from './properties';

export const useBindSkin = (params: MenuProps) => {
  const { context, reference } = params;

  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    if (!menuRef.current?.contains(event.target as HTMLElement)) {
      setMenuPosition({ x: event.pageX, y: event.pageY });
      setIsOpen(true);
    }
  };

  const handleClickOutSide = (event: MouseEvent) => {
    if (!menuRef.current?.contains(event.target as HTMLElement)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (context) {
      if (!reference) {
        throw new Error('No reference specified');
      }

      const referenceElement = reference.current;

      referenceElement?.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('click', handleClickOutSide);

      return () => {
        document.removeEventListener('click', handleClickOutSide);
        referenceElement?.removeEventListener('contextmenu', handleContextMenu);
      };
    } else {
      setIsOpen(true);
    }
  }, [context, reference]);

  useEffect(() => {
    if (menuRef.current && isOpen) {
      const { innerWidth, innerHeight } = window;
      const menu = menuRef.current.getBoundingClientRect();

      let newX = menuPosition.x;
      let newY = menuPosition.y;

      if (menu.right > innerWidth) {
        newX = innerWidth - menu.width;
      }

      if (menu.bottom > innerHeight) {
        newY = innerHeight - menu.height;
      }

      if (newX !== menuPosition.x || newY !== menuPosition.y) {
        setMenuPosition({ x: newX, y: newY });
      }
    }
  }, [menuPosition, isOpen]);

  return {
    isOpen,
    context,
    position: menuPosition,
    menuRef,
  };
};
