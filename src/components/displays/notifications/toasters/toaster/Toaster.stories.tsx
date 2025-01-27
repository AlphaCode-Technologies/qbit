import { ToasterSkin } from '@skins/defaults';
import Toaster from './Toaster';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Alpha Elements/Notifications/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    open: true,
    position: 'top-center',
    className: 'm-2 shadow-xl',
  },
};

const Template: StoryFn = (args: any) => {
  return (
    <Toaster {...args}>
      <svg width="350" height="80" viewBox="0 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="583" height="80" rx="4" fill="white" />
        <path d="M12 16V64" stroke="#8E8E93" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M40 30C34.48 30 30 34.48 30 40C30 45.52 34.48 50 40 50C45.52 50 50 45.52 50 40C50 34.48 45.52 30 40 30Z"
          fill="#8E8E93"
        />
        <path d="M37.8077 44L34 40.4L35.2692 39.2L37.8077 41.6L43.7308 36L45 37.2L37.8077 44Z" fill="white" />
        <text x="65" y="35" fill="#000" fontSize="16" fontFamily="Arial" dominantBaseline="middle">
          This is the title
        </text>
        <text x="65" y="50" fill="#000" fontSize="16" fontFamily="Arial" dominantBaseline="middle">
          And this is some more information
        </text>
      </svg>
    </Toaster>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
  position: 'top-center',
  renderers: { renderer: ToasterSkin },
  keyExtractor: (_: string, i: number) => `top-center-${i}`,
  className: 'm-2 shadow-xl',
};
