import type { Meta, StoryObj } from '@storybook/react';
import ProgressStep from './ProgressStep';
import ProgressStepItem from './ProgressStepItem';
import { ProgressStepItemSkin, ProgressStepSkin } from '@skins/defaults';

const meta: Meta<typeof ProgressStep> = {
  title: 'Alpha Elements/Displays/Indicators/ProgressStep',
  component: ProgressStep,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProgressStep>;

export const Default: Story = {
  args: {
    renderers: { renderer: ProgressStepSkin, childRenderer: ProgressStepItemSkin },
    keyExtractor: (value: string, i: number) => `${value}-${i}`,
    children: [
      <ProgressStepItem key="step1" label="Step 1" completed />,
      <ProgressStepItem key="step2" label="Step 2" active />,
      <ProgressStepItem key="step3" label="Step 3" disabled />,
      <ProgressStepItem key="step4" label="Step 4" />,
    ],
  },
};

export const ActiveOnly: Story = {
  args: {
    renderers: { renderer: ProgressStepSkin, childRenderer: ProgressStepItemSkin },
    keyExtractor: (value: string, i: number) => `${value}-${i}`,
    children: [<ProgressStepItem label="Step 1" active key={'x1'} />],
  },
};

export const DisabledSteps: Story = {
  args: {
    renderers: { renderer: ProgressStepSkin, childRenderer: ProgressStepItemSkin },
    keyExtractor: (value: string, i: number) => `${value}-${i}`,
    children: [
      <ProgressStepItem key="step1" label="Step 1" disabled />,
      <ProgressStepItem key="step2" label="Step 2" disabled />,
      <ProgressStepItem key="step3" label="Step 3" disabled />,
      <ProgressStepItem key="step4" label="Step 4" disabled />,
    ],
  },
};

export const CompletedSteps: Story = {
  args: {
    renderers: { renderer: ProgressStepSkin, childRenderer: ProgressStepItemSkin },
    keyExtractor: (value: string, i: number) => `${value}-${i}`,
    children: [
      <ProgressStepItem key="step1" label="Step 1" completed />,
      <ProgressStepItem key="step2" label="Step 2" completed />,
      <ProgressStepItem key="step3" label="Step 3" completed />,
    ],
  },
};
