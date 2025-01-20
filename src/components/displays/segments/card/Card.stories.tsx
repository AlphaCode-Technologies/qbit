import { StoryFn } from '@storybook/react';
import Card from './Card';
import CardItem from './CardItem';
import { CardItemSkin, CardSkin } from '@skins/defaults';

export default {
  title: 'Alpha Elements/Displays/Segments/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    renderers: { renderer: CardSkin, childRenderer: CardItemSkin },
    keyExtractor: (value: string, i: number) => `${value}-${i}`,
  },
};

const Template: StoryFn = (args: any) => {
  return (
    <Card {...args}>
      <CardItem>Card Content</CardItem>
      <CardItem>Card Content</CardItem>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
};
