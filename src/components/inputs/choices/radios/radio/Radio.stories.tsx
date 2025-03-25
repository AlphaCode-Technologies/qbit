import { Meta, StoryFn } from '@storybook/react';
import Radio from './Radio';
import RadioOption from './RadioOption';
import RadioSkin from '@skins/defaults/radio/Radio.default.skin';
import RadioOptionSkin from '@skins/defaults/radio/RadioOption.default.skin';

export default {
  title: 'Qbit design/Inputs/Choices/Radio',
  tags: ['autodocs'],
  component: Radio,
  argTypes: {
    defaultValue: { control: 'text' },
    horizontal: { control: 'boolean' },
  },
} as Meta;

// Template for Radio component
const Template: StoryFn<any> = (args: any) => (
  <Radio {...args}>
    <RadioOption label="Option 1" name="example" value="option1" />
    <RadioOption label="Option 2" name="example" value="option2" />
    <RadioOption label="Option 3" name="example" value="option3" />
  </Radio>
);

// Default Story
export const Default = Template.bind({});
Default.args = {
  defaultValue: 'option2',
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: RadioSkin, childRenderer: RadioOptionSkin },
};

// Horizontal Radio Group Story
export const Horizontal = Template.bind({});
Horizontal.args = {
  defaultValue: 'option2',
  horizontal: true,
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: RadioSkin, childRenderer: RadioOptionSkin },
};

// Controlled Radio Story (with onChange handler)
export const Controlled = Template.bind({});
Controlled.args = {
  defaultValue: 'option1',
  onChange: (value: string) => console.log(`Selected value: ${value}`),
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: RadioSkin, childRenderer: RadioOptionSkin },
};

// Custom Default Value Story
export const CustomDefaultValue = Template.bind({});
CustomDefaultValue.args = {
  defaultValue: 'option3',
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: RadioSkin, childRenderer: RadioOptionSkin },
};
