import { AccordionItemSkin, AccordionSkin } from '@skins/defaults/accordion';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

describe('Accordion Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders all AccordionItems with their labels', () => {
    render(
      <Accordion
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
      >
        <AccordionItem label="Item 1" content={<div>Content 1</div>} />
        <AccordionItem label="Item 2" content={<div>Content 2</div>} />
        <AccordionItem label="Item 3" content={<div>Content 3</div>} />
      </Accordion>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });

  it('toggles open and closed states for individual AccordionItems', () => {
    render(
      <Accordion
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
      >
        <AccordionItem label="Item 1" content={<div>Content 1</div>} />
        <AccordionItem label="Item 2" content={<div>Content 2</div>} />
      </Accordion>,
    );

    const item1Button = screen.getByRole('button', { name: /item 1/i });
    const item2Button = screen.getByRole('button', { name: /item 2/i });

    // Initially closed
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    // Open Item 1
    fireEvent.click(item1Button);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    // Open Item 2
    fireEvent.click(item2Button);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();

    // Close Item 1
    fireEvent.click(item1Button);
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('renders the label correctly', () => {
    render(<AccordionItemSkin label="Test Label" content={<div>Test Content</div>} />);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('toggles open and closed states on click', () => {
    render(<AccordionItemSkin label="Test Label" content={<div>Test Content</div>} />);

    const button = screen.getByRole('button', { name: /test label/i });

    // Initially closed
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    fireEvent.click(button);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'true');

    // Click to close
    fireEvent.click(button);
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('calls the onChange callback when toggling', () => {
    const onChangeMock = vi.fn();
    render(<AccordionItemSkin label="Test Label" content={<div>Test Content</div>} onChange={onChangeMock} />);

    const button = screen.getByRole('button', { name: /test label/i });

    // Click to open
    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(true);

    // Click to close
    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledTimes(2);
    expect(onChangeMock).toHaveBeenCalledWith(false);
  });

  it('renders children correctly', () => {
    render(
      <AccordionItemSkin label="Test Label">
        <div>Child Content</div>
      </AccordionItemSkin>,
    );

    const button = screen.getByRole('button', { name: /test label/i });

    // Initially closed
    expect(screen.queryByText('Child Content')).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(button);
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});
