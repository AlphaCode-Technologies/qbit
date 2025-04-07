import { ChangeEvent } from 'react';
import { com } from 'src/types/common';

export type TextEditorProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    initialContent?: string;
    onChange: (htmlContent: string) => void;
    testId?: string;
    disabled?: boolean;
    fontOptions?: string[];
    fontSizeOptions?: number[];
    content?: string;
    fontFamily?: string;
    fontSize?: number;
    isBold?: boolean;
    isItalic?: boolean;
    isUnderline?: boolean;
    handleContentChange?: (e: ChangeEvent<HTMLDivElement>) => void;
    toggleItalic?: () => void;
    toggleBold?: () => void;
    toggleUnderline?: () => void;
    changeFontFamily?: (font: string) => void;
    changeFontSize?: (size: number) => void;
    contentEditableRef?: any;
    fontColor?: string;
    changeFontColor?: (color: string) => void;
  };
