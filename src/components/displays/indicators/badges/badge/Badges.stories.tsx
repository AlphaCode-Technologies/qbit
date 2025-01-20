import { Meta, StoryFn } from '@storybook/react';
import Badge from './Badges';
import BadgeSkin from '@skins/defaults/badges/Badges.skin.default';

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    renderers: { renderer: BadgeSkin },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
    testId: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  testId: 'badge-default',
  children: (
    <text x="45" y="18" fill="#000" fontSize="10" fontWeight="500">
      Default Badge
    </text>
  ),
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  testId: 'badge-sm',
  children: (
    <>
      <circle cx="28" cy="14" r="8" stroke="#D0D5DD" fill="white" />
      <foreignObject x="20" y="7" width="16" height="16">
        <img
          src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
          alt="Badge Icon"
          style={{ borderRadius: '50%', width: '100%', height: '100%' }}
        />
      </foreignObject>
    </>
  ),
};

export const LargeDisabled = Template.bind({});
LargeDisabled.args = {
  size: 'lg',
  disabled: true,
  testId: 'badge-lg-disabled',
  children: (
    <text x="45" y="18" fill="#000" fontSize="10" fontWeight="500">
      Disabled Badge
    </text>
  ),
};

export const ExtraLargeWithCustomContent = Template.bind({});
ExtraLargeWithCustomContent.args = {
  size: 'xl',
  testId: 'badge-xl-custom',
  children: (
    <>
      <text x="45" y="18" fill="#000" fontSize="10" fontWeight="500">
        Custom Badge
      </text>
      <circle cx="28" cy="14" r="8" stroke="#D0D5DD" fill="white" />
      <foreignObject x="20" y="7" width="16" height="16">
        <img
          src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
          alt="Badge Icon"
          style={{ borderRadius: '50%', width: '100%', height: '100%' }}
        />
      </foreignObject>
    </>
  ),
};
