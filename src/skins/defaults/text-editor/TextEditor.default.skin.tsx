import { TextEditorProps } from '@components/inputs/text/text-editor/properties';
import { com } from 'src/types/common';
import { useEffect, useRef } from 'react';

const TextEditorSkin: com.qbit.Skin<TextEditorProps> = (props: com.qbit.SkinProps<TextEditorProps>) => {
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
    testId,
    disabled,
    fontColor,
    changeFontColor,
  } = props;

  const contentEditableRef = useRef<HTMLDivElement>(null);

  // Sync content with the contentEditable div
  useEffect(() => {
    if (contentEditableRef.current && content !== contentEditableRef.current.innerHTML) {
      contentEditableRef.current.innerHTML = content ?? '';
    }
  }, [content]);

  return (
    <div
      className={`border border-gray-300 rounded-lg shadow-md ${disabled ? 'cursor-not-allowed bg-gray-200' : 'bg-white'}`}
      data-testid={testId}
      aria-disabled={disabled}
    >
      <div className="p-3 border-b border-gray-300 bg-gray-50 flex flex-wrap gap-2">
        {/* Font Family Selector */}
        <select
          disabled={disabled}
          value={fontFamily}
          onChange={(e) => changeFontFamily?.(e.target.value)}
          className="p-1 border border-gray-300 rounded"
        >
          {fontOptions?.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>

        {/* Font Size Selector */}
        <select
          disabled={disabled}
          value={fontSize}
          onChange={(e) => changeFontSize?.(Number(e.target.value))}
          className="p-1 border border-gray-300 rounded"
        >
          {fontSizeOptions?.map((size) => (
            <option key={size} value={size}>
              {size}px
            </option>
          ))}
        </select>

        {/* Formatting Buttons */}
        <button
          disabled={disabled}
          onClick={toggleBold}
          className={`p-1 px-2 border border-gray-300 rounded ${isBold ? 'bg-gray-300' : 'bg-white'}`}
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          disabled={disabled}
          onClick={toggleItalic}
          className={`p-1 px-2 border border-gray-300 rounded ${isItalic ? 'bg-gray-300' : 'bg-white'}`}
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          disabled={disabled}
          onClick={toggleUnderline}
          className={`p-1 px-2 border border-gray-300 rounded ${isUnderline ? 'bg-gray-300' : 'bg-white'}`}
          title="Underline"
        >
          <u>U</u>
        </button>

        <input
          type="color"
          disabled={disabled}
          value={fontColor}
          onChange={(e) => changeFontColor?.(e.target.value)}
          className="w-10 h-8 border border-gray-300 rounded cursor-pointer"
        />
      </div>

      {/* Content Editable Area */}
      <div
        ref={contentEditableRef}
        className="p-4 min-h-[200px] outline-none"
        contentEditable={!disabled}
        onInput={handleContentChange}
        style={{
          fontFamily: fontFamily,
          fontSize: `${fontSize}px`,
          color: fontColor,
        }}
      />
    </div>
  );
};

export default TextEditorSkin;
