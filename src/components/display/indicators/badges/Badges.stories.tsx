import { Meta, StoryFn } from '@storybook/react';
import Badges from './Badges';
import OptionalSkin from '@skins/optional/Badges.optional.skin';
import DefaultSkin from '@skins/defaults/Badges.default.skin';

// Define the metadata for the component story
const meta: Meta = {
  title: 'Components/Badges',
  component: Badges,
  argTypes: {
    properties: {
      description: 'Badge properties including label, size, and additional rendering options.',
    },
    actions: {
      description: 'Action handlers for the badge.',
    },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  tags: ['autodocs'],
};

export default meta;

// Create a base template for the stories
const Template: StoryFn<AlphaElements.BadgesProps> = (args: any) => <Badges {...args} />;

// Define the default story for the `Badges` component
export const Default = Template.bind({});
Default.args = {
  properties: {
    id: '1',
    label: 'Badge',
    count: 5,
    size: 'md',
    Renderer: DefaultSkin,
    showCloseButton: true,
    imageSrc: 'https://miro.medium.com/v2/resize:fit:1400/1*IufrfOVS-q52ksF3ggE22w.jpeg',
  },
  actions: {
    onClose: (id: string) => console.log(`Badge with ID ${id} closed!`),
  },
};

// Define a story for the `Badges` component using GradientSkin
export const WithGradientSkin = Template.bind({});
WithGradientSkin.args = {
  properties: {
    id: '2',
    label: 'Gradient Badge',
    count: 8,
    size: 'xl',
    Renderer: OptionalSkin,
    checked: true,
    imageSrc: 'https://img.freepik.com/premium-vector/flag-united-kingdom-vector-illustration_514344-299.jpg',
    showCloseButton: true,
  },
  actions: {
    onClose: (id: string) => alert(`Badge with ID ${id} closed!`),
  },
};
