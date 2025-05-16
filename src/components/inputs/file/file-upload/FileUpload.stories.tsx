import type { Meta, StoryObj } from '@storybook/react';
import FileUpload from './FileUpload';
import FileUploadSkin from '@skins/defaults/file-upload/FileUpload.skin.default';

const meta: Meta<typeof FileUpload> = {
  title: 'Qbit design/Inputs/File/File Upload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    maxSize: {
      control: { type: 'number' },
      description: 'Maximum file size in KB',
    },
    maxFiles: {
      control: { type: 'number' },
      description: 'Maximum number of files allowed',
    },
    allowedTypes: {
      control: { type: 'object' },
      description: 'Array of allowed MIME types',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the file upload',
    },
    onChange: {
      action: 'filesChanged',
      description: 'Callback when files are added/removed',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    renderers: { renderer: FileUploadSkin },
    onChange: (files) => console.log('Uploaded Files:', files),
  },
};

export const SingleImageUpload: Story = {
  args: {
    renderers: { renderer: FileUploadSkin },
    maxFiles: 1,
    allowedTypes: ['image/png', 'image/jpeg', 'image/gif'],
    maxSize: 5000, // 5MB
    onChange: (files) => console.log('Uploaded Image:', files),
  },
  storyName: 'Single Image Upload (PNG/JPG/GIF)',
};

export const MultipleDocuments: Story = {
  args: {
    renderers: { renderer: FileUploadSkin },
    maxFiles: 5,
    allowedTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
    maxSize: 10000, // 10MB
    onChange: (files) => console.log('Uploaded Documents:', files),
  },
  storyName: 'Multiple Document Upload (PDF/DOC/DOCX)',
};

export const WithFileSizeLimit: Story = {
  args: {
    renderers: { renderer: FileUploadSkin },
    maxSize: 1000, // 1MB
    onChange: (files) => console.log('Uploaded Files:', files),
  },
  storyName: 'With File Size Limit (1MB)',
};

export const DisabledState: Story = {
  args: {
    renderers: { renderer: FileUploadSkin },
    disabled: true,
    onChange: (files) => console.log('Uploaded Files:', files),
  },
  storyName: 'Disabled State',
};

export const CustomFileTypes: Story = {
  args: {
    renderers: { renderer: FileUploadSkin },
    allowedTypes: ['application/pdf', 'audio/mpeg', 'video/mp4'],
    maxFiles: 3,
    onChange: (files) => console.log('Uploaded Media:', files),
  },
  storyName: 'Custom File Types (PDF/MP3/MP4)',
};

export const WithInitialFiles: Story = {
  args: {
    renderers: { renderer: FileUploadSkin },
    files: [
      new File([''], 'example.pdf', { type: 'application/pdf' }),
      new File([''], 'sample.jpg', { type: 'image/jpeg' }),
    ],
    onChange: (files) => console.log('Updated Files:', files),
  },
  storyName: 'With Initial Files',
};

export const StrictValidation: Story = {
  args: {
    renderers: { renderer: FileUploadSkin },
    maxFiles: 2,
    maxSize: 500, // 500KB
    allowedTypes: ['image/png'],
    onChange: (files) => console.log('Valid Files:', files),
  },
  storyName: 'Strict Validation (PNG only, 500KB max)',
};
