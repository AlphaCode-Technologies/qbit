import { Meta, StoryFn } from '@storybook/react';
import BreadcrumbGroup from './BreadcrumbGroup';
import Breadcrumb from './Breadcrumb';
import { BreadcrumbsSkin } from '@skins/defaults';

export default {
  title: 'Components/Breadcrumb',
  component: BreadcrumbGroup,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = () => {
  const breadcrumbs = [
    {
      key: 'home',
      properties: { name: 'Home', testId: 'breadcrumb-home', renderer: BreadcrumbsSkin },
      actions: { onClick: () => alert('Home Clicked') },
    },
    {
      key: 'products',
      properties: { name: 'Products', testId: 'breadcrumb-products', renderer: BreadcrumbsSkin },
      actions: { onClick: () => alert('Products Clicked') },
    },
    {
      key: 'details',
      properties: { name: 'Details', testId: 'breadcrumb-details', renderer: BreadcrumbsSkin },
      actions: { onClick: () => alert('Details Clicked') },
    },
  ];

  return (
    <BreadcrumbGroup>
      {breadcrumbs.map(({ key, properties, actions }) => (
        <Breadcrumb key={key} properties={properties} actions={actions} />
      ))}
    </BreadcrumbGroup>
  );
};

export const Default = Template.bind({});
