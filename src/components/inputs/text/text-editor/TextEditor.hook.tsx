import { useState } from 'react';
import { com } from 'src/types/common';
import { TextEditorProps } from './properties';

const useTextEditor = (props: com.qbit.ShellProps<TextEditorProps>) => {
  const { initialContent = '', onChange } = props;
  const [content, setContent] = useState<string>(initialContent);
  const [fontFamily, setFontFamily] = useState<string>('Arial');
  const [fontSize, setFontSize] = useState<number>(16);
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isUnderline, setIsUnderline] = useState<boolean>(false);

  const handleContentChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const newContent = e.target.innerHTML;
    setContent(newContent);
    onChange(newContent);
  };

  const toggleBold = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const parentNode = range.commonAncestorContainer.parentElement;

    if (parentNode && parentNode.style.fontWeight === 'bold') {
      // If already bold, remove bold by unwrapping
      parentNode.style.fontWeight = 'normal';
    } else {
      // Apply bold
      const span = document.createElement('span');
      span.style.fontWeight = 'bold';
      span.appendChild(range.extractContents());
      range.deleteContents();
      range.insertNode(span);
    }

    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const parentNode = range.commonAncestorContainer.parentElement;

    if (parentNode && parentNode.style.fontStyle === 'italic') {
      // Remove italic
      parentNode.style.fontStyle = 'normal';
    } else {
      // Apply italic
      const span = document.createElement('span');
      span.style.fontStyle = 'italic';
      span.appendChild(range.extractContents());
      range.deleteContents();
      range.insertNode(span);
    }

    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const parentNode = range.commonAncestorContainer.parentElement;

    if (parentNode && parentNode.style.textDecoration === 'underline') {
      // Remove underline
      parentNode.style.textDecoration = 'none';
    } else {
      // Apply underline
      const span = document.createElement('span');
      span.style.textDecoration = 'underline';
      span.appendChild(range.extractContents());
      range.deleteContents();
      range.insertNode(span);
    }

    setIsUnderline(!isUnderline);
  };

  const changeFontFamily = (font: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontFamily = font;
    span.appendChild(range.extractContents());
    range.insertNode(span);

    setFontFamily(font);
  };

  const changeFontSize = (size: number) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontSize = `${size}px`;
    span.appendChild(range.extractContents());
    range.insertNode(span);

    setFontSize(size);
  };

  const [fontColor, setFontColor] = useState<string>('#000000'); // default black

  const changeFontColor = (color: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.color = color;
    span.appendChild(range.extractContents());
    range.deleteContents();
    range.insertNode(span);

    setFontColor(color);
  };

  return {
    content,
    fontFamily,
    fontSize,
    isBold,
    isItalic,
    isUnderline,
    handleContentChange,
    toggleBold,
    toggleItalic,
    toggleUnderline,
    changeFontFamily,
    changeFontSize,
    fontOptions: props.fontOptions || ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia'],
    fontSizeOptions: props.fontSizeOptions || [10, 12, 14, 16, 18, 20, 24, 28, 32, 36],
    fontColor,
    changeFontColor,
  };
};

export default useTextEditor;
