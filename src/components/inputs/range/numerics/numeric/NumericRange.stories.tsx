import { NumericRangePointerSkin, NumericRangeSkin } from '@skins/defaults';
import NumericRange from './NumericRange';
import NumericRangePicker from './NumericRangePicker';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Alpha Elements/Range/Numeric',
  component: NumericRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    keyExtractor: (value: string, i: number) => `${value}-${i}`,
    renderers: { renderer: NumericRangeSkin, childRenderer: NumericRangePointerSkin },
    minValue: 0,
    maxValue: 200,
  },
};

const Template: StoryFn = (args: any) => {
  return (
    <NumericRange {...args}>
      <NumericRangePicker value={0} />
      <NumericRangePicker value={100} />
      <NumericRangePicker value={200} />
    </NumericRange>
  );
};

export const Default = Template.bind({});
Default.args = {
  keyExtractor: (value: string, i: number) => `${value}-${i}`,
  renderers: { renderer: NumericRangeSkin, childRenderer: NumericRangePointerSkin },
  minValue: 0,
  maxValue: 200,
};
