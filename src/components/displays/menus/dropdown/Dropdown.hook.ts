import { useEffect, useRef, useState } from 'react';
import { DropdownProps } from './properties';

export const useBindSkin = (params: DropdownProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as HTMLElement) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as HTMLElement)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log('Dropdown Props:', params);
  }, [params]);

  return {
    isOpen,
    toggleDropdown,
    menuRef,
    buttonRef,
  };
};
