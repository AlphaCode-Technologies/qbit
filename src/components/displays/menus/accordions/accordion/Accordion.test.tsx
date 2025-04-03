import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import { AccordionItemSkin, AccordionSkin } from '@skins/defaults/accordion';

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
        <AccordionItem label="Item 1">
          <div>Content 1</div>
        </AccordionItem>
        <AccordionItem label="Item 2">
          <div>Content 2</div>
        </AccordionItem>
        <AccordionItem label="Item 3">
          <div>Content 3</div>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('opens and closes an item when clicked', () => {
    render(
      <Accordion
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
      >
        <AccordionItem label="Item 1">
          <div>Content 1</div>
        </AccordionItem>
      </Accordion>,
    );

    const button = screen.getByRole('button', { name: /item 1/i });

    fireEvent.click(button);
    expect(screen.getByText('Content 1')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('only allows one item open at a time when alwaysShow is false', () => {
    render(
      <Accordion
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
        alwaysShow={false}
      >
        <AccordionItem label="Item 1">
          <div>Content 1</div>
        </AccordionItem>
        <AccordionItem label="Item 2">
          <div>Content 2</div>
        </AccordionItem>
      </Accordion>,
    );

    const item1Button = screen.getByRole('button', { name: /item 1/i });
    const item2Button = screen.getByRole('button', { name: /item 2/i });

    fireEvent.click(item1Button);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    fireEvent.click(item2Button);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('allows multiple items to be open when alwaysShow is true', () => {
    render(
      <Accordion
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
        alwaysShow={true}
      >
        <AccordionItem label="Item 1">
          <div>Content 1</div>
        </AccordionItem>
        <AccordionItem label="Item 2">
          <div>Content 2</div>
        </AccordionItem>
      </Accordion>,
    );

    const item1Button = screen.getByRole('button', { name: /item 1/i });
    const item2Button = screen.getByRole('button', { name: /item 2/i });

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    fireEvent.click(item1Button);
    fireEvent.click(item2Button);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('opens items with isOpen: true on initial render', () => {
    render(
      <Accordion
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
      >
        <AccordionItem label="Item 1" isOpen={true}>
          <div>Content 1</div>
        </AccordionItem>
        <AccordionItem label="Item 2">
          <div>Content 2</div>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('keeps only the last isOpen: true item open when alwaysShow is false', () => {
    render(
      <Accordion
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
        alwaysShow={false}
      >
        <AccordionItem label="Item 1" isOpen={true}>
          <div>Content 1</div>
        </AccordionItem>
        <AccordionItem label="Item 2" isOpen={true}>
          <div>Content 2</div>
        </AccordionItem>
        <AccordionItem label="Item 3">
          <div>Content 3</div>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });

  it('closes an open item when clicked', () => {
    render(
      <Accordion
        keyExtractor={(value: string, i: number) => `${value}-${i}`}
        renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
      >
        <AccordionItem label="Item 1" isOpen={true}>
          <div>Content 1</div>
        </AccordionItem>
      </Accordion>,
    );

    const button = screen.getByRole('button', { name: /item 1/i });

    expect(screen.getByText('Content 1')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });
});
