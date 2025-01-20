import { Meta, StoryFn } from '@storybook/react';
import React, { ReactNode } from 'react';
import Tab from './Tab';
import TabItem from './TabItem';
import { TabItemSkin, TabSkin } from '@skins/defaults';

export default {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => (
  <Tab
    {...args}
    keyExtractor={(value: string, i: number) => `${value}-${i}`}
    renderers={{ renderer: TabSkin, childRenderer: TabItemSkin }}
  />
);

export const Default = Template.bind({});
Default.args = {
  renderers: { renderer: undefined, childRenderer: undefined },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  onClick: (e: any) => {
    console.log('Clicked tab:', e.target.value);
  },
  children: [
    <TabItem key="1" active={true} name="Tab 1" content={<div>Content for Tab 1</div>} />,
    <TabItem key="2" active={false} name="Tab 2" content={<div>Content for Tab 2</div>} />,
    <TabItem key="3" active={false} name="Tab 3" content={<div>Content for Tab 3</div>} />,
  ],
};

export const WithDynamicTabs = Template.bind({});
WithDynamicTabs.args = {
  renderers: { renderer: undefined, childRenderer: undefined },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  children: Array.from({ length: 5 }, (_, i) => (
    <TabItem
      key={`tab-${i}`}
      active={i === 0}
      name={`Dynamic Tab ${i + 1}`}
      content={<div>Content for Dynamic Tab {i + 1}</div>}
    />
  )),
};

export const StyledWithCustomRenderer = Template.bind({});
StyledWithCustomRenderer.args = {
  renderers: {
    renderer: ({ children }: { children: ReactNode }) => <div className="custom-tab-container">{children}</div>,
    childRenderer: ({
      name,
      active,
      onClick,
    }: {
      name: string;
      active: boolean;
      onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    }) => (
      <button className={`custom-tab-button ${active ? 'active' : ''}`} onClick={onClick}>
        {name}
      </button>
    ),
  },
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  children: [
    <TabItem key="1" active={true} name="Custom Tab 1" content={<div>Styled Content for Tab 1</div>} />,
    <TabItem key="2" active={false} name="Custom Tab 2" content={<div>Styled Content for Tab 2</div>} />,
  ],
};

export const WithDisabledTabs = Template.bind({});
WithDisabledTabs.args = {
  renderers: { renderer: undefined, childRenderer: undefined },
  children: [
    <TabItem key="1" active={true} name="Tab 1" content={<div>Content for Tab 1</div>} />,
    <TabItem key="2" active={false} name="Tab 2" content={<div>Content for Tab 2</div>} disabled />,
    <TabItem key="3" active={false} name="Tab 3" content={<div>Content for Tab 3</div>} />,
  ],
};
