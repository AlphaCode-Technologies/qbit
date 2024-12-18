import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Accordion from './Accordion';
import DefaultAccordionSkin from '@skins/defaults/Accordion.default.skin';

const renderAccordion = ({ isOpen = false, onToggle }: any) => {
  const properties = {
    id: 'accordion-1',
    title: 'Click to Expand',
    content: 'This is the accordion content.',
    Renderer: DefaultAccordionSkin,
    isOpen,
  };
  const actions = {
    onToggle: onToggle || vi.fn(),
  };
  return render(<Accordion properties={properties} actions={actions} />);
};

describe('Accordion Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the Accordion with the title', () => {
    renderAccordion({});
    expect(screen.getByText('Click to Expand')).toBeInTheDocument();
  });

  it('should not display the content by default when isOpen is false', () => {
    renderAccordion({});
    expect(screen.queryByText('This is the accordion content.')).not.toBeInTheDocument();
  });

  it('should display the content when isOpen is true', () => {
    renderAccordion({ isOpen: true });
    expect(screen.getByText('This is the accordion content.')).toBeInTheDocument();
  });

  it('should call onToggle when the title is clicked', () => {
    const mockOnToggle = vi.fn();
    renderAccordion({ onToggle: mockOnToggle });
    const title = screen.getByText('Click to Expand');

    fireEvent.click(title);

    expect(mockOnToggle).toHaveBeenCalledWith(true);
  });

  it('should toggle open and close on successive clicks', () => {
    const mockOnToggle = vi.fn();
    const { rerender } = renderAccordion({ onToggle: mockOnToggle });

    const title = screen.getByText('Click to Expand');

    // Simulate opening
    fireEvent.click(title);
    expect(mockOnToggle).toHaveBeenCalledWith(true);

    // Simulate closing
    rerender(
      <Accordion
        properties={{
          id: 'accordion-1',
          title: 'Click to Expand',
          content: 'This is the accordion content.',
          Renderer: DefaultAccordionSkin,
          isOpen: true,
        }}
        actions={{ onToggle: mockOnToggle }}
      />,
    );
    fireEvent.click(title);
    expect(mockOnToggle).toHaveBeenCalledWith(false);
  });

  it('should render nested accordions correctly', () => {
    const nestedAccordionProps = {
      properties: {
        id: 'accordion-2',
        title: 'Nested Accordion',
        content: 'Nested accordion content',
        Renderer: DefaultAccordionSkin,
        isOpen: false,
      },
      actions: {
        onToggle: vi.fn(),
      },
    };

    render(
      <Accordion
        properties={{
          id: 'accordion-1',
          title: 'Parent Accordion',
          Renderer: DefaultAccordionSkin,
          content: <Accordion {...nestedAccordionProps} />,
          isOpen: true,
        }}
        actions={{
          onToggle: vi.fn(),
        }}
      />,
    );

    // Check parent accordion
    expect(screen.getByText('Parent Accordion')).toBeInTheDocument();
    expect(screen.getByText('Nested Accordion')).toBeInTheDocument();
    expect(screen.queryByText('Nested accordion content')).not.toBeInTheDocument();

    // Toggle nested accordion
    const nestedTitle = screen.getByText('Nested Accordion');
    fireEvent.click(nestedTitle);

    expect(nestedAccordionProps.actions.onToggle).toHaveBeenCalledWith(true);
  });
});
