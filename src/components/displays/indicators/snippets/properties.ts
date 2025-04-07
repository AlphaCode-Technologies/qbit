import { com } from 'src/types/common';

export type SnippetProps = com.qbit.BaseProps & {
  testId?: string;
  width?: number;
  height?: number;
  language: 'HTML' | 'JS' | 'Python' | 'Java' | 'CSS' | 'Other';
  value: string;
};
