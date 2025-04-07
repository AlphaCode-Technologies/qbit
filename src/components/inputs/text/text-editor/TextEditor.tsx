import { BaseComponent } from '@components/containers';
import { com } from 'src/types/common';
import useTextEditor from './TextEditor.hook';
import { TextEditorProps } from './properties';

/**
 * TextEditor component.
 * @param props
 * @returns JSX.Element
 */
const TextEditor: com.qbit.Shell<TextEditorProps> = (props: com.qbit.ShellProps<TextEditorProps>) => {
  const { ...rest } = props;

  const {
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
    fontOptions,
    fontSizeOptions,
    fontColor,
    changeFontColor,
  } = useTextEditor(rest);

  return (
    <BaseComponent
      {...props}
      content={content}
      fontFamily={fontFamily}
      fontSize={fontSize}
      isBold={isBold}
      isItalic={isItalic}
      isUnderline={isUnderline}
      handleContentChange={handleContentChange}
      toggleBold={toggleBold}
      toggleItalic={toggleItalic}
      toggleUnderline={toggleUnderline}
      changeFontFamily={changeFontFamily}
      changeFontSize={changeFontSize}
      fontOptions={fontOptions}
      fontSizeOptions={fontSizeOptions}
      fontColor={fontColor}
      changeFontColor={changeFontColor}
    />
  );
};

export default TextEditor;
