import { AccordionItemSkin, AccordionSkin } from '@skins/defaults/accordion';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Qbit design/Displays/Menus/Accordion',
  component: Accordion,
  argTypes: {
    onChange: { action: 'changed' },
  },
  tags: ['autodocs'],
} as Meta;

// Typing the Template function as a Story component
const Template: StoryFn<any> = (args) => (
  <Accordion
    {...args}
    renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
    keyExtractor={(value: string, i: number) => `${value}-${i}`}
  >
    <AccordionItem label="Item 1" value="1">
      <div>Content 1</div>
    </AccordionItem>
    <AccordionItem label="Item 2" value="2">
      <div>Content 2</div>
    </AccordionItem>
  </Accordion>
);

// Default story definition
export const Default = Template.bind({});
Default.args = {
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
};

export const MultipleOpenItems = () => (
  <Accordion
    renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
    keyExtractor={(value: string, i: number) => `${value}-${i}`}
  >
    <AccordionItem label="Open Item 1" value="open1" isOpen={true}>
      <div>Content 1</div>
    </AccordionItem>
    <AccordionItem label="Open Item 2" value="open2">
      <div>Content 2</div>
    </AccordionItem>
  </Accordion>
);

export const WithNestedAccordion = () => (
  <Accordion
    renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
    keyExtractor={(value: string, i: number) => `${value}-${i}`}
  >
    <AccordionItem
      label="Parent Item"
      value="parent"
      content={
        <Accordion
          renderers={{ renderer: AccordionSkin, childRenderer: AccordionItemSkin }}
          keyExtractor={(value: string, i: number) => `${value}-${i}`}
        >
          <AccordionItem label="Child Item 1" value="child1">
            <div>Child Content 1</div>
          </AccordionItem>
          <AccordionItem label="Child Item 2" value="child2">
            <div>Child Content 2</div>
          </AccordionItem>
        </Accordion>
      }
    ></AccordionItem>
  </Accordion>
);
