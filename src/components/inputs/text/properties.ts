import { com } from 'src/types/common';
import { ReactNode } from 'react';

export type InputType = 'text' | 'number' | 'password' | 'email' | 'tel' | 'url';

export type TextInputProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.KeyboardActions &
  com.utils.Property<{
    id: string;
    name: string;
    type: InputType;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    min?: number;
    max?: number;
    step?: number;
    maxLength?: number;
    autoComplete?: string;
    testId?: string;
    error?: boolean;
    prefixIcon?: ReactNode;
    postfixIcon?: ReactNode;
  }>;
