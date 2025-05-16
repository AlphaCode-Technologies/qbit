import TextInput from './TextInput.tsx';
import { TextSkin } from '@skins/defaults';
import { useState } from 'react';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Qbit design/Inputs/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    renderers: { renderer: TextSkin },
  },
};

const Template: StoryFn = (args: any) => {
  const [value, setValue] = useState(args.value);
  return <TextInput {...args} value={value} onChange={(e) => setValue(e.target.nodeValue)} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 'Sample TextInput',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Disabled Input',
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: 'ReadOnly Input',
  readOnly: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Enter text here',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: 'number',
  value: '3',
};

export const MinValue = Template.bind({});
MinValue.args = {
  type: 'number',
  min: 0,
  value: '3',
};

export const MaxValue = Template.bind({});
MaxValue.args = {
  type: 'number',
  max: 10,
  value: '3',
};

export const StepValue = Template.bind({});
StepValue.args = {
  type: 'number',
  step: 3,
  value: '3',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  value: 'Sample password',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  value: 'example@example.com',
};

export const TelephoneInput = Template.bind({});
TelephoneInput.args = {
  type: 'tel',
  value: '0761234567',
};

export const UrlInput = Template.bind({});
UrlInput.args = {
  type: 'url',
  value: 'https://example.com',
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  maxLength: 10,
  value: 'Sample',
};

export const AutoComplete = Template.bind({});
AutoComplete.args = {
  type: 'email',
  autoComplete: 'email',
};

export const AutoCompleteOff = Template.bind({});
AutoCompleteOff.args = {
  type: 'email',
  autoComplete: 'off',
};

export const CustomClasses = Template.bind({});
CustomClasses.args = {
  className: 'bg-blue-100 border-2 border-blue-500 focus:outline-none',
  value: 'Custom Class Input',
};

export const StyledInput = Template.bind({});
StyledInput.args = {
  style: {
    borderColor: 'green',
    borderWidth: '2px',
    backgroundColor: 'rgba(0,129,65,0.2)',
  },
  value: 'Styled Input',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  value: 'Error Input',
  error: true,
};

export const TabIndex = Template.bind({});
TabIndex.args = {
  value: 'Sample TabIndex',
  tabIndex: 2,
};
