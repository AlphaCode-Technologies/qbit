import { com } from 'src/types/common';

export type ImageProps = com.qbit.BaseProps & {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  aspectRatio?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  borderRadius?: string | number;
  testId?: string;
  disabled?: boolean;
};
