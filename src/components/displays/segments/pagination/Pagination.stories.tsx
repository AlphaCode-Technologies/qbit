// Pagination.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Pagination from './Pagination';
import { PaginationProps } from './properties';
import { PaginationSkin } from '@skins/defaults/pagination';

export default {
  title: 'Qbit design/Displays/Segments/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    onPageChange: { action: 'page changed' },
  },
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => <Pagination renderers={{ renderer: PaginationSkin }} {...args} />;

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  currentPage: 4,
  totalPages: 7,
  onPageChange: (page: number) => console.log(`Page changed to: ${page}`),
};

export const FirstPageDisabledPrev = Template.bind({});
FirstPageDisabledPrev.args = {
  currentPage: 1,
  totalPages: 5,
};

export const LastPageDisabledNext = Template.bind({});
LastPageDisabledNext.args = {
  currentPage: 5,
  totalPages: 5,
};

export const PaginationWithOnePage = Template.bind({});
PaginationWithOnePage.args = {
  currentPage: 1,
  totalPages: 1,
};

export const FullyDisabledPagination = Template.bind({});
FullyDisabledPagination.args = {
  currentPage: 4,
  totalPages: 7,
  disabled: true,
};
