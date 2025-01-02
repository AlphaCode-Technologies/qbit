import { Text } from '../text';
import { TextSkin } from '@skins/defaults';
import { useState } from 'react';

export default {
  title: 'Alpha Elements/Inputs/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    properties: {
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
      renderer: TextSkin,
    },
  },
};

export const Default = (args: any) => {
  const [value, setValue] = useState(args.value || 'Sample Text');

  return (
    <Text
      properties={{
        id: 'input',
        name: 'input',
        type: 'text',
        value: value,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const Disabled = (args: any) => {
  const [value, setValue] = useState(args.value || 'Disabled Input');

  return (
    <Text
      properties={{
        id: 'input-disabled',
        name: 'disabled',
        type: 'text',
        value: value,
        disabled: true,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const ReadOnly = (args: any) => {
  const [value, setValue] = useState(args.value || 'ReadOnly Input');

  return (
    <Text
      properties={{
        id: 'input-readonly',
        name: 'readonly',
        type: 'text',
        value: value,
        readOnly: true,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const Placeholder = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Text
      properties={{
        id: 'input-placeholder',
        name: 'placeholder',
        type: 'text',
        value: value,
        placeholder: 'Enter text here',
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const NumberInput = (args: any) => {
  const [value, setValue] = useState(args.value || '3');

  return (
    <Text
      properties={{
        id: 'input-number',
        name: 'number',
        type: 'number',
        value: value,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const MinValue = (args: any) => {
  const [value, setValue] = useState(args.value || '3');

  return (
    <Text
      properties={{
        id: 'input-min',
        name: 'number',
        type: 'number',
        value: value,
        min: 10,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const MaxValue = (args: any) => {
  const [value, setValue] = useState(args.value || '3');

  return (
    <Text
      properties={{
        id: 'input-max',
        name: 'number',
        type: 'number',
        value: value,
        max: 10,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const StepValue = (args: any) => {
  const [value, setValue] = useState(args.value || '3');

  return (
    <Text
      properties={{
        id: 'input-step',
        name: 'number',
        type: 'number',
        value: value,
        step: 3,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const PasswordInput = (args: any) => {
  const [value, setValue] = useState(args.value || 'Sample password');

  return (
    <Text
      properties={{
        id: 'input-password',
        name: 'password',
        type: 'password',
        value: value,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const EmailInput = (args: any) => {
  const [value, setValue] = useState(args.value || 'example@example.com');

  return (
    <Text
      properties={{
        id: 'input-email',
        name: 'email',
        type: 'email',
        value: value,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const TelephoneInput = (args: any) => {
  const [value, setValue] = useState(args.value || '0761234567');

  return (
    <Text
      properties={{
        id: 'input-tel',
        name: 'tel',
        type: 'tel',
        value: value,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const UrlInput = (args: any) => {
  const [value, setValue] = useState(args.value || 'http://example.com');

  return (
    <Text
      properties={{
        id: 'input-url',
        name: 'url',
        type: 'url',
        value: value,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const MaxLength = (args: any) => {
  const [value, setValue] = useState(args.value || 'Sample');

  return (
    <Text
      properties={{
        id: 'input-maxlength',
        name: 'maxlength',
        type: 'text',
        value: value,
        maxLength: 10,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const AutoComplete = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Text
      properties={{
        id: 'input-autocomplete',
        name: 'email',
        type: 'email',
        value: value,
        autoComplete: 'email',
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const AutoCompleteOff = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Text
      properties={{
        id: 'input-autocomplete',
        name: 'email',
        type: 'email',
        value: value,
        autoComplete: 'off',
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};

export const TabIndex = (args: any) => {
  const [value, setValue] = useState(args.value || 'Sample TabIndex');

  return (
    <Text
      properties={{
        id: 'input-maxlength',
        name: 'input',
        type: 'text',
        value: value,
        tabIndex: 2,
        renderer: TextSkin,
      }}
      actions={{
        onChange: (val) => setValue(val.target.nodeValue),
      }}
    />
  );
};
