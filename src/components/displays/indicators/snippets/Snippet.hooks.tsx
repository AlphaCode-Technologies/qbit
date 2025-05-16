import { com } from 'src/types';
import { SnippetProps } from './properties';
import { useEffect, useState } from 'react';

const useBindSkin = (props: com.qbit.ShellProps<SnippetProps>) => {
  const { value: htmlContent, language } = props;
  const [output, setOutput] = useState();

  useEffect(() => {
    let value = htmlContent;
    if (language === 'HTML') {
      value = value
        ?.toString()
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="snippet-comment">$1</span>')
        .replaceAll(/(&lt;\/?)\s*(\b\w+)/g, '$1<span class="snippet-html-tag">$2</span>');
    } else if (language === 'JS') {
      value = value
        ?.toString()
        .replaceAll(
          /(\/\/.*)|(\/\*[\s\S]*?\*\/)|(\b(class|constructor|let|const|function|return|if|else|var|for|while|switch|new|this|and|or|not)\b)|(\b([a-zA-Z_$][\w$]*)\s*\()/g,
          (_: any, comment1: any, comment2: any, keyword: any, _fn: any, fnName: any) =>
            comment1 !== undefined
              ? `<span class="snippet-comment">${comment1}</span>`
              : comment2 !== undefined
                ? `<span class="snippet-comment">${comment2}</span>`
                : keyword !== undefined
                  ? `<span class="snippet-keyword">${keyword}</span>`
                  : `<span class="snippet-function-call">${fnName}</span>(`,
        );
    } else if (language === 'Python') {
      value = value
        ?.toString()
        .replaceAll(
          /(#.*)|('''[\s\S]*?'''|"""[\s\S]*?""")|(\b(class|def|if|else|elif|for|while|try|except|finally|with|return|and|or|not|is|None|True|False|import|from|as|lambda|break|continue|pass|raise|in)\b)|(\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\()/g,
          (_: any, comment1: any, comment2: any, keyword: any, _fn: any, fnName: any) =>
            comment1 !== undefined
              ? `<span class="snippet-comment">${comment1}</span>`
              : comment2 !== undefined
                ? `<span class="snippet-comment">${comment2}</span>`
                : keyword !== undefined
                  ? `<span class="snippet-keyword">${keyword}</span>`
                  : `<span class="snippet-function-call">${fnName}</span>(`,
        );
    } else if (language === 'CSS') {
      value = value.toString().replaceAll(
        /(\/\*[\s\S]*?\*\/)|((?:[#.]?[a-zA-Z_-][\w-]*\s*)+(?::[a-zA-Z-]+)?\s*\{)|(:[a-zA-Z-]+)|(\b\d+(\.\d+)?(px|em|rem|%|vh|vw)?\b)|(;)|(\b[a-zA-Z-]+\b)(\s*:\s*)(#[a-fA-F0-9]{3,6}|\b[a-zA-Z-]+\b|\d+(\.\d+)?(px|em|rem|%|vh|vw)?)/g,
        (
          match: any,
          comment: any,
          selectorGroup: any,
          _pseudo: any, // ignored
          _number: any, // ignored
          _decimal: any,
          _unit: any,
          _semicolon: any, // ignored
          property: any,
          colon: any,
          propValue: any,
        ) => {
          if (comment) return `<span class="snippet-comment">${comment}</span>`;

          if (selectorGroup) {
            let fullSelector = selectorGroup.trim();
            if (fullSelector.endsWith('{')) fullSelector = fullSelector.slice(0, -1).trim();

            // Extract pseudo-class if exists
            const pseudoMatch = fullSelector.match(/(:[a-zA-Z-]+)$/);
            const baseSelector = fullSelector.replace(/(:[a-zA-Z-]+)$/, '').trim();
            const pseudoClass = pseudoMatch?.[1] || '';

            return `<span class="snippet-selector">${baseSelector}</span>${pseudoClass}{`;
          }

          if (property)
            return `<span class="snippet-property">${property}</span>${colon}<span class="snippet-value">${propValue}</span>`;

          return match;
        },
      );
    } else if (language === 'Java') {
      value = value
        ?.toString()
        .replaceAll(
          /(\/\/.*)|(\/\*[\s\S]*?\*\/)|(\b(public|private|protected|class|interface|extends|implements|new|this|return|if|else|for|while|try|catch|finally|static|void|int|double|float|char|boolean|String|import|package|throws|throw|super)\b)|(?<!\.)\b([a-zA-Z_][\w]*)\s*\(/g,
          (_: any, singleLineComment: any, multiLineComment: any, keyword: any, _kwGroup: any, fnName: any) =>
            singleLineComment !== undefined
              ? `<span class="snippet-comment">${singleLineComment}</span>`
              : multiLineComment !== undefined
                ? `<span class="snippet-comment">${multiLineComment}</span>`
                : keyword !== undefined
                  ? `<span class="snippet-keyword">${keyword}</span>`
                  : `<span class="snippet-function-call">${fnName}</span>(`,
        );
    }
    setOutput(value);
  }, [htmlContent, language]);

  return { ...props, value: output };
};

export default useBindSkin;
