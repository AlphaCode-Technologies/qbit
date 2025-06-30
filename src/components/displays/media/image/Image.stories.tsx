import { Meta, StoryFn } from '@storybook/react';
import Image from './Image';
import ImageSkin from '@skins/defaults/image/Image.skin.default';

export default {
  title: 'Qbit design/Displays/Media/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    renderers: { renderer: ImageSkin },
    alt: 'Sample Image',
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    width: {
      control: 'text',
      description: 'Width of the image (px or %)',
    },
    height: {
      control: 'text',
      description: 'Height of the image (px or %)',
    },
    aspectRatio: {
      control: 'text',
      description: 'Aspect ratio (e.g., "16/9")',
    },
    objectFit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      description: 'How the image should be resized to fit its container',
    },
    borderRadius: {
      control: 'text',
      description: 'Border radius (px or %)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the image is disabled',
    },
    testId: {
      control: 'text',
      description: 'Test ID for testing purposes',
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Image
    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/900px-Example_image.svg.png'}
    alt={'example'}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  testId: 'image-default',
};

export const SquareImage = Template.bind({});
SquareImage.args = {
  src: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  width: 200,
  height: 200,
  testId: 'image-square',
};

export const RoundedCorners = Template.bind({});
RoundedCorners.args = {
  src: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  borderRadius: '8px',
  testId: 'image-rounded',
};

export const DisabledImage = Template.bind({});
DisabledImage.args = {
  src: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  disabled: true,
  testId: 'image-disabled',
};

export const FixedAspectRatio = Template.bind({});
FixedAspectRatio.args = {
  src: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  width: 300,
  aspectRatio: '16/9',
  testId: 'image-aspect-ratio',
};
