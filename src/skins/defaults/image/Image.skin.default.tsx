import { ImageProps } from '@components/displays/media/image/properties';
import { com } from 'src/types/common';

const ImageSkin: com.qbit.Skin<ImageProps> = (props: com.qbit.SkinProps<ImageProps>) => {
  const { src, alt, disabled, testId, className, width, height, onClick } = props;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      className={`max-w-full h-auto rounded-md ${disabled ? 'opacity-60 grayscale' : 'hover:brightness-95'} ${className}`}
      data-testid={testId}
    />
  );
};

export default ImageSkin;
