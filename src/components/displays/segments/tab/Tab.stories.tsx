import { Meta, StoryFn } from '@storybook/react';
import TabGroup from './TabGroup';
import Tab from './Tab';
import { TabSkin } from '@skins/defaults';

export default {
  title: 'Components/TabGroup',
  component: TabGroup,
  tags: ['autodocs'],
} as Meta;

const tabData = [
  { id: '1', name: 'Tab 1', renderer: TabSkin, content: <div>Content 1</div> },
  { id: '2', name: 'Tab 2', renderer: TabSkin, content: <div>Content 2</div> },
  { id: '3', name: 'Tab 3', renderer: TabSkin, disabled: true, content: <div>Content 3</div> },
];

const Template: StoryFn = (args: any) => (
  <TabGroup {...args}>
    {tabData.map((tab) => (
      <Tab key={tab.id} properties={tab} />
    ))}
  </TabGroup>
);

export const Default = Template.bind({});
Default.args = {
  properties: tabData,
  actions: {
    onClick: (id: string) => console.log(`Tab ${id} clicked`),
  },
};

export const WithDisabledTab = Template.bind({});
WithDisabledTab.args = {
  properties: tabData,
  actions: {
    onClick: (id: string) => console.log(`Tab ${id} clicked`),
  },
};
