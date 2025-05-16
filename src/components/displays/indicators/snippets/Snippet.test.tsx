import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SnippetProps } from './properties';
import { com } from 'src/types/common';
import Snippet from './Snippet';
import { SnippetSkin } from '@skins/defaults';

const renderSnippet = ({ value, language }: com.qbit.ShellProps<SnippetProps>) => {
  return render(
    <Snippet
      renderers={{ renderer: SnippetSkin }}
      keyExtractor={(_: any, i: number) => `${i}`}
      value={value}
      language={language}
      testId="code-output"
    />,
  );
};

describe('Code Snippet', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders HTML content with highlighted tags', () => {
    renderSnippet({ value: `<div>Hello</div>`, language: 'HTML' });
    const output = screen.getAllByTestId('code-output');

    expect(output[0].innerHTML).toContain('&lt;');
    expect(output[0].innerHTML).toContain('<span class="snippet-html-tag">div</span>');
  });

  it('renders JavaScript keywords and functions', () => {
    renderSnippet({ value: `function greet() { return "hi"; }`, language: 'JS' });
    const output = screen.getAllByTestId('code-output');

    expect(output[0].innerHTML).toContain('<span class="snippet-keyword">function</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-function-call">greet(</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-keyword">return</span>');
    expect(output[0].innerHTML).toContain('"hi";');
  });

  it('renders Python keywords and comments', () => {
    renderSnippet({ value: `# Comment\ndef hello():\n  return True`, language: 'Python' });
    const output = screen.getAllByTestId('code-output');

    expect(output[0].innerHTML).toContain('<span class="snippet-comment"># Comment</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-keyword">def</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-function-call">hello(</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-keyword">return</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-keyword">True</span>');
  });

  it('renders CSS selectors and properties', () => {
    renderSnippet({ value: `.box { color: red; }`, language: 'CSS' });
    const output = screen.getAllByTestId('code-output');

    expect(output[0].innerHTML).toContain('<span class="snippet-selector">.box</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-property">color</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-value">red</span>');
  });

  it('renders Java code with keywords and functions', () => {
    renderSnippet({ value: `public class Test { void run() {} }`, language: 'Java' });
    const output = screen.getAllByTestId('code-output');

    expect(output[0].innerHTML).toContain('<span class="snippet-keyword">public</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-keyword">class</span>');
    expect(output[0].innerHTML).toContain('<span class="snippet-function-call">run</span>(');
  });

  it('renders raw content for unsupported languages', () => {
    renderSnippet({ value: `some unknown syntax`, language: 'Other' });

    const output = screen.getAllByTestId('code-output');

    expect(output[0].innerHTML).toContain(`some unknown syntax`);
  });
});
