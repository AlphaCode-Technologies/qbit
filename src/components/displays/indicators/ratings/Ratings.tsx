import { BaseComponent } from '@components/containers';
import { RatingProps } from './properties';
import { com } from 'src/types/common';
import { useBindSkin } from './Ratings.hook';

const Rating: com.qbit.Shell<RatingProps> = (props: com.qbit.ShellProps<RatingProps>) => {
  const { editable, ratingRange, ...rest } = props;
  const { hoverRating, selectedRating, handleMouseMove, handleMouseLeave, handleClick } = useBindSkin(props);

  return (
    <BaseComponent
      {...rest}
      rating={selectedRating}
      hoverRating={hoverRating}
      ratingRange={ratingRange}
      editable={editable}
      handleMouseMove={handleMouseMove}
      handleMouseLeave={handleMouseLeave}
      handleClick={handleClick}
    />
  );
};

export default Rating;
