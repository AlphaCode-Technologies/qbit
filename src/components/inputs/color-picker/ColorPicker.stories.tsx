import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ColorPicker from '@components/inputs/color-picker/ColorPicker';
import { ColorPickerProps } from '@components/inputs/color-picker/properties';
import ColorPickerSkin from '@skins/defaults/ColorPicker.default.skin';

export default {
  title: 'Qbit design/Inputs/ColorPicker',
  component: ColorPicker,
} as Meta;

const Template: StoryFn<ColorPickerProps> = (args: any) => {
  const [color, setColor] = useState(args.color);
  return (
    <div className="w-60">
      <ColorPicker {...args} color={color} onChange={() => setColor} renderers={{ renderer: ColorPickerSkin }} />
      <p>Selected Color: {color}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: '#ff0000',
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: '#00ff00',
  disabled: true,
};

export const WithInitialBlue = Template.bind({});
WithInitialBlue.args = {
  color: '#0000ff',
};
