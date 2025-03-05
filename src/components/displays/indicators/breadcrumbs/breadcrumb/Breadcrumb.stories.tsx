import { Meta, StoryFn } from '@storybook/react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import { BreadcrumbItemSkin, BreadcrumbSkin } from '@skins/defaults';
import { BreadcrumbProps } from './properties';

export default {
  title: 'Qbit design/Displays/Indicators/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    className: { control: 'text' }, // This is fine to control the className
  },
  tags: ['autodocs'],
} as Meta;

// Template for Breadcrumb component
const Template: StoryFn<BreadcrumbProps> = (args: any) => (
  <Breadcrumb
    renderers={{ renderer: BreadcrumbSkin, childRenderer: BreadcrumbItemSkin }}
    keyExtractor={(value: string, i: number) => `${value}-${i}`}
    {...args}
  >
    <BreadcrumbItem name="Home" href="/" active />
    <BreadcrumbItem name="Category" href="/category" />
    <BreadcrumbItem name="Subcategory" href="/category/subcategory" />
    <BreadcrumbItem name="Current Page" disabled />
  </Breadcrumb>
);

// Default breadcrumb example
export const Default = Template.bind({});
Default.args = {
  className: 'p-2',
};

// Custom class example
export const CustomClass = Template.bind({});
CustomClass.args = {
  className: 'bg-yellow-300 p-4 rounded-xl',
};
