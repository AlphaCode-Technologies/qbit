import TextInput from './TextInput.tsx';
import { TextSkin } from '@skins/defaults';
import { useState } from 'react';

export default {
  title: 'Qbit design/Inputs/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    id: '',
    name: '',
    type: 'text',
    value: '',
    disabled: false,
    readOnly: false,
    placeholder: '',
    required: false,
    min: 0,
    max: 0,
    step: 0,
    maxLength: 0,
    autoComplete: 'on',
    testId: '',
    renderers: { renderer: TextSkin },
  },
};

export const Default = (args: any) => {
  const [value, setValue] = useState(args.value || 'Sample TextInput');

  return (
    <TextInput
      id="input"
      name="input"
      type="text"
      value={value}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const Disabled = (args: any) => {
  const [value, setValue] = useState(args.value || 'Disabled Input');

  return (
    <TextInput
      id="input-disabled"
      name="readonly"
      type="text"
      value={value}
      disabled={true}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const ReadOnly = (args: any) => {
  const [value, setValue] = useState(args.value || 'ReadOnly Input');

  return (
    <TextInput
      id="input-readonly"
      name="readonly"
      type="text"
      value={value}
      readOnly={true}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const Placeholder = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <TextInput
      id="input-placeholder"
      name="placeholder"
      type="text"
      value={value}
      placeholder="Enter text here"
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const NumberInput = (args: any) => {
  const [value, setValue] = useState(args.value || '3');

  return (
    <TextInput
      id="input-number"
      name="number"
      type="number"
      value={value}
      placeholder="Enter text here"
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const MinValue = (args: any) => {
  const [value, setValue] = useState(args.value || '3');

  return (
    <TextInput
      id="input-min"
      name="number"
      type="number"
      value={value}
      min={0}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const MaxValue = (args: any) => {
  const [value, setValue] = useState(args.value || '3');

  return (
    <TextInput
      id="input-max"
      name="number"
      type="number"
      value={value}
      max={10}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const StepValue = (args: any) => {
  const [value, setValue] = useState(args.value || '3');

  return (
    <TextInput
      id="input-step"
      name="number"
      type="number"
      value={value}
      step={3}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const PasswordInput = (args: any) => {
  const [value, setValue] = useState(args.value || 'Sample password');

  return (
    <TextInput
      id="input-password"
      name="password"
      type="password"
      value={value}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const EmailInput = (args: any) => {
  const [value, setValue] = useState(args.value || 'example@example.com');

  return (
    <TextInput
      id="input-email"
      name="email"
      type="email"
      value={value}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const TelephoneInput = (args: any) => {
  const [value, setValue] = useState(args.value || '0761234567');

  return (
    <TextInput
      id="input-tel"
      name="tel"
      type="tel"
      value={value}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const UrlInput = (args: any) => {
  const [value, setValue] = useState(args.value || 'http://example.com');

  return (
    <TextInput
      id="input-url"
      name="url"
      type="url"
      value={value}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const MaxLength = (args: any) => {
  const [value, setValue] = useState(args.value || 'Sample');

  return (
    <TextInput
      id="input-maxlength"
      name="maxlength"
      type="text"
      value={value}
      maxLength={10}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const AutoComplete = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <TextInput
      id="input-autocomplete"
      name="email"
      type="email"
      value={value}
      autoComplete="email"
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const AutoCompleteOff = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <TextInput
      id="input-autocomplete-off"
      name="email"
      type="email"
      value={value}
      autoComplete="off"
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};

export const TabIndex = (args: any) => {
  const [value, setValue] = useState(args.value || 'Sample TabIndex');

  return (
    <TextInput
      id="input-tabindex"
      name="input"
      type="text"
      value={value}
      tabIndex={2}
      renderers={{ renderer: TextSkin }}
      onChange={(event: any) => setValue(event.target.nodeValue)}
    />
  );
};
