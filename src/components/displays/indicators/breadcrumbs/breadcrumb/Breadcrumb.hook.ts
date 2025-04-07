import { BreadcrumbItemProps } from './properties';

export const useBindSkin = (params: BreadcrumbItemProps) => {
  const { splitter = '/', childrenCount, index } = params;

  const isLastItem = index !== undefined && childrenCount !== undefined && index === childrenCount - 1;

  return {
    splitter: !isLastItem ? splitter : undefined,
  };
};
