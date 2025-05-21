import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FileUpload from './FileUpload';
import FileUploadSkin from '@skins/defaults/file-upload/FileUpload.skin.default';

describe('FileUpload Component', () => {
  const mockOnChange = vi.fn();
  const defaultProps = {
    renderers: { renderer: FileUploadSkin },
    maxSize: 80000,
    allowedTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'],
    onChange: mockOnChange,
    maxFiles: 3,
    testId: 'file-upload',
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders the component with default props', () => {
    render(<FileUpload {...defaultProps} />);
    expect(screen.getByText('Click to upload')).toBeInTheDocument();
    expect(screen.getByText('or drag and drop')).toBeInTheDocument();
    expect(screen.getByText('0/3')).toBeInTheDocument();
  });

  it('displays as disabled when disabled prop is true', () => {
    render(<FileUpload {...defaultProps} disabled={true} />);
    const uploadArea = screen.getByTestId('file-upload');
    expect(uploadArea).toHaveClass('cursor-not-allowed');
    expect(uploadArea).toHaveClass('bg-gray-200');
    const label = screen.getByText('Click to upload').closest('label')!;
    expect(label).toHaveClass('cursor-not-allowed');
    const fileInput = screen.getByRole('button', { hidden: true }) as HTMLInputElement;
    expect(fileInput).toBeDisabled();
  });

  it('shows error when file type is not allowed', async () => {
    render(<FileUpload {...defaultProps} />);
    const fileInput = screen
      .getByText('Click to upload')
      .closest('label')
      ?.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(['test'], 'test.pdf', { type: 'application/pdf' });
    Object.defineProperty(fileInput, 'files', { value: [file], configurable: true });
    fireEvent.change(fileInput);
    await waitFor(() => {
      expect(mockOnChange).not.toHaveBeenCalled();
      expect(screen.getByText('Invalid file type.')).toBeInTheDocument();
    });
  });

  it('shows error when file size exceeds max size', async () => {
    render(<FileUpload {...defaultProps} maxSize={10} />);
    const fileInput = screen
      .getByText('Click to upload')
      .closest('label')
      ?.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File([new ArrayBuffer(1024 * 20)], 'test.png', { type: 'image/png' });
    Object.defineProperty(fileInput, 'files', { value: [file], configurable: true });
    fireEvent.change(fileInput);
    await waitFor(() => {
      expect(mockOnChange).not.toHaveBeenCalled();
      expect(screen.getByText('File size exceeds 10KB.')).toBeInTheDocument();
    });
  });

  it('shows error when trying to upload more than max files', async () => {
    render(<FileUpload {...defaultProps} maxFiles={2} />);
    const fileInput = screen
      .getByText('Click to upload')
      .closest('label')
      ?.querySelector('input[type="file"]') as HTMLInputElement;
    const files = [
      new File(['test1'], 'test1.png', { type: 'image/png' }),
      new File(['test2'], 'test2.png', { type: 'image/png' }),
      new File(['test3'], 'test3.png', { type: 'image/png' }),
    ];
    Object.defineProperty(fileInput, 'files', { value: files, configurable: true });
    fireEvent.change(fileInput);
    await waitFor(() => {
      expect(mockOnChange).not.toHaveBeenCalled();
      expect(screen.getByText('You can upload up to 2 files.')).toBeInTheDocument();
    });
  });

  it('displays file icon for non-image files when allowed', async () => {
    render(<FileUpload {...defaultProps} allowedTypes={[...defaultProps.allowedTypes, 'application/pdf']} />);
    const fileInput = screen
      .getByText('Click to upload')
      .closest('label')
      ?.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(['test'], 'test.pdf', { type: 'application/pdf' });
    Object.defineProperty(fileInput, 'files', { value: [file], configurable: true });
    fireEvent.change(fileInput);
    await waitFor(() => {
      expect(screen.getByText('test.pdf')).toBeInTheDocument();
      const svg = screen.getByTestId('file-upload').querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg?.querySelector('path[fill="#D92D20"]')).toBeInTheDocument();
    });
  });

  it('remove uploaded file', async () => {
    render(<FileUpload {...defaultProps} allowedTypes={[...defaultProps.allowedTypes, 'application/pdf']} />);
    const fileInput = screen
      .getByText('Click to upload')
      .closest('label')
      ?.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(['test'], 'test.pdf', { type: 'application/pdf' });
    Object.defineProperty(fileInput, 'files', { value: [file], configurable: true });
    fireEvent.change(fileInput);
    await waitFor(async () => {
      expect(screen.getByText('test.pdf')).toBeInTheDocument();
      const svg = screen.getByTestId('file-upload').querySelector('svg');
      expect(svg).toBeInTheDocument();
      const removeBtns = await screen.findAllByTestId('remove-file-button');
      removeBtns.forEach((item) => {
        item.click();
      });
    });
  });
});
