import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Image from './Image';
import ImageSkin from '@skins/defaults/image/Image.skin.default';

// Helper function to render Image with common props
const renderImage = (
  src = 'https://example.com/image.jpg',
  alt = 'Test Image',
  testId = 'image-test',
  disabled = false,
  width = 200,
  height = 200,
) => {
  return render(
    <Image
      renderers={{ renderer: ImageSkin }}
      src={src}
      alt={alt}
      testId={testId}
      disabled={disabled}
      width={width}
      height={height}
    />,
  );
};

describe('Image Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Image component with correct src and alt', () => {
    renderImage();

    const image = screen.getByTestId('image-test');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Image');
  });

  it('applies correct dimensions through width and height attributes', () => {
    renderImage();

    const image = screen.getByTestId('image-test');
    expect(image).toHaveAttribute('width', '200');
    expect(image).toHaveAttribute('height', '200');
    expect(image).toHaveClass('max-w-full');
    expect(image).toHaveClass('h-auto');
  });

  it('applies disabled state correctly', () => {
    renderImage('https://example.com/image.jpg', 'Test Image', 'image-disabled', true);

    const image = screen.getByTestId('image-disabled');
    expect(image).toHaveClass('opacity-60');
    expect(image).toHaveClass('grayscale');
  });

  it('applies custom classes', () => {
    render(
      <Image
        renderers={{ renderer: ImageSkin }}
        src="https://example.com/image.jpg"
        alt="Styled Image"
        testId="image-styled"
        className="custom-class"
      />,
    );

    const image = screen.getByTestId('image-styled');
    expect(image).toHaveClass('custom-class');
  });
});
