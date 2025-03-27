import { ReactNode } from 'react';
import { com } from 'src/types/common';

export type DropdownProps = com.qbit.BaseProps & {
  buttonLabel?: string;
  testId?: string;
};

export type DropdownItemProps = com.utils.Property<{
  name: string;
  icon?: string;
  link?: string;
  onChange?: (value: any) => void; // need to change it as onClick but in the hook file we have it as onchange so we cannot render the click
  content?: ReactNode;
}>;
