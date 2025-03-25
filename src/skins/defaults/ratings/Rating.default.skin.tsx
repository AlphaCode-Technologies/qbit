import { RatingProps } from '@components/displays';
import { com } from 'src/types/common';

const RatingSkin: com.qbit.Skin<RatingProps> = (props: com.qbit.SkinProps<RatingProps>) => {
  const {
    rating,
    hoverRating,
    ratingRange,
    editable,
    handleMouseMove,
    handleMouseLeave,
    handleClick,
    testId /*...rest*/,
  } = props;
  const percentage = ((rating / ratingRange) * 100).toFixed(1);

  const renderStar = (index: number) => {
    const isHalf = hoverRating ? hoverRating === index + 0.5 : rating === index + 0.5;
    const isFull = hoverRating ? hoverRating >= index + 1 : rating >= index + 1;

    return (
      <div
        key={index}
        className={`relative inline-block w-6 h-6 ${editable ? 'cursor-pointer' : 'cursor-default'}`}
        onMouseMove={(e) => handleMouseMove && handleMouseMove(e, index)}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => handleClick && handleClick(index, e)}
      >
        {/* Full Star (Gray background when not filled) */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#D0D5DD"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-full"
          role="img"
        >
          <path d="M12 2L14.09 8.26H20.18L15.09 12.26L17.18 18.26L12 14.26L6.82 18.26L8.91 12.26L3.82 8.26H9.91L12 2Z" />
        </svg>

        {/* Full Star (Yellow when fully filled) */}
        {isFull && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FFC107"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full h-full"
          >
            <path d="M12 2L14.09 8.26H20.18L15.09 12.26L17.18 18.26L12 14.26L6.82 18.26L8.91 12.26L3.82 8.26H9.91L12 2Z" />
          </svg>
        )}

        {/* Half Star (Overlaying with Clipping) */}
        {isHalf && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FFC107"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full h-full"
            style={{ clipPath: 'inset(0 50% 0 0)' }} // Clips the right half of the star
            role="img"
          >
            <path d="M12 2L14.09 8.26H20.18L15.09 12.26L17.18 18.26L12 14.26L6.82 18.26L8.91 12.26L3.82 8.26H9.91L12 2Z" />
          </svg>
        )}
      </div>
    );
  };

  return (
    <div className="rating-container flex items-center space-x-1">
      {Array.from({ length: ratingRange }, (_, index) => renderStar(index))}
      <span className="ml-2 text-gray-600 text-sm" data-testid={testId}>
        {percentage}%
      </span>
    </div>
  );
};

export default RatingSkin;
