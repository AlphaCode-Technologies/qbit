import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RatingProps } from './properties';
import Rating from './Ratings';
import { RatingSkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Displays/Indicators/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    editable: {
      control: 'boolean',
      description: 'Sets whether the rating is editable',
      defaultValue: true,
    },
    rating: {
      control: 'number',
      description: 'Initial rating value',
      defaultValue: 3,
    },
    ratingRange: {
      control: 'number',
      description: 'The range of rating (usually 5 for stars)',
      defaultValue: 5,
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the rating stars',
      defaultValue: 'xl',
    },
    setRating: {
      action: 'setRating called',
      description: 'Callback function for updating the rating',
    },
  },
} as Meta;

// Editable Rating story
const Template: StoryFn<RatingProps> = (args) => {
  const [rating, setRating] = useState<number>(args.rating);

  return <Rating {...args} renderers={{ renderer: RatingSkin }} rating={rating} setRating={setRating} />;
};

export const DefaultEditable = Template.bind({});
DefaultEditable.args = {
  rating: 3,
  ratingRange: 5,
  editable: true,
  size: 'xl',
};

export const NonEditable = Template.bind({});
NonEditable.args = {
  rating: 4,
  ratingRange: 5,
  editable: false,
  size: 'xl',
};

export const EmptyRating = Template.bind({});
EmptyRating.args = {
  rating: 0,
  ratingRange: 5,
  editable: true,
  size: 'xl',
};

export const FullRating = Template.bind({});
FullRating.args = {
  rating: 5,
  ratingRange: 5,
  editable: true,
  size: 'xl',
};

export const HalfRating = Template.bind({});
HalfRating.args = {
  rating: 2.5,
  ratingRange: 5,
  editable: true,
  size: 'xl',
};
