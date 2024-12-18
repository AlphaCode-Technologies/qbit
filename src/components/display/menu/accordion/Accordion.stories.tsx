import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DefaultAccordionSkin from '@skins/defaults/Accordion.default.skin';
import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<AlphaElements.AccordionProps> = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.properties.isOpen);

  const handleToggle = (newState: boolean) => {
    setIsOpen(newState);
  };

  return <Accordion {...args} properties={{ ...args.properties, isOpen }} actions={{ onToggle: handleToggle }} />;
};

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  properties: {
    id: 'accordion-default',
    title: 'Click to Expand',
    content: 'This is the default accordion content.',
    isOpen: false,
    Renderer: DefaultAccordionSkin,
  },
  actions: {
    onToggle: (isOpen: boolean) => console.log('Accordion toggled:', isOpen),
  },
};

export const PreOpenAccordion = Template.bind({});
PreOpenAccordion.args = {
  properties: {
    id: 'accordion-pre-open',
    title: 'Already Expanded',
    content: 'This accordion starts in an open state.',
    isOpen: true,
    Renderer: DefaultAccordionSkin,
  },
  actions: {
    onToggle: (isOpen: boolean) => console.log('Accordion toggled:', isOpen),
  },
};

export const NestedAccordion = () => {
  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);

  return (
    <Accordion
      properties={{
        id: 'parent-accordion',
        title: 'Parent Accordion',
        content: (
          <Accordion
            properties={{
              id: 'child-accordion',
              title: 'Child Accordion',
              content: 'This is the child accordion content.',
              isOpen: childOpen,
              Renderer: DefaultAccordionSkin,
            }}
            actions={{
              onToggle: (isOpen) => setChildOpen(isOpen),
            }}
          />
        ),
        isOpen: parentOpen,
        Renderer: DefaultAccordionSkin,
      }}
      actions={{
        onToggle: (isOpen) => setParentOpen(isOpen),
      }}
    />
  );
};
